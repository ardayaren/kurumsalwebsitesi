export const STATUS_LABEL: Record<string, { label: string; cls: string }> = {
  NEW: { label: "Yeni", cls: "border-navy-200 bg-navy-50 text-navy-800" },
  IN_REVIEW: { label: "İnceleniyor", cls: "border-amber-200 bg-amber-50 text-amber-700" },
  CONTACTED: { label: "Aranıldı", cls: "border-cyan-200 bg-cyan-50 text-cyan-700" },
  CLOSED: { label: "Kapandı", cls: "border-emerald-200 bg-emerald-50 text-emerald-700" },
};
