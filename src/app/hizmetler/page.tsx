import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { BottomCta } from "@/components/home/BottomCta";
import { SERVICES, SERVICE_CATEGORIES } from "@/content/services";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Hizmetlerimiz", description: "Reklam, SEO, sosyal medya, web tasarım ve danışmanlık: tüm hizmet paketlerimiz.", alternates: { canonical: "/hizmetler" } };

export const revalidate = 3600;

export default function ServicesIndex() {
  return (
    <>
      <PageHero kicker="Hizmetler" title="Büyümenizi hızlandıran tüm hizmetler" desc="Reklamdan SEO'ya, e-ticaret kurulumundan pazaryeri yönetimine kadar uçtan uca hizmet yelpazesi." crumbs={[{ label: "Anasayfa", href: "/" }, { label: "Hizmetler" }]} />
      <div className="mx-auto max-w-7xl space-y-12 px-4 pb-20 sm:px-6">
        {SERVICE_CATEGORIES.map((cat, i) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-24" aria-label={cat.label}>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-navy-800">
              <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
              {String(i + 1).padStart(2, "0")} — {SERVICES.filter((s) => s.category === cat.id).length} Hizmet
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-slate-900">{cat.label}</h2>
            <p className="mt-1 text-sm text-slate-500">{cat.desc}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.filter((s) => s.category === cat.id).map((s) => (
                <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="glass card-glow group rounded-2xl p-6">
                  <h3 className="flex items-center gap-1.5 font-display text-base font-bold text-slate-900">
                    {s.title} <ArrowUpRight className="size-4 opacity-0 transition group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.short}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
      <BottomCta
        title="Hangi paketin size uygun olduğunu birlikte bulalım"
        desc="Sektörünüzü ve hedefinizi anlatın; gereksiz kalemler olmadan, ihtiyacınıza özel bir teklif hazırlayalım."
      />
    </>
  );
}
