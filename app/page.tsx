import Link from 'next/link';

const stats = [
  { label: 'Productos activos', value: '2,468' },
  { label: 'Pedidos este mes', value: '1,240' },
  { label: 'Rotación de stock', value: '94%' },
  { label: 'Clientes fidelizados', value: '8,900' }
];

const features = [
  {
    title: 'Gestión de inventario',
    description: 'Controla stock, precios, vencimientos y ubicaciones con una vista clara y moderna.'
  },
  {
    title: 'Operación de ventas',
    description: 'Digitaliza ventas, tickets y cobros para agilizar la atención en farmacia y almacén.'
  },
  {
    title: 'Reportes inteligentes',
    description: 'Identifica tendencias, productos más vendidos y alertas de reposición en segundos.'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-emerald-500 text-lg font-bold text-white shadow-soft">
              F
            </div>
            <div>
              <div className="text-xl font-bold">Farmacia del Norte</div>
              <div className="text-xs text-slate-500">Gestión inteligente</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#soluciones" className="transition hover:text-slate-900">Soluciones</a>
            <a href="#beneficios" className="transition hover:text-slate-900">Beneficios</a>
            <a href="#modulos" className="transition hover:text-slate-900">Módulos</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700">
              Iniciar sesión
            </Link>
            <Link href="/dashboard" className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700">
              Ver dashboard
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              Tu farmacia, más eficiente
            </span>
            <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
              Centraliza tus productos, ventas y control de inventario.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Una plataforma moderna para administrar medicamentos, proveedores, stock crítico y reportes de negocio en un solo lugar.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/dashboard" className="rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-brand-700">
                Acceder al panel
              </Link>
              <Link href="/login" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700">
                Iniciar sesión
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
              <span>✓ Seguridad y trazabilidad</span>
              <span>✓ Control de stock</span>
              <span>✓ Reportes en tiempo real</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-soft">
              <div className="rounded-[28px] bg-slate-900 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Resumen</p>
                    <h2 className="mt-2 text-3xl font-bold">S/. 186,420</h2>
                  </div>
                  <div className="rounded-xl bg-emerald-500/20 px-3 py-2 text-sm font-semibold text-emerald-300">+18.4%</div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-slate-400">Productos vendidos</p>
                    <p className="mt-2 text-2xl font-semibold">1,248</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-slate-400">Stock crítico</p>
                    <p className="mt-2 text-2xl font-semibold text-amber-300">27</p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {[65, 82, 58, 90, 76, 96].map((height, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-10 text-xs text-slate-400">W{index + 1}</span>
                      <div className="h-10 flex-1 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-emerald-400" style={{ width: `${height}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="soluciones" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Soluciones</p>
          <h2 className="mt-3 text-4xl font-black text-slate-900">Todo lo que tu farmacia necesita</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition hover:-translate-y-1">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <span className="text-xl">✦</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="beneficios" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Beneficios</p>
              <h2 className="mt-3 text-4xl font-black">Más control, menos errores y mejor servicio.</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-3xl font-black text-brand-300">{stat.value}</div>
                  <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="modulos" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
          <div className="grid gap-10 lg:grid-cols-3">
            {['Productos', 'Ventas', 'Inventario', 'Proveedores', 'Clientes', 'Reportes'].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-5 text-sm font-medium text-slate-700">
                <div className="mb-4 h-2 w-12 rounded-full bg-brand-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
