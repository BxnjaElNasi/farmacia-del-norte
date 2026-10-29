import Link from 'next/link';

const metrics = [
  { label: 'Ventas del mes', value: 'S/. 186,420' },
  { label: 'Productos activos', value: '2,468' },
  { label: 'Stock crítico', value: '27' },
  { label: 'Clientes fieles', value: '8,900' }
];

const featureCards = [
  {
    eyebrow: '01',
    title: 'Inventario inteligente',
    description: 'Seguimiento por sku, stock mínimo y alertas de reposición para no quedarse sin lo esencial.'
  },
  {
    eyebrow: '02',
    title: 'Ventas con contexto',
    description: 'Cierra operaciones con historial de clientes, precios y control de despacho en un solo lugar.'
  },
  {
    eyebrow: '03',
    title: 'Reportes accionables',
    description: 'Comprende qué vende, qué falta y qué debería moverse antes con una vista clara para la operación.'
  }
];

const modules = [
  'Productos',
  'Inventario',
  'Ventas',
  'Proveedores',
  'Clientes',
  'Reportes'
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f0e8] text-[#19291f]">
      <header className="border-b border-[#d9d0c5] bg-[#f5f0e8]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1d4738] text-lg font-bold text-[#f5f0e8] shadow-[0_12px_30px_rgba(29,71,56,0.18)]">
              F
            </div>
            <div>
              <div className="text-lg font-semibold tracking-[0.08em] text-[#1d4738] uppercase">Farmacia del Norte</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#7a6755]">Gestión clínica y comercial</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#3b3a35] md:flex">
            <a href="#soluciones" className="transition hover:text-[#1d4738]">Soluciones</a>
            <a href="#beneficios" className="transition hover:text-[#1d4738]">Beneficios</a>
            <a href="#modulos" className="transition hover:text-[#1d4738]">Módulos</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-full border border-[#cbbda9] bg-white/60 px-4 py-2 text-sm font-medium text-[#243b2f] transition hover:border-[#1d4738] hover:text-[#1d4738]">
              Iniciar sesión
            </Link>
            <Link href="/dashboard" className="rounded-full bg-[#1d4738] px-4 py-2 text-sm font-semibold text-[#f5f0e8] shadow-[0_14px_28px_rgba(29,71,56,0.18)] transition hover:bg-[#183d30]">
              Ver dashboard
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(198,138,72,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(29,71,56,0.14),_transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-24">
          <div>
            <span className="inline-flex rounded-full border border-[#c7b79d] bg-[#f1e7d7] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#1d4738]">
              Farmacia moderna
            </span>

            <h1 className="mt-6 max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-[#182b20] md:text-6xl">
              La farmacia que necesita más precisión y menos fricción.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#4d4b46]">
              Centraliza ventas, inventario, proveedores y reportes para atender mejor a cada cliente y mantener el stock bajo control.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/dashboard" className="rounded-full bg-[#c17d41] px-6 py-3 text-base font-semibold text-[#fffaf2] shadow-[0_18px_32px_rgba(193,125,65,0.22)] transition hover:bg-[#af6d32]">
                Acceder al panel
              </Link>
              <Link href="/login" className="rounded-full border border-[#cbbda9] bg-white/60 px-6 py-3 text-base font-semibold text-[#223b2d] transition hover:border-[#1d4738] hover:text-[#1d4738]">
                Iniciar sesión
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-5 text-sm text-[#4d4b46]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d3c8b7] bg-white/45 px-3 py-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#1d4738]" />
                Trazabilidad completa
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d3c8b7] bg-white/45 px-3 py-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#c17d41]" />
                Stock crítico visible
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] border border-[#d7cab1] bg-[#f9f3ea] p-5 shadow-[0_28px_65px_rgba(24,41,31,0.08)]">
              <div className="rounded-[28px] bg-[#1e2f27] p-6 text-[#f7f0e8]">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#d8c2a3]">Resumen</p>
                    <h2 className="mt-3 font-serif text-4xl tracking-[-0.06em] text-white">S/. 186,420</h2>
                  </div>
                  <span className="rounded-full bg-[#d9b57c]/15 px-3 py-1 text-xs font-semibold text-[#f0d29c]">+18.4%</span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#d8c2a3]">Productos</div>
                    <div className="mt-3 text-3xl font-semibold text-white">1,248</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#d8c2a3]">Stock crítico</div>
                    <div className="mt-3 text-3xl font-semibold text-[#f0d29c]">27</div>
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {[62, 78, 54, 88, 71, 95].map((height, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-9 text-[10px] uppercase tracking-[0.2em] text-[#d8c2a3]">W{index + 1}</span>
                      <div className="h-9 flex-1 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-[linear-gradient(90deg,#c17d41_0%,#d9b57c_45%,#8db193_100%)]" style={{ width: `${height}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="soluciones" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#5f7263]">Soluciones</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight tracking-[-0.05em] text-[#1a2a1f] md:text-5xl">
            Más control del negocio, menos trabajo manual.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featureCards.map((card) => (
            <article key={card.eyebrow} className="rounded-[28px] border border-[#d9d0c5] bg-[#f9f3ea] p-6 shadow-[0_18px_40px_rgba(24,41,31,0.04)]">
              <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8d6a48]">{card.eyebrow}</div>
              <h3 className="font-serif text-3xl tracking-[-0.05em] text-[#1a2a1f]">{card.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#4d4b46]">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="beneficios" className="bg-[#1d4738] py-20 text-[#f7f0e8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#d9b57c]">Beneficios</p>
            <h2 className="mt-3 max-w-md font-serif text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
              Menos errores y mejor servicio al cliente.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="text-3xl font-semibold text-[#d9b57c]">{metric.value}</div>
                <div className="mt-2 text-sm text-[#ddd2c5]">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="modulos" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-[30px] border border-[#d9d0c5] bg-[#f9f3ea] p-8 shadow-[0_18px_40px_rgba(24,41,31,0.04)]">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#5f7263]">Módulos</p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.05em] text-[#1a2a1f]">Todo para operar bien</h2>
            </div>
            <div className="hidden rounded-full border border-[#d9d0c5] bg-white/60 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#5f7263] md:block">
              farmacia del norte
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {modules.map((item, index) => (
              <div key={item} className="rounded-[24px] border border-[#d9d0c5] bg-white/60 p-5 text-base font-medium text-[#2d3d34]">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8d6a48]">0{index + 1}</span>
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#c17d41]" />
                </div>
                <div className="text-xl font-semibold tracking-[-0.04em]">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
