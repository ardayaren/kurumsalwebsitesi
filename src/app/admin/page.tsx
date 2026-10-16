import Link from "next/link";
import { Inbox, Clock, TrendingUp, FileText, ArrowRight } from "lucide-react";
import LeadBoard from "@/components/admin/LeadBoard";
import { prisma } from "@/lib/db";
import { adminGuard, serializeLead } from "./layout";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin Dashboard", robots: { index: false, follow: false } };

export default async function AdminDashboard() {
  await adminGuard();
  const [total, pending, contacted, contactedTimes, recent] = await Promise.all([
    prisma.inquiry.count(),
    prisma.inquiry.count({ where: { status: "NEW" } }),
    prisma.inquiry.count({ where: { status: "CONTACTED" } }),
    prisma.inquiry.findMany({ where: { contactedAt: { not: null } }, select: { createdAt: true, contactedAt: true } }),
    prisma.inquiry.findMany({ orderBy: { createdAt: "desc" }, take: 8, include: { notes: { orderBy: { createdAt: "desc" } } } }),
  ]);
  const conversion = total > 0 ? Math.round((contacted / total) * 100) : 0;
  const avgHours =
    contactedTimes.length > 0
      ? contactedTimes.reduce((s, l) => s + (l.contactedAt!.getTime() - l.createdAt.getTime()), 0) / contactedTimes.length / 3_600_000
      : null;

  const cards = [
    { icon: Inbox, label: "Toplam Talep", value: String(total), accent: "text-navy-800" },
    { icon: Clock, label: "Bekleyen (Yeni)", value: String(pending), accent: "text-amber-600" },
    { icon: TrendingUp, label: "Aranılma Oranı", value: `%${conversion}`, accent: "text-navy-800" },
    { icon: FileText, label: "Ort. İlk Dönüş", value: avgHours === null ? "—" : avgHours < 1 ? `${Math.round(avgHours * 60)} dk` : `${avgHours.toFixed(1)} sa`, accent: "text-navy-800" },
  ];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-extrabold text-slate-900">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500">Gelen talepler ve dönüşüm özeti</p>
        </div>
        <Link href="/admin/talepler" className="inline-flex items-center gap-1.5 rounded-xl bg-navy-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-900">
          Tüm Talepler <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="glass rounded-2xl p-5">
            <c.icon className={`size-6 ${c.accent}`} />
            <p className="mt-3 font-display text-3xl font-extrabold text-slate-900">{c.value}</p>
            <p className="mt-1 text-sm text-slate-500">{c.label}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 font-display text-lg font-bold text-slate-900">Son talepler</h2>
      <div className="mt-4">
        <LeadBoard leads={recent.map(serializeLead)} />
      </div>
    </div>
  );
}
