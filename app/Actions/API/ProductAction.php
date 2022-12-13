<?php

namespace App\Actions\API;

use App\Http\Resources\Product\ProductResource;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\Rating;
use Illuminate\Support\Facades\Auth;

class ProductAction
{
    public function getRecommendedProducts(){
        $tag_id = [];
        $user_order = Order::where('user_id', Auth::id())->get();
        foreach ($user_order as $order){
            foreach ($order->orderItems as $items){
                foreach ($items->products->tags as $prod){
                    array_push($tag_id, $prod->id);
                }
            }
        }
        $prod_tag = Product::whereHas('tags', function ($query) use ($tag_id) {
            return $query->whereIn('tag_id', $tag_id);
        })->get();

        return $prod_tag;
    }

    public function getHomePageProducts(){
        $best_disc = Product::query()->orderByDesc('discount')->first();
        $top = Rating::query()->groupBy('product_id')->selectRaw('avg(stars_rating) as total_stars, product_id')
            ->orderBy('total_stars', 'DESC')->get()->take(3);
        $best = OrderItem::query()
            ->groupBy('prod_id')
            ->selectRaw('sum(qty) as total_qty, prod_id')
            ->orderBy('total_qty', 'DESC')
            ->get()
            ->take(3);

        $best_prod = [];
        $top_prod = [];

        foreach ($best as $k){array_push($best_prod, $k->prod_id);}
        foreach ($top as $k){array_push($top_prod, $k->product_id);}
        $placeholders = implode(',',array_fill(0, count($top_prod), '?'));

        $best_selling = Product::whereIn('id', $best_prod)->get();
        $top_rait = Product::whereIn('id', $top_prod)->orderByRaw("field(id,{$placeholders})", $top_prod)->get();
        $rand_4_posts = Product::get()->random(4);

        return response()->json([
            'best_disc'=> [new ProductResource($best_disc)],
            'top_3' => ProductResource::collection($top_rait),
            'best_selling' => ProductResource::collection($best_selling),
            'rand_posts' => ProductResource::collection($rand_4_posts)
        ]);
    }
}
