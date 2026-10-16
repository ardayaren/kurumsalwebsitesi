import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { HOME_FAQ } from "@/lib/site";
import type { Metadata } from "next";

// Ekranın altında kalan bölümler streaming ile geç yüklenir:
// ilk HTML/JS küçülür, LCP ve TTI hızlanır. Hero kritik olduğu için senkron kalır.
const WhyUs = dynamic(() => import("@/components/home/Sections").then((m) => m.WhyUs), {
  loading: () => <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6" aria-hidden="true"><div className="h-64 animate-pulse rounded-2xl bg-slate-200/60" /></div>,
});
const ServicesBento = dynamic(() => import("@/components/home/Sections").then((m) => m.ServicesBento), {
  loading: () => <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6" aria-hidden="true"><div className="h-64 animate-pulse rounded-2xl bg-slate-200/60" /></div>,
});
const Roadmap = dynamic(() => import("@/components/home/Sections").then((m) => m.Roadmap), {
  loading: () => <div className="border-y border-slate-200 bg-white py-16" aria-hidden="true"><div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="h-48 animate-pulse rounded-2xl bg-slate-200/60" /></div></div>,
});
const Metrics = dynamic(() => import("@/components/home/Sections").then((m) => m.Metrics), {
  loading: () => <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6" aria-hidden="true"><div className="h-40 animate-pulse rounded-3xl bg-navy-950/10" /></div>,
});
const StoriesPreview = dynamic(() => import("@/components/home/Sections").then((m) => m.StoriesPreview), {
  loading: () => <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6" aria-hidden="true"><div className="h-64 animate-pulse rounded-2xl bg-slate-200/60" /></div>,
});
const InsightsPreview = dynamic(() => import("@/components/home/Sections").then((m) => m.InsightsPreview), {
  loading: () => <div className="border-t border-slate-200 bg-white py-16" aria-hidden="true"><div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="h-64 animate-pulse rounded-2xl bg-slate-200/60" /></div></div>,
});
const Faq = dynamic(() => import("@/components/home/Faq"), {
  loading: () => <div className="h-48 animate-pulse rounded-2xl bg-slate-200/60" aria-hidden="true" />,
});
const ContactForm = dynamic(() => import("@/components/forms/ContactForm"), {
  loading: () => <div className="h-96 animate-pulse rounded-2xl border border-slate-200 bg-white" aria-hidden="true" />,
});

export const metadata: Metadata = {
  title: "Sonuç Odaklı Dijital Pazarlama & E-Ticaret Ajansı",
  description:
    "Google Ads, Meta, SEO, GEO, sosyal medya yönetimi, e-ticaret kurulum ve danışmanlık. %500+ satış artışı vakalarıyla performans odaklı ajans.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Hero />
      <WhyUs />
      <ServicesBento />
      <Roadmap />
      <Metrics />
      <StoriesPreview />
      <InsightsPreview />

      <section id="iletisim" className="cv-auto mx-auto max-w-7xl scroll-mt-24 px-4 pb-20 sm:px-6" aria-label="SSS ve iletişim">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="lg:py-6">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-navy-800"><span className="h-px w-8 bg-gold-500" aria-hidden="true" />SSS</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Merak ettikleriniz
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
              Aklınıza takılan başka bir soru varsa formu doldurun, ekibimiz sizi arasın.
            </p>
            <div className="mt-6">
              <Faq items={HOME_FAQ} />
            </div>
          </div>
          <div className="lg:py-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
