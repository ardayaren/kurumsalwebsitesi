"use client";

import Link from "next/link";
import { useState } from "react";
import { LayoutDashboard, Inbox, Briefcase, CalendarCheck, LogOut, Menu, X, Zap } from "lucide-react";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/talepler", label: "Talepler", icon: Inbox },
  { href: "/admin/randevular", label: "Randevular", icon: CalendarCheck },
  { href: "/admin/basvurular", label: "Kariyer Başvuruları", icon: Briefcase },
];

export default function Sidebar({ pendingCount }: { pendingCount: number }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const nav = (
    <nav className="space-y-1 p-4" aria-label="Admin menüsü">
      {LINKS.map((l) => {
        const active = pathname === l.href;
        return (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${active ? "bg-navy-50 text-navy-800" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"}`}>
            <l.icon className="size-4.5" />
            {l.label}
            {l.href === "/admin/talepler" && pendingCount > 0 && (
              <span className="ml-auto rounded-full bg-navy-800 px-2 py-0.5 text-[11px] font-bold text-white">{pendingCount}</span>
            )}
          </Link>
        );
      })}
      <form action="/admin/cikis" method="POST" className="pt-2">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:bg-red-50 hover:text-red-600">
          <LogOut className="size-4.5" /> Çıkış
        </button>
      </form>
    </nav>
  );

  return (
    <>
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur-xl lg:hidden">
        <span className="flex items-center gap-2 font-display text-base font-extrabold text-slate-900">
          <span className="grid size-8 place-items-center rounded-lg bg-navy-800"><Zap className="size-4 text-white" /></span>
          Admin
        </span>
        <button onClick={() => setOpen(!open)} aria-label="Admin menü" className="grid size-10 place-items-center rounded-xl border border-slate-200 bg-slate-100 text-slate-900">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && <div className="border-b border-slate-200 bg-white lg:hidden">{nav}</div>}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-slate-200 bg-white lg:flex">
        <div className="flex items-center gap-2 px-5 pb-2 pt-6">
          <span className="grid size-9 place-items-center rounded-xl bg-navy-800"><Zap className="size-4.5 text-white" /></span>
          <span className="font-display text-lg font-extrabold text-slate-900">Admin Panel</span>
        </div>
        {nav}
      </aside>
    </>
  );
}
