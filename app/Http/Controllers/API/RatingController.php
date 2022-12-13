<?php

namespace App\Http\Controllers\API;

use App\Actions\API\RatingAction;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use App\Models\Rating;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RatingController extends Controller
{
    public function add(Request $request){
        return RatingAction::add($request);
    }
}
