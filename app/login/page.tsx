import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft lg:grid-cols-2">
        <div className="bg-slate-900 p-10 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-xl font-bold">
              F
            </div>
            <div>
              <div className="text-xl font-bold">Farmacia del Norte</div>
              <div className="text-sm text-slate-300">Sistema de gestión</div>
            </div>
          </div>

          <h1 className="mt-10 text-4xl font-black leading-tight">Control inteligente para tu farmacia.</h1>
          <p className="mt-5 text-slate-300">
            Administra productos, inventario, ventas, proveedores y reportes desde un solo panel.</p>

          <div className="mt-10 space-y-4 text-sm text-slate-200">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">✓ Trazabilidad de stock</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">✓ Alertas de vencimiento y bajo inventario</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">✓ Metricas de ventas y negocio</div>
          </div>
        </div>

        <div className="p-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Acceso</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Iniciar sesión</h2>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Correo electrónico</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white" type="email" defaultValue="admin@farmacialdnorte.com" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Contraseña</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white" type="password" defaultValue="123456" />
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                Recordarme
              </div>
              <a href="#" className="font-medium text-brand-700">¿Olvidaste tu contraseña?</a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {['Admin', 'Vendedor', 'Bodega'].map((role) => (
                <button key={role} type="button" className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700">
                  {role}
                </button>
              ))}
            </div>

            <Link href="/dashboard" className="block w-full rounded-2xl bg-brand-600 px-4 py-3 text-center text-base font-semibold text-white transition hover:bg-brand-700">
              Ingresar al sistema
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}
