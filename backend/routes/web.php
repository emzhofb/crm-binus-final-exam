<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use App\Http\Controllers\ContactController;

Route::get('/contacts', [ContactController::class, 'index']);
Route::post('/contacts', [ContactController::class, 'store']);
Route::put('/contacts/{id}', [ContactController::class, 'update']);

use App\Http\Controllers\InteractionController;

Route::post('/interactions', [InteractionController::class, 'store']);
Route::get('/interactions', [InteractionController::class, 'index']);

use App\Http\Controllers\SaleController;

Route::post('/sales', [SaleController::class, 'store']);
Route::get('/sales', [SaleController::class, 'index']);

use App\Http\Controllers\ReportController;

Route::get('/reports/sales-funnel', [ReportController::class, 'salesFunnel']);
Route::get('/reports/customer-lifetime-value', [ReportController::class, 'customerLifetimeValue']);
Route::get('/reports/customer-segmentation', [ReportController::class, 'customerSegmentation']);
