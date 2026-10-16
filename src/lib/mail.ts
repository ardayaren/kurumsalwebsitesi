import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function sendInquiryMails(data: {
  name: string;
  phone: string;
  email: string;
  website?: string;
  service: string;
  message: string;
}) {
  const resend = getResend();
  if (!resend) {
    console.log("[mail] RESEND_API_KEY yok, mail atlandı:", data.email);
    return { skipped: true };
  }
  const to = process.env.CONTACT_TO_EMAIL || "info@medya360.com";
  const from = process.env.RESEND_FROM || "Web Sitesi <onboarding@resend.dev>";

  await Promise.all([
    resend.emails.send({
      from,
      to,
      subject: `Yeni Teklif Talebi — ${data.service} — ${data.name}`,
      html: `
      <h2>Yeni İletişim Formu Talebi</h2>
      <ul>
        <li><strong>Ad Soyad:</strong> ${data.name}</li>
        <li><strong>Telefon:</strong> ${data.phone}</li>
        <li><strong>E-posta:</strong> ${data.email}</li>
        <li><strong>Web Sitesi:</strong> ${data.website || "-"}</li>
        <li><strong>Hizmet:</strong> ${data.service}</li>
      </ul>
      <p><strong>Mesaj:</strong></p>
      <p>${data.message.replace(/\n/g, "<br/>")}</p>
    `,
    }),
    resend.emails.send({
      from,
      to: data.email,
      subject: "Talebinizi aldık — en kısa sürede arayacağız",
      html: `<p>Merhaba ${data.name},</p><p><strong>${data.service}</strong> için talebinizi aldık. Ekibimiz 1 iş günü içinde sizi arayacak.</p><p>Sevgiler,<br/>Medya360 Ekibi</p>`,
    }),
  ]);

  return { skipped: false };
}

export async function sendCareerMail(data: {
  name: string;
  email: string;
  phone: string;
  position: string;
  linkedin?: string;
  message: string;
}) {
  const resend = getResend();
  if (!resend) {
    console.log("[mail] RESEND_API_KEY yok, kariyer maili atlandı:", data.email);
    return { skipped: true };
  }
  const to = process.env.CONTACT_TO_EMAIL || "info@medya360.com";
  const from = process.env.RESEND_FROM || "Web Sitesi <onboarding@resend.dev>";

  await resend.emails.send({
    from,
    to,
    subject: `Yeni Kariyer Başvurusu — ${data.position} — ${data.name}`,
    html: `
      <h2>Yeni Kariyer Başvurusu</h2>
      <ul>
        <li><strong>Ad Soyad:</strong> ${data.name}</li>
        <li><strong>E-posta:</strong> ${data.email}</li>
        <li><strong>Telefon:</strong> ${data.phone}</li>
        <li><strong>Pozisyon:</strong> ${data.position}</li>
        <li><strong>LinkedIn/Portföy:</strong> ${data.linkedin || "-"}</li>
      </ul>
      <p><strong>Mesaj:</strong></p>
      <p>${data.message.replace(/\n/g, "<br/>")}</p>
    `,
  });
  return { skipped: false };
}

export async function sendAppointmentMail(data: {
  name: string;
  email: string;
  phone: string;
  topic: string;
  date: string;
  time: string;
  note?: string;
}) {
  const resend = getResend();
  if (!resend) {
    console.log("[mail] RESEND_API_KEY yok, randevu maili atlandı:", data.email);
    return { skipped: true };
  }
  const to = process.env.CONTACT_TO_EMAIL || "info@medya360.com";
  const from = process.env.RESEND_FROM || "Web Sitesi <onboarding@resend.dev>";

  await Promise.all([
    resend.emails.send({
      from,
      to,
      subject: `Yeni Randevu Talebi — ${data.topic} — ${data.name}`,
      html: `
      <h2>Yeni Randevu Talebi</h2>
      <ul>
        <li><strong>Ad Soyad:</strong> ${data.name}</li>
        <li><strong>Telefon:</strong> ${data.phone}</li>
        <li><strong>E-posta:</strong> ${data.email}</li>
        <li><strong>Konu:</strong> ${data.topic}</li>
        <li><strong>Tarih:</strong> ${data.date}</li>
        <li><strong>Saat:</strong> ${data.time}</li>
      </ul>
      <p><strong>Not:</strong></p>
      <p>${(data.note || "-").replace(/\n/g, "<br/>")}</p>
    `,
    }),
    resend.emails.send({
      from,
      to: data.email,
      subject: "Randevu talebinizi aldık",
      html: `<p>Merhaba ${data.name},</p><p><strong>${data.date} ${data.time}</strong> için randevu talebinizi aldık. Ekibimiz en kısa sürede teyit için sizi arayacak.</p><p>Sevgiler,<br/>Medya360 Ekibi</p>`,
    }),
  ]);

  return { skipped: false };
}

export async function sendCallbackMail(data: { name: string; phone: string }) {
  const resend = getResend();
  if (!resend) {
    console.log("[mail] RESEND_API_KEY yok, geri arama maili atlandı:", data.phone);
    return { skipped: true };
  }
  const to = process.env.CONTACT_TO_EMAIL || "info@medya360.com";
  const from = process.env.RESEND_FROM || "Web Sitesi <onboarding@resend.dev>";

  await resend.emails.send({
    from,
    to,
    subject: `Geri Arama Talebi — ${data.name}`,
    html: `
      <h2>Sizi Arayalım Talebi</h2>
      <ul>
        <li><strong>Ad Soyad:</strong> ${data.name}</li>
        <li><strong>Telefon:</strong> ${data.phone}</li>
      </ul>
      <p>Kullanıcı, sizi arayalım widget'ı üzerinden geri arama talep etti.</p>
    `,
  });
  return { skipped: false };
}
