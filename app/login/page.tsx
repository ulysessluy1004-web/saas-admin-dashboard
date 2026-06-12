import Link from "next/link";

const features = [
  { value: "$128k", label: "Monthly recurring revenue" },
  { value: "3,842", label: "Active subscriptions" },
  { value: "98.2%", label: "Payment success rate" },
];

export default function LoginPage() {
  return (
    <main className="auth-grid relative min-h-screen overflow-hidden bg-[#070a12] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="auth-orb auth-orb-one" />
      <div className="auth-orb auth-orb-two" />
      <div className="auth-orb auth-orb-three" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/40 backdrop-blur-2xl lg:grid-cols-[1.05fr_0.95fr]">
        <section className="auth-enter hidden flex-col justify-between border-r border-white/10 p-10 lg:flex xl:p-14">
          <Link href="/" className="group flex w-fit items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-black shadow-lg shadow-indigo-950 transition duration-300 group-hover:-rotate-6 group-hover:scale-110">
              N
            </span>
            <span>
              <span className="block font-bold">Nexa Admin</span>
              <span className="block text-xs text-slate-500">SaaS command center</span>
            </span>
          </Link>

          <div className="max-w-xl">
            <div className="auth-enter-delay inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 text-xs font-bold text-indigo-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Live workspace insights
            </div>
            <h1 className="auth-enter-delay mt-6 text-5xl font-bold leading-[1.05] tracking-tight xl:text-6xl">
              Your business,
              <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                beautifully in focus.
              </span>
            </h1>
            <p className="auth-enter-delay mt-6 max-w-lg text-base leading-7 text-slate-400">
              Sign in to monitor revenue, customer health, analytics, and
              billing from one thoughtfully designed workspace.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.label}
                className="auth-feature rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition duration-300 hover:-translate-y-2 hover:border-indigo-400/30 hover:bg-white/[0.08]"
                style={{ animationDelay: `${500 + index * 120}ms` }}
              >
                <p className="text-xl font-bold">{feature.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{feature.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="auth-enter-delay flex items-center justify-center p-5 sm:p-10 lg:p-14">
          <div className="w-full max-w-md">
            <Link
              href="/"
              className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white lg:hidden"
            >
              <span className="transition group-hover:-translate-x-1">←</span>
              Dashboard
            </Link>

            <div className="mb-8">
              <p className="text-sm font-bold text-indigo-400">Welcome back</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">Sign in to continue</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Enter any mock credentials to preview the authentication UI.
              </p>
            </div>

            <form className="space-y-5">
              <label className="group block">
                <span className="text-sm font-semibold text-slate-300 transition group-focus-within:text-indigo-300">
                  Email address
                </span>
                <input
                  type="email"
                  placeholder="alex@nexa.example"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 hover:border-white/20 hover:bg-white/[0.075] focus:-translate-y-0.5 focus:border-indigo-400/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-indigo-500/10"
                />
              </label>

              <label className="group block">
                <span className="text-sm font-semibold text-slate-300 transition group-focus-within:text-indigo-300">
                  Password
                </span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 hover:border-white/20 hover:bg-white/[0.075] focus:-translate-y-0.5 focus:border-indigo-400/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-indigo-500/10"
                />
              </label>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-slate-400">
                  <input type="checkbox" className="h-4 w-4 accent-indigo-500" />
                  Remember me
                </label>
                <button type="button" className="font-bold text-indigo-400 transition hover:text-indigo-300">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="auth-shine group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-950/50 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-indigo-700/30 active:translate-y-0 active:scale-[0.99]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Sign in
                  <span className="transition duration-300 group-hover:translate-x-1">→</span>
                </span>
              </button>
            </form>

            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs font-medium text-slate-600">New workspace?</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <Link
              href="/signup"
              className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm font-bold text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.08] hover:text-white"
            >
              Create an account
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
