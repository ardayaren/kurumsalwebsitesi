import { redirect } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import { getSessionUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin", robots: { index: false, follow: false } };

export async function adminGuard() {
  const user = await getSessionUser();
  if (!user) redirect("/admin/giris");
  return user;
}

export async function pendingCount() {
  return prisma.inquiry.count({ where: { status: "NEW" } });
}

export function serializeLead(l: {
  id: string; createdAt: Date; name: string; phone: string; email: string;
  website: string | null; service: string; message: string;
  status: "NEW" | "IN_REVIEW" | "CONTACTED" | "CLOSED";
  contactedAt: Date | null;
  notes: { id: string; createdAt: Date; author: string; text: string }[];
}) {
  return {
    ...l,
    createdAt: l.createdAt.toISOString(),
    contactedAt: l.contactedAt ? l.contactedAt.toISOString() : null,
    notes: l.notes.map((n) => ({ ...n, createdAt: n.createdAt.toISOString() })),
  };
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();
  if (!user) return <>{children}</>;
  const pending = await pendingCount().catch(() => 0);
  return (
    <div className="min-h-screen bg-[#F4F6FB] lg:flex">
      <Sidebar pendingCount={pending} />
      <div className="flex-1 px-4 py-6 sm:px-8">{children}</div>
    </div>
  );
}
