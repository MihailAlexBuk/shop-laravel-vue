<?php

namespace App\Actions\API;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class CheckoutAction
{
    public function placeOrder($data){
        $order = new Order();
        $order->user_id = Auth::id();
        $order->fname = $data['user']['fname'];
        $order->lname = $data['user']['lname'];
        $order->email = $data["user"]["email"];
        $order->phone = $data["user"]["phone"];
        $order->address1 = $data["user"]["address1"];
        $order->address2 = $data["user"]["address2"];
        $order->country = $data["user"]["country"];
        $order->city = $data["user"]["city"];
        $order->total_price = $data["cart"]["total"];
        $order->pincode = $data["user"]["pincode"];
        $order->tracking_no = 'sharma'.rand(1111,9999);
        $order->save();

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
            $user->name = $data['user']['fname'];
            $user->lname = $data['user']['lname'];
            $user->phone = $data["user"]["phone"];
            $user->address1 = $data["user"]["address1"];
            $user->address2 = $data["user"]["address2"];
            $user->country = $data["user"]["country"];
            $user->city = $data["user"]["city"];
            $user->pincode = $data["user"]["pincode"];
            $user->update();
        }

        $cartItems = Cart::where('user_id',Auth::id())->get();
        Cart::destroy($cartItems);
    }

    public function payment($data){
        $cartItems = Cart::where('user_id', Auth::id())->get();

        $total_price = $data['cart']['total'];

        $fname = $data['user']['fname'];
        $lname = $data['user']['lname'];
        $email = $data["user"]["email"];
        $phone = $data["user"]["phone"];
        $address1 = $data["user"]["address1"];
        $address2 = $data["user"]["address2"];
        $country = $data["user"]["country"];
        $city = $data["user"]["city"];
        $pincode = $data["user"]["pincode"];

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
