import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { BottomCtaSlim } from "@/components/home/BottomCta";
import { POSTS } from "@/content/posts";
import { SERVICES } from "@/content/services";
import { Search, ArrowRight, CalendarDays } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arama",
  description: "Sitede arama yapın: hizmetler, blog yazıları ve rehberler.",
  robots: { index: false, follow: true },
};

function normalize(s: string) {
  return s.toLocaleLowerCase("tr").replace(/[^a-z0-9çğıöşü ]/g, "").trim();
}

export default async function AramaPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const query = normalize(q);

  const postHits = query
    ? POSTS.filter((p) => {
        const haystack = normalize(`${p.title} ${p.excerpt} ${p.category}`);
        return haystack.includes(query);
      })
    : [];
  const serviceHits = query
    ? SERVICES.filter((s) => {
        const haystack = normalize(`${s.title} ${s.short} ${s.categoryLabel}`);
        return haystack.includes(query);
      })
    : [];

  return (
    <>
      <PageHero kicker="Arama" title={q ? `"${q}" için sonuçlar` : "Sitede arayın"} desc="Hizmet ve rehber yazılarını anında bulun." crumbs={[{ label: "Anasayfa", href: "/" }, { label: "Arama" }]} />
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6" aria-label="Arama sonuçları">
        <form action="/arama" method="get" className="glass flex items-center gap-2 rounded-2xl p-2">
          <Search className="ml-3 size-5 shrink-0 text-navy-800" />
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder="Hizmet veya konu arayın…"
            className="w-full bg-transparent px-1 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            aria-label="Arama"
          />
          <button className="shrink-0 rounded-xl bg-navy-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-900">Ara</button>
        </form>

        {!query && (
          <p className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
            Aramak için yukarıya bir kelime yazın. Örneğin: <strong>seo</strong>, <strong>danışmanlık</strong>, <strong>reklam</strong>.
          </p>
        )}

        {query && postHits.length === 0 && serviceHits.length === 0 && (
          <p className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
            &quot;{q}&quot; için sonuç bulunamadı. Farklı bir anahtar kelime deneyin.
          </p>
        )}

        {query && (postHits.length > 0 || serviceHits.length > 0) && (
          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-navy-200 bg-navy-50 px-4 py-2 text-sm font-medium text-navy-800" role="status">
            <Search className="size-4" />
            {serviceHits.length > 0 && `${serviceHits.length} hizmet`}
            {serviceHits.length > 0 && postHits.length > 0 && " • "}
            {postHits.length > 0 && `${postHits.length} yazı`} bulundu
          </p>
        )}
        {serviceHits.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-xl font-extrabold text-slate-900">Hizmetler</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceHits.map((s) => (
                <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="glass card-glow group rounded-2xl p-6">
                  <h3 className="flex items-center gap-1.5 font-display text-base font-bold text-slate-900">
                    {s.title} <ArrowRight className="size-4 opacity-0 transition group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.short}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {postHits.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-xl font-extrabold text-slate-900">Blog Yazıları</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {postHits.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="glass card-glow group rounded-2xl p-6">
                  <p className="flex items-center gap-1.5 text-xs text-slate-500">
                    <CalendarDays className="size-3.5" />
                    <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</time>
                  </p>
                  <h3 className="mt-3 font-display text-base font-bold leading-snug text-slate-900 group-hover:text-navy-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
      <BottomCtaSlim title="Aradığınız çözümü birlikte bulalım" />
    </>
  );
}
