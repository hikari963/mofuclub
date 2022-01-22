
<?php
use Illuminate\Support\Facades\Route;

Route::prefix('/auth')->group(function () {
    //
});

Route::middleware(['auth'])->prefix('/adm')->group(function () {
    //
});

Route::middleware(['app'])->prefix('/app')->group(function () {
    //
});
