import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  kicker,
  title,
  desc,
  crumbs,
}: {
  kicker: string;
  title: string;
  desc?: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden pt-16" aria-label="Sayfa başlığı">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute -top-24 left-1/3 h-72 w-[36rem] rounded-full bg-navy-200/50 blur-[110px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:pt-16">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {c.href ? <Link href={c.href} className="hover:text-slate-900">{c.label}</Link> : <span className="text-slate-700">{c.label}</span>}
              {i < crumbs.length - 1 && <ChevronRight className="size-3 opacity-50" />}
            </span>
          ))}
        </nav>
        <p className="mt-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-navy-800">
          <span className="h-px w-8 bg-gold-500" aria-hidden="true" />{kicker}</p>
        <h1 className="mt-2 max-w-3xl font-display text-[1.6rem] font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.4rem] lg:leading-[1.1]">
          {title}
        </h1>
        {desc && <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">{desc}</p>}
      </div>
    </section>
  );
}
