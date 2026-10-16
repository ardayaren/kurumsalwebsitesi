"use server";

import { z } from "zod";
import { prisma } from "@/lib/db";
import { sendInquiryMails, sendCareerMail, sendAppointmentMail, sendCallbackMail } from "@/lib/mail";
import { rateLimit } from "@/lib/ratelimit";
import { getSessionUser, checkCredentials, setSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { after } from "next/server";

const inquirySchema = z.object({
  name: z.string().min(3, "Ad Soyad gerekli"),
  phone: z.string().min(7, "Telefon gerekli"),
  email: z.string().email("Geçerli e-posta girin"),
  website: z.string().optional(),
  service: z.string().min(2, "Hizmet seçin"),
  message: z.string().min(10, "Mesajınız en az 10 karakter olmalı"),
  kvkk: z.string().refine((v) => v === "on", "KVKK onayı gerekli"),
  company_hp: z.string().optional(), // honeypot
});

export type ActionResult = { ok: boolean; error?: string };

export async function submitInquiry(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const raw = Object.fromEntries(formData.entries());
  if (raw.company_hp) return { ok: true }; // bot
  if (!(await rateLimit("inquiry", 5, 60 * 60 * 1000))) {
    return { ok: false, error: "Çok fazla deneme. Lütfen bir süre sonra tekrar deneyin." };
  }
  const parsed = inquirySchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message || "Formu kontrol edin" };
  }
  const d = parsed.data;
  try {
    await prisma.inquiry.create({
      data: {
        name: d.name,
        phone: d.phone,
        email: d.email,
        website: d.website || null,
        service: d.service,
        message: d.message,
      },
    });
    // Mail yavaş ağda formu bekletmesin: yanıt hemen döner, mail arka planda atılır.
    after(() => sendInquiryMails(d).catch((e) => console.error("[inquiry-mail]", e)));
    return { ok: true };
  } catch (e) {
    console.error("[inquiry]", e);
    return { ok: false, error: "Kayıt sırasında hata oluştu, lütfen tekrar deneyin." };
  }
}

const careerSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(7),
  position: z.string().min(2),
  linkedin: z.string().optional(),
  message: z.string().min(10),
  company_hp: z.string().optional(),
});

export async function submitCareer(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const raw = Object.fromEntries(formData.entries());
  if (raw.company_hp) return { ok: true };
  if (!(await rateLimit("career", 5, 60 * 60 * 1000))) {
    return { ok: false, error: "Çok fazla deneme. Lütfen bir süre sonra tekrar deneyin." };
  }
  const parsed = careerSchema.safeParse(raw);
  if (!parsed.success) return { ok: false, error: "Formu kontrol edin" };
  const d = parsed.data;
  try {
    await prisma.careerApplication.create({
      data: {
        name: d.name!,
        email: d.email!,
        phone: d.phone!,
        position: d.position!,
        linkedin: d.linkedin || null,
        message: d.message!,
      },
    });
    after(() =>
      sendCareerMail({ ...d, linkedin: d.linkedin || undefined }).catch((e) =>
        console.error("[career-mail]", e)
      )
    );
    return { ok: true };
  } catch (e) {
    console.error("[career]", e);
    return { ok: false, error: "Başvuru kaydedilemedi." };
  }
}

const appointmentSchema = z.object({
  name: z.string().min(3, "Ad Soyad gerekli"),
  email: z.string().email("Geçerli e-posta girin"),
  phone: z.string().min(7, "Telefon gerekli"),
  topic: z.string().min(2, "Konu seçin"),
  date: z.string().min(4, "Tarih seçin"),
  time: z.string().min(2, "Saat seçin"),
  note: z.string().optional(),
  company_hp: z.string().optional(),
});

