"use client";

import { useActionState, useState } from "react";
import { PhoneCall, X, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { submitCallback, type ActionResult } from "@/lib/actions";

const initial: ActionResult = { ok: false };

export default function CallbackWidget() {
  const [open, setOpen] = useState(false);
  const [state, action, pending] = useActionState(submitCallback, initial);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Sizi arayalım"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gold-500 px-4 py-3.5 text-sm font-bold text-navy-950 shadow-[0_12px_40px_-10px_rgba(229,168,18,0.7)] transition hover:bg-gold-400"
      >
        <PhoneCall className="size-5" />
        <span className="hidden sm:inline">Sizi Arayalım</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4" role="dialog" aria-modal="true" aria-label="Sizi arayalım">
          <div className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
            <div className="relative overflow-hidden bg-navy-950 px-6 py-5">
              <div className="bg-grid-light absolute inset-0" aria-hidden="true" />
              <button onClick={() => setOpen(false)} aria-label="Kapat" className="absolute right-3 top-3 grid size-8 place-items-center rounded-lg bg-white/10 text-white transition hover:bg-white/20">
                <X className="size-4" />
              </button>
              <div className="relative flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-gold-500 text-navy-950"><PhoneCall className="size-5" /></span>
                <div>
                  <h2 className="font-display text-base font-bold text-white">Sizi Arayalım</h2>
                  <p className="text-xs text-slate-300">Numaranızı bırakın, 4 saat içinde arayalım.</p>
                </div>
              </div>
            </div>

            {state.ok ? (
              <div className="p-6 text-center" role="status">
                <CheckCircle2 className="mx-auto size-10 text-navy-800" />
                <p className="mt-3 text-sm font-semibold text-slate-900">Talebiniz alındı!</p>
                <p className="mt-1 text-xs text-slate-500">Ekibimiz kısa süre içinde sizi arayacak.</p>
              </div>
            ) : (
              <form action={action} className="space-y-3 p-6">
                <input name="name" required minLength={3} placeholder="Ad Soyad *" className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-navy-700 focus:bg-white focus:ring-4 focus:ring-navy-100" />
                <input name="phone" required minLength={7} inputMode="tel" autoComplete="tel" placeholder="Telefon *" className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-navy-700 focus:bg-white focus:ring-4 focus:ring-navy-100" />
                <input type="text" name="company_hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                {state.error && (
                  <p className="flex items-center gap-2 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-xs text-red-600" role="alert">
                    <AlertCircle className="size-3.5" /> {state.error}
                  </p>
                )}
                <button type="submit" disabled={pending} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-800 px-4 py-3 text-sm font-bold text-white transition hover:bg-navy-900 disabled:opacity-60">
                  <Send className="size-4" /> {pending ? "Gönderiliyor…" : "Geri Arama İste"}
                </button>
                <p className="text-center text-[11px] text-slate-400">Bilgileriniz yalnızca sizi aramak için kullanılır.</p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
