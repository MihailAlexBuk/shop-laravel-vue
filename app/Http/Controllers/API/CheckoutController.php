<?php

namespace App\Http\Controllers\API;

use App\Actions\API\CheckoutAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\API\CheckoutRequest;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckoutController extends Controller
{
    public function placeOrder(CheckoutRequest $request){
        $data = $request->validated();
        CheckoutAction::placeOrder($data);
    }

    public function payment(CheckoutRequest $request){
        $data = $request->validated();
        CheckoutAction::payment($data);

    }
}
