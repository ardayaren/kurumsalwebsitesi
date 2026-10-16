"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight, Zap, Search } from "lucide-react";
import { BRAND, NAV } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/85 shadow-[0_1px_12px_rgb(15_23_42/0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl flex-nowrap items-center gap-2 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${BRAND.name} anasayfa`}>
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-800">
            <Zap className="size-5 text-white" strokeWidth={2.5} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-extrabold tracking-tight text-slate-900">
              {BRAND.name}
            </span>
            <span className="hidden text-[10px] font-medium text-slate-500 sm:block">
              Dijital Pazarlama & E-Ticaret
            </span>
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0 xl:flex" aria-label="Ana menü">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative shrink-0">
                <button className="flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 text-[13.5px] font-medium tracking-wide text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                  {item.label}
                  <ChevronDown className="size-3.5 opacity-60 transition group-hover:rotate-180" />
                </button>
                <div className={`invisible absolute top-full w-72 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${item.alignRight ? "right-0" : "left-0"}`}>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
                    <Link
                      href={item.href}
                      className="block rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-wider text-navy-800 hover:bg-slate-100"
                    >
                      Tümü →
                    </Link>
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={`block rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 ${c.divider ? "mt-1 border-t border-slate-100 pt-3" : ""}`}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="shrink-0 whitespace-nowrap rounded-lg px-2.5 py-2 text-[13.5px] font-medium tracking-wide text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="ml-auto hidden shrink-0 items-center gap-1.5 xl:flex">
          <Link href="/arama" aria-label="Sitede ara" className="grid size-9 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-navy-300 hover:text-navy-800">
            <Search className="size-4" />
          </Link>
          <Link
            href="/randevu"
            className="whitespace-nowrap rounded-xl bg-gold-500 px-3.5 py-2.5 text-[13px] font-bold text-navy-950 shadow-md transition hover:bg-gold-400"
          >
            Randevu Al
          </Link>
          <Link
            href="/bize-ulasin"
            className="group flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-navy-800 px-3.5 py-2.5 text-[13px] font-semibold text-white shadow-md transition hover:bg-navy-900"
          >
            Teklif Al
            <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          className="ml-auto grid size-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-slate-100 text-slate-900 xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="nice-scroll max-h-[75vh] overflow-y-auto border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-xl xl:hidden" aria-label="Mobil menü">
          {NAV.map((item) => (
            <div key={item.label} className="border-b border-slate-100 last:border-0">
              {item.children ? (
                <>
                  <button
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    className="flex w-full items-center justify-between py-3 text-left text-[15px] font-semibold text-slate-900"
                    aria-expanded={expanded === item.label}
                  >
                    {item.label}
                    <ChevronDown className={`size-4 opacity-60 transition ${expanded === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {expanded === item.label && (
                    <div className="pb-3 pl-3">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-2 py-2 text-sm font-semibold text-navy-800 hover:bg-slate-100"
                      >
                        Tümü →
                      </Link>
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-2 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[15px] font-semibold text-slate-900"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-4 space-y-2">
            <Link href="/arama" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900">
              <Search className="size-4" /> Sitede Ara
            </Link>
            <a
              href={`tel:${BRAND.phone1.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900"
            >
              {BRAND.phone1}
            </a>
            <Link
              href="/randevu"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-4 py-3 text-sm font-bold text-navy-950"
            >
              Randevu Al
            </Link>
            <Link
              href="/bize-ulasin"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-navy-800 px-4 py-3 text-sm font-semibold text-white"
            >
              Teklif Al <ArrowRight className="size-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
