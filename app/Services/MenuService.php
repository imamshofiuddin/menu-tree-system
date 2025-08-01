<?php
namespace App\Services;

use App\Repositories\Interfaces\MenuRepositoryInterface;

class MenuService
{
    protected $menuRepo;

    public function __construct(MenuRepositoryInterface $menuRepository)
    {
        $this->menuRepo = $menuRepository;
    }

    public function getAll() {
        return $this->menuRepo->getAllMenus();
    }

    public function store(array $data) {
        return $this->menuRepo->createMenu($data);
    }

    public function update($id, array $data) {
        return $this->menuRepo->updateMenu($id, $data);
    }

    public function delete($id) {
        return $this->menuRepo->deleteMenu($id);
    }
}
