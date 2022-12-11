<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckoutController extends Controller
{
    public function placeOrder(Request $request){

        $data = $request->validate([
           'user.fname' => 'required',
           'user.lname' => 'required',
           'user.email' => 'required',
           'user.phone' => 'required',
           'user.address1' => 'required',
           'user.address2' => 'required',
           'user.country' => 'required',
           'user.city' => 'required',
           'cart.total' => 'required',
           'user.pincode' => 'required',
        ]);
        $order = new Order();
        $order->user_id = Auth::id();
        $order->fname = $request->input('user.fname');
        $order->lname = $request->input('user.lname');
        $order->email = $request->input('user.email');
        $order->phone = $request->input('user.phone');
        $order->address1 = $request->input('user.address1');
        $order->address2 = $request->input('user.address2');
        $order->country = $request->input('user.country');
        $order->city = $request->input('user.city');
        $order->total_price = $request->input('cart.total');
        $order->pincode = $request->input('user.pincode');
        $order->tracking_no = 'sharma'.rand(1111,9999);
        $order->save();

        $order->id;

        $cartItems = Cart::where('user_id',Auth::id())->get();

        foreach ($cartItems as $item){
            OrderItem::create([
                'order_id' => $order->id,
                'prod_id' => $item->prod_id,
                'qty' => $item->prod_qty,
                'price' => number_format(($item->products->price - ($item->products->price*$item->products->discount/100)), 2, '.', ' '),
            ]);

//            $prod = Product::where('id', $item->prod_id)->first();
//            $prod->qty = $prod->qty - $item->prod_qty;
//            $prod->update;
        }

        if(Auth::user()->address1 == NULL){
            $user = User::where('id', Auth::id())->first();
            $user->name = $request->input('user.fname');
            $user->lname = $request->input('user.lname');
            $user->phone = $request->input('user.phone');
            $user->address1 = $request->input('user.address1');
            $user->address2 = $request->input('user.address2');
            $user->country = $request->input('user.country');
            $user->city = $request->input('user.city');
            $user->pincode = $request->input('user.pincode');
            $user->update();
        }

        $cartItems = Cart::where('user_id',Auth::id())->get();
        Cart::destroy($cartItems);
    }

    public function payment(Request $request){
        $cartItems = Cart::where('user_id', Auth::id())->get();

        $total_price = $request->input('cart');
        $total_price = $total_price['total'];

        $fname = $request->input('fname');
        $lname = $request->input('lname');
        $email = $request->input('email');
        $phone = $request->input('phone');
        $address1 = $request->input('address1');
        $address2 = $request->input('address2');
        $country = $request->input('country');
        $city = $request->input('city');
        $pincode = $request->input('pincode');

        return response()->json([
            'fname' => $fname,
            'lname' => $lname,
            'email' => $email,
            'phone' => $phone,
            'address1' => $address1,
            'address2' => $address2,
            'country' => $country,
            'city' => $city,
            'pincode' => $pincode,
            'total_price' => $total_price,
        ]);
    }
}
