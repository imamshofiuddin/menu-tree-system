<?php

namespace App\Providers;

use App\Repositories\Interfaces\MenuRepositoryInterface;
use App\Repositories\MenuRepository as RepositoriesMenuRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
        $this->app->bind(MenuRepositoryInterface::class, RepositoriesMenuRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
