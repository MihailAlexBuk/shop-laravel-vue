<?php

namespace App\Http\Controllers\API\Product;

use App\Http\Controllers\Controller;
use App\Http\Filters\ProductFilter;
use App\Http\Requests\API\Product\CartRequest;
use App\Http\Requests\API\Product\ProductsRequest;
use App\Http\Resources\Product\ProductResource;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\Rating;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class ProductController extends Controller
{
    public function getProducts(ProductsRequest $request)
    {
        $data = $request->validated();

        $sortProduct = FilterListController::getSort($data);

        $filter = app()->make(ProductFilter::class, ['queryParams' => array_filter($data['filter'])]);
        $products = $sortProduct->filter($filter)->paginate($data['countProduct'], ['*'], 'page');
        return ProductResource::collection($products);
    }

    public function getProduct(Product $product)
    {
        return new ProductResource($product);
    }

    public function getRecommendedProducts(){

//        $user_order = Order::where('user_id', Auth::id())->get();
//        $user_order = Order::where('user_id', Auth::id())->has('orderItems')->has('products')->get();

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

        return ProductResource::collection($prod_tag);
    }

    public function getHomePageProducts()
    {
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

        return response()->json([
            'best_disc'=> [new ProductResource($best_disc)],
            'top_3' => ProductResource::collection($top_rait),
            'best_selling' => ProductResource::collection($best_selling)
            ]);

    }

}
