import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { DashboardShell } from '@/components/dashboard-shell';

export default async function ReportsPage() {
  requireSession();

  const reportData = [
    { label: 'Ene', value: 52 },
    { label: 'Feb', value: 68 },
    { label: 'Mar', value: 60 },
    { label: 'Abr', value: 75 },
    { label: 'May', value: 82 },
    { label: 'Jun', value: 90 }
  ];

  return (
    <DashboardShell title="Reportes">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-slate-900">Ventas por mes</h2>
          <div className="mt-6 flex h-56 items-end gap-4">
            {reportData.map((item) => (
              <div key={item.label} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex w-full items-end justify-center rounded-t-2xl bg-gradient-to-t from-brand-600 to-brand-300" style={{ height: `${item.value}%` }} />
                <span className="text-xs font-medium text-slate-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-slate-900">Indicadores clave</h2>
          <div className="mt-6 space-y-5">
            {[
              { label: 'Margen bruto', value: '32.4%' },
              { label: 'Rotación de inventario', value: '4.7 veces' },
              { label: 'Cumplimiento de pedidos', value: '96%' },
              { label: 'Clientes activos', value: '2,140' }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <span className="text-sm text-slate-600">{item.label}</span>
                <span className="text-lg font-bold text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
