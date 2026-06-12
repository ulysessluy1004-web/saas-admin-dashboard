"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";

const navItems = [
  { label: "Overview", href: "/", icon: "grid" },
  { label: "Customers", href: "/customers", icon: "users" },
  { label: "Analytics", href: "/analytics", icon: "chart" },
  { label: "Billing", href: "/billing", icon: "wallet" },
  { label: "Settings", href: "/settings", icon: "settings" },
];

const initialNotifications = [
  {
    id: 1,
    title: "Invoice paid",
    message: "BrightLabs paid invoice #INV-1048 for $4,200.",
    time: "4 min ago",
    unread: true,
  },
  {
    id: 2,
    title: "New customer",
    message: "Maya Johnson joined the Business plan.",
    time: "22 min ago",
    unread: true,
  },
  {
    id: 3,
    title: "Trial ending soon",
    message: "Northstar Finance trial ends in 2 days.",
    time: "1 hour ago",
    unread: false,
  },
];

const iconPaths: Record<string, ReactNode> = {
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V9" />
      <path d="M10 19V5" />
      <path d="M16 19v-7" />
      <path d="M22 19H2" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  wallet: (
    <>
      <rect x="2" y="5" width="20" height="15" rx="2" />
      <path d="M16 13h6" />
      <path d="M2 9h20" />
    </>
  ),
  file: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3-1.8 5.2L5 10l5.2 1.8L12 17l1.8-5.2L19 10l-5.2-1.8L12 3Z" />
      <path d="m5 16-.8 2.2L2 19l2.2.8L5 22l.8-2.2L8 19l-2.2-.8L5 16Z" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.08A1.7 1.7 0 0 0 9 19.37a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15 1.7 1.7 0 0 0 3.08 14H3v-4h.08A1.7 1.7 0 0 0 4.63 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63h.01A1.7 1.7 0 0 0 10 3.08V3h4v.08A1.7 1.7 0 0 0 15 4.63a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9v.01A1.7 1.7 0 0 0 20.92 10H21v4h-.08A1.7 1.7 0 0 0 19.4 15Z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </>
  ),
  userPlus: (
    <>
      <path d="M15 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8" cy="7" r="4" />
      <path d="M19 8v6" />
      <path d="M22 11h-6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  arrowUp: (
    <>
      <path d="m18 15-6-6-6 6" />
      <path d="M12 9v10" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}

function SidebarLink({
  item,
  activePath,
}: {
  item: { label: string; href: string; icon: string };
  activePath: string;
}) {
  const isActive = item.href === activePath;

  return (
    <Link
      href={item.href}
      className={`group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-semibold transition duration-200 ${
        isActive
          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100"
          : "text-slate-500 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-slate-950"
      }`}
    >
      <span
        className={`grid h-8 w-8 place-items-center rounded-xl transition ${
          isActive
            ? "bg-white/15"
            : "bg-white text-slate-400 group-hover:text-indigo-600"
        }`}
      >
        <Icon name={item.icon} className="h-4 w-4" />
      </span>
      {item.label}
    </Link>
  );
}

function Sidebar({ activePath }: { activePath: string }) {
  return (
    <aside className="dashboard-slide-left fixed inset-y-0 left-0 z-30 hidden w-72 flex-col border-r border-slate-200/80 bg-white/95 shadow-sm backdrop-blur lg:flex">
      <div className="flex h-24 items-center gap-3 px-6">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
          <Icon name="spark" />
        </div>
        <div>
          <p className="text-lg font-bold tracking-tight text-slate-950">
            Nexa Admin
          </p>
          <p className="text-xs font-medium text-slate-400">
            SaaS command center
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-2 px-4 py-4">
        <p className="px-3 pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
          Workspace
        </p>
        {navItems.map((item) => (
          <SidebarLink key={item.href} item={item} activePath={activePath} />
        ))}
      </nav>

      <div className="m-5 rounded-3xl bg-slate-950 p-5 text-white shadow-xl shadow-slate-200">
        <p className="text-sm font-semibold">Scale plan</p>
        <p className="mt-2 text-xs leading-5 text-slate-400">
          You have used 72% of your monthly workspace capacity.
        </p>
        <div className="mt-4 h-2 rounded-full bg-white/10">
          <div className="h-2 w-[72%] rounded-full bg-indigo-400" />
        </div>
      </div>
    </aside>
  );
}

