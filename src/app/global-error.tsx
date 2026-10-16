"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="tr">
      <body className="grid min-h-screen place-items-center bg-[#F4F6FB] px-4">
        <div className="text-center">
          <p className="font-display text-6xl font-extrabold text-navy-800">!</p>
          <h1 className="mt-4 font-display text-2xl font-bold text-slate-900">Bir şeyler ters gitti</h1>
          <p className="mt-2 text-sm text-slate-500">Lütfen sayfayı yenileyin veya daha sonra tekrar deneyin.</p>
          <button
            onClick={reset}
            className="mt-6 rounded-xl bg-navy-800 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-900"
          >
            Tekrar Dene
          </button>
        </div>
      </body>
    </html>
  );
}
