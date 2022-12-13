<?php

namespace App\Http\Controllers\API;

use App\Actions\API\CartAction;
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
        $cart = CartAction::getCart();
        return response()->json(['products' => $cart['products'],
            'total' =>  number_format($cart['total'], 2, '.', ' '),
            'count' => count($cart['cartItems'])]);

    }

    public function addToCart(Request $request){
        return CartAction::addToCart($request);
    }

    public function updateCart(Request $request){
        return CartAction::updateCart($request);
    }

    public function removeFromCart(Request $request){
        return CartAction::removeFromCart($request);
    }


}
