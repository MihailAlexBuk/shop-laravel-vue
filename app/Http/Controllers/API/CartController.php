<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Filters\ProductFilter;
use App\Http\Requests\API\Product\CartRequest;
use App\Http\Requests\API\Product\ProductsRequest;
use App\Http\Resources\Product\ProductResource;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;


class CartController extends Controller
{
    public function getCart(){
        $cartItems = Cart::where('user_id', Auth::id())->get();

        $products = [];
        $total = 0;

        foreach ($cartItems as $item){
            $price = number_format(($item->products->price - ($item->products->price*$item->products->discount/100)), 2, '.', ' ');
            $subtotal = number_format($price*$item->prod_qty, 2, '.', ' ');
            $total += $subtotal;
            array_push($products, [
                'cart_id'=>$item->user_id,
                'prod_id'=>$item->prod_id,
                'title'=>$item->products->title,
                'price'=> $price,
                'subtotal' => $subtotal,
                'img'=>$item->products->imageUrl1,
                'size'=>$item->products->size,
                'qty'=> $item->prod_qty,
            ]);
        }
        return response()->json(['products' => $products,
            'total' =>  number_format($total, 2, '.', ' '),
            'count' => count($cartItems)]);

    }

    public function addToCart(Request $request){

        $product_id = $request->input('product_id');
        $product_qty = $request->input('product_qty');
        $updated = $request->input('update');

        if(Auth::check()){
            $prod_check = Product::query()->where('id', $product_id)->first();
            if($prod_check){
                if (Cart::where('prod_id', $product_id)->where('user_id', Auth::id())->exists()){
                    $cartItem = Cart::where('prod_id', $product_id)->where('user_id', Auth::id())->first();
                    if($updated){
                        $cartItem->prod_qty = $product_qty;
                    }else {
                        $cartItem->prod_qty += 1;
                    }
                    $cartItem->update();
                    return response()->json(['status' => $prod_check->title." Updated"]);
                }else{
                    $cartItem = new Cart();
                    $cartItem->prod_id = $product_id;
                    $cartItem->prod_qty = $product_qty;
                    $cartItem->user_id = Auth::id();
                    $cartItem->save();
                    return response()->json(['status' => $prod_check->title." Added to cart"]);
                }

            }
        }else{
            return response()->json(['status' => 'Login to Continue']);
        }

    }

    public function updateCart(Request $request){

        $product_id = $request->input('product_id');
        $product_qty = $request->input('product_qty');

        if(Auth::check()){
            $prod_check = Product::query()->where('id', $product_id)->first();
            if($prod_check){
                if (Cart::where('prod_id', $product_id)->where('user_id', Auth::id())->exists()){
                    $cartItem = Cart::where('prod_id', $product_id)->where('user_id', Auth::id())->first();
                    $cartItem->prod_qty = $product_qty;
                    $cartItem->update();
                    return response()->json(['status' => $prod_check->title." Updated"]);
                }else{
                    return response()->json(['status' => " Error"]);
                }
            }
        }else{
            return response()->json(['status' => 'Login to Continue']);
        }

    }

    public function removeFromCart(Request $request){
        if(Auth::check()){
            $product_id = $request->input('product_id');
            if(Cart::where('prod_id', $product_id)->where('user_id', Auth::id())->exists()){
                $cartItem = Cart::where('prod_id', $product_id)->where('user_id', Auth::id())->first();
                $cartItem->delete();
                return response()->json(['status' => " Removed from cart"]);
            }
        }else{
            return response()->json(['status' => 'Login to Continue']);
        }
    }


}
