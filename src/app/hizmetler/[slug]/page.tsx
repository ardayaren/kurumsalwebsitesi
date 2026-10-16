import PageHero from "@/components/layout/PageHero";
import Faq from "@/components/home/Faq";
import dynamic from "next/dynamic";
import { BottomCtaSlim } from "@/components/home/BottomCta";
import { getService, SERVICES } from "@/content/services";
import { CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const ContactForm = dynamic(() => import("@/components/forms/ContactForm"), {
  loading: () => <div className="h-96 animate-pulse rounded-2xl border border-slate-200 bg-white" aria-hidden="true" />,
});

export const revalidate = 3600;
export const dynamicParams = false;

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return { title: s.title, description: s.short, alternates: { canonical: `/hizmetler/${s.slug}` } };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.short,
    provider: { "@type": "Organization", name: "Medya360" },
    areaServed: "TR",
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: "/" },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: "/hizmetler" },
      { "@type": "ListItem", position: 3, name: s.title },
    ],
  };
  const related = SERVICES.filter((x) => x.category === s.category && x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PageHero kicker={s.categoryLabel} title={s.title} desc={s.intro} crumbs={[{ label: "Anasayfa", href: "/" }, { label: "Hizmetler", href: "/hizmetler" }, { label: s.title }]} />

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div>
            <section aria-label="Hizmet kapsamı" className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-navy-100 bg-navy-950 px-6 py-4 sm:px-8">
                <h2 className="font-display text-xl font-extrabold text-white">Kapsamda neler var?</h2>
              </div>
              <ul className="space-y-3 p-6 sm:p-8">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-700">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md bg-gold-500 text-navy-950"><CheckCircle2 className="size-4" /></span> {b}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-label="Sık sorulan sorular" className="mt-6">
              <h2 className="font-display text-xl font-extrabold text-slate-900">Sık sorulan sorular</h2>
              <div className="mt-4"><Faq items={s.faqs} /></div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start" aria-label="Teklif formu">
            <ContactForm compact />
            <Link href="/bize-ulasin" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-navy-900">
              Detaylı bilgi için bize ulaşın <ArrowRight className="size-4" />
            </Link>
          </aside>
        </div>

        {related.length > 0 && (
          <section aria-label="İlgili hizmetler" className="mt-12">
            <h2 className="font-display text-xl font-extrabold text-slate-900">Bunlar da ilginizi çekebilir</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/hizmetler/${r.slug}`} className="glass card-glow group rounded-2xl p-6">
                  <h3 className="flex items-center gap-1.5 font-display text-base font-bold text-slate-900">
                    {r.title} <ArrowUpRight className="size-4 opacity-0 transition group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{r.short}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
      <BottomCtaSlim title={`${s.title} için hemen fiyat alın`} />
    </>
  );
}
