import AppointmentBoard from "@/components/admin/AppointmentBoard";
import { prisma } from "@/lib/db";
import { adminGuard } from "../layout";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Randevular", robots: { index: false, follow: false } };

export default async function RandevularPage() {
  await adminGuard();
  const items = await prisma.appointment.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold text-slate-900">Randevular</h1>
      <p className="mt-1 text-sm text-slate-500">{items.length} kayıt • Satıra tıklayarak detayı açın, durumu güncelleyin.</p>
      <div className="mt-5">
        <AppointmentBoard
          items={items.map((a) => ({
            ...a,
            createdAt: a.createdAt.toISOString(),
          }))}
        />
      </div>
    </div>
  );
}
