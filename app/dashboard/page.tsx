import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { DashboardShell } from '@/components/dashboard-shell';
import { StatCard } from '@/components/stat-card';
import { ArrowUpRight, Package, ShoppingCart, Truck, Users } from 'lucide-react';

export default async function DashboardPage() {
  requireSession();

  const [totalProducts, totalSales, totalSuppliers, totalCustomers] = await Promise.all([
    prisma.product.count(),
    prisma.sale.aggregate({ _sum: { total: true } }),
    prisma.supplier.count(),
    prisma.customer.count()
  ]);

  const recentSales = await prisma.sale.findMany({
    take: 4,
    orderBy: { createdAt: 'desc' },
    include: {
      customer: true,
      items: {
        include: {
          product: true
        }
      }
    }
  });

  const stats = [
    { title: 'Productos', value: totalProducts.toString(), change: '+12.4%', icon: Package },
    { title: 'Ventas', value: `S/. ${Number(totalSales._sum.total ?? 0).toFixed(2)}`, change: '+18.2%', icon: ShoppingCart },
    { title: 'Proveedores', value: totalSuppliers.toString(), change: '+5.1%', icon: Truck },
    { title: 'Clientes', value: totalCustomers.toString(), change: '+9.7%', icon: Users }
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
                    <p className="font-semibold text-slate-900">{firstItem?.product?.name ?? 'Venta'}</p>
                    <p className="text-sm text-slate-500">{sale.customer?.name ?? 'Cliente'}</p>
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
            {[
              { label: 'Stock bajo', value: '27 productos', tone: 'amber' },
              { label: 'Vencimientos próximos', value: '14 lotes', tone: 'red' },
              { label: 'Compras pendientes', value: '9 pedidos', tone: 'blue' }
            ].map((alert) => (
              <div key={alert.label} className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{alert.label}</span>
                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ${alert.tone === 'amber' ? 'bg-amber-100 text-amber-700' : alert.tone === 'red' ? 'bg-rose-100 text-rose-700' : 'bg-brand-100 text-brand-700'}`}>
                    {alert.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
