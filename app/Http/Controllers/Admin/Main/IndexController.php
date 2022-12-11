<?php

namespace App\Http\Controllers\Admin\Main;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke()
    {
        $data = [];
        $data['orders_count'] = Order::where('status', '0')->count();
        $data['products_count'] = Product::all()->count();
        $data['users_count'] = User::all()->count();
        return view('admin.main.index', compact('data'));
    }
}
