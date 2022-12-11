<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use App\Models\Rating;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RatingController extends Controller
{
    public function add(Request $request){
        $stars_rated = $request->input('rating');
        $product_id = $request->input('product_id');

        $product_check = Product::query()->where('id', $product_id)->first();

        if($product_check){
            $verified_purchase = Order::where('orders.user_id', Auth::id())
                ->join('order_items', 'orders.id', 'order_items.order_id')
                ->where('order_items.prod_id', $product_id)->get();

            if($verified_purchase){

                $existing_rating = Rating::where('user_id', Auth::id())->where('product_id', $product_id)->first();
                if($existing_rating){
                    $existing_rating->stars_rating = $stars_rated;
                    $existing_rating->update();
                }else{
                    Rating::create([
                        'user_id' => Auth::id(),
                        'product_id' => $product_id,
                        'stars_rating' => $stars_rated,
                    ]);
                }
                return response()->json(['status' => 'Thank you for Rating this product']);

            }else{
                return response()->json(['status' => 'You cannot rate a product without purchase']);
            }
        }else{
            return response()->json(['status' => 'The link you followed was broken']);
        }



    }
}
