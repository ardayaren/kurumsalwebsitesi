import Link from "next/link";
import dynamic from "next/dynamic";
import Faq from "@/components/home/Faq";
import PostCover from "@/components/blog/PostCover";
import { BottomCtaSlim } from "@/components/home/BottomCta";
import { POSTS, getPost } from "@/content/posts";
import { CalendarDays, Clock, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const ContactForm = dynamic(() => import("@/components/forms/ContactForm"), {
  loading: () => <div className="h-96 animate-pulse rounded-2xl border border-slate-200 bg-white" aria-hidden="true" />,
});

export const revalidate = 3600;
export const dynamicParams = false;

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    keywords: p.focusKeywords,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { images: [{ url: p.image, alt: p.imageAlt }] },
  };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: post.image,
    author: { "@type": "Organization", name: "Medya360" },
    publisher: { "@type": "Organization", name: "Medya360" },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: "/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
      { "@type": "ListItem", position: 3, name: post.title },
    ],
  };
  const related = POSTS.filter((x) => x.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Klasik tam boy banner hero */}
      <section className="relative overflow-hidden pt-16" aria-label="Yazı başlığı">
        <div className="relative h-[420px] sm:h-[480px]">
          <PostCover slug={post.slug} category={post.category} label={post.imageAlt} variant="hero" className="absolute inset-0" />
          <div className="absolute inset-0 bg-navy-950/70" aria-hidden="true" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,20,48,0.85),transparent_60%)]" aria-hidden="true" />
          <div className="absolute inset-0 mx-auto flex max-w-4xl flex-col justify-end px-4 pb-10 sm:px-6 sm:pb-12">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-slate-300">
              <Link href="/" className="transition hover:text-white">Anasayfa</Link>
              <ChevronRight className="size-3 opacity-60" />
              <Link href="/blog" className="transition hover:text-white">Blog</Link>
              <ChevronRight className="size-3 opacity-60" />
              <span className="text-gold-400">{post.category}</span>
            </nav>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {post.title}
            </h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-200">{post.excerpt}</p>
            <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-slate-300">
              <span className="flex items-center gap-1.5"><CalendarDays className="size-4" /><time dateTime={post.date}>{new Date(post.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</time></span>
              <span className="flex items-center gap-1.5"><Clock className="size-4" />Okuma süresi: {post.readTime}</span>
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div>
            <figure>
              <figcaption className="mb-6 border-l-2 border-gold-500 pl-4 text-sm italic leading-relaxed text-slate-500">
                {post.imageAlt}
              </figcaption>
            </figure>

            <article className="space-y-6" aria-label="Blog içeriği">
              {post.intro.map((par, i) => (
                <p key={i} className="text-[15.5px] leading-relaxed text-slate-700">{par}</p>
              ))}

              {post.sections.map((s, si) => (
                <section key={si} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <h2 className="flex items-center gap-2.5 font-display text-xl font-extrabold text-slate-900 sm:text-2xl">
                    <span className="h-6 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />{s.heading}
                  </h2>
                  {s.paragraphs?.map((par, pi) => (
                    <p key={pi} className="mt-3 text-[15px] leading-relaxed text-slate-600">{par}</p>
                  ))}
                  {s.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {s.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-slate-600">
                          <span className="mt-1.5 size-2 shrink-0 rounded-full bg-navy-800" aria-hidden="true" />{b}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {post.faqs && (
                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8" aria-label="Sık sorulan sorular">
                  <h2 className="flex items-center gap-2.5 font-display text-xl font-extrabold text-slate-900 sm:text-2xl">
                    <span className="h-6 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />Sık Sorulan Sorular
                  </h2>
                  <div className="mt-4"><Faq items={post.faqs} /></div>
                </section>
              )}
            </article>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start" aria-label="Yan panel">
            <ContactForm compact />
          </aside>
        </div>

        <section aria-label="İlgili yazılar" className="mt-12">
          <h2 className="flex items-center gap-2.5 font-display text-2xl font-extrabold text-slate-900">
            <span className="h-6 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />İlgili Yazılar
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="glass card-glow group overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <PostCover slug={r.slug} category={r.category} label={r.imageAlt} className="absolute inset-0 transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="flex items-center gap-1.5 text-xs text-slate-500"><ChevronRight className="size-3.5" />{r.category}</p>
                  <h3 className="mt-1.5 font-display text-base font-bold leading-snug text-slate-900 group-hover:text-navy-900">{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <BottomCtaSlim title="Bu konuda destek mi lazım?" />
    </>
  );
}
