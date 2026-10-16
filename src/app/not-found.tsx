import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-4 pt-16">
      <div className="text-center">
        <p className="font-display text-7xl font-extrabold text-navy-800">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-slate-900">Sayfa bulunamadı</h1>
        <p className="mt-2 text-sm text-slate-500">Aradığınız sayfa taşınmış veya silinmiş olabilir.</p>
        <Link href="/" className="mt-6 inline-flex rounded-xl bg-navy-800 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-900">
          Anasayfaya Dön
        </Link>
      </div>
    </main>
  );
}
