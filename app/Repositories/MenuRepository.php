<?php
namespace App\Repositories;
use App\Models\Menu;
use App\Repositories\Interfaces\MenuRepositoryInterface;
use Illuminate\Support\Collection;

class MenuRepository implements MenuRepositoryInterface
{
    public function getAllMenus(): Collection {
        return Menu::all();
    }

    public function getMenuById(int $id): Menu {
        return Menu::findOrFail($id);
    }

    public function createMenu(array $data): Menu {
        return Menu::create($data);
    }

    public function updateMenu(int $id, array $data): Menu {
        $menu = Menu::findOrFail($id);
        $menu->update($data);
        return $menu;
    }

    public function deleteMenu(int $id): bool {
        return Menu::destroy($id) > 0;
    }
}
