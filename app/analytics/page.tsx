import { DashboardShell, Icon } from "../components/dashboard-shell";

const metrics = [
  { label: "Visitors", value: "48,240", change: "+12.8%", icon: "users" },
  { label: "Signups", value: "2,184", change: "+8.1%", icon: "userPlus" },
  { label: "Activation rate", value: "41.6%", change: "+3.4%", icon: "spark" },
  { label: "Avg. session", value: "6m 12s", change: "+1.2%", icon: "chart" },
];

const weeklySignups = [42, 55, 48, 68, 74, 63, 82];
const funnel = [
  { step: "Visitors", value: 48240, percent: 100 },
  { step: "Trial signups", value: 2184, percent: 62 },
  { step: "Activated", value: 908, percent: 41 },
  { step: "Paid customers", value: 312, percent: 26 },
];

export default function AnalyticsPage() {
  return (
    <DashboardShell activePath="/analytics">
      <section className="mb-8 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-200 sm:p-8">
        <p className="text-sm font-semibold text-indigo-300">Analytics</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Understand product growth and conversion.
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
          Mock analytics for visitor traffic, product activation, and signup
          performance before connecting real tracking tools.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
          >
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                <Icon name={metric.icon} className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
                {metric.change}
              </span>
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-500">{metric.label}</p>
            <p className="mt-2 text-3xl font-bold text-slate-950">{metric.value}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-950">Weekly signup trend</h2>
              <p className="mt-1 text-sm text-slate-500">Placeholder chart using simple div bars.</p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
              Last 7 days
            </span>
          </div>
          <div className="mt-8 flex h-72 items-end gap-3 rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-100">
            {weeklySignups.map((height, index) => (
              <div key={index} className="flex flex-1 flex-col items-center gap-3">
                <div className="flex w-full items-end rounded-t-2xl bg-indigo-100">
                  <div
                    className="w-full rounded-t-2xl bg-indigo-600 shadow-lg shadow-indigo-100"
                    style={{ height: `${height}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-slate-400">D{index + 1}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80">
          <h2 className="text-lg font-bold text-slate-950">Conversion funnel</h2>
          <p className="mt-1 text-sm text-slate-500">Mock funnel stages from visit to paid plan.</p>
          <div className="mt-6 space-y-5">
            {funnel.map((item) => (
              <div key={item.step}>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-slate-700">{item.step}</span>
                  <span className="font-bold text-slate-950">{item.value.toLocaleString()}</span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-slate-100">
                  <div
                    className="h-3 rounded-full bg-indigo-600"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </DashboardShell>
  );
}
