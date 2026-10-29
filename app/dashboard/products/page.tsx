import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { DashboardShell } from '@/components/dashboard-shell';
import { PackageSearch, Pencil, Trash2 } from 'lucide-react';

export default async function ProductsPage() {
  requireSession();

  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
    include: { supplier: true }
  });

  return (
    <DashboardShell title="Productos">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Catálogo central</h2>
            <p className="text-sm text-slate-500">Consulta y administra el catálogo de productos de Farmacia del Norte.</p>
          </div>
          <Link href="/dashboard/products/new" className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white">
            <PackageSearch size={16} />
            Nuevo producto
          </Link>
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
                <th className="py-3 pr-6">Proveedor</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-slate-100 text-sm text-slate-700">
                  <td className="py-4 pr-6 font-semibold text-slate-900">{product.name}</td>
                  <td className="py-4 pr-6">{product.sku}</td>
                  <td className="py-4 pr-6">{product.category}</td>
                  <td className="py-4 pr-6">{product.stock}</td>
                  <td className="py-4 pr-6">S/. {Number(product.price).toFixed(2)}</td>
                  <td className="py-4 pr-6">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${product.status === 'ACTIVO' ? 'bg-emerald-100 text-emerald-700' : product.status === 'BAJO_STOCK' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="py-4 pr-6">{product.supplier?.name ?? 'Sin proveedor'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
