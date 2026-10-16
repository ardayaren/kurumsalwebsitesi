import Link from "next/link";
import dynamic from "next/dynamic";
import { Phone, Mail, ArrowRight, CheckCircle2, CalendarCheck } from "lucide-react";
import { BRAND } from "@/lib/site";

// Form ağır bir client bundle (useActionState + validasyon):
// sayfa altı CTA'ya kaydırılmadan JS'i indirmesin.
const ContactForm = dynamic(() => import("@/components/forms/ContactForm"), {
  loading: () => <div className="h-96 animate-pulse rounded-2xl border border-slate-200 bg-white" aria-hidden="true" />,
});

const TEL = `tel:${BRAND.phone1.replace(/\s/g, "")}`;

/** Tam iletişim bloğu: pitch + hızlı iletişim + form. Sayfa altlarında kullanılır. */
export function BottomCta({
  title = "Projeniz için net bir yol haritası çıkaralım",
  desc = "Formu doldurun, 1 iş günü içinde sizi arayalım. Ön analiz ve fiyatlandırma tamamen ücretsizdir.",
}: {
  title?: string;
  desc?: string;
}) {
  return (
    <section className="border-t border-slate-200 bg-white" aria-label="İletişim">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <div className="lg:py-4">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-navy-800">
            <span className="h-px w-8 bg-gold-500" aria-hidden="true" /> Ücretsiz Ön Analiz
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-slate-600">{desc}</p>
          <ul className="mt-6 space-y-3">
            {["30 dakikalık ücretsiz ön görüşme", "1 iş günü içinde dönüş garantisi", "Kalem kalem, şeffaf fiyatlandırma"].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-[15px] font-medium text-slate-700">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-navy-800" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/randevu" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 py-3 text-sm font-bold text-navy-950 shadow-lg shadow-gold-500/30 transition hover:bg-gold-400">
              <CalendarCheck className="size-4" /> Randevu Al
            </Link>
            <a href={TEL} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-50">
              <Phone className="size-4 text-navy-800" /> {BRAND.phone1}
            </a>
            <a href={`mailto:${BRAND.email}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-50">
              <Mail className="size-4 text-navy-800" /> {BRAND.email}
            </a>
          </div>
        </div>
        <div>
          <ContactForm compact />
        </div>
      </div>
    </section>
  );
}

/** İnce bant CTA: form zaten sayfada varsa kullanılır. Koyu zeminle ritim katar. */
export function BottomCtaSlim({
  title = "Bu hizmet için hemen fiyat alın",
}: {
  title?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6" aria-label="Hızlı iletişim">
      <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-6 py-10 sm:px-10 lg:px-14">
        <div className="bg-grid-light absolute inset-0" aria-hidden="true" />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/20 blur-[90px]" aria-hidden="true" />
        <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="max-w-xl font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {title}
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-300">
              {BRAND.workingHoursNote} {BRAND.phone1} — dilerseniz formu doldurun, biz sizi arayalım.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row">
            <Link href="/randevu" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gold-500 px-5 py-3 text-sm font-bold text-navy-950 transition hover:bg-gold-400">
              <CalendarCheck className="size-4" /> Randevu Al
            </Link>
            <a href={TEL} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              <Phone className="size-4 text-navy-800" /> Hemen Ara
            </a>
            <Link href="/bize-ulasin" className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Teklif Formu <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
