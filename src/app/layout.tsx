import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BRAND } from "@/lib/site";

// CallbackWidget etkileşim gerektirene kadar JS indirmesin:
// Server Component içinde `ssr: false` yasak olduğu için SSR uyumlu lazy yüklenir.
const CallbackWidget = dynamic(() => import("@/components/forms/CallbackWidget"), {
  loading: () => null,
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const viewport: Viewport = {
  themeColor: "#0A1430",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND.name} — Sonuç Odaklı Dijital Pazarlama & E-Ticaret Ajansı`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Google Ads, Meta, SEO, GEO, sosyal medya ve e-ticaret kurulumu. Analizden raporlamaya performans odaklı dijital pazarlama ajansı.",
  keywords: ["dijital pazarlama ajansı", "google ads yönetimi", "seo hizmeti", "marka danışmanlığı", "e-ticaret kurulum", "sosyal medya yönetimi", "trendyol danışmanlığı", "geo hizmeti"],
  authors: [{ name: BRAND.name }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL + "/",
    siteName: BRAND.name,
    title: `${BRAND.name} — Sonuç Odaklı Dijital Pazarlama & E-Ticaret Ajansı`,
    description: "Reklam, SEO, sosyal medya ve e-ticaret kurulumu tek çatıda. Teklif için hemen formu doldurun.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: BRAND.name }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND.name,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    email: BRAND.email,
    telephone: BRAND.phone1,
    address: { "@type": "PostalAddress", streetAddress: BRAND.address, addressCountry: "TR" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BRAND.phone1,
      contactType: "sales",
      areaServed: "TR",
      availableLanguage: "tr",
    },
    sameAs: [],
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND.name,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "tr-TR",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/arama?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <html lang="tr" className={`${inter.variable} ${jakarta.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-[#F4F6FB] font-body text-slate-800 antialiased" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CallbackWidget />
      </body>
    </html>
  );
}
