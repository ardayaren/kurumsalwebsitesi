import { Zap, AlertCircle } from "lucide-react";
import { adminLogin } from "@/lib/actions";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin Giriş", robots: { index: false, follow: false } };

export default async function AdminLogin({ searchParams }: { searchParams: Promise<{ err?: string }> }) {
  const { err } = await searchParams;
  return (
    <main className="grid min-h-screen place-items-center bg-[#F4F6FB] px-4">
      <form action={adminLogin} className="glass w-full max-w-sm rounded-2xl p-8" aria-label="Admin giriş">
        <span className="grid size-11 place-items-center rounded-xl bg-navy-800">
          <Zap className="size-5 text-white" />
        </span>
        <h1 className="mt-4 font-display text-xl font-extrabold text-slate-900">Admin Girişi</h1>
        <p className="mt-1 text-sm text-slate-500">Talep paneline erişmek için giriş yapın.</p>
        {err && (
          <p className="mt-4 flex items-center gap-2 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">
            <AlertCircle className="size-4" /> Kullanıcı adı veya şifre hatalı.
          </p>
        )}
        <div className="mt-6 space-y-3">
          <input name="user" required placeholder="Kullanıcı adı" autoComplete="username" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-navy-600" />
          <input name="pass" type="password" required placeholder="Şifre" autoComplete="current-password" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-navy-600" />
          <button className="w-full rounded-xl bg-navy-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-navy-900">
            Giriş Yap
          </button>
        </div>
      </form>
    </main>
  );
}
