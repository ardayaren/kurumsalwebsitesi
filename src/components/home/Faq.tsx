"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-[15px] font-semibold text-slate-900">{f.q}</span>
              <span className={`grid size-8 shrink-0 place-items-center rounded-full border border-slate-200 bg-slate-50 transition ${isOpen ? "rotate-45 bg-gold-100" : ""}`}>
                <Plus className="size-4 text-navy-800" />
              </span>
            </button>
            {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
