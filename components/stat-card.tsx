import type { LucideIcon } from 'lucide-react';

export function StatCard({
  title,
  value,
  change,
  icon: Icon
}: {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{title}</p>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
          <Icon size={20} />
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between">
        <div>
          <p className="text-3xl font-black text-slate-900">{value}</p>
          <p className="mt-2 text-sm text-emerald-600">{change}</p>
        </div>
      </div>
    </div>
  );
}
