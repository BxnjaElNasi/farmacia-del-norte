import { DashboardShell } from '@/components/dashboard-shell';
import { Package2, Phone } from 'lucide-react';

const suppliers = [
  { name: 'Distribuidora Salud Plus', contact: 'Julio Álvarez', phone: '+51 998 112 334', category: 'Productos de cuidado', reliability: '95%' },
  { name: 'Lab Farma Perú', contact: 'María Rojas', phone: '+51 987 332 112', category: 'Medicamentos', reliability: '89%' },
  { name: 'BioCuidado del Sur', contact: 'Rosa Quispe', phone: '+51 976 551 290', category: 'Dermocosmética', reliability: '91%' }
];

export default function SuppliersPage() {
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
            <div key={supplier.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
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
                    <span className="font-semibold text-slate-900">{supplier.reliability}</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-brand-500" style={{ width: supplier.reliability }} />
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
