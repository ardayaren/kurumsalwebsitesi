import KariyerClient from "./kariyer-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kariyer",
  description: "Performans kültürüne sahip, veriyle konuşan bir ekipte kariyerinizi büyütün. Açık pozisyonlara hemen başvurun.",
  alternates: { canonical: "/kariyer" },
};

export default function KariyerPage() {
  return <KariyerClient />;
}