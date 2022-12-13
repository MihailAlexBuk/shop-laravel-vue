<?php

namespace App\Http\Controllers\API;

use App\Actions\API\UserAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\API\UserUpdateRequest;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function getOrders(){
        $orders = Order::where('user_id', Auth::id())->get();
        return $orders;
    }

    public function getOrderItem($id){
        $orders = Order::where('id', $id)->where('user_id', Auth::id())->first();
        $prod = [];
        foreach ($orders->orderItems as $i){
            array_push($prod, [
                'title' => $i->products->title,
                'qty' => $i->qty,
                'price' => $i->price,
                'img' => $i->products->imageUrl1,
            ]);
        }
        return response()->json(['orders' => $orders, 'prod' => $prod, 'total_price' => $orders->total_price]);
    }

    public function getUserData(){
        $user = User::where('id', Auth::id())->first();

        return response()->json([
           'name' => $user->name,
           'email' => $user->email,
           'lname' => $user->lname,
           'phone' => $user->phone,
           'address1' => $user->address1,
           'address2' => $user->address2,
           'city' => $user->city,
           'country' => $user->country,
        ]);
    }

    public function updateUserData(UserUpdateRequest $request){
        $data = $request->validated();
        return UserAction::updateUserData($data);
    }
}
