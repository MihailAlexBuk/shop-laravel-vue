<?php

namespace App\Models;

use App\Models\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory;
    use SoftDeletes;
    use Filterable;

    protected $table = 'products';
    protected $guarded = false;

    public function category(){
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function tags(){
        return $this->belongsToMany(Tag::class, 'product_tags', 'product_id', 'tag_id');
    }

    public function getImageUrl1Attribute(){
        return url('storage/' . $this->product_image_1);
    }

    public function getImageUrl2Attribute(){
        return url('storage/' . $this->product_image_2);
    }

    public function getImageUrl3Attribute(){
        return url('storage/' . $this->product_image_3);
    }
}
