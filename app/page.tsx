const navItems = [
  { label: "Overview", icon: "grid", active: true },
  { label: "Analytics", icon: "chart" },
  { label: "Customers", icon: "users" },
  { label: "Products", icon: "box" },
  { label: "Orders", icon: "bag" },
];

const stats = [
  {
    label: "Total revenue",
    value: "$124,560",
    change: "+12.5%",
    detail: "vs. last month",
    icon: "wallet",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    label: "Active customers",
    value: "2,420",
    change: "+8.2%",
    detail: "vs. last month",
    icon: "users",
    color: "bg-sky-50 text-sky-600",
  },
  {
    label: "New orders",
    value: "1,210",
    change: "+5.1%",
    detail: "vs. last month",
    icon: "bag",
    color: "bg-amber-50 text-amber-600",
  },
  {
    label: "Conversion rate",
    value: "3.24%",
    change: "+1.4%",
    detail: "vs. last month",
    icon: "spark",
    color: "bg-emerald-50 text-emerald-600",
  },
];

const customers = [
  { initials: "OL", name: "Olivia Lee", email: "olivia@example.com", plan: "Enterprise", value: "$12,400", color: "bg-indigo-100 text-indigo-700" },
  { initials: "JM", name: "James Miller", email: "james@example.com", plan: "Pro", value: "$4,850", color: "bg-sky-100 text-sky-700" },
  { initials: "SC", name: "Sophia Chen", email: "sophia@example.com", plan: "Pro", value: "$3,920", color: "bg-rose-100 text-rose-700" },
  { initials: "NW", name: "Noah Williams", email: "noah@example.com", plan: "Basic", value: "$1,240", color: "bg-amber-100 text-amber-700" },
];

const activities = [
  { icon: "userPlus", color: "bg-indigo-50 text-indigo-600", title: "New customer registered", detail: "Sophia Chen joined the Pro plan", time: "4 min ago" },
  { icon: "bag", color: "bg-emerald-50 text-emerald-600", title: "New order received", detail: "Order #4821 for $1,240", time: "18 min ago" },
  { icon: "wallet", color: "bg-sky-50 text-sky-600", title: "Payment received", detail: "James Miller paid invoice #1032", time: "1 hour ago" },
  { icon: "spark", color: "bg-amber-50 text-amber-600", title: "Milestone reached", detail: "Monthly revenue passed $100k", time: "3 hours ago" },
];

const iconPaths: Record<string, React.ReactNode> = {
  grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  chart: <><path d="M4 19V9" /><path d="M10 19V5" /><path d="M16 19v-7" /><path d="M22 19H2" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  box: <><path d="m21 8-9-5-9 5 9 5 9-5Z" /><path d="m3 8 9 5 9-5" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /></>,
  bag: <><path d="M6 8h12l1 13H5L6 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>,
  wallet: <><rect x="2" y="5" width="20" height="15" rx="2" /><path d="M16 13h6" /><path d="M2 9h20" /></>,
  spark: <><path d="m12 3-1.8 5.2L5 10l5.2 1.8L12 17l1.8-5.2L19 10l-5.2-1.8L12 3Z" /><path d="m5 16-.8 2.2L2 19l2.2.8L5 22l.8-2.2L8 19l-2.2-.8L5 16Z" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.08A1.7 1.7 0 0 0 9 19.37a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15 1.7 1.7 0 0 0 3.08 14H3v-4h.08A1.7 1.7 0 0 0 4.63 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63h.01A1.7 1.7 0 0 0 10 3.08V3h4v.08A1.7 1.7 0 0 0 15 4.63a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9v.01A1.7 1.7 0 0 0 20.92 10H21v4h-.08A1.7 1.7 0 0 0 19.4 15Z" /></>,
  help: <><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 1 1 5.4 1.8c-1.5 1-2.5 1.5-2.5 3.2" /><path d="M12 18h.01" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></>,
  userPlus: <><path d="M15 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8" cy="7" r="4" /><path d="M19 8v6" /><path d="M22 11h-6" /></>,
  chevron: <path d="m9 18 6-6-6-6" />,
  arrowUp: <><path d="m18 15-6-6-6 6" /><path d="M12 9v10" /></>,
};

function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[name]}</svg>;
}

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex">
      <div className="flex h-20 items-center gap-3 px-6">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200"><Icon name="spark" /></div>
        <div><p className="font-bold tracking-tight text-slate-900">Nexa Admin</p><p className="text-xs text-slate-400">Business workspace</p></div>
      </div>
      <nav className="flex-1 space-y-1 px-4 py-5">
        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Workspace</p>
        {navItems.map((item) => (
          <a key={item.label} href="#" className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${item.active ? "bg-indigo-50 text-indigo-700" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}>
            <Icon name={item.icon} className="h-4.5 w-4.5" />{item.label}
          </a>
        ))}
        <p className="mb-3 mt-8 px-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Manage</p>
        <a href="#" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900"><Icon name="settings" className="h-4.5 w-4.5" />Settings</a>
        <a href="#" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900"><Icon name="help" className="h-4.5 w-4.5" />Help center</a>
      </nav>
      <div className="m-4 rounded-2xl bg-slate-950 p-4 text-white">
        <p className="text-sm font-semibold">Need more insights?</p>
        <p className="mt-1 text-xs leading-5 text-slate-400">Upgrade to unlock advanced reports.</p>
        <button className="mt-4 w-full rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-900">View plans</button>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur sm:px-6 lg:ml-64 lg:px-8">
      <div className="flex items-center gap-3 lg:hidden">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white"><Icon name="spark" className="h-4 w-4" /></div>
        <span className="font-bold text-slate-900">Nexa</span>
      </div>
      <label className="relative hidden max-w-sm flex-1 sm:block">
        <Icon name="search" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50" placeholder="Search anything..." />
      </label>
      <div className="flex items-center gap-2 sm:gap-4">
        <button aria-label="Notifications" className="relative grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50">
          <Icon name="bell" className="h-4.5 w-4.5" /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>
        <div className="h-8 w-px bg-slate-200" />
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-bold text-white">AM</div>
          <div className="hidden sm:block"><p className="text-sm font-semibold text-slate-800">Alex Morgan</p><p className="text-xs text-slate-400">Administrator</p></div>
        </div>
      </div>
    </header>
  );
}

