import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import PostCover from "@/components/blog/PostCover";
import { BottomCta } from "@/components/home/BottomCta";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { POSTS } from "@/content/posts";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog", description: "SEO, Google Ads, e-ticaret, sosyal medya ve dijital pazarlama rehberleri. En çok aranan soruların yanıtları.", alternates: { canonical: "/blog" } };

// İçerik statik: saatlik tazeleme yeterli, her istekte yeniden render yok.
export const revalidate = 3600;

export default function BlogIndex() {
  return (
    <>
      <PageHero kicker="Blog" title="Faydalı bilgilere göz atın" desc="Dijital dünyadaki en son trendler, stratejiler ve ipuçları." crumbs={[{ label: "Anasayfa", href: "/" }, { label: "Blog" }]} />
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6" aria-label="Blog yazıları">
        <div className="space-y-5">
          {POSTS.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="glass card-glow group flex flex-col gap-0 overflow-hidden rounded-2xl sm:flex-row" aria-label={p.title}>
              <div className="relative aspect-[16/9] shrink-0 overflow-hidden sm:aspect-auto sm:w-72 lg:w-80">
                <PostCover slug={p.slug} category={p.category} label={p.imageAlt} className="absolute inset-0 transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
                <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5"><CalendarDays className="size-3.5" /><time dateTime={p.date}>{new Date(p.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</time></span>
                  <span className="flex items-center gap-1.5"><Clock className="size-3.5" />{p.readTime} okuma</span>
                </p>
                <h2 className="mt-2.5 font-display text-xl font-bold leading-snug text-slate-900 group-hover:text-navy-900">{p.title}</h2>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800">Devamını oku <ArrowRight className="size-4 transition group-hover:translate-x-0.5" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <BottomCta
        title="Okuduklarınızı markanıza uygulayalım"
        desc="Blogda anlattıklarımızı sizin için biz yapalım. Ücretsiz ön analizle başlayın."
      />
    </>
  );
}
