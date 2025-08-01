<?php

namespace App\Http\Controllers;

use App\Services\MenuService as ServicesMenuService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    protected $menuService;

    public function __construct(ServicesMenuService $menuService)
    {
        $this->menuService = $menuService;
    }

    public function index() {
        $menus = $this->menuService->getAll();
        return Inertia::render('Menus/Index', ['menus' => $menus]);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'parent_id' => 'nullable|uuid|exists:menus,id',
            'depth' => 'nullable|integer',
        ]);

        $this->menuService->store($validated);

        return redirect()->back()->with('success', 'Menu node created!');
    }
}
