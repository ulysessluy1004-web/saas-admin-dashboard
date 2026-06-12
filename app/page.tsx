import { DashboardShell, Icon } from "./components/dashboard-shell";

const stats = [
  {
    label: "Monthly recurring revenue",
    value: "$128,430",
    change: "+14.2%",
    detail: "up from $112,460 last month",
    icon: "wallet",
  },
  {
    label: "Active subscriptions",
    value: "3,842",
    change: "+8.4%",
    detail: "312 new trials converted",
    icon: "users",
  },
  {
    label: "Open invoices",
    value: "$18,920",
    change: "-3.1%",
    detail: "12 invoices need follow-up",
    icon: "file",
  },
  {
    label: "Trial conversion",
    value: "7.8%",
    change: "+1.9%",
    detail: "best week this quarter",
    icon: "spark",
  },
];

const revenueData = [
  { month: "Jan", revenue: 42, target: 38 },
  { month: "Feb", revenue: 48, target: 42 },
  { month: "Mar", revenue: 45, target: 46 },
  { month: "Apr", revenue: 57, target: 50 },
  { month: "May", revenue: 63, target: 56 },
  { month: "Jun", revenue: 72, target: 62 },
  { month: "Jul", revenue: 84, target: 68 },
];

const recentCustomers = [
  { name: "Olivia Lee", company: "BrightLabs", plan: "Enterprise", value: "$18,240" },
  { name: "Avery Ross", company: "Northstar Finance", plan: "Business", value: "$7,680" },
  { name: "Sophia Chen", company: "Studio Pine", plan: "Pro", value: "$4,920" },
  { name: "Noah Williams", company: "Atlas Supply", plan: "Starter", value: "$1,340" },
];

const activities = [
  { title: "Enterprise account created", detail: "Olivia Lee invited 8 teammates.", time: "4 min ago" },
  { title: "Invoice paid", detail: "Invoice #INV-1048 was paid for $4,200.", time: "1 hour ago" },
  { title: "Revenue milestone", detail: "MRR crossed $128k for the first time.", time: "3 hours ago" },
];

export default function Home() {
  return (
    <DashboardShell activePath="/">
      <section className="mb-8 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-200 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-indigo-300">
              Thursday, June 11, 2026
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Welcome back, Alex. Your SaaS business is growing steadily.
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
              Track revenue, subscriptions, customer activity, and product
              updates from one clean admin workspace.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:w-80">
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
              <p className="text-xs text-slate-300">Net retention</p>
              <p className="mt-2 text-2xl font-bold">116%</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
              <p className="text-xs text-slate-300">Churn risk</p>
              <p className="mt-2 text-2xl font-bold">2.4%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
          >
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                <Icon name={stat.icon} className="h-5 w-5" />
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                  stat.change.startsWith("-")
                    ? "bg-rose-50 text-rose-600"
                    : "bg-emerald-50 text-emerald-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-500">
              {stat.label}
            </p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              {stat.value}
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-400">{stat.detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Revenue overview
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Monthly revenue compared with target.
              </p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
              +23.8% growth
            </span>
          </div>

          <div className="mt-8 flex h-72 items-end gap-3 rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-100">
            {revenueData.map((item) => (
              <div key={item.month} className="flex flex-1 flex-col items-center gap-3">
                <div className="flex h-full w-full items-end gap-1">
                  <div
                    className="w-full rounded-t-2xl bg-indigo-600"
                    style={{ height: `${item.revenue}%` }}
                  />
                  <div
                    className="w-full rounded-t-2xl bg-slate-300"
                    style={{ height: `${item.target}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  {item.month}
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80">
          <h2 className="text-lg font-bold text-slate-950">Activity feed</h2>
          <div className="mt-6 space-y-4">
            {activities.map((activity) => (
              <div key={activity.title} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-bold text-slate-950">
                    {activity.title}
                  </p>
                  <p className="shrink-0 text-xs font-semibold text-slate-400">
                    {activity.time}
                  </p>
                </div>
                <p className="mt-1 text-sm text-slate-500">{activity.detail}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-6 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
        <div className="border-b border-slate-100 p-5 sm:px-6">
          <h2 className="text-lg font-bold text-slate-950">Recent customers</h2>
          <p className="mt-1 text-sm text-slate-500">
            Latest customers joining or changing plans.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-[0.18em] text-slate-400">
              <tr>
                <th className="px-6 py-4 font-bold">Customer</th>
                <th className="px-6 py-4 font-bold">Company</th>
                <th className="px-6 py-4 font-bold">Plan</th>
                <th className="px-6 py-4 text-right font-bold">Value</th>
              </tr>
            </thead>
            <tbody>
              {recentCustomers.map((customer) => (
                <tr key={customer.name} className="border-t border-slate-100 transition hover:bg-indigo-50/30">
                  <td className="px-6 py-4 text-sm font-bold text-slate-950">
                    {customer.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {customer.company}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-700">
                    {customer.plan}
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold text-slate-950">
                    {customer.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardShell>
  );
}
