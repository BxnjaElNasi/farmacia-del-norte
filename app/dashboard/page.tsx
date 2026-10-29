import { prisma } from '@/lib/prisma';
import { DashboardShell } from '@/components/dashboard-shell';
import { StatCard } from '@/components/stat-card';
import { ArrowUpRight, Package, ShoppingCart, Store, Users } from 'lucide-react';

export default async function DashboardPage() {
  const [totalProducts, totalBranches, totalSales, totalCustomers] = await Promise.all([
    prisma.product.count(),
    prisma.branch.count(),
    prisma.sale.count({ where: { createdAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) } } }),
    prisma.customer.count()
  ]);

  const salesToday = await prisma.sale.aggregate({
    where: { createdAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) } },
    _sum: { total: true }
  });

  const recentSales = await prisma.sale.findMany({
    take: 4,
    orderBy: { createdAt: 'desc' },
    include: {
      customer: true,
      items: { include: { product: true } },
      branch: true
    }
  });

  const lowStockItems = await prisma.product.findMany({
    where: { status: 'BAJO_STOCK' },
    take: 3
  });

  const stats = [
    { title: 'Productos', value: totalProducts.toString(), change: '+12.4%', icon: Package },
    { title: 'Sucursales', value: totalBranches.toString(), change: '+2.0%', icon: Store },
    { title: 'Ventas del día', value: `${totalSales}`, change: '+8.6%', icon: ShoppingCart },
    { title: 'Monto del día', value: `S/. ${Number(salesToday._sum.total ?? 0).toFixed(2)}`, change: '+15.2%', icon: Users }
  ];

  return (
    <DashboardShell title="Resumen general">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} title={stat.title} value={stat.value} change={stat.change} icon={stat.icon} />
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Ventas recientes</h2>
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700">
              Ver todo <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="space-y-4">
            {recentSales.map((sale) => {
              const firstItem = sale.items[0];
              return (
                <div key={sale.id} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <div>
                    <p className="font-semibold text-slate-900">{firstItem?.product?.name ?? 'Venta realizada'}</p>
                    <p className="text-sm text-slate-500">{sale.branch?.name ?? 'Sucursal'} • {sale.customer?.name ?? 'Cliente'}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">S/. {Number(sale.total).toFixed(2)}</p>
                    <p className="text-xs text-emerald-600">{sale.status}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-slate-900">Alertas</h2>
          <div className="mt-6 space-y-4">
            {lowStockItems.length > 0 ? lowStockItems.map((item) => (
              <div key={item.id} className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Stock bajo</span>
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">{item.name}</span>
                </div>
                <div className="mt-2 text-sm text-slate-600">Quedan {item.stock} unidades</div>
              </div>
            )) : (
              <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">No hay alertas de stock bajo.</div>
            )}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
