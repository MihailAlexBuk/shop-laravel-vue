<?php

namespace App\Http\Controllers\ShopSpa;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function index(){
        return view('spa.index');
    }
}
