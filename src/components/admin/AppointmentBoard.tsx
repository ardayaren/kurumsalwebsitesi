"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { X, Phone, Mail, Search, CalendarCheck, Clock, Trash2 } from "lucide-react";
import { updateAppointmentStatus, deleteAppointment } from "@/lib/actions";

export type ApptStatus = "PENDING" | "CONFIRMED" | "DONE" | "CANCELLED";

export type Appt = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  topic: string;
  date: string;
  time: string;
  note: string | null;
  status: ApptStatus;
};

const STATUS: Record<ApptStatus, { label: string; cls: string }> = {
  PENDING: { label: "Bekliyor", cls: "border-amber-200 bg-amber-50 text-amber-700" },
  CONFIRMED: { label: "Onaylandı", cls: "border-navy-200 bg-navy-50 text-navy-800" },
  DONE: { label: "Tamamlandı", cls: "border-emerald-200 bg-emerald-50 text-emerald-700" },
  CANCELLED: { label: "İptal", cls: "border-slate-200 bg-slate-100 text-slate-500" },
};

export default function AppointmentBoard({ items }: { items: Appt[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const selected = items.find((a) => a.id === selectedId) || null;

  const filtered = useMemo(
    () =>
      items.filter((a) => {
        const q = query.toLocaleLowerCase("tr");
        const match =
          !q ||
          a.name.toLocaleLowerCase("tr").includes(q) ||
          a.phone.includes(q) ||
          a.topic.toLocaleLowerCase("tr").includes(q);
        return match && (filter === "ALL" || a.status === filter);
      }),
    [items, query, filter]
  );

  async function changeStatus(id: string, status: ApptStatus) {
    setBusy(true);
    await updateAppointmentStatus(id, status);
    router.refresh();
    setBusy(false);
  }

  async function remove() {
    if (!selected) return;
    if (!confirm(`${selected.name} randevusunu silmek istediğinize emin misiniz?`)) return;
    setBusy(true);
    await deleteAppointment(selected.id);
    setSelectedId(null);
    router.refresh();
    setBusy(false);
  }

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ad, telefon veya konu ara…"
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-navy-600" />
        </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-navy-600" aria-label="Durum filtresi">
          <option value="ALL">Tüm durumlar</option>
          {Object.entries(STATUS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
        </select>
      </div>

      <div className="nice-scroll mt-4 hidden overflow-x-auto rounded-2xl border border-slate-200 bg-white md:block">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <th className="px-4 py-3">Tarih / Saat</th>
              <th className="px-4 py-3">Kişi</th>
              <th className="px-4 py-3">Konu</th>
              <th className="px-4 py-3">Durum</th>
              <th className="px-4 py-3">Aksiyon</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.id} className="cursor-pointer border-b border-slate-100 transition last:border-0 hover:bg-slate-50" onClick={() => setSelectedId(a.id)}>
                <td className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">{a.date} • {a.time}</td>
                <td className="px-4 py-3"><p className="font-semibold text-slate-900">{a.name}</p><p className="text-xs text-slate-500">{a.phone}</p></td>
                <td className="px-4 py-3 text-slate-600">{a.topic}</td>
                <td className="px-4 py-3"><span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${STATUS[a.status].cls}`}>{STATUS[a.status].label}</span></td>
                <td className="px-4 py-3"><span className="text-xs font-semibold text-navy-800">İncele →</span></td>
              </tr>
            ))}
            {filtered.length === 0 && <tr><td colSpan={5} className="px-4 py-10 text-center text-slate-500">Kayıt bulunamadı.</td></tr>}
          </tbody>
        </table>
      </div>

      <div className="mt-4 space-y-3 md:hidden">
        {filtered.map((a) => (
          <button key={a.id} onClick={() => setSelectedId(a.id)} className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-left">
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold text-slate-900">{a.date} • {a.time}</p>
              <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${STATUS[a.status].cls}`}>{STATUS[a.status].label}</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">{a.name} • {a.topic}</p>
          </button>
        ))}
        {filtered.length === 0 && <p className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">Kayıt bulunamadı.</p>}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Randevu detayı">
          <div className="absolute inset-0 bg-navy-950/60" onClick={() => setSelectedId(null)} />
          <div className="nice-scroll absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto border-l border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="flex items-center gap-2 font-display text-lg font-bold text-slate-900"><CalendarCheck className="size-5 text-navy-800" />{selected.name}</h2>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-500"><Clock className="size-3.5" />{selected.date} • {selected.time}</p>
              </div>
              <button onClick={() => setSelectedId(null)} aria-label="Kapat" className="grid size-9 place-items-center rounded-xl border border-slate-200 bg-slate-100 text-slate-900"><X className="size-4" /></button>
            </div>

            <div className="mt-5 space-y-2.5 text-sm">
              <a href={`tel:${selected.phone}`} className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:text-slate-900"><Phone className="size-4 text-navy-800" />{selected.phone}</a>
              <a href={`mailto:${selected.email}`} className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:text-slate-900"><Mail className="size-4 text-navy-800" />{selected.email}</a>
              <p className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700"><strong className="text-slate-900">Konu:</strong> {selected.topic}</p>
              {selected.note && <div className="rounded-xl border border-slate-200 bg-white px-4 py-3"><strong className="text-slate-900">Not:</strong><p className="mt-1 whitespace-pre-wrap text-slate-600">{selected.note}</p></div>}
            </div>

            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Durum</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {(Object.keys(STATUS) as ApptStatus[]).map((k) => (
                  <button key={k} disabled={busy} onClick={() => changeStatus(selected.id, k)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${selected.status === k ? STATUS[k].cls : "border-slate-200 text-slate-500 hover:text-slate-900"}`}>{STATUS[k].label}</button>
                ))}
              </div>
            </div>

            <button onClick={remove} disabled={busy} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-red-300 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100 disabled:opacity-50">
              <Trash2 className="size-4" /> Kaydı Sil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
