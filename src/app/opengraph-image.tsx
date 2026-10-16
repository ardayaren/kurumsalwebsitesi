import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/site";

export const runtime = "nodejs";
export const revalidate = 86400;
export const alt = `${BRAND.name} — Dijital Pazarlama & E-Ticaret Ajansı`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "#14275A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#E5A812",
              fontSize: "40px",
              fontWeight: 800,
            }}
          >
            M
          </div>
          <div style={{ fontSize: "52px", fontWeight: 800, color: "#0A1430" }}>{BRAND.name}</div>
        </div>
        <div style={{ marginTop: "28px", fontSize: "34px", color: "#475569", lineHeight: 1.3 }}>
          Sonuç Odaklı Dijital Pazarlama & E-Ticaret Ajansı
        </div>
        <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
          {["Reklam", "SEO & GEO", "Sosyal Medya", "Danışmanlık"].map((t) => (
            <div
              key={t}
              style={{
                border: "1px solid #14275A",
                background: "#F0F3F9",
                color: "#14275A",
                borderRadius: "999px",
                padding: "8px 22px",
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
