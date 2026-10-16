import type { MetadataRoute } from "next";
import { SERVICES } from "@/content/services";
import { POSTS } from "@/content/posts";

export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const staticPages = [
    "", "/hakkimizda", "/is-ortaklarimiz", "/kariyer", "/basari-hikayeleri",
    "/projelerimiz", "/blog", "/bize-ulasin", "/hizmetler", "/kvkk", "/randevu",
  ];
  return [
    ...staticPages.map((p) => ({ url: `${base}${p || "/"}`, lastModified: new Date() })),
    ...SERVICES.map((s) => ({ url: `${base}/hizmetler/${s.slug}`, lastModified: new Date() })),
    ...POSTS.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date(p.date) })),
  ];
}
