import { useForm } from '@inertiajs/react';
import MenuNode from '../../components/MenuTree/MenuNode';
import DashboardLayout from '../../layouts/Dashboard';
import { LayoutGrid } from 'lucide-react';

export default function Index({ menus }) {
  const { data, setData, post, processing, reset } = useForm({
    name: '',
    parent_id: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('menus.store'), {
      onSuccess: () => reset(),
    });
  };

  const buildTree = (items, parentId = null) =>
    items
      .filter((item) => item.parent_id === parentId)
      .map((item) => ({
        ...item,
        children: buildTree(items, item.id),
      }));

  const tree = buildTree(menus);

  return (
    <DashboardLayout title="Menu Management">
    <div className="flex space-y-1">
        <div className="bg-blue-900 rounded-full w-10 h-10 flex items-center justify-center text-white">
            <LayoutGrid className="h-6 w-6" />
        </div>
        <span className="text-2xl ms-4 text-black flex items-center justify-center font-bold">Menus</span>
    </div>
      <div className="p-4 max-w-xl">
        <div className="grid grid-cols-12 gap-20">
            <div className="col-span-6">
                <h2 className="text-lg font-semibold mb-2">Menu Tree</h2>
                <ul className="pl-2">
                {tree.map((menu) => (
                    <MenuNode key={menu.id} node={menu} />
                ))}
                </ul>
            </div>
            <div className="col-span-6">
                <h1 className="text-xl font-bold mb-4">Add Menu Node</h1>
                <form onSubmit={handleSubmit} className="mb-6 space-y-2">
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    placeholder="Menu name"
                    className="rounded-full px-3 py-3 w-full border-0 bg-gray-100"
                />

                <select
                    value={data.parent_id}
                    onChange={(e) => setData('parent_id', e.target.value)}
                    className="rounded-full px-3 py-3 w-full border-0 bg-gray-100"
                >
                    <option value="">-- No Parent (Root Menu) --</option>
                    {menus.map((menu) => (
                    <option key={menu.id} value={menu.id}>
                        {menu.name}
                    </option>
                    ))}
                </select>

                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-900 text-white px-4 py-3 w-40 rounded-full mt-3"
                >
                    {processing ? 'Saving...' : 'Save'}
                </button>
                </form>
            </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
