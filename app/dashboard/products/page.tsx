import { DashboardShell } from '@/components/dashboard-shell';
import { PackageSearch, Pencil, Trash2 } from 'lucide-react';

const products = [
  { name: 'Paracetamol 500mg', sku: 'PAR-500', category: 'Analgésicos', stock: 128, price: 'S/. 18.50', status: 'Disponible' },
  { name: 'Vitamina C 1000mg', sku: 'VIT-1000', category: 'Vitaminas', stock: 42, price: 'S/. 26.90', status: 'Bajo stock' },
  { name: 'Amoxicilina 500mg', sku: 'AMX-500', category: 'Antibióticos', stock: 12, price: 'S/. 32.40', status: 'Crítico' },
  { name: 'Ibuprofeno 400mg', sku: 'IBU-400', category: 'Dolor e inflamación', stock: 80, price: 'S/. 24.00', status: 'Disponible' }
];

export default function ProductsPage() {
  return (
    <DashboardShell title="Productos">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Catálogo de productos</h2>
            <p className="text-sm text-slate-500">Consulta, edita y administra tu inventario farmacéutico.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white">
            <PackageSearch size={16} />
            Nuevo producto
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 text-sm text-slate-500">
                <th className="py-3 pr-6">Producto</th>
                <th className="py-3 pr-6">SKU</th>
                <th className="py-3 pr-6">Categoría</th>
                <th className="py-3 pr-6">Stock</th>
                <th className="py-3 pr-6">Precio</th>
                <th className="py-3 pr-6">Estado</th>
                <th className="py-3 pr-6">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.sku} className="border-b border-slate-100 text-sm text-slate-700">
                  <td className="py-4 pr-6 font-semibold text-slate-900">{product.name}</td>
                  <td className="py-4 pr-6">{product.sku}</td>
                  <td className="py-4 pr-6">{product.category}</td>
                  <td className="py-4 pr-6">{product.stock}</td>
                  <td className="py-4 pr-6">{product.price}</td>
                  <td className="py-4 pr-6">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${product.status === 'Disponible' ? 'bg-emerald-100 text-emerald-700' : product.status === 'Bajo stock' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="py-4 pr-6">
                    <div className="flex items-center gap-2">
                      <button className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-brand-300 hover:text-brand-700"><Pencil size={14} /></button>
                      <button className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-rose-300 hover:text-rose-700"><Trash2 size={14} /></button>
                    </div>
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
