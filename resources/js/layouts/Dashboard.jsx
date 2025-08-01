import { Link } from "@inertiajs/react";
import { Menu, ArrowLeft, Folder, LayoutGrid } from 'lucide-react';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen font-jakarta text-sm">
      <aside className="bg-blue-900 text-white w-64 flex flex-col m-4 p-4 rounded-2xl">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
                <img src="/images/logo_stk.png" alt="Logo" className="h-10 w-auto" />
                <div className="text-white text-left leading-tight">
                <div className="font-semibold text-[10px]">Solusi</div>
                <div className="font-semibold text-[10px]">Teknologi</div>
                <div className="font-semibold text-[10px]">Kreatif</div>
                </div>
            </div>
            <div>
                <Menu className="h-6 w-6" />
            </div>
        </div>
        <nav className="flex-1 px-4 py-2 space-y-3">
          <div className="bg-blue-800 rounded-2xl p-3 space-y-2">
            <Link href="#" className="inline-flex hover:text-blue-300">
                <Folder className="h-6 w-6 me-3" fill="white"/> <span className="inline">Systems</span>
            </Link>
            <Link href="#" className="inline-flex py-2 hover:text-blue-300">
                <LayoutGrid className="h-6 w-6 me-3" /> <span className="inline">System Code</span>
            </Link>
            <Link href="#" className="inline-flex py-2 hover:text-blue-300">
                <LayoutGrid className="h-6 w-6 me-3" /> <span className="inline">Properties</span>
            </Link>
            <Link href="#" className="inline-flex py-2 text-black hover:text-blue-300 bg-white rounded-xl p-3 w-full">
                <LayoutGrid className="h-6 w-6 me-3" /> <span className="inline">Menus</span>
            </Link>
            <Link href="#" className="inline-flex py-2 hover:text-blue-300">
                <LayoutGrid className="h-6 w-6 me-3" /> <span className="inline">API List</span>
            </Link>
          </div>
          <div className="px-3">
            <Link href="#" className="inline-flex py-2 hover:text-blue-300">
                <Folder className="h-6 w-6 me-3" /> <span className="inline">Users & Group</span>
            </Link>
            <Link href="#" className="inline-flex py-2 hover:text-blue-300">
                <Folder className="h-6 w-6 me-3" /> <span className="inline">Competition</span>
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
}
