"use client";

import { StatusBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Input";
import { Spinner } from "@/components/ui/Spinner";
import { formatDate, formatDateTime, formatPhoneDisplay } from "@/lib/utils";
import type { Lead, LeadStatus } from "@/types/database";
import { LEAD_STATUSES, LEAD_STATUS_LABELS } from "@/types/database";
import { useEffect, useState } from "react";

type Props = {
  lead: Lead | null;
  onClose: () => void;
  onUpdated: (lead: Lead) => void;
};

export function LeadDetailPanel({ lead, onClose, onUpdated }: Props) {
  const [status, setStatus] = useState<LeadStatus | "">("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setStatus("");
    setError(null);
  }, [lead?.id]);

  if (!lead) return null;

  const currentStatus = status || lead.status;

  async function saveStatus() {
    if (!lead || currentStatus === lead.status) return;
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`/api/leads/${lead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: currentStatus }),
      });
      const json = (await res.json()) as { lead?: Lead; error?: string };
      if (!res.ok || !json.lead) {
        setError(json.error ?? "Could not update status");
        return;
      }
      onUpdated(json.lead);
      setStatus("");
    } catch {
      setError("Network error");
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
        aria-label="Close panel"
        onClick={onClose}
      />
      <aside className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-[var(--color-border)] bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4">
          <div>
            <h2 className="font-semibold text-slate-900">{lead.name}</h2>
            <p className="text-xs text-slate-500">Received {formatDateTime(lead.created_at)}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
          <div className="flex items-center gap-2">
            <StatusBadge status={lead.status} />
          </div>

          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-slate-500">Phone</dt>
              <dd className="font-medium text-slate-900">
                <a href={`tel:${lead.phone.replace(/\D/g, "")}`} className="hover:text-[var(--color-brand-600)]">
                  {formatPhoneDisplay(lead.phone)}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Email</dt>
              <dd className="font-medium text-slate-900">
                <a href={`mailto:${lead.email}`} className="hover:text-[var(--color-brand-600)]">
                  {lead.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Service</dt>
              <dd className="font-medium text-slate-900">{lead.service}</dd>
            </div>
            <div>
              <dt className="text-slate-500">ZIP code</dt>
              <dd className="font-medium text-slate-900">{lead.zip_code}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Preferred date</dt>
              <dd className="font-medium text-slate-900">{formatDate(lead.appointment_date)}</dd>
            </div>
            {lead.message && (
              <div>
                <dt className="text-slate-500">Message</dt>
                <dd className="mt-1 whitespace-pre-wrap rounded-lg bg-slate-50 p-3 text-slate-800">
                  {lead.message}
                </dd>
              </div>
            )}
          </dl>

          <div className="border-t border-[var(--color-border)] pt-4">
            <Select
              label="Update status"
              value={currentStatus}
              onChange={(e) => setStatus(e.target.value as LeadStatus)}
            >
              {LEAD_STATUSES.map((s) => (
                <option key={s} value={s}>
                  {LEAD_STATUS_LABELS[s]}
                </option>
              ))}
            </Select>
            {error && (
              <p className="mt-2 text-xs text-red-600" role="alert">
                {error}
              </p>
            )}
            <Button
              type="button"
              className="mt-3 w-full"
              disabled={saving || currentStatus === lead.status}
              onClick={saveStatus}
            >
              {saving ? (
                <span className="inline-flex items-center gap-2">
                  <Spinner className="h-4 w-4 text-white" />
                  Saving…
                </span>
              ) : (
                "Save status"
              )}
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