function RevenueChart() {
  return (
    <div className="mt-6">
      <div className="flex h-56 gap-3 sm:h-64">
        <div className="flex flex-col justify-between pb-6 text-[11px] text-slate-400"><span>$40k</span><span>$30k</span><span>$20k</span><span>$10k</span><span>$0</span></div>
        <div className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-between pb-6">{[1, 2, 3, 4, 5].map((line) => <div key={line} className="border-t border-dashed border-slate-200" />)}</div>
          <svg className="absolute inset-0 h-[calc(100%-24px)] w-full overflow-visible" viewBox="0 0 700 220" preserveAspectRatio="none" aria-label="Revenue trend chart">
            <defs>
              <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#6366f1" stopOpacity=".22" /><stop offset="100%" stopColor="#6366f1" stopOpacity="0" /></linearGradient>
            </defs>
            <path d="M0 185 C75 175 75 145 140 150 S215 115 280 120 S360 90 420 105 S500 45 560 62 S635 22 700 30 V220 H0Z" fill="url(#chartFill)" />
            <path d="M0 185 C75 175 75 145 140 150 S215 115 280 120 S360 90 420 105 S500 45 560 62 S635 22 700 30" fill="none" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-x-0 bottom-0 flex justify-between text-[11px] text-slate-400"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span></div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-600">
      <Sidebar />
      <Topbar />
      <main className="px-4 py-7 sm:px-6 lg:ml-64 lg:px-8 lg:py-8">
        <section className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="mb-1 text-sm font-medium text-indigo-600">Thursday, June 11</p><h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Good morning, Alex</h1><p className="mt-1 text-sm text-slate-500">Here&apos;s what&apos;s happening with your business today.</p></div>
          <button className="flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"><Icon name="chart" className="h-4 w-4" />Download report</button>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between"><div className={`grid h-10 w-10 place-items-center rounded-xl ${stat.color}`}><Icon name={stat.icon} className="h-4.5 w-4.5" /></div><span className="flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600"><Icon name="arrowUp" className="h-3 w-3" />{stat.change}</span></div>
              <p className="mt-5 text-sm font-medium text-slate-500">{stat.label}</p><p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{stat.value}</p><p className="mt-1 text-xs text-slate-400">{stat.detail}</p>
            </article>
          ))}
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(300px,1fr)]">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div><h2 className="font-bold text-slate-900">Revenue overview</h2><p className="mt-1 text-xs text-slate-400">Monthly revenue performance</p></div><select className="w-fit rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 outline-none"><option>Last 7 months</option></select></div>
            <div className="mt-5 flex items-end gap-3"><p className="text-2xl font-bold text-slate-900">$84,240</p><span className="mb-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">+18.2%</span></div>
            <RevenueChart />
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between"><div><h2 className="font-bold text-slate-900">Recent activity</h2><p className="mt-1 text-xs text-slate-400">Latest workspace updates</p></div><button className="text-xs font-semibold text-indigo-600">View all</button></div>
            <div className="mt-6 space-y-5">
              {activities.map((activity) => (
                <div key={activity.title} className="flex gap-3"><div className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${activity.color}`}><Icon name={activity.icon} className="h-4 w-4" /></div><div className="min-w-0"><p className="truncate text-sm font-semibold text-slate-800">{activity.title}</p><p className="mt-0.5 truncate text-xs text-slate-400">{activity.detail}</p><p className="mt-1 text-[11px] font-medium text-slate-300">{activity.time}</p></div></div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:px-6"><div><h2 className="font-bold text-slate-900">Recent customers</h2><p className="mt-1 text-xs text-slate-400">Customers who joined recently</p></div><button className="flex items-center gap-1 text-xs font-semibold text-indigo-600">View all <Icon name="chevron" className="h-3 w-3" /></button></div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left">
              <thead><tr className="border-b border-slate-100 bg-slate-50/60 text-[11px] uppercase tracking-wider text-slate-400"><th className="px-6 py-3 font-semibold">Customer</th><th className="px-6 py-3 font-semibold">Plan</th><th className="px-6 py-3 font-semibold">Status</th><th className="px-6 py-3 font-semibold">Lifetime value</th><th className="px-6 py-3 font-semibold" /></tr></thead>
              <tbody>{customers.map((customer) => <tr key={customer.email} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60"><td className="px-6 py-4"><div className="flex items-center gap-3"><div className={`grid h-9 w-9 place-items-center rounded-full text-xs font-bold ${customer.color}`}>{customer.initials}</div><div><p className="text-sm font-semibold text-slate-800">{customer.name}</p><p className="text-xs text-slate-400">{customer.email}</p></div></div></td><td className="px-6 py-4 text-sm font-medium text-slate-600">{customer.plan}</td><td className="px-6 py-4"><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">Active</span></td><td className="px-6 py-4 text-sm font-semibold text-slate-800">{customer.value}</td><td className="px-6 py-4 text-right"><button className="text-lg text-slate-400">•••</button></td></tr>)}</tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
