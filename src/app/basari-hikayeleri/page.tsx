import PageHero from "@/components/layout/PageHero";
import { BottomCta } from "@/components/home/BottomCta";
import { TrendingUp } from "lucide-react";
import type { Metadata } from "next";
import { STORIES } from "@/lib/site";

export const metadata: Metadata = { title: "Başarı Hikayeleri", description: "SEO, reklam ve sosyal medya vakalarımız: %500+ satış artışı, %356 organik trafik artışı ve daha fazlası.", alternates: { canonical: "/basari-hikayeleri" } };

export default function StoriesPage() {
  return (
    <>
      <PageHero kicker="Referanslar" title="Stratejinin sonuca dönüştüğü hikayeler" desc="Markaların dijitalde elde ettiği dönüşüm ve büyümeye nasıl katkıda bulunduğumuzu keşfedin." crumbs={[{ label: "Anasayfa", href: "/" }, { label: "Başarı Hikayeleri" }]} />
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6" aria-label="Başarı hikayeleri listesi">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s) => (
            <article key={s.brand} className="glass card-glow rounded-2xl p-6">
              <TrendingUp className="size-6 text-navy-800" />
              <h2 className="mt-3 font-display text-lg font-bold text-slate-900">{s.brand}</h2>
              <p className="mt-1 text-sm font-bold text-navy-800">{s.result}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] text-slate-600">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>
      <BottomCta
        title="Sıradaki vaka sizinki olabilir"
        desc="Benzer hedefleri olan markalarla neler başardığımızı gördünüz. Ücretsiz ön analiz için formu doldurun."
      />
    </>
  );
}
