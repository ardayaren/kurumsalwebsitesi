"use client";

import { useActionState, useState } from "react";
import {
  Send, CheckCircle2, AlertCircle, User, Phone, Mail, Globe, MessageSquareText, Wallet, Sparkles,
} from "lucide-react";
import { submitInquiry, type ActionResult } from "@/lib/actions";
import { SERVICE_OPTIONS } from "@/lib/site";

const initial: ActionResult = { ok: false };
const inputCls =
  "w-full rounded-xl border border-slate-300 bg-slate-50/60 py-3 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-navy-700 focus:bg-white focus:ring-4 focus:ring-navy-100";
const selectCls =
  "w-full appearance-none rounded-xl border border-slate-300 bg-slate-50/60 py-3 pl-11 pr-10 text-sm text-slate-900 shadow-sm outline-none transition focus:border-navy-700 focus:bg-white focus:ring-4 focus:ring-navy-100";
const labelCls = "mb-1.5 block text-[13px] font-semibold text-slate-700";

function FieldIcon({ icon: Icon }: { icon: typeof User }) {
  return <Icon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />;
}

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [state, action, pending] = useActionState(submitInquiry, initial);
  const [service, setService] = useState(SERVICE_OPTIONS[0]);

  if (state.ok) {
    return (
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" role="status">
        <div className="flex items-center gap-3 border-b border-slate-100 bg-navy-950 px-6 py-4">
          <span className="grid size-10 place-items-center rounded-xl bg-gold-500 text-navy-950"><CheckCircle2 className="size-5" /></span>
          <div>
            <h3 className="font-display text-lg font-bold text-white">Talebiniz alındı!</h3>
            <p className="text-xs text-slate-300">En geç 1 iş günü içinde dönüş yapıyoruz</p>
          </div>
        </div>
        <div className="p-6 text-center">
          <p className="text-sm text-slate-600">
            Ekibimiz sizi arayacak. E-postanıza bilgilendirme gönderdik.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={action} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" aria-label="Teklif formu">
      {/* Header band */}
      <div className="relative overflow-hidden bg-navy-950 px-6 py-6 sm:px-8">
        <div className="bg-grid-light absolute inset-0" aria-hidden="true" />
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-500/20 blur-[70px]" aria-hidden="true" />
        <div className="relative flex items-start gap-3.5">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/30">
            <Sparkles className="size-5" />
          </span>
          <div>
            <h3 className="font-display text-xl font-bold text-white">Hemen formu doldurun, sizi arayalım</h3>
            <p className="mt-0.5 flex items-center gap-1.5 text-sm text-slate-300">
              <span className="inline-block size-1.5 rounded-full bg-emerald-400" /> Ortalama dönüş süremiz: 4 saat (mesai saatlerinde)
            </p>
          </div>
        </div>
      </div>

      <div className={`p-6 sm:p-8`}>
        <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
          <label className="block">
            <span className={labelCls}>Ad Soyad *</span>
            <span className="relative block">
              <FieldIcon icon={User} />
              <input name="name" required minLength={3} placeholder="Adınız Soyadınız" autoComplete="name" className={inputCls} />
            </span>
          </label>
          <label className="block">
            <span className={labelCls}>Telefon *</span>
            <span className="relative block">
              <FieldIcon icon={Phone} />
              <input name="phone" required minLength={7} placeholder="05__ ___ __ __" autoComplete="tel" inputMode="tel" className={inputCls} />
            </span>
          </label>
          <label className="block">
            <span className={labelCls}>E-posta *</span>
            <span className="relative block">
              <FieldIcon icon={Mail} />
              <input name="email" type="email" required placeholder="ornek@firma.com" autoComplete="email" className={inputCls} />
            </span>
          </label>
          <label className="block">
            <span className={labelCls}>Web Sitesi</span>
            <span className="relative block">
              <FieldIcon icon={Globe} />
              <input name="website" placeholder="www.ornek.com" autoComplete="url" inputMode="url" className={inputCls} />
            </span>
          </label>

          <label className="block">
            <span className={labelCls}>İlgilendiğiniz Hizmet *</span>
            <span className="relative block">
              <FieldIcon icon={Sparkles} />
              <select name="service" value={service} onChange={(e) => setService(e.target.value)} className={selectCls}>
                {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </span>
          </label>

          <div className={`block ${compact ? "" : ""}`}>
            <span className={labelCls}>Nasıl yardımcı olabiliriz?</span>
            <p className="rounded-xl border border-navy-100 bg-navy-50 px-4 py-3 text-xs leading-relaxed text-navy-800">
              Formu gönderin, ekibimiz 1 iş günü içinde sizi arayıp ihtiyacınıza özel yol haritası çıkarsın.
            </p>
          </div>

          <label className={`block ${compact ? "" : "sm:col-span-2"}`}>
            <span className={labelCls}>Mesajınız *</span>
            <span className="relative block">
              <MessageSquareText className="pointer-events-none absolute left-3.5 top-4 size-4 text-slate-400" />
              <textarea name="message" required minLength={10} rows={4} placeholder="Projenizden kısaca bahsedin, hedefinizi anlatın…" className={`${inputCls} resize-none`} />
            </span>
          </label>
        </div>

        {/* Honeypot */}
        <input type="text" name="company_hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <label className="mt-5 flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-slate-500">
          <input type="checkbox" name="kvkk" required className="mt-0.5 size-4 accent-navy-800" />
          KVKK kapsamında bilgilerimin teklif amacıyla işlenmesini kabul ediyorum. *
        </label>

        {state.error && (
          <p className="mt-4 flex items-center gap-2 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">
            <AlertCircle className="size-4 shrink-0" /> {state.error}
          </p>
        )}

        <button type="submit" disabled={pending}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-800 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-navy-900/20 transition hover:bg-navy-900 disabled:opacity-60 sm:w-auto">
          <Send className="size-4" /> {pending ? "Gönderiliyor…" : "Teklif Al"}
        </button>

        <p className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-400">
          <Wallet className="size-3.5" /> Bilgileriniz yalnızca teklif süreci için kullanılır, üçüncü kişilerle paylaşılmaz.
        </p>
      </div>
    </form>
  );
}
