"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { X, Phone, Mail, Globe, Search, StickyNote } from "lucide-react";
import { updateLeadStatus, addLeadNote, deleteLead } from "@/lib/actions";
import { STATUS_LABEL } from "./status";

export type LeadStatus = "NEW" | "IN_REVIEW" | "CONTACTED" | "CLOSED";

export type Lead = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  website: string | null;
  service: string;
  message: string;
  status: LeadStatus;
  contactedAt: string | null;
  notes: { id: string; createdAt: string; author: string; text: string }[];
};

export default function LeadBoard({ leads }: { leads: Lead[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = leads.find((l) => l.id === selectedId) || null;
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);

  const filtered = useMemo(
    () =>
      leads.filter((l) => {
        const q = query.toLocaleLowerCase("tr");
        const match =
          !q ||
          l.name.toLocaleLowerCase("tr").includes(q) ||
          l.email.toLocaleLowerCase("tr").includes(q) ||
          l.phone.includes(q) ||
          l.service.toLocaleLowerCase("tr").includes(q);
        return match && (filter === "ALL" || l.status === filter);
      }),
    [leads, query, filter]
  );

  async function changeStatus(id: string, status: Lead["status"]) {
    setBusy(true);
    await updateLeadStatus(id, status);
    router.refresh();
    setBusy(false);
  }

  async function removeLead() {
    if (!selected) return;
    if (!confirm(`${selected.name} kaydını silmek istediğinize emin misiniz?`)) return;
    setBusy(true);
    await deleteLead(selected.id);
    setSelectedId(null);
    router.refresh();
    setBusy(false);
  }

  async function saveNote() {
    if (!selected || !note.trim()) return;
    setBusy(true);
    await addLeadNote(selected.id, note);
    setNote("");
    router.refresh();
    setBusy(false);
  }

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ad, e-posta, telefon veya hizmet ara…"
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-navy-600" />
        </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-navy-600" aria-label="Durum filtresi">
          <option value="ALL" className="bg-white">Tüm durumlar</option>
          {Object.entries(STATUS_LABEL).map(([k, v]) => <option key={k} value={k} className="bg-white">{v.label}</option>)}
        </select>
      </div>

      {/* Desktop table */}
      <div className="nice-scroll mt-4 hidden overflow-x-auto rounded-2xl border border-slate-200 md:block">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-white text-xs uppercase tracking-wider text-slate-500">
              <th className="px-4 py-3">Tarih</th>
              <th className="px-4 py-3">Müşteri</th>
              <th className="px-4 py-3">Hizmet</th>
              <th className="px-4 py-3">Durum</th>
              <th className="px-4 py-3">Aksiyon</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((l) => (
              <tr key={l.id} className="cursor-pointer border-b border-slate-100 transition last:border-0 hover:bg-slate-50" onClick={() => setSelectedId(l.id)}>
                <td className="whitespace-nowrap px-4 py-3 text-slate-500">{new Date(l.createdAt).toLocaleDateString("tr-TR", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</td>
                <td className="px-4 py-3"><p className="font-semibold text-slate-900">{l.name}</p><p className="text-xs text-slate-500">{l.email} • {l.phone}</p></td>
                <td className="px-4 py-3 text-slate-600">{l.service}</td>
                <td className="px-4 py-3"><span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${STATUS_LABEL[l.status].cls}`}>{STATUS_LABEL[l.status].label}</span></td>
                <td className="px-4 py-3"><span className="text-xs font-semibold text-navy-800">İncele →</span></td>
              </tr>
            ))}
            {filtered.length === 0 && <tr><td colSpan={5} className="px-4 py-10 text-center text-slate-500">Kayıt bulunamadı.</td></tr>}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="mt-4 space-y-3 md:hidden">
        {filtered.map((l) => (
          <button key={l.id} onClick={() => setSelectedId(l.id)} className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-left">
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold text-slate-900">{l.name}</p>
              <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${STATUS_LABEL[l.status].cls}`}>{STATUS_LABEL[l.status].label}</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">{l.service} • {new Date(l.createdAt).toLocaleDateString("tr-TR")}</p>
            <p className="mt-1 text-xs text-slate-500">{l.phone}</p>
          </button>
        ))}
        {filtered.length === 0 && <p className="rounded-2xl border border-slate-200 p-8 text-center text-sm text-slate-500">Kayıt bulunamadı.</p>}
      </div>

      {/* Slide-over drawer */}
      {selected && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Talep detayı">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSelectedId(null)} />
          <div className="nice-scroll absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto border-l border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-lg font-bold text-slate-900">{selected.name}</h2>
                <p className="mt-0.5 text-xs text-slate-500">{new Date(selected.createdAt).toLocaleString("tr-TR")}</p>
                {selected.contactedAt && (
                  <p className="mt-1 text-xs text-navy-800">
                    İlk dönüş: {new Date(selected.contactedAt).toLocaleString("tr-TR")}
                  </p>
                )}
              </div>
              <button onClick={() => setSelectedId(null)} aria-label="Kapat" className="grid size-9 place-items-center rounded-xl border border-slate-200 bg-slate-100 text-slate-900"><X className="size-4" /></button>
            </div>

            <div className="mt-5 space-y-2.5 text-sm">
              <a href={`tel:${selected.phone}`} className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:text-slate-900"><Phone className="size-4 text-navy-800" />{selected.phone}</a>
              <a href={`mailto:${selected.email}`} className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:text-slate-900"><Mail className="size-4 text-navy-800" />{selected.email}</a>
              {selected.website && <p className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700"><Globe className="size-4 text-navy-800" />{selected.website}</p>}
              <p className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700"><strong className="text-slate-900">Hizmet:</strong> {selected.service}</p>
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3"><strong className="text-slate-900">Mesaj:</strong><p className="mt-1 whitespace-pre-wrap text-slate-600">{selected.message}</p></div>
            </div>

            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Durum</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {Object.entries(STATUS_LABEL).map(([k, v]) => (
                  <button key={k} disabled={busy} onClick={() => changeStatus(selected.id, k as Lead["status"])}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${selected.status === k ? v.cls : "border-slate-200 text-slate-500 hover:text-slate-900"}`}>{v.label}</button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500"><StickyNote className="size-3.5" /> İç notlar ({selected.notes.length})</p>
              <div className="mt-2 space-y-2">
                {selected.notes.map((n) => (
                  <div key={n.id} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm">
                    <p className="text-slate-700">{n.text}</p>
                    <p className="mt-1 text-[11px] text-slate-500">{n.author} • {new Date(n.createdAt).toLocaleString("tr-TR")}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Not ekle…" className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-navy-600" />
                <button onClick={saveNote} disabled={busy || !note.trim()} className="rounded-xl bg-navy-800 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50">Ekle</button>
              </div>
            </div>

            <button onClick={removeLead} disabled={busy} className="mt-6 w-full rounded-xl border border-red-300 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100 disabled:opacity-50">
              Kaydı Sil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
