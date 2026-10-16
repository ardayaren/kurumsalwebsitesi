"use client";

import { useActionState } from "react";
import PageHero from "@/components/layout/PageHero";
import { BottomCtaSlim } from "@/components/home/BottomCta";
import { submitCareer, type ActionResult } from "@/lib/actions";
import { Briefcase, CheckCircle2 } from "lucide-react";

const ROLES = ["Performans Pazarlama Uzmanı", "SEO Uzmanı", "Sosyal Medya Yöneticisi", "E-Ticaret Uzmanı", "UI/UX Tasarımcı", "Frontend Developer (Next.js)", "Müşteri Başarı Yöneticisi"];

export default function KariyerClient() {
  const [state, action, pending] = useActionState(submitCareer, { ok: false } as ActionResult);

  return (
    <>
      <PageHero kicker="Kurumsal" title="Ekibimize katılın" desc="Performans kültürüne sahip, veriyle konuşan bir ekipte kariyerinizi büyütün. Açık pozisyonlara başvurun." crumbs={[{ label: "Anasayfa", href: "/" }, { label: "Kariyer" }]} />
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6" aria-label="Kariyer">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-slate-900">Açık pozisyonlar</h2>
            <ul className="mt-4 space-y-3">
              {ROLES.map((r) => (
                <li key={r} className="glass flex items-center gap-3 rounded-2xl px-5 py-4">
                  <Briefcase className="size-5 shrink-0 text-navy-800" />
                  <span className="text-sm font-semibold text-slate-900">{r}</span>
                  <span className="ml-auto rounded-full border border-navy-200 bg-navy-50 px-2.5 py-1 text-[11px] font-semibold text-navy-800">Aktif</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {state.ok ? (
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" role="status">
                <div className="flex items-center gap-3 border-b border-slate-100 bg-navy-950 px-6 py-4">
                  <span className="grid size-10 place-items-center rounded-xl bg-gold-500 text-navy-950"><CheckCircle2 className="size-5" /></span>
                  <div>
                    <h2 className="font-display text-lg font-bold text-white">Başvurunuz alındı!</h2>
                    <p className="text-xs text-slate-300">İK ekibimiz değerlendiriyor</p>
                  </div>
                </div>
                <div className="p-6 text-center text-sm text-slate-600">İK ekibimiz profilinizi inceleyip dönüş yapacak.</div>
              </div>
            ) : (
              <form action={action} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" aria-label="Kariyer başvuru formu">
                <div className="bg-navy-950 px-6 py-5 sm:px-8">
                  <h2 className="font-display text-xl font-bold text-white">Başvuru formu</h2>
                  <p className="mt-1 text-sm text-slate-300">Kariyer yolculuğunuza ilk adımı atın.</p>
                </div>
                <div className="grid gap-4 p-6 sm:p-8">
                  <input name="name" required minLength={3} placeholder="Ad Soyad *" className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-navy-700 focus:bg-white focus:ring-4 focus:ring-navy-100" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input name="email" type="email" required placeholder="E-posta *" className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-navy-700 focus:bg-white focus:ring-4 focus:ring-navy-100" />
                    <input name="phone" required minLength={7} placeholder="Telefon *" className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-navy-700 focus:bg-white focus:ring-4 focus:ring-navy-100" />
                  </div>
                  <select name="position" required defaultValue="" className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-navy-700 focus:bg-white focus:ring-4 focus:ring-navy-100">
                    <option value="" className="bg-white">Pozisyon seçin *</option>
                    {ROLES.map((r) => <option key={r} className="bg-white">{r}</option>)}
                  </select>
                  <input name="linkedin" placeholder="LinkedIn / Portföy linki" className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-navy-700 focus:bg-white focus:ring-4 focus:ring-navy-100" />
                  <textarea name="message" required minLength={10} rows={4} placeholder="Kendinizden kısaca bahsedin *" className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-navy-700 focus:bg-white focus:ring-4 focus:ring-navy-100" />
                  <input type="text" name="company_hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  {state.error && <p className="text-sm text-red-600" role="alert">{state.error}</p>}
                  <button disabled={pending} className="rounded-xl bg-navy-800 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-navy-900 disabled:opacity-60">
                    {pending ? "Gönderiliyor…" : "Başvuruyu Gönder"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      <BottomCtaSlim title="Markanız için mi görüşmek istiyorsunuz?" />
    </>
  );
}
