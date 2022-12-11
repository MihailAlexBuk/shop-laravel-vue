<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Filters\ProductFilter;
use App\Http\Requests\API\Product\CartRequest;
use App\Http\Requests\API\Product\ProductsRequest;
use App\Http\Resources\Product\ProductResource;
use App\Models\Cart;
use App\Models\Product;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;


class WishlistController extends Controller
{
    public function getWishlist(){
        $wishlist = Wishlist::where('user_id', Auth::id())->get();

        $products = [];
        foreach ($wishlist as $item){
            array_push($products, [
                'user_id'=>$item->user_id,
                'prod_id'=>$item->prod_id,
                'title'=>$item->products->title,
                'price'=> $item->products->price,
                'discount'=> $item->products->discount,
                'img'=>$item->products->imageUrl1,
            ]);
        }
        return response()->json(['products' => $products, 'count' => count($wishlist)]);

    }

    public function checkItemInWishlist(Request $request){
        $prod_id = $request->input('id');

        if(Wishlist::where('prod_id', $prod_id)->where('user_id', Auth::id())->exists()){
            return response()->json(['status' => "true"]);
        }else{
            return response()->json(['status' => "false"]);
        }
    }

    public function addToWishlist(Request $request){

        $product_id = $request->input('product_id');

        if(Auth::check()){

            if(Product::find($product_id)){
                if(Wishlist::where('prod_id', $product_id)->where('user_id', Auth::id())->exists()){
                    return response()->json(['status' => "Product already added to Wishlist"]);
                }else {
                    $wishlist = new Wishlist();
                    $wishlist->prod_id = $product_id;
                    $wishlist->user_id = Auth::id();
                    $wishlist->save();
                    return response()->json(['status' => "Product Added to Wishlist"]);
                }
            }else{
                return response()->json(['status' => "Product does not exist"]);
            }
        }else{
            return response()->json(['status' => 'Login to Continue']);
        }

    }

    public function removeFromWishlist(Request $request){
        if(Auth::check()){
            $product_id = $request->input('product_id');
            if(Wishlist::where('prod_id', $product_id)->where('user_id', Auth::id())->exists()){
                $wishlist = Wishlist::where('prod_id', $product_id)->where('user_id', Auth::id())->first();
                $wishlist->delete();
                return response()->json(['status' => " Removed from wishlist"]);
            }
        }else{
            return response()->json(['status' => 'Login to Continue']);
        }
    }


}
