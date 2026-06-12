import Link from "next/link";

const benefits = [
  "Beautiful dashboards from day one",
  "Customer, analytics, and billing views",
  "Responsive UI built for every screen",
];

export default function SignupPage() {
  return (
    <main className="auth-grid relative min-h-screen overflow-hidden bg-[#070a12] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="auth-orb auth-orb-one" />
      <div className="auth-orb auth-orb-two" />
      <div className="auth-orb auth-orb-three" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/40 backdrop-blur-2xl lg:grid-cols-[0.95fr_1.05fr]">
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
              <p className="text-sm font-bold text-indigo-400">Start building</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight">
                Create your workspace
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Preview a modern signup experience. No account or data will
                actually be created yet.
              </p>
            </div>

            <form className="space-y-5">
              <label className="group block">
                <span className="text-sm font-semibold text-slate-300 transition group-focus-within:text-indigo-300">
                  Work email
                </span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 hover:border-white/20 hover:bg-white/[0.075] focus:-translate-y-0.5 focus:border-indigo-400/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-indigo-500/10"
                />
              </label>

              <label className="group block">
                <span className="text-sm font-semibold text-slate-300 transition group-focus-within:text-indigo-300">
                  Password
                </span>
                <input
                  type="password"
                  placeholder="Create a secure password"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 hover:border-white/20 hover:bg-white/[0.075] focus:-translate-y-0.5 focus:border-indigo-400/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-indigo-500/10"
                />
              </label>

              <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-xs leading-5 text-slate-400 transition hover:bg-white/[0.06]">
                <input type="checkbox" className="mt-0.5 h-4 w-4 accent-indigo-500" />
                I agree to the mock terms and understand this portfolio form
                does not create a real account.
              </label>

              <button
                type="submit"
                className="auth-shine group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-950/50 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-indigo-700/30 active:translate-y-0 active:scale-[0.99]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Create workspace
                  <span className="transition duration-300 group-hover:translate-x-1">→</span>
                </span>
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-indigo-400 transition hover:text-indigo-300"
              >
                Sign in
              </Link>
            </p>
          </div>
        </section>

        <section className="auth-enter hidden flex-col justify-between border-l border-white/10 p-10 lg:flex xl:p-14">
          <Link href="/" className="group ml-auto flex w-fit items-center gap-3">
            <span>
              <span className="block text-right font-bold">Nexa Admin</span>
              <span className="block text-xs text-slate-500">SaaS command center</span>
            </span>
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-black shadow-lg shadow-indigo-950 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
              N
            </span>
          </Link>

          <div className="max-w-xl">
            <div className="auth-enter-delay inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 text-xs font-bold text-indigo-300">
              Modern SaaS foundation
            </div>
            <h2 className="auth-enter-delay mt-6 text-5xl font-bold leading-[1.05] tracking-tight xl:text-6xl">
              Launch with an interface
              <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                people love using.
              </span>
            </h2>
            <p className="auth-enter-delay mt-6 max-w-lg text-base leading-7 text-slate-400">
              Begin with polished frontend screens today, then connect your
              authentication and business logic when you are ready.
            </p>
          </div>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="auth-feature flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-sm font-semibold text-slate-300 transition duration-300 hover:translate-x-2 hover:border-indigo-400/30 hover:bg-white/[0.08] hover:text-white"
                style={{ animationDelay: `${500 + index * 120}ms` }}
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-400/10 text-xs text-emerald-300">
                  ✓
                </span>
                {benefit}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
