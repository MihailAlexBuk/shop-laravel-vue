<?php

namespace App\Http\Controllers\API;

use App\Actions\API\WishlistAction;
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
        return WishlistAction::checkItemWishlist($request);
    }

    public function addToWishlist(Request $request){
        return WishlistAction::addToWishlist($request);
    }

    public function removeFromWishlist(Request $request){
        return WishlistAction::removeFromWishlist($request);
    }


}
