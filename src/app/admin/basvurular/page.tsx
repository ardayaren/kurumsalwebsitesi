import { prisma } from "@/lib/db";
import { adminGuard } from "../layout";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Kariyer Başvuruları", robots: { index: false, follow: false } };

export default async function BasvurularPage() {
  await adminGuard();
  const apps = await prisma.careerApplication.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold text-slate-900">Kariyer Başvuruları</h1>
      <p className="mt-1 text-sm text-slate-500">{apps.length} başvuru</p>
      <div className="mt-5 space-y-3">
        {apps.map((a) => (
          <article key={a.id} className="glass rounded-2xl p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-display text-base font-bold text-slate-900">{a.name} <span className="ml-2 rounded-full border border-navy-200 bg-navy-50 px-2.5 py-0.5 text-[11px] font-semibold text-navy-800">{a.position}</span></h2>
              <p className="text-xs text-slate-500">{new Date(a.createdAt).toLocaleString("tr-TR")}</p>
            </div>
            <p className="mt-2 text-sm text-slate-600">{a.email} • {a.phone}{a.linkedin ? ` • ${a.linkedin}` : ""}</p>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-slate-500">{a.message}</p>
          </article>
        ))}
        {apps.length === 0 && <p className="glass rounded-2xl p-8 text-center text-sm text-slate-500">Henüz başvuru yok.</p>}
      </div>
    </div>
  );
}
