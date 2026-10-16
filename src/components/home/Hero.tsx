import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PlayCircle, BadgeCheck, TrendingUp, ShieldCheck, ArrowUpRight, LayoutGrid, Megaphone, Search, Target, Share2, Award, ShoppingBag, Briefcase, Store } from "lucide-react";
import { TICKER_BRANDS } from "@/lib/site";

const POPULAR = [
  { label: "Google Ads Yönetimi", desc: "Arama + Alışveriş", href: "/hizmetler/google-ads-reklam-yonetimi", icon: Megaphone, gold: false },
  { label: "SEO Hizmeti", desc: "Organik büyüme", href: "/hizmetler/seo-hizmeti", icon: Search, gold: true },
  { label: "Meta Reklam Yönetimi", desc: "Instagram + Facebook", href: "/hizmetler/meta-reklam-yonetimi", icon: Target, gold: false },
  { label: "Sosyal Medya Yönetimi", desc: "İçerik + topluluk", href: "/hizmetler/sosyal-medya-yonetimi", icon: Share2, gold: true },
  { label: "LinkedIn Reklamları", desc: "B2B lead üretimi", href: "/hizmetler/linkedin-reklam-yonetimi", icon: Briefcase, gold: false },
  { label: "Trendyol Danışmanlığı", desc: "Pazaryeri stratejisi", href: "/hizmetler/trendyol-danismanligi", icon: Store, gold: true },
  { label: "Marka Danışmanlığı", desc: "Strateji + konumlama", href: "/hizmetler/marka-danismanligi", icon: Award, gold: false },
  { label: "E-Ticaret Kurulum", desc: "Satışa hazır mağaza", href: "/hizmetler/e-ticaret-sitesi-kurulum", icon: ShoppingBag, gold: true },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16" aria-label="Tanıtım">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] max-w-[100vw] -translate-x-1/2 rounded-full bg-navy-200/50 blur-[120px] [transform:translateZ(0)]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-gold-300/40 blur-[100px] [transform:translateZ(0)]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-stretch gap-8 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:pt-20">
        <div className="reveal flex flex-col justify-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-300 bg-gold-100 px-3.5 py-1.5 text-xs font-semibold text-gold-700">
            <BadgeCheck className="size-3.5" /> ikas & Platform Partner Ajansı
          </p>
          <h1 className="mt-5 font-display text-[1.75rem] font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.9rem]">
            Satışa Dönüşen <span className="text-navy-800 underline decoration-gold-500 decoration-4 underline-offset-8">Dijital Pazarlama</span> & E-Ticaret Ajansı
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Reklam, SEO, sosyal medya ve e-ticaret kurulumunu tek çatı altında yönetiyoruz.
            Analizden raporlamaya her adımı titizlikle planlıyor, markanızı bir üst seviyeye taşıyoruz.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/bize-ulasin" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-lg shadow-gold-500/30 transition hover:bg-gold-400">
              Teknik Teklif Al <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link href="/basari-hikayeleri" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy-800 bg-white px-6 py-3.5 text-sm font-semibold text-navy-800 shadow-sm transition hover:bg-navy-800 hover:text-white">
              <PlayCircle className="size-4" /> Başarı Hikayeleri
            </Link>
          </div>
          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2 rounded-full border border-gold-200 bg-gold-100/60 px-3 py-1 text-slate-700"><TrendingUp className="size-4 text-gold-600" /><span><strong className="text-navy-900">%500+</strong> satış artışı</span></div>
            <div className="flex items-center gap-2 rounded-full border border-navy-100 bg-navy-50 px-3 py-1 text-slate-700"><BadgeCheck className="size-4 text-navy-800" /><span><strong className="text-navy-900">150+</strong> tamamlanan proje</span></div>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700"><ShieldCheck className="size-4 text-navy-800" /><span><strong className="text-navy-900">KVKK</strong> uyumlu süreç</span></div>
          </dl>
        </div>

        {/* Popüler hizmet kısayolları */}
        <div className="reveal flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(20,39,90,0.35)]" style={{ animationDelay: "0.15s" }} aria-label="Popüler hizmetler">
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 bg-navy-950 px-5 py-4">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
              <span className="grid size-6 place-items-center rounded-md bg-gold-500 text-navy-950"><LayoutGrid className="size-3.5" /></span>
              Popüler Hizmetler
            </p>
            <Link href="/hizmetler" className="group flex items-center gap-1 text-xs font-semibold text-gold-400 transition hover:text-gold-300">
              Tümü <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="grid flex-1 grid-cols-1 content-center gap-2.5 p-4 sm:grid-cols-2 sm:p-5">
            {POPULAR.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-3 transition hover:-translate-y-0.5 hover:border-navy-200 hover:bg-white hover:shadow-md"
              >
                <span className={`grid size-10 shrink-0 place-items-center rounded-lg transition ${s.gold ? "bg-gold-500 text-navy-950" : "bg-navy-800 text-white"}`}>
                  <s.icon className="size-5" strokeWidth={2} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-bold text-slate-900">{s.label}</span>
                  <span className="block truncate text-xs text-slate-500">{s.desc}</span>
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-slate-300 transition group-hover:text-navy-800" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Trust ticker */}
      <div className="relative border-y border-slate-200 bg-white py-4" aria-label="İş ortakları">
        <div className="overflow-hidden">
          <div className="animate-ticker flex w-max items-center gap-3 pr-3 [will-change:transform]">
            {[...TICKER_BRANDS, ...TICKER_BRANDS].map((b, i) => (
              <span key={i} className={`flex items-center gap-2.5 whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-medium ${i % 2 === 0 ? "border-gold-200 bg-gold-100/50 text-navy-900" : "border-slate-200 bg-slate-50 text-slate-600"}`} aria-hidden={i >= TICKER_BRANDS.length}>
                {b.icon && <Image src={b.icon} alt="" width={18} height={18} sizes="18px" decoding="async" loading="lazy" className="size-[18px] shrink-0" />}
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
