import PageHero from "@/components/layout/PageHero";
import { BottomCtaSlim } from "@/components/home/BottomCta";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "KVKK Aydınlatma Metni", description: "Kişisel verilerin korunması hakkında aydınlatma metni.", alternates: { canonical: "/kvkk" } };

export default function KvkkPage() {
  return (
    <>
      <PageHero kicker="Yasal" title="KVKK Aydınlatma Metni" crumbs={[{ label: "Anasayfa", href: "/" }, { label: "KVKK" }]} />
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6" aria-label="KVKK metni">
        <article className="glass space-y-4 rounded-2xl p-6 text-[15px] leading-relaxed text-slate-300 sm:p-10">
          <h2 className="font-display text-lg font-bold text-slate-900">1. Veri Sorumlusu</h2>
          <p>Bu site üzerinden paylaşılan ad-soyad, telefon, e-posta ve mesaj içerikleri, teklif ve bilgilendirme süreçlerini yürütmek amacıyla işlenir.</p>
          <h2 className="font-display text-lg font-bold text-slate-900">2. İşleme Amaçları</h2>
          <p>Size ulaşmak, hizmet teklifi hazırlamak ve yasal yükümlülükleri yerine getirmek. Verileriniz açık rızanız olmadan üçüncü kişilerle paylaşılmaz.</p>
          <h2 className="font-display text-lg font-bold text-slate-900">3. Haklarınız</h2>
          <p>6698 sayılı Kanun&apos;un 11. maddesi kapsamındaki haklarınızı (erişim, düzeltme, silme vb.) info@medya360.com adresine yazarak kullanabilirsiniz.</p>
        </article>
      </section>
      <BottomCtaSlim title="Sorunuz mu var? Bize ulaşın" />
    </>
  );
}
