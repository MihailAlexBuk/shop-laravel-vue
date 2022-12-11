<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'admin']], function(){
    Route::get('/', \App\Http\Controllers\Admin\Main\IndexController::class)->name('admin.index');

    Route::group(['prefix' => 'orders'], function(){
        Route::get('/', [\App\Http\Controllers\Admin\OrdersController::class, 'index'])->name('orders.index');
        Route::put('/show/{id}', [\App\Http\Controllers\Admin\OrdersController::class, 'update'])->name('orders.update');
        Route::get('/update/{id}', [\App\Http\Controllers\Admin\OrdersController::class, 'show'])->name('orders.show');
        Route::get('/history', [\App\Http\Controllers\Admin\OrdersController::class, 'history'])->name('orders.history');

    });

    Route::resources([
        'categories' => \App\Http\Controllers\Admin\CategoryController::class,
        'tags' => \App\Http\Controllers\Admin\TagController::class,
        'products' => \App\Http\Controllers\Admin\ProductController::class,
        'users' => \App\Http\Controllers\Admin\UserController::class,
    ]);
});

Auth::routes();

Route::get('/{any}', '\App\Http\Controllers\ShopSpa\SpaController@index')->where('any', '.*');

























Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
