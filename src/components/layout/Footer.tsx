import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Zap } from "lucide-react";
import { BRAND, NAV } from "@/lib/site";

const QUICK = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İş Ortaklarımız", href: "/is-ortaklarimiz" },
  { label: "Kariyer", href: "/kariyer" },
  { label: "Blog", href: "/blog" },
  { label: "Başarı Hikayeleri", href: "/basari-hikayeleri" },
];

const PACKAGES = [
  { label: "SEO Paketi", href: "/hizmetler/seo-hizmeti" },
  { label: "Dijital Reklam Paketleri", href: "/hizmetler/google-ads-reklam-yonetimi" },
  { label: "Sosyal Medya Paketleri", href: "/hizmetler/sosyal-medya-yonetimi" },
  { label: "E-Ticaret Kurulum", href: "/hizmetler/e-ticaret-sitesi-kurulum" },
  { label: "Marka Danışmanlığı", href: "/hizmetler/marka-danismanligi" },
  { label: "Proje Planlama", href: "/hizmetler/proje-planlama" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-11 place-items-center rounded-xl bg-navy-800">
              <Zap className="size-5 text-white" strokeWidth={2.5} />
            </span>
            <span className="font-display text-base font-extrabold tracking-tight text-slate-900">{BRAND.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">{BRAND.tagline}</p>
          <div className="mt-5 space-y-2.5 text-sm text-slate-600">
            <p className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-navy-800" />{BRAND.address}</p>
            <p className="flex items-center gap-2"><Clock className="size-4 shrink-0 text-navy-800" />{BRAND.hours}</p>
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-slate-900"><Mail className="size-4 shrink-0 text-navy-800" />{BRAND.email}</a>
            <a href="tel:+908503050000" className="flex items-center gap-2 hover:text-slate-900"><Phone className="size-4 shrink-0 text-navy-800" />{BRAND.phone1}</a>
            <p className="flex items-center gap-2"><Phone className="size-4 shrink-0 text-navy-800" />{BRAND.phone2}</p>
          </div>
        </div>

        <nav aria-label="Hızlı erişim">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Hızlı Erişim</h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK.map((l) => (
              <li key={l.href}><Link href={l.href} className="text-sm text-slate-500 transition hover:text-slate-900">{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Hizmet paketleri">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Hizmet Paketleri</h3>
          <ul className="mt-4 space-y-2.5">
            {PACKAGES.map((l) => (
              <li key={l.href}><Link href={l.href} className="text-sm text-slate-500 transition hover:text-slate-900">{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Hizmet Kategorileri</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV.filter((n) => n.children && ["Reklam", "SEO", "Sosyal Medya", "Web & E-Ticaret", "Danışmanlık"].includes(n.label)).map((n) => (
              <li key={n.label}><Link href={n.href} className="text-sm text-slate-500 transition hover:text-slate-900">{n.label}</Link></li>
            ))}
            <li><Link href="/projelerimiz" className="text-sm text-slate-500 transition hover:text-slate-900">Projelerimiz</Link></li>
            <li><Link href="/bize-ulasin" className="text-sm text-slate-500 transition hover:text-slate-900">Bize Ulaşın</Link></li>
          </ul>
          <Link href="/bize-ulasin" className="mt-6 inline-flex items-center gap-2 rounded-xl border border-navy-200 bg-navy-50 px-4 py-2.5 text-sm font-semibold text-navy-800 transition hover:bg-navy-100">
            Ücretsiz Ön Analiz Al
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6">
          <p>© 2026 {BRAND.name}. Tüm hakları saklıdır.</p>
          <p><Link href="/kvkk" className="transition hover:text-slate-700">KVKK Aydınlatma Metni</Link> • Verileriniz korunur.</p>
        </div>
      </div>
    </footer>
  );
}
