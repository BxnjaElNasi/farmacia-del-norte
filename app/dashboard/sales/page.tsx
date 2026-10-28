import { DashboardShell } from '@/components/dashboard-shell';
import { IndianRupee, ShoppingBag } from 'lucide-react';

const sales = [
  { id: 'FV-1024', product: 'Vitamina C 500mg', qty: 3, customer: 'María López', payment: 'Tarjeta', total: 'S/. 96.00', status: 'Completado' },
  { id: 'FV-1025', product: 'Paracetamol 500mg', qty: 2, customer: 'Carlos Díaz', payment: 'Efectivo', total: 'S/. 37.00', status: 'Completado' },
  { id: 'FV-1026', product: 'Ibuprofeno 400mg', qty: 5, customer: 'Ana García', payment: 'Yape', total: 'S/. 120.00', status: 'Pendiente' },
  { id: 'FV-1027', product: 'Amoxicilina 500mg', qty: 1, customer: 'Pedro Soto', payment: 'Transferencia', total: 'S/. 32.40', status: 'Completado' }
];

export default function SalesPage() {
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
              <p className="text-3xl font-black text-slate-900">S/. 8,420</p>
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
              <p className="text-3xl font-black text-slate-900">S/. 68.50</p>
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
              {sales.map((sale) => (
                <tr key={sale.id} className="border-b border-slate-100 text-sm text-slate-700">
                  <td className="py-4 pr-6 font-semibold text-slate-900">{sale.id}</td>
                  <td className="py-4 pr-6">{sale.product}</td>
                  <td className="py-4 pr-6">{sale.customer}</td>
                  <td className="py-4 pr-6">{sale.qty}</td>
                  <td className="py-4 pr-6">{sale.payment}</td>
                  <td className="py-4 pr-6">{sale.total}</td>
                  <td className="py-4 pr-6">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${sale.status === 'Completado' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {sale.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
