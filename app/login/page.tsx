import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-slate-950 px-4 py-10 text-white lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
      <section className="hidden flex-col justify-between rounded-[2rem] bg-indigo-600 p-8 shadow-2xl shadow-indigo-950/30 lg:flex">
        <div>
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-xl font-black">
            N
          </div>
          <h1 className="mt-10 max-w-xl text-5xl font-bold tracking-tight">
            Welcome back to your SaaS command center.
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-6 text-indigo-100">
            Sign in to review revenue, customers, billing, and analytics from
            one polished admin dashboard.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {["128k MRR", "3.8k users", "98% uptime"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
              <p className="text-sm font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-md flex-col justify-center lg:px-10">
        <Link href="/" className="mb-8 text-sm font-semibold text-indigo-300">
          Back to dashboard
        </Link>

        <div className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-2xl shadow-black/20 sm:p-8">
          <p className="text-sm font-semibold text-indigo-600">Login</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Sign in to Nexa Admin
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            This is a frontend-only mock login form. No real authentication is
            connected yet.
          </p>

          <form className="mt-8 space-y-5">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Email address</span>
              <input
                type="email"
                placeholder="alex@nexa.example"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            New to Nexa?{" "}
            <Link href="/signup" className="font-bold text-indigo-600 hover:text-indigo-700">
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
