import { DashboardShell, Icon } from "../components/dashboard-shell";

const plans = [
  { name: "Starter", price: "$29", customers: "1,284", features: "Small teams and early trials" },
  { name: "Business", price: "$99", customers: "1,946", features: "Growing teams with billing workflows" },
  { name: "Enterprise", price: "Custom", customers: "612", features: "Advanced support and high-volume seats" },
];

const invoices = [
  { id: "INV-1048", customer: "BrightLabs", date: "Jun 11, 2026", amount: "$4,200", status: "Paid" },
  { id: "INV-1049", customer: "Northstar Finance", date: "Jun 10, 2026", amount: "$1,850", status: "Open" },
  { id: "INV-1050", customer: "Studio Pine", date: "Jun 9, 2026", amount: "$920", status: "Paid" },
  { id: "INV-1051", customer: "Atlas Supply", date: "Jun 8, 2026", amount: "$340", status: "Past due" },
];

function StatusBadge({ status }: { status: string }) {
  const classes =
    status === "Paid"
      ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
      : status === "Open"
        ? "bg-amber-50 text-amber-700 ring-amber-100"
        : "bg-rose-50 text-rose-700 ring-rose-100";

  return <span className={`rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${classes}`}>{status}</span>;
}

export default function BillingPage() {
  return (
    <DashboardShell activePath="/billing">
      <section className="mb-8 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-200 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-indigo-300">Billing</p>
            <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Monitor plans, invoices, and payment health.
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
              This frontend-only billing page uses mock invoices and plan data.
              No payment provider or backend is connected.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
            <p className="text-xs text-slate-300">Payment success</p>
            <p className="mt-2 text-3xl font-bold">98.2%</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-950">{plan.name}</h2>
                <p className="mt-1 text-sm text-slate-500">{plan.features}</p>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Icon name="wallet" className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-6 text-3xl font-bold text-slate-950">{plan.price}</p>
            <p className="mt-2 text-sm font-semibold text-slate-400">{plan.customers} customers</p>
          </article>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_1.6fr]">
        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80">
          <h2 className="text-lg font-bold text-slate-950">Payment status</h2>
          <div className="mt-6 space-y-5">
            {[
              { label: "Paid invoices", value: "86%", color: "bg-emerald-500" },
              { label: "Open invoices", value: "11%", color: "bg-amber-500" },
              { label: "Past due", value: "3%", color: "bg-rose-500" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-slate-600">{item.label}</span>
                  <span className="text-slate-950">{item.value}</span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-slate-100">
                  <div className={`h-3 rounded-full ${item.color}`} style={{ width: item.value }} />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
          <div className="border-b border-slate-100 p-5 sm:px-6">
            <h2 className="text-lg font-bold text-slate-950">Recent invoices</h2>
            <p className="mt-1 text-sm text-slate-500">Mock invoice activity for the current billing cycle.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead className="bg-slate-50 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                <tr>
                  <th className="px-6 py-4 font-bold">Invoice</th>
                  <th className="px-6 py-4 font-bold">Customer</th>
                  <th className="px-6 py-4 font-bold">Date</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 text-right font-bold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-t border-slate-100 transition hover:bg-indigo-50/30">
                    <td className="px-6 py-4 text-sm font-bold text-slate-950">{invoice.id}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{invoice.customer}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{invoice.date}</td>
                    <td className="px-6 py-4"><StatusBadge status={invoice.status} /></td>
                    <td className="px-6 py-4 text-right text-sm font-bold text-slate-950">{invoice.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </DashboardShell>
  );
}
