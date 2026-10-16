import Link from "next/link";
import PostCover from "@/components/blog/PostCover";
import {
  Megaphone, Search, Share2, ShoppingBag, ArrowUpRight, ArrowRight,
  Quote, CalendarDays, CheckCircle2, TrendingUp, LineChart, Gauge,
  BarChart3, Users2, Timer, Sparkles,
} from "lucide-react";
import { METRICS, PROCESS, TESTIMONIALS, STORIES } from "@/lib/site";
import { POSTS } from "@/content/posts";

const BENTO = [
  {
    icon: Megaphone, span: "lg:col-span-4", accent: "text-navy-800",
    title: "Dijital Reklam Yönetimi", href: "/hizmetler/google-ads-reklam-yonetimi",
    desc: "Google Ads, Meta, TikTok, LinkedIn ve X'te performans pazarlama odaklı yönetim. Hedef kitlenize en etkili şekilde ulaşın.",
    tags: ["Google Ads", "Meta", "TikTok"],
  },
  {
    icon: Search, span: "lg:col-span-2", accent: "text-navy-800",
    title: "SEO & GEO", href: "/hizmetler/seo-hizmeti",
    desc: "Teknik SEO, içerik ve üretken motor optimizasyonuyla organik büyüme.",
    tags: ["Teknik SEO", "GEO"],
  },
  {
    icon: Share2, span: "lg:col-span-2", accent: "text-navy-800",
    title: "Sosyal Medya & UGC", href: "/hizmetler/sosyal-medya-yonetimi",
    desc: "Yönetim, raporlama ve influencer iş birlikleriyle etkileşimi artırın.",
    tags: ["Yönetim", "Influencer"],
  },
  {
    icon: ShoppingBag, span: "lg:col-span-4", accent: "text-navy-800",
    title: "Web & E-Ticaret", href: "/hizmetler/e-ticaret-sitesi-kurulum",
    desc: "E-ticaret kurulumu, kurumsal web tasarım, UI/UX ve e-ticaret büyüme çözümleri.",
    tags: ["ikas", "Web Tasarım", "UI/UX"],
  },
];

