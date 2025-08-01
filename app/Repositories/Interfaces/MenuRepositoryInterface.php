<?php
namespace App\Repositories\Interfaces;
use App\Models\Menu;
use Illuminate\Support\Collection;

interface MenuRepositoryInterface
{
    public function getAllMenus(): Collection;
    public function getMenuById(int $id): Menu;
    public function createMenu(array $data): Menu;
    public function updateMenu(int $id, array $data): Menu;
    public function deleteMenu(int $id): bool;
}
