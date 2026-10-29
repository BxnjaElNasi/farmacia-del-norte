import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { DashboardShell } from '@/components/dashboard-shell';

export default async function StockPage() {
  requireSession();

  const branchProducts = await prisma.branchProduct.findMany({
    include: { product: true, branch: true },
    orderBy: { stock: 'asc' }
  });

  return (
    <DashboardShell title="Inventario">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="text-xl font-bold text-slate-900">Stock por sucursal</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 text-sm text-slate-500">
                <th className="py-3 pr-6">Sucursal</th>
                <th className="py-3 pr-6">Producto</th>
                <th className="py-3 pr-6">Stock</th>
                <th className="py-3 pr-6">Mínimo</th>
              </tr>
            </thead>
            <tbody>
              {branchProducts.map((entry) => (
                <tr key={entry.id} className="border-b border-slate-100 text-sm text-slate-700">
                  <td className="py-4 pr-6">{entry.branch.name}</td>
                  <td className="py-4 pr-6">{entry.product.name}</td>
                  <td className="py-4 pr-6">{entry.stock}</td>
                  <td className="py-4 pr-6">{entry.minStock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
