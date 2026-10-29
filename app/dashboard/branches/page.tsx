import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { DashboardShell } from '@/components/dashboard-shell';

export default async function BranchesPage() {
  requireSession();

  const branches = await prisma.branch.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <DashboardShell title="Sucursales">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Red de sucursales</h2>
            <p className="text-sm text-slate-500">Administración centralizada de cada farmacia.</p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {branches.map((branch) => (
            <div key={branch.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-slate-900">{branch.name}</p>
                  <p className="text-xs text-slate-500">Código: {branch.code}</p>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${branch.status === 'ACTIVA' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-700'}`}>
                  {branch.status}
                </span>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p>Dirección: {branch.address}</p>
                <p>Ciudad: {branch.city}</p>
                <p>Teléfono: {branch.phone ?? 'No registrado'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
