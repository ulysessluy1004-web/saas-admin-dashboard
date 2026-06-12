import { DashboardShell, Icon } from "../components/dashboard-shell";

const notificationSettings = [
  { label: "Weekly performance summary", enabled: true },
  { label: "Invoice payment alerts", enabled: true },
  { label: "Trial ending reminders", enabled: true },
  { label: "Product update digest", enabled: false },
];

export default function SettingsPage() {
  return (
    <DashboardShell activePath="/settings">
      <section className="mb-8 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-200 sm:p-8">
        <p className="text-sm font-semibold text-indigo-300">Settings</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Configure your workspace preferences.
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
          These settings are static mock fields for now. They are designed to
          become real forms later when a backend is added.
        </p>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">
              <Icon name="users" className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-950">Profile settings</h2>
              <p className="text-sm text-slate-500">Mock user information for the admin account.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-600">Full name</span>
              <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100" value="Alex Morgan" readOnly />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-600">Email address</span>
              <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100" value="alex@nexa.example" readOnly />
            </label>
            <label className="block md:col-span-2">
              <span className="text-sm font-semibold text-slate-600">Role</span>
              <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100" value="Workspace administrator" readOnly />
            </label>
          </div>
        </article>

        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">
              <Icon name="settings" className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-950">Workspace settings</h2>
              <p className="text-sm text-slate-500">Simple company-level mock settings.</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {[
              ["Workspace name", "Nexa Admin"],
              ["Default currency", "USD"],
              ["Timezone", "America/New_York"],
            ].map(([label, value]) => (
              <label key={label} className="block">
                <span className="text-sm font-semibold text-slate-600">{label}</span>
                <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100" value={value} readOnly />
              </label>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">
            <Icon name="bell" className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-950">Notification settings</h2>
            <p className="text-sm text-slate-500">Static toggles that show future preference controls.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {notificationSettings.map((setting) => (
            <div key={setting.label} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
              <p className="text-sm font-semibold text-slate-700">{setting.label}</p>
              <span className={`flex h-7 w-12 items-center rounded-full p-1 ${setting.enabled ? "bg-indigo-600" : "bg-slate-300"}`}>
                <span className={`h-5 w-5 rounded-full bg-white transition ${setting.enabled ? "translate-x-5" : ""}`} />
              </span>
            </div>
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}
