<?php

use App\Http\Controllers\MenuController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/menus', [MenuController::class, 'index'])->name('menus.index');
Route::get('/menus/create', [MenuController::class, 'create'])->name('menus.create');
Route::post('/menus', [MenuController::class, 'store'])->name('menus.store');
Route::get('/menus/{id}/edit', [MenuController::class, 'edit'])->name('menus.edit');
Route::put('/menus/{id}', [MenuController::class, 'update'])->name('menus.update');
Route::delete('/menus/{id}', [MenuController::class, 'destroy'])->name('menus.destroy');
