<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Product\StoreRequest;
use App\Http\Requests\Admin\Product\UpdateRequest;
use App\Models\Category;
use App\Models\Product;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return view('admin.product.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();
        $tags = Tag::all();
        return view('admin.product.create', compact('categories', 'tags'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        try{
            $data = $request->validated();
            $data['product_image_1'] = Storage::disk('public')->put('/images', $data['product_image_1']);
            $data['product_image_2'] = Storage::disk('public')->put('/images', $data['product_image_2']);
            $data['product_image_3'] = Storage::disk('public')->put('/images', $data['product_image_3']);

            $tagIds = $data['tag_ids'];
            unset($data['tag_ids']);
            $product = Product::create($data);
            $product->tags()->attach($tagIds);

            return redirect()->route('products.index');
        }catch (\Exception $e){
            abort(500);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return view('admin.product.show', compact('product'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        $categories = Category::all();
        $tags = Tag::all();
        return view('admin.product.edit', compact('product', 'categories', 'tags'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, Product $product)
    {
            $data = $request->validated();
            if(isset($data['product_image_1'])){
                $data['product_image_1'] = Storage::disk('public')->put('/images', $data['product_image_1']);
            }
            if(isset($data['product_image_2'])){
                $data['product_image_2'] = Storage::disk('public')->put('/images', $data['product_image_2']);
            }
            if(isset($data['product_image_3'])){
                $data['product_image_3'] = Storage::disk('public')->put('/images', $data['product_image_3']);
            }

            if(isset($tagIds)){
                $tagIds = $data['tag_ids'];
                unset($data['tag_ids']);
                $product->tags()->sync($tagIds);
            }
        $product->update($data);

            return view('admin.product.show', compact('product'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('products.index');
    }
}
