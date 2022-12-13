<?php

namespace App\Http\Controllers\API\Product;

use App\Actions\API\ProductAction;
use App\Http\Controllers\Controller;
use App\Http\Filters\ProductFilter;
use App\Http\Requests\API\Product\ProductsRequest;
use App\Http\Resources\Product\ProductResource;
use App\Models\Product;

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
        $prod_tag = ProductAction::getRecommendedProducts();
        return ProductResource::collection($prod_tag);
    }

    public function getHomePageProducts()
    {
        return ProductAction::getHomePageProducts();
    }

}
