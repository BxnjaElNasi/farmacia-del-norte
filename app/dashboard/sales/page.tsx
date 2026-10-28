import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { DashboardShell } from '@/components/dashboard-shell';
import { IndianRupee, ShoppingBag } from 'lucide-react';

export default async function SalesPage() {
  requireSession();

  const sales = await prisma.sale.findMany({
    orderBy: { createdAt: 'desc' },
    take: 6,
    include: {
      customer: true,
      items: {
        include: {
          product: true
        }
      }
    }
  });

  const totalSales = sales.reduce((sum, sale) => sum + Number(sale.total), 0);

  return (
    <DashboardShell title="Ventas">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <ShoppingBag size={22} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Ventas del día</p>
              <p className="text-3xl font-black text-slate-900">S/. {totalSales.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
              <IndianRupee size={22} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Ticket promedio</p>
              <p className="text-3xl font-black text-slate-900">S/. {(sales.length ? totalSales / sales.length : 0).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Últimas ventas</h2>
          <button className="rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700">Exportar</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 text-sm text-slate-500">
                <th className="py-3 pr-6">ID</th>
                <th className="py-3 pr-6">Producto</th>
                <th className="py-3 pr-6">Cliente</th>
                <th className="py-3 pr-6">Cantidad</th>
                <th className="py-3 pr-6">Pago</th>
                <th className="py-3 pr-6">Total</th>
                <th className="py-3 pr-6">Estado</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => {
                const firstItem = sale.items[0];
                return (
                  <tr key={sale.id} className="border-b border-slate-100 text-sm text-slate-700">
                    <td className="py-4 pr-6 font-semibold text-slate-900">{sale.id.slice(0, 8).toUpperCase()}</td>
                    <td className="py-4 pr-6">{firstItem?.product?.name ?? 'Venta'}</td>
                    <td className="py-4 pr-6">{sale.customer?.name ?? 'Cliente'}</td>
                    <td className="py-4 pr-6">{sale.items.reduce((total, item) => total + item.quantity, 0)}</td>
                    <td className="py-4 pr-6">{sale.paymentMethod}</td>
                    <td className="py-4 pr-6">S/. {Number(sale.total).toFixed(2)}</td>
                    <td className="py-4 pr-6">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${sale.status === 'COMPLETADO' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                        {sale.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
