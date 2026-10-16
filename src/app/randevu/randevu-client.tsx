"use client";

import { useActionState, useEffect, useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { submitAppointment, type ActionResult } from "@/lib/actions";
import { CalendarCheck, CheckCircle2, AlertCircle, Send, Clock } from "lucide-react";

const TOPICS = [
  "Google Ads Reklam Yönetimi",
  "Meta Reklam Yönetimi",
  "SEO / GEO Hizmeti",
  "Sosyal Medya Yönetimi",
  "E-Ticaret Kurulum",
  "Marka Danışmanlığı",
  "Trendyol Danışmanlığı",
  "Proje Planlama",
  "Diğer",
];

const TIMES = ["09:30", "11:00", "13:30", "15:00", "16:30"];

const field =
  "w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-navy-700 focus:bg-white focus:ring-4 focus:ring-navy-100";
const label = "mb-1.5 block text-[13px] font-semibold text-slate-700";

export default function RandevuClient() {
  const [state, action, pending] = useActionState(submitAppointment, { ok: false } as ActionResult);
  // Sunucu/istemci saat dilimi farklı olabileceğinden min tarihi hydration sonrası hesapla.
  // Tek seferlik client-only değer atamasıdır; kaskad render döngüsü oluşturmaz.
  const [minDate, setMinDate] = useState<string | undefined>(undefined);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinDate(new Date().toISOString().slice(0, 10));
  }, []);

  return (
    <>
      <PageHero
        kicker="Randevu"
        title="Ücretsiz ön görüşme için randevu alın"
        desc="Size uygun gün ve saati seçin; ekibimiz görüntülü veya telefonla 30 dakikalık ücretsiz ön görüşme için sizi arasın."
        crumbs={[{ label: "Anasayfa", href: "/" }, { label: "Randevu Al" }]}
      />
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6" aria-label="Randevu formu">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <div>
            {state.ok ? (
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" role="status">
                <div className="flex items-center gap-3 border-b border-slate-100 bg-navy-950 px-6 py-4">
                  <span className="grid size-10 place-items-center rounded-xl bg-gold-500 text-navy-950"><CheckCircle2 className="size-5" /></span>
                  <div>
                    <h2 className="font-display text-lg font-bold text-white">Randevu talebiniz alındı!</h2>
                    <p className="text-xs text-slate-300">Teyit için en kısa sürede arayacağız</p>
                  </div>
                </div>
                <p className="p-6 text-center text-sm text-slate-600">Talebiniz ekibimize iletildi. Seçtiğiniz gün ve saat için teyit araması yapacağız.</p>
              </div>
            ) : (
              <form action={action} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" aria-label="Randevu formu">
                <div className="relative overflow-hidden bg-navy-950 px-6 py-6 sm:px-8">
                  <div className="bg-grid-light absolute inset-0" aria-hidden="true" />
                  <div className="relative flex items-center gap-3.5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold-500 text-navy-950"><CalendarCheck className="size-5" /></span>
                    <div>
                      <h2 className="font-display text-xl font-bold text-white">Randevu oluşturun</h2>
                      <p className="mt-0.5 text-sm text-slate-300">30 dakika • Ücretsiz • Online veya telefon</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
                  <label className="block">
                    <span className={label}>Ad Soyad *</span>
                    <input name="name" required minLength={3} placeholder="Adınız Soyadınız" autoComplete="name" className={field} />
                  </label>
                  <label className="block">
                    <span className={label}>Telefon *</span>
                    <input name="phone" required minLength={7} inputMode="tel" autoComplete="tel" placeholder="05__ ___ __ __" className={field} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className={label}>E-posta *</span>
                    <input name="email" type="email" required placeholder="ornek@firma.com" autoComplete="email" className={field} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className={label}>Görüşme Konusu *</span>
                    <select name="topic" required defaultValue="" className={field}>
                      <option value="">Konu seçin *</option>
                      {TOPICS.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </label>
                  <label className="block">
                    <span className={label}>Tarih *</span>
                    <input name="date" type="date" required min={minDate} className={field} />
                  </label>
                  <div className="block">
                    <span className={label}>Saat *</span>
                    <div className="flex flex-wrap gap-2">
                      {TIMES.map((t, i) => (
                        <label key={t} className="cursor-pointer">
                          <input type="radio" name="time" value={t} required={i === 0} className="peer sr-only" />
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-600 transition peer-checked:border-navy-800 peer-checked:bg-navy-800 peer-checked:text-white hover:border-navy-300">
                            <Clock className="size-3.5" /> {t}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <label className="block sm:col-span-2">
                    <span className={label}>Not (opsiyonel)</span>
                    <textarea name="note" rows={3} placeholder="Görüşmede konuşmak istedikleriniz…" className={`${field} resize-none`} />
                  </label>
                </div>
                <input type="text" name="company_hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                {state.error && (
                  <p className="mx-6 mb-2 flex items-center gap-2 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600 sm:mx-8" role="alert">
                    <AlertCircle className="size-4 shrink-0" /> {state.error}
                  </p>
                )}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <button type="submit" disabled={pending} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-lg shadow-gold-500/30 transition hover:bg-gold-400 disabled:opacity-60 sm:w-auto">
                    <Send className="size-4" /> {pending ? "Gönderiliyor…" : "Randevuyu Oluştur"}
                  </button>
                </div>
              </form>
            )}
          </div>
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8" aria-label="Randevu bilgisi">
            <h2 className="font-display text-lg font-bold text-slate-900">Görüşmede neler konuşuyoruz?</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
              <li className="flex gap-2.5"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-navy-800" /> Mevcut durumunuz ve hedefleriniz</li>
              <li className="flex gap-2.5"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-navy-800" /> Size uygun kanal ve hizmet önerisi</li>
              <li className="flex gap-2.5"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-navy-800" /> Gerçekçi zaman ve bütçe çerçevesi</li>
              <li className="flex gap-2.5"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-navy-800" /> Sorularınızın yanıtları</li>
            </ul>
            <p className="mt-6 rounded-xl bg-navy-50 px-4 py-3 text-xs leading-relaxed text-navy-800">
              Görüşme tamamen ücretsizdir ve herhangi bir satın alma zorunluluğu doğurmaz.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
