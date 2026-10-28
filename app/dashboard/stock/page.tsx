import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { DashboardShell } from '@/components/dashboard-shell';
import { AlertTriangle, Boxes } from 'lucide-react';

export default async function StockPage() {
  requireSession();

  const products = await prisma.product.findMany({
    orderBy: { stock: 'asc' },
    take: 6
  });

  const stockAlerts = products.filter((product) => product.stock <= product.minimum || product.status !== 'ACTIVO');

  return (
    <DashboardShell title="Control de stock">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <AlertTriangle size={22} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Alertas de inventario</h2>
          </div>

          <div className="space-y-4">
            {stockAlerts.length > 0 ? (
              stockAlerts.map((item) => (
                <div key={item.id} className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-500">Mínimo recomendado: {item.minimum} unidades</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-slate-900">{item.stock}</p>
                      <p className="text-xs text-slate-500">Actual</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">No hay alertas de stock en este momento.</div>
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
              <Boxes size={22} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Estado general</h2>
          </div>

          <div className="space-y-6">
            {[
              { label: 'Inventario disponible', value: '92%', color: 'bg-emerald-500' },
              { label: 'Productos bajó stock', value: '14%', color: 'bg-amber-500' },
              { label: 'Stock crítico', value: '6%', color: 'bg-rose-500' }
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>{item.label}</span>
                  <span className="font-semibold text-slate-900">{item.value}</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-100">
                  <div className={`h-full rounded-full ${item.color}`} style={{ width: item.value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