export function WhyUs() {
  const items = [
    { icon: LineChart, title: "Veriyle Büyüme", desc: "Tüm kararlar analitik ve raporlara dayanır; tahmin değil, ölçüm konuşur." },
    { icon: Timer, title: "4 Saatte Dönüş", desc: "Talep formu sonrası ortalama 4 saat içinde size ulaşırız." },
    { icon: BarChart3, title: "Şeffaf Raporlama", desc: "Harcamalar ve sonuçlar tek panelde, açık ve anlaşılır biçimde." },
    { icon: Gauge, title: "Hızlı Açılış", desc: "Optimize altyapı ile Lighthouse 90+ hedefli performans." },
    { icon: Users2, title: "Tek Elden Yönetim", desc: "Reklam, SEO ve e-ticaret tek ekip, tek strateji, tek rapor." },
    { icon: Sparkles, title: "Teknoloji Ortağı", desc: "Raporlama ve analiz araçlarımızla (CreaReport vb.) fark yaratıyoruz." },
  ];
  return (
    <section id="neden-biz" className="cv-auto mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-20" aria-label="Neden biz">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-navy-800"><span className="h-px w-8 bg-gold-500" aria-hidden="true" />Neden Biz</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Farkımız, sonuca olan bağlılığımız
          </h2>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f, i) => (
          <article key={f.title} className="glass card-glow group rounded-2xl p-6">
            <span className={`grid size-12 place-items-center rounded-xl transition ${i % 2 === 0 ? "bg-navy-800 text-white" : "bg-gold-500 text-navy-950"}`}>
              <f.icon className="size-6" strokeWidth={2} />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ServicesBento() {
  return (
    <section id="hizmetler" className="cv-auto mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-20" aria-label="Hizmetler">
      <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-navy-800"><span className="h-px w-8 bg-gold-500" aria-hidden="true" />Hizmetlerimiz</p>
      <h2 className="mt-2 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Büyümek için ihtiyacınız olan her şey
      </h2>
      <p className="mt-3 max-w-2xl text-slate-500">Altı uzmanlık, tek raporlama disiplini. Kısaca göz atın, detay için karta dokunun.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {BENTO.map((c, i) => (
          <Link key={c.title} href={c.href} className={`glass card-glow group rounded-2xl p-6 ${c.span}`} aria-label={c.title}>
            <span className={`grid size-12 place-items-center rounded-xl ${i % 2 === 0 ? "bg-navy-800" : "bg-gold-500"}`}>
              <c.icon className="size-6 text-white" strokeWidth={2} />
            </span>
            <h3 className="mt-4 flex items-center gap-1.5 font-display text-lg font-bold text-slate-900">
              {c.title}
              <ArrowUpRight className="size-4 opacity-0 transition group-hover:opacity-100" />
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span key={t} className="rounded-full border border-navy-100 bg-navy-50 px-2.5 py-1 text-[11px] font-medium text-navy-800">{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link href="/hizmetler" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-navy-900">
          Tüm hizmetleri listele <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

export function Roadmap() {
  return (
    <section id="surec" className="border-y border-slate-200 bg-white" aria-label="Çalışma sürecimiz">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-navy-800"><span className="h-px w-8 bg-gold-500" aria-hidden="true" />Nasıl Çalışıyoruz</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Her adımı titizlikle yönetiyoruz
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((s, i) => (
            <li key={s.no} className="glass card-glow relative overflow-hidden rounded-2xl p-6">
              <span className="absolute -right-4 -top-4 font-display text-7xl font-extrabold text-navy-100" aria-hidden="true">{s.no}</span>
              <span className={`relative grid size-11 place-items-center rounded-xl font-display text-lg font-extrabold text-white ${i % 2 === 0 ? "bg-navy-800" : "bg-gold-500 text-navy-950"}`}>{s.no}</span>
              <h3 className="relative mt-4 font-display text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Metrics() {
  return (
    <section id="metrikler" className="cv-auto mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20" aria-label="Başarı metrikleri">
      <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-6 py-12 sm:px-10">
        <div className="bg-grid-light absolute inset-0" aria-hidden="true" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/15 blur-[100px]" aria-hidden="true" />
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <div key={m.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <p className={`font-display text-5xl font-extrabold tabular-nums ${i % 2 === 0 ? "text-white" : "text-gold-400"}`}>{m.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-300">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StoriesPreview() {
  return (
    <section className="cv-auto mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:pb-20" aria-label="Başarı hikayeleri">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-navy-800"><span className="h-px w-8 bg-gold-500" aria-hidden="true" />Başarı Hikayeleri</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Sonuçlar konuşsun</h2>
        </div>
        <Link href="/basari-hikayeleri" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-navy-900">
          Tümü <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {STORIES.slice(0, 3).map((s) => (
          <article key={s.brand} className="glass card-glow overflow-hidden rounded-2xl p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-lg font-bold text-slate-900">{s.brand}</h3>
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gold-500"><TrendingUp className="size-4 text-navy-950" /></span>
            </div>
            <p className="mt-2 text-sm font-bold text-navy-800">{s.result}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span key={t} className="rounded-full border border-navy-100 bg-navy-50 px-2.5 py-1 text-[11px] text-navy-800">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-slate-900">Müşterilerimiz neler söyledi?</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="glass rounded-2xl p-6">
              <Quote className="size-6 text-gold-500" />
              <blockquote className="mt-3 text-sm leading-relaxed text-slate-600">“{t.text}”</blockquote>
              <figcaption className="mt-4">
                <p className="flex items-center gap-1.5 text-sm font-bold text-slate-900"><CheckCircle2 className="size-4 text-navy-800" />{t.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InsightsPreview() {
  return (
    <section id="insights" className="border-t border-slate-200 bg-white" aria-label="Blog ve içgörüler">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-navy-800"><span className="h-px w-8 bg-gold-500" aria-hidden="true" />Faydalı Bilgiler</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Blogdan öne çıkanlar</h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-navy-900">
            Tüm yazılar <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {POSTS.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="glass card-glow group overflow-hidden rounded-2xl">
              <div className="relative aspect-[16/9] overflow-hidden">
                <PostCover slug={p.slug} category={p.category} label={p.imageAlt} className="absolute inset-0 transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="flex items-center gap-1.5 text-xs text-slate-500">
                  <CalendarDays className="size-3.5" />
                  <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</time>
                </p>
                <h3 className="mt-3 font-display text-base font-bold leading-snug text-slate-900 group-hover:text-navy-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
