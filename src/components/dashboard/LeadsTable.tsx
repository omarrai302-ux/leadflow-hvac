"use client";

import { StatusBadge } from "@/components/ui/Badge";
import { formatDateTime } from "@/lib/utils";
import type { Lead } from "@/types/database";
import { cn } from "@/lib/utils";

type Props = {
  leads: Lead[];
  selectedId: string | null;
  onSelect: (lead: Lead) => void;
};

export function LeadsTable({ leads, selectedId, onSelect }: Props) {
  if (leads.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 px-6 py-14 text-center">
        <p className="font-medium text-slate-700">No leads match your filters</p>
        <p className="mt-1 text-sm text-slate-500">
          Submit a test quote on the ComfortPro demo site to see leads here.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Mobile-friendly recent leads list */}
      <ul className="divide-y divide-slate-100 md:hidden">
        {leads.map((lead) => (
          <li key={lead.id}>
            <button
              type="button"
              onClick={() => onSelect(lead)}
              className={cn(
                "flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition hover:bg-slate-50",
                selectedId === lead.id && "bg-sky-50",
              )}
            >
              <div className="min-w-0">
                <p className="truncate font-semibold text-slate-900">{lead.name}</p>
                <p className="truncate text-sm text-slate-500">{lead.service}</p>
              </div>
              <StatusBadge status={lead.status} />
            </button>
          </li>
        ))}
      </ul>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-100 bg-slate-50/80 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-3.5">Lead</th>
              <th className="px-5 py-3.5">Service</th>
              <th className="px-5 py-3.5">ZIP</th>
              <th className="px-5 py-3.5">Status</th>
              <th className="px-5 py-3.5">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {leads.map((lead) => (
              <tr
                key={lead.id}
                onClick={() => onSelect(lead)}
                className={cn(
                  "cursor-pointer transition hover:bg-slate-50",
                  selectedId === lead.id && "bg-sky-50",
                )}
              >
                <td className="px-5 py-4">
                  <p className="font-semibold text-slate-900">{lead.name}</p>
                  <p className="text-xs text-slate-500">{lead.phone}</p>
                </td>
                <td className="px-5 py-4 text-slate-600">{lead.service}</td>
                <td className="px-5 py-4 text-slate-600">{lead.zip_code}</td>
                <td className="px-5 py-4">
                  <StatusBadge status={lead.status} />
                </td>
                <td className="px-5 py-4 text-slate-500">
                  {formatDateTime(lead.created_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
