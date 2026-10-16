import LeadBoard from "@/components/admin/LeadBoard";
import { prisma } from "@/lib/db";
import { adminGuard, serializeLead } from "../layout";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Talepler", robots: { index: false, follow: false } };

export default async function TaleplerPage() {
  await adminGuard();
  const leads = await prisma.inquiry.findMany({
    orderBy: { createdAt: "desc" },
    include: { notes: { orderBy: { createdAt: "desc" } } },
  });
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-extrabold text-slate-900">Talepler</h1>
          <p className="mt-1 text-sm text-slate-500">{leads.length} kayıt • Satıra tıklayarak detayı açın, durumu güncelleyin, not ekleyin.</p>
        </div>
        {leads.length > 0 && (
          <a href="/admin/talepler/export" className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
            CSV İndir
          </a>
        )}
      </div>
      <div className="mt-5">
        <LeadBoard leads={leads.map(serializeLead)} />
      </div>
    </div>
  );
}
