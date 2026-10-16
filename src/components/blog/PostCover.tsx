import { Search, Megaphone, ShoppingBag, Share2, LayoutGrid, TrendingUp, type LucideIcon } from "lucide-react";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "SEO": Search,
  "Reklam": Megaphone,
  "E-Ticaret": ShoppingBag,
  "Sosyal Medya": Share2,
  "Web": LayoutGrid,
  "Pazarlama": TrendingUp,
};

/** Her yazıya özel ama tutarlı marka gradyanları (lacivert zemin + altın ışıma). */
const PALETTES = [
  "from-[#0a1430] via-[#14275a] to-[#0e1c44]",
  "from-[#0e1c44] via-[#1a3268] to-[#0a1430]",
  "from-[#14275a] via-[#0a1430] to-[#1f3a7a]",
  "from-[#0a1430] via-[#1f3a7a] to-[#14275a]",
  "from-[#1a3268] via-[#0e1c44] to-[#0a1430]",
  "from-[#0e1c44] via-[#0a1430] to-[#1a3268]",
];

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

export default function PostCover({
  slug,
  category,
  label,
  variant = "card",
  className = "",
}: {
  slug: string;
  category: string;
  label: string;
  variant?: "card" | "hero";
  className?: string;
}) {
  const h = hashSlug(slug);
  const palette = PALETTES[h % PALETTES.length];
  const Icon = CATEGORY_ICONS[category] ?? TrendingUp;
  // Işımanın konumu yazıdan yazıya değişsin
  const glowX = 15 + (h % 70);
  const glowY = 10 + ((h >> 3) % 60);

  return (
    <div
      role="img"
      aria-label={label}
      className={`absolute inset-0 overflow-hidden bg-gradient-to-br ${palette} ${className}`}
    >
      {/* Doku: ince ızgara */}
      <div className="bg-grid-light absolute inset-0 opacity-60" aria-hidden="true" />
      {/* Altın ışıma */}
      <div
        className="absolute h-72 w-72 rounded-full bg-gold-500/25 blur-[90px]"
        style={{ left: `${glowX}%`, top: `${glowY}%` }}
        aria-hidden="true"
      />
      {/* Dev kategori filigranı */}
      <span
        className={`pointer-events-none absolute -bottom-4 left-3 z-10 font-display font-extrabold uppercase leading-none tracking-tight text-white/[0.07] select-none ${variant === "hero" ? "text-[7rem] sm:text-[10rem]" : "text-6xl"}`}
        aria-hidden="true"
      >
        {category}
      </span>
      {/* Merkez ikon rozeti (hero'da başlıkla çakışmaması için sağ üstte) */}
      <div className={variant === "hero" ? "absolute right-8 top-24 z-10 hidden sm:block lg:right-24" : "absolute inset-0 z-10 grid place-items-center"} aria-hidden="true">
        <span className={`grid place-items-center rounded-2xl bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/30 ${variant === "hero" ? "size-20" : "size-14"}`}>
          <Icon className={variant === "hero" ? "size-10" : "size-7"} strokeWidth={1.8} />
        </span>
      </div>
      {/* Altın kategori hapı */}
      <span className="absolute left-4 top-4 z-10 rounded-full bg-navy-950/90 px-3 py-1 text-[11px] font-semibold text-gold-400 backdrop-blur-sm">
        {category}
      </span>
    </div>
  );
}
