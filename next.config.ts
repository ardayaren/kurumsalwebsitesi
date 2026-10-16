import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 gün
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        source: "/hizmetler/shopify-partner-ajansi",
        destination: "/hizmetler",
        permanent: true,
      },
      {
        source: "/hizmetler/shopify-migration",
        destination: "/hizmetler",
        permanent: true,
      },
      {
        source: "/hizmetler/shopify-kurulum",
        destination: "/hizmetler",
        permanent: true,
      },
      {
        source: "/hizmetler/trendyol-magaza-yonetimi",
        destination: "/hizmetler/trendyol-danismanligi",
        permanent: true,
      },
      {
        source: "/blog/shopify-nedir-magaza-nasil-acilir",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/shopify-yurtdisi-satis-dijital-pazarlama",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/shopify-turkiye-vergi-kargo-odeme",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Statik asset'ler: 1 yıl immutable cache
        source: "/brands/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // HTML için kısa cache + arka planda tazeleme hissi (CDN / tarayıcı)
          { key: "Cache-Control", value: "public, max-age=60, s-maxage=300, stale-while-revalidate=600" },
        ],
      },
    ];
  },
};

export default nextConfig;