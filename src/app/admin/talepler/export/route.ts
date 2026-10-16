import { getSessionUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

function csvCell(v: string | null | undefined): string {
  return `"${(v || "").replace(/"/g, '""')}"`;
}

export async function GET() {
  const user = await getSessionUser();
  if (!user) redirect("/admin/giris");
  const leads = await prisma.inquiry.findMany({ orderBy: { createdAt: "desc" } });
  const header = "Tarih,Ad,Telefon,E-posta,Web Sitesi,Hizmet,Durum,Mesaj";
  const rows = leads.map((l) =>
    [
      new Date(l.createdAt).toLocaleString("tr-TR"),
      csvCell(l.name),
      csvCell(l.phone),
      csvCell(l.email),
      csvCell(l.website),
      csvCell(l.service),
      l.status,
      csvCell(l.message.replace(/\r?\n/g, " ")),
    ].join(",")
  );
  const csv = "\uFEFF" + [header, ...rows].join("\n");
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="talepler-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
