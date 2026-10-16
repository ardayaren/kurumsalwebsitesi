import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin, Clock, CalendarCheck } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { BRAND } from "@/lib/site";

export const metadata: Metadata = { title: "Bize Ulaşın", description: "Teklif veya sorularınız için bize ulaşın: telefon, e-posta ve iletişim formu.", alternates: { canonical: "/bize-ulasin" } };

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="İletişim" title="Talep veya öneriniz için bize ulaşın" desc="Formu doldurun, ekibimiz 1 iş günü içinde sizi arasın." crumbs={[{ label: "Anasayfa", href: "/" }, { label: "Bize Ulaşın" }]} />
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6" aria-label="İletişim bilgileri ve form">
        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          <address className="h-fit overflow-hidden rounded-2xl border border-slate-200 bg-white text-sm not-italic leading-relaxed text-slate-600 shadow-sm">
            <div className="border-b border-navy-100 bg-navy-950 px-6 py-4 sm:px-8">
              <h2 className="font-display text-lg font-bold text-white">İletişim bilgileri</h2>
            </div>
            <div className="space-y-3 p-6 sm:p-8">
              <p className="flex items-start gap-2.5"><span className="grid size-8 shrink-0 place-items-center rounded-lg bg-gold-500 text-navy-950"><MapPin className="size-4" /></span><span><strong className="text-slate-900">Antalya (Merkez):</strong><br />{BRAND.address}</span></p>
              <p className="flex items-start gap-2.5"><span className="grid size-8 shrink-0 place-items-center rounded-lg bg-gold-500 text-navy-950"><MapPin className="size-4" /></span><span><strong className="text-slate-900">İstanbul & Londra:</strong> Satış ofisi</span></p>
              <p className="flex items-center gap-2.5"><span className="grid size-8 shrink-0 place-items-center rounded-lg bg-navy-800 text-white"><Phone className="size-4" /></span><a href="tel:+908503050000" className="hover:text-slate-900">{BRAND.phone1}</a></p>
              <p className="flex items-center gap-2.5"><span className="grid size-8 shrink-0 place-items-center rounded-lg bg-navy-800 text-white"><Phone className="size-4" /></span>{BRAND.phone2}</p>
              <p className="flex items-center gap-2.5"><span className="grid size-8 shrink-0 place-items-center rounded-lg bg-navy-800 text-white"><Mail className="size-4" /></span><a href={`mailto:${BRAND.email}`} className="hover:text-slate-900">{BRAND.email}</a></p>
              <p className="flex items-center gap-2.5"><span className="grid size-8 shrink-0 place-items-center rounded-lg bg-navy-800 text-white"><Clock className="size-4" /></span>{BRAND.hours}</p>
              <Link href="/randevu" className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-4 py-3 text-sm font-bold text-navy-950 transition hover:bg-gold-400">
                <CalendarCheck className="size-4" /> Randevu Al
              </Link>
            </div>
          </address>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
