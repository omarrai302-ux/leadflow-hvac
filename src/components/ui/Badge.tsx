import { cn } from "@/lib/utils";
import type { LeadStatus } from "@/types/database";
import { LEAD_STATUS_LABELS } from "@/types/database";

const statusStyles: Record<LeadStatus, string> = {
  new: "bg-sky-100 text-sky-800 ring-sky-200",
  contacted: "bg-violet-100 text-violet-800 ring-violet-200",
  qualified: "bg-amber-100 text-amber-900 ring-amber-200",
  booked: "bg-emerald-100 text-emerald-800 ring-emerald-200",
  completed: "bg-slate-100 text-slate-700 ring-slate-200",
  lost: "bg-rose-100 text-rose-800 ring-rose-200",
};

export function StatusBadge({ status }: { status: LeadStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
        statusStyles[status],
      )}
    >
      {LEAD_STATUS_LABELS[status]}
    </span>
  );
}
