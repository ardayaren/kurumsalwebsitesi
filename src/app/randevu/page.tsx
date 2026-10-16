import RandevuClient from "./randevu-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Randevu Al",
  description: "Ücretsiz 30 dakikalık ön görüşme için randevu oluşturun. Size uygun gün ve saati seçin, ekibimiz sizi arasın.",
  alternates: { canonical: "/randevu" },
};

export default function RandevuPage() {
  return <RandevuClient />;
}