export async function submitAppointment(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const raw = Object.fromEntries(formData.entries());
  if (raw.company_hp) return { ok: true };
  if (!(await rateLimit("appointment", 5, 60 * 60 * 1000))) {
    return { ok: false, error: "Çok fazla deneme. Lütfen bir süre sonra tekrar deneyin." };
  }
  const parsed = appointmentSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message || "Formu kontrol edin" };
  }
  const d = parsed.data;
  try {
    await prisma.appointment.create({
      data: {
        name: d.name,
        email: d.email,
        phone: d.phone,
        topic: d.topic,
        date: d.date,
        time: d.time,
        note: d.note || null,
      },
    });
    after(() => sendAppointmentMail(d).catch((e) => console.error("[appointment-mail]", e)));
    return { ok: true };
  } catch (e) {
    console.error("[appointment]", e);
    return { ok: false, error: "Randevu kaydedilemedi, lütfen tekrar deneyin." };
  }
}

const callbackSchema = z.object({
  name: z.string().min(3, "Ad Soyad gerekli"),
  phone: z.string().min(7, "Telefon gerekli"),
  company_hp: z.string().optional(),
});

export async function submitCallback(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const raw = Object.fromEntries(formData.entries());
  if (raw.company_hp) return { ok: true };
  if (!(await rateLimit("callback", 5, 60 * 60 * 1000))) {
    return { ok: false, error: "Çok fazla deneme. Lütfen bir süre sonra tekrar deneyin." };
  }
  const parsed = callbackSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message || "Formu kontrol edin" };
  }
  const d = parsed.data;
  try {
    await prisma.inquiry.create({
      data: {
        name: d.name,
        phone: d.phone,
        email: "belirtilmedi@geri-arama",
        service: "Geri Arama Talebi",
        message: "Sizi arayalım widget'ı üzerinden geri arama talebi.",
      },
    });
    after(() => sendCallbackMail(d).catch((e) => console.error("[callback-mail]", e)));
    return { ok: true };
  } catch (e) {
    console.error("[callback]", e);
    return { ok: false, error: "Talep kaydedilemedi, lütfen tekrar deneyin." };
  }
}

export async function adminLogin(formData: FormData) {
  "use server";
  if (!(await rateLimit("login", 8, 10 * 60 * 1000))) redirect("/admin/giris?err=1");
  const user = String(formData.get("user") || "");
  const pass = String(formData.get("pass") || "");
  if (!checkCredentials(user, pass)) redirect("/admin/giris?err=1");
  await setSession(user);
  redirect("/admin");
}

async function requireAdmin() {
  const user = await getSessionUser();
  if (!user) redirect("/admin/giris");
  return user;
}

export async function updateLeadStatus(id: string, status: "NEW" | "IN_REVIEW" | "CONTACTED" | "CLOSED") {
  await requireAdmin();
  const current = await prisma.inquiry.findUnique({ where: { id }, select: { contactedAt: true } });
  await prisma.inquiry.update({
    where: { id },
    data: {
      status,
      ...(status === "CONTACTED" && !current?.contactedAt ? { contactedAt: new Date() } : {}),
    },
  });
  revalidatePath("/admin");
  revalidatePath("/admin/talepler");
}

export async function deleteLead(id: string) {
  await requireAdmin();
  await prisma.inquiry.delete({ where: { id } });
  revalidatePath("/admin");
  revalidatePath("/admin/talepler");
}

export async function addLeadNote(id: string, text: string) {
  const user = await requireAdmin();
  if (!text.trim()) return;
  await prisma.note.create({ data: { inquiryId: id, author: user, text: text.trim() } });
  revalidatePath("/admin");
  revalidatePath("/admin/talepler");
}

export async function updateAppointmentStatus(id: string, status: "PENDING" | "CONFIRMED" | "DONE" | "CANCELLED") {
  await requireAdmin();
  await prisma.appointment.update({ where: { id }, data: { status } });
  revalidatePath("/admin/randevular");
  revalidatePath("/admin");
}

export async function deleteAppointment(id: string) {
  await requireAdmin();
  await prisma.appointment.delete({ where: { id } });
  revalidatePath("/admin/randevular");
  revalidatePath("/admin");
}
