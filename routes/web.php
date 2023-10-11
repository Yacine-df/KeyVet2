<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {

    return Inertia::render('main');
    
});
Route::get('/aboutUs', function () {
    return Inertia::render('aboutUs');
});
Route::get('/market', function () {
    return Inertia::render('market');
});
Route::get('/market/1/card', function () {
    return Inertia::render('shoppingCard');
});
