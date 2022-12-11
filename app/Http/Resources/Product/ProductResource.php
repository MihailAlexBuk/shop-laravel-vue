<?php

namespace App\Http\Resources\Product;

use App\Http\Resources\Category\CategoryResource;
use App\Models\Rating;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $rating = Rating::where('product_id', $this->id)->get();
        $rating_sum = Rating::where('product_id', $this->id)->sum('stars_rating');
        $user_rating = Rating::where('product_id', $this->id)->where('user_id', Auth::id())->first();
        if($rating->count() > 0){
            $rating_value = $rating_sum/$rating->count();
        }else{
            $rating_value = 0;
        }
        return [
            "id" => $this->id,
            "title" => $this->title,
            "size" => $this->size,
            "price" => $this->price,
            "discount" => $this->discount,
            'discountPrice' => number_format(($this->price - ($this->price*$this->discount/100)), 2, ',', ' '),
            "category" => new CategoryResource($this->category),
            'tags' => $this->tags,
            "image_url_1" => $this->imageUrl1,
            "image_url_2" => $this->imageUrl2,
            "image_url_3" => $this->imageUrl3,
            "desc" => $this->desc,
            'rating_count' => $rating->count(),
            'user_rating' => $user_rating,
            'rating_value' => (int)number_format($rating_value),
        ];
    }
}
