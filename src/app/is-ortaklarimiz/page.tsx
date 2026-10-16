import PageHero from "@/components/layout/PageHero";
import { BottomCta } from "@/components/home/BottomCta";
import Image from "next/image";
import { Handshake } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "İş Ortaklarımız", description: "Teknoloji ve platform iş ortaklıklarımız: Google, Meta, ikas, LinkedIn, TikTok ve daha fazlası.", alternates: { canonical: "/is-ortaklarimiz" } };

const PARTNERS = [
  { name: "Google Partner", desc: "Ads, Analytics 4, Merchant Center ve Search Console yetkinliği.", icon: "/brands/google.svg" },
  { name: "Meta Business Partner", desc: "Instagram & Facebook reklam ve CAPI kurulum uzmanlığı.", icon: "/brands/meta.svg" },
  { name: "LinkedIn Marketing", desc: "B2B lead üretimi ve karar vericilere doğrudan erişim.", icon: "/brands/linkedin.svg" },
  { name: "ikas Partner", desc: "Türkiye odaklı e-ticaret kurulum ve büyüme desteği." },
  { name: "TikTok Marketing", desc: "Spark Ads, Shop ve UGC kreatif stratejileri.", icon: "/brands/tiktok.svg" },
  { name: "E-Ticaret Ekosistemi", desc: "Pazaryeri danışmanlığı, ürün SEO ve performans yönetimi." },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero kicker="Kurumsal" title="Güçlü ekosistem, güçlü sonuçlar" desc="Resmi partnerliklerimiz sayesinde platformların en güncel özelliklerini mağazanıza ilk entegre edenlerden oluyoruz." crumbs={[{ label: "Anasayfa", href: "/" }, { label: "İş Ortaklarımız" }]} />
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6" aria-label="İş ortakları">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((p) => (
            <article key={p.name} className="glass card-glow rounded-2xl p-6">
              {"icon" in p && p.icon ? (
                <Image src={p.icon} alt={`${p.name} logosu`} width={40} height={40} className="size-10 object-contain" loading="lazy" />
              ) : (
                <Handshake className="size-7 text-navy-800" strokeWidth={1.8} />
              )}
              <h2 className="mt-4 font-display text-[17px] font-bold text-slate-900">{p.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <h2 className="font-display text-xl font-extrabold text-slate-900">Bize güvenen markalardan bazıları</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
            Farklı sektörlerden markalarla uzun soluklu çalışıyoruz. Referanslarımızın tamamını Başarı Hikayeleri sayfasında inceleyebilirsiniz.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {["Hayfene", "Paşahan", "Glimo (Nobel İlaç)", "Nesli Doğal", "Frances Coffee", "Askı Dünyası", "Oto Bakım Paketi", "Base of Influencer"].map((b) => (
              <li key={b} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">{b}</li>
            ))}
          </ul>
        </div>
      </section>
      <BottomCta
        title="Bir sonraki başarı hikayesi sizinki olsun"
        desc="Sektörünüzde nelerin işe yaradığını zaten biliyoruz. Ücretsiz ön analizle başlayalım."
      />
    </>
  );
}
