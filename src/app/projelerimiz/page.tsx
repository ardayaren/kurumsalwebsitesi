import PageHero from "@/components/layout/PageHero";
import { BottomCta } from "@/components/home/BottomCta";
import { Rocket } from "lucide-react";
import type { Metadata } from "next";
import { PROJECTS } from "@/lib/site";

export const metadata: Metadata = { title: "Projelerimiz", description: "Geliştirdiğimiz performans araçları: BOI, Creapanel, CreaReport, CreaAnalyse ve daha fazlası.", alternates: { canonical: "/projelerimiz" } };

export default function ProjectsPage() {
  return (
    <>
      <PageHero kicker="Ürünler" title="Dijital performansı artıran araçlar geliştiriyoruz" desc="Performans pazarlama odaklı, analiz ve otomasyon araçlarımızla işinizi büyütün." crumbs={[{ label: "Anasayfa", href: "/" }, { label: "Projelerimiz" }]} />
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6" aria-label="Projeler">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article key={p.name} className="glass card-glow rounded-2xl p-6">
              <Rocket className="size-6 text-navy-800" />
              <h2 className="mt-3 font-display text-lg font-bold text-slate-900">{p.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>
      <BottomCta
        title="Size özel bir araç mı lazım?"
        desc="Raporlama, analiz ve otomasyon ihtiyaçlarınız için özel yazılım da geliştiriyoruz. Konuşalım."
      />
    </>
  );
}
