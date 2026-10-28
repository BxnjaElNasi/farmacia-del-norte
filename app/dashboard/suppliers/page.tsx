import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { DashboardShell } from '@/components/dashboard-shell';
import { Package2, Phone } from 'lucide-react';

export default async function SuppliersPage() {
  requireSession();

  const suppliers = await prisma.supplier.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <DashboardShell title="Proveedores">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Proveedores activos</h2>
            <p className="text-sm text-slate-500">Relaciona compras, pagos y entregas con tus distribuidores.</p>
          </div>
          <button className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white">Nuevo proveedor</button>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {suppliers.map((supplier) => (
            <div key={supplier.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <Package2 size={22} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{supplier.name}</p>
                  <p className="text-xs text-slate-500">{supplier.category}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-slate-800">Contacto:</span>
                  <span>{supplier.contact}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-brand-700" />
                  <span>{supplier.phone}</span>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <span>Confiabilidad</span>
                    <span className="font-semibold text-slate-900">95%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-brand-500" style={{ width: '95%' }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
