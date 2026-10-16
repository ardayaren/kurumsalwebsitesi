import PageHero from "@/components/layout/PageHero";
import { Metrics } from "@/components/home/Sections";
import { BottomCta } from "@/components/home/BottomCta";
import { Target, Eye, Users, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Hakkımızda", description: "Performans odaklı dijital pazarlama ve e-ticaret ajansı: misyonumuz, değerlerimiz ve çalışma disiplinimiz.", alternates: { canonical: "/hakkimizda" } };

const VALUES = [
  { icon: Target, title: "Sonuç Odaklılık", desc: "Vanity metric değil; satış, lead ve kârlılık konuşur." },
  { icon: Eye, title: "Şeffaflık", desc: "Harcama, rapor ve kararlar her zaman açık panelde." },
  { icon: Users, title: "Müşteri Ortaklığı", desc: "Ajans değil, büyüme ekibinizin bir parçası gibi çalışırız." },
  { icon: Award, title: "Uzmanlık", desc: "Reklam, SEO, yazılım ve pazaryeri ekipleri tek çatıda." },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero kicker="Kurumsal" title="Dijitalde büyümek isteyen markaların teknik ortağı" desc="Reklam, SEO, sosyal medya, yazılım ve e-ticaret ekiplerini tek raporlama disiplini altında topluyoruz." crumbs={[{ label: "Anasayfa", href: "/" }, { label: "Hakkımızda" }]} />
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6" aria-label="Hakkımızda içerik">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <article key={v.title} className="glass card-glow rounded-2xl p-6">
              <v.icon className="size-7 text-navy-800" strokeWidth={1.8} />
              <h2 className="mt-4 font-display text-lg font-bold text-slate-900">{v.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{v.desc}</p>
            </article>
          ))}
        </div>
        <article className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-navy-100 bg-navy-950 px-6 py-5 sm:px-10">
            <h2 className="font-display text-2xl font-extrabold text-white">Neden biz?</h2>
          </div>
          <div className="space-y-4 p-6 text-[15px] leading-relaxed text-slate-600 sm:p-10">
            <p>Türkiye&apos;nin önde gelen performans ajanslarından biri olma hedefiyle; deneyimimizi yenilikçi yaklaşım ve küresel vizyonla birleştiriyoruz. ikas ve platform partnerliklerimiz, e-ticaret markalarına kurulumdan global satışa uzanan tam destek sunmamızı sağlıyor.</p>
            <p>Veri odaklı yaklaşımla daha nitelikli müşteri datası topluyor, hedef kitle analizi ve dönüşüm optimizasyonuyla reklam bütçenizden maksimum ROI hedefliyoruz.</p>
          </div>
        </article>
      </section>
      <Metrics />
      <BottomCta
        title="Ekibimizle tanışmaya hazır mısınız?"
        desc="Markanıza özel yol haritasını birlikte çıkaralım. İlk görüşme ücretsizdir."
      />
    </>
  );
}
