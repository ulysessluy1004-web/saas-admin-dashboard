import { DashboardShell, Icon } from "../components/dashboard-shell";

const customerStats = [
  { label: "Total customers", value: "3,842", detail: "+248 this month", icon: "users" },
  { label: "Active accounts", value: "3,510", detail: "91.4% healthy", icon: "spark" },
  { label: "Trial customers", value: "332", detail: "64 ending soon", icon: "chart" },
  { label: "At-risk accounts", value: "28", detail: "needs follow-up", icon: "file" },
];

const customers = [
  { initials: "OL", name: "Olivia Lee", company: "BrightLabs", email: "olivia@brightlabs.com", plan: "Enterprise", status: "Active", seats: 42, value: "$18,240" },
  { initials: "AR", name: "Avery Ross", company: "Northstar Finance", email: "avery@northstar.io", plan: "Business", status: "Trial", seats: 18, value: "$7,680" },
  { initials: "SC", name: "Sophia Chen", company: "Studio Pine", email: "sophia@studiopine.co", plan: "Pro", status: "Active", seats: 9, value: "$4,920" },
  { initials: "NW", name: "Noah Williams", company: "Atlas Supply", email: "noah@atlas-supply.com", plan: "Starter", status: "Past due", seats: 4, value: "$1,340" },
  { initials: "MJ", name: "Maya Johnson", company: "CloudNine Apps", email: "maya@cloudnine.dev", plan: "Business", status: "Active", seats: 23, value: "$9,860" },
];

function StatusBadge({ status }: { status: string }) {
  const classes =
    status === "Active"
      ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
      : status === "Trial"
        ? "bg-indigo-50 text-indigo-700 ring-indigo-100"
        : "bg-rose-50 text-rose-700 ring-rose-100";

  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${classes}`}>
      {status}
    </span>
  );
}

export default function CustomersPage() {
  return (
    <DashboardShell activePath="/customers">
      <section className="mb-8 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-200 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-indigo-300">Customers</p>
            <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Manage customer accounts, plans, and health.
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
              Use this mock customer workspace to review account status,
              subscriptions, seats, and lifetime value.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Retention
            </p>
            <p className="mt-2 text-3xl font-bold">94.8%</p>
            <p className="mt-1 text-xs text-slate-400">rolling 30 days</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {customerStats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
              <Icon name={stat.icon} className="h-5 w-5" />
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-500">{stat.label}</p>
            <p className="mt-2 text-3xl font-bold text-slate-950">{stat.value}</p>
            <p className="mt-2 text-xs font-semibold text-slate-400">{stat.detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-lg font-bold text-slate-950">Customer directory</h2>
            <p className="mt-1 text-sm text-slate-500">
              Realistic sample accounts for your portfolio dashboard.
            </p>
          </div>
          <button className="w-fit rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white">
            Export CSV
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] text-left">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-[0.18em] text-slate-400">
              <tr>
                <th className="px-6 py-4 font-bold">Customer</th>
                <th className="px-6 py-4 font-bold">Plan</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold">Seats</th>
                <th className="px-6 py-4 text-right font-bold">Value</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.email} className="border-t border-slate-100 transition hover:bg-indigo-50/30">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-100 text-sm font-bold text-indigo-700">
                        {customer.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-950">{customer.name}</p>
                        <p className="text-xs text-slate-400">
                          {customer.company} - {customer.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-700">{customer.plan}</td>
                  <td className="px-6 py-4"><StatusBadge status={customer.status} /></td>
                  <td className="px-6 py-4 text-sm text-slate-500">{customer.seats}</td>
                  <td className="px-6 py-4 text-right text-sm font-bold text-slate-950">{customer.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardShell>
  );
}
