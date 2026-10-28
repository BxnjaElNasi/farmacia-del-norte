import Link from 'next/link';
import { BarChart3, Boxes, LayoutDashboard, Package, ShoppingCart, Truck } from 'lucide-react';
import { navigation } from '@/data/navigation';

const iconMap = {
  layout: LayoutDashboard,
  package: Package,
  boxes: Boxes,
  shoppingCart: ShoppingCart,
  truck: Truck,
  chart: BarChart3
};

export function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-200 bg-slate-900 p-5 text-slate-100">
      <div className="flex items-center gap-3 px-2 pb-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 font-bold text-white">F</div>
        <div>
          <p className="text-lg font-bold">Farmacia del Norte</p>
          <p className="text-xs text-slate-400">Gestión</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navigation.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          return (
            <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white">
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