function MobileNavigation({ activePath }: { activePath: string }) {
  return (
    <nav className="flex gap-2 overflow-x-auto px-4 pb-4 sm:px-6 lg:hidden">
      {navItems.map((item) => {
        const isActive = item.href === activePath;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100"
                : "bg-white text-slate-500 ring-1 ring-slate-200 hover:bg-slate-50"
            }`}
          >
            <Icon name={item.icon} className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function Topbar({ activePath }: { activePath: string }) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const unreadCount = notifications.filter((item) => item.unread).length;

  function markAllRead() {
    setNotifications((current) =>
      current.map((item) => ({ ...item, unread: false })),
    );
  }

  function clearNotifications() {
    setNotifications([]);
  }

  return (
    <header className="dashboard-drop sticky top-0 z-20 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur lg:ml-72">
      <div className="flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-slate-600 ring-1 ring-slate-200">
            <Icon name="menu" className="h-5 w-5" />
          </div>
          <div>
            <p className="font-bold text-slate-950">Nexa</p>
            <p className="text-xs text-slate-400">Dashboard</p>
          </div>
        </div>

        <label className="relative hidden max-w-md flex-1 md:block">
          <Icon
            name="search"
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          />
          <input
            className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
            placeholder="Search customers, invoices, reports..."
          />
        </label>

        <div className="ml-auto flex items-center gap-3">
          <div className="relative">
            <button
              type="button"
              aria-label="Notifications"
              aria-expanded={isNotificationsOpen}
              onClick={() => setIsNotificationsOpen((open) => !open)}
              className="relative grid h-11 w-11 place-items-center rounded-2xl bg-white text-slate-500 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:text-slate-950 hover:shadow-lg hover:shadow-slate-200 active:translate-y-0"
            >
              <Icon name="bell" className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute right-2 top-2 grid h-5 min-w-5 place-items-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white ring-2 ring-white">
                  {unreadCount}
                </span>
              )}
            </button>

            {isNotificationsOpen && (
              <div className="dashboard-pop absolute right-0 top-14 z-50 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/60">
                <div className="flex items-center justify-between border-b border-slate-100 p-4">
                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      Notifications
                    </p>
                    <p className="text-xs text-slate-400">
                      {unreadCount} unread update{unreadCount === 1 ? "" : "s"}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsNotificationsOpen(false)}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-500 transition hover:bg-slate-200 hover:text-slate-950"
                  >
                    Close
                  </button>
                </div>

                <div className="max-h-80 overflow-y-auto p-2">
                  {notifications.length === 0 ? (
                    <div className="p-8 text-center">
                      <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                        <Icon name="bell" className="h-5 w-5" />
                      </div>
                      <p className="mt-3 text-sm font-bold text-slate-950">
                        All clear
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        No mock notifications right now.
                      </p>
                    </div>
                  ) : (
                    notifications.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          setNotifications((current) =>
                            current.map((notification) =>
                              notification.id === item.id
                                ? { ...notification, unread: false }
                                : notification,
                            ),
                          )
                        }
                        className={`group w-full rounded-2xl p-3 text-left transition duration-300 hover:bg-indigo-50 ${
                          item.unread ? "bg-slate-50" : "bg-white"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`mt-1 h-2.5 w-2.5 rounded-full transition ${
                              item.unread
                                ? "bg-indigo-600"
                                : "bg-slate-300 group-hover:bg-indigo-300"
                            }`}
                          />
                          <span className="min-w-0">
                            <span className="block text-sm font-bold text-slate-950">
                              {item.title}
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-slate-500">
                              {item.message}
                            </span>
                            <span className="mt-1 block text-[11px] font-semibold text-slate-400">
                              {item.time}
                            </span>
                          </span>
                        </div>
                      </button>
                    ))
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 border-t border-slate-100 p-3">
                  <button
                    type="button"
                    onClick={markAllRead}
                    className="rounded-2xl bg-indigo-600 px-3 py-2.5 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-indigo-700"
                  >
                    Mark all read
                  </button>
                  <button
                    type="button"
                    onClick={clearNotifications}
                    className="rounded-2xl bg-slate-100 px-3 py-2.5 text-xs font-bold text-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-200 hover:text-slate-950"
                  >
                    Clear all
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="hidden h-9 w-px bg-slate-200 sm:block" />

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/login"
              className="rounded-2xl bg-white px-4 py-2.5 text-sm font-bold text-slate-600 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 hover:shadow-md"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-2xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-indigo-200"
            >
              Sign up
            </Link>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white p-1.5 pr-4 ring-1 ring-slate-200">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-bold text-white">
              AM
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-900">Alex Morgan</p>
              <p className="text-xs text-slate-400">Administrator</p>
            </div>
          </div>
        </div>
      </div>
      <MobileNavigation activePath={activePath} />
    </header>
  );
}

export function DashboardShell({
  activePath,
  children,
}: {
  activePath: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-600">
      <Sidebar activePath={activePath} />
      <Topbar activePath={activePath} />
      <main className="dashboard-enter px-4 py-6 sm:px-6 lg:ml-72 lg:px-8 lg:py-8">
        {children}
      </main>
    </div>
  );
}
