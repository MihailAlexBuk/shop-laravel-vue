<?php

namespace App\Actions\API;

use App\Models\Product;
use App\Models\Wishlist;
use Illuminate\Support\Facades\Auth;

class WishlistAction
{
    public function checkItemInWishlist($request){
        $prod_id = $request->input('id');

        if(Wishlist::where('prod_id', $prod_id)->where('user_id', Auth::id())->exists()){
            return response()->json(['status' => "true"]);
        }else{
            return response()->json(['status' => "false"]);
        }
    }

    public function addToWishlist($request){
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

    public function removeFromWishlist($request){
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
