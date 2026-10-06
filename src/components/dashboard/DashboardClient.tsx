"use client";

import { LeadDetailPanel } from "@/components/dashboard/LeadDetailPanel";
import { LeadsTable } from "@/components/dashboard/LeadsTable";
import { StatCard } from "@/components/dashboard/StatCard";
import { Input, Select } from "@/components/ui/Input";
import type { Lead, LeadStatus } from "@/types/database";
import { LEAD_STATUSES, LEAD_STATUS_LABELS } from "@/types/database";
import { useMemo, useState } from "react";

type Props = {
  initialLeads: Lead[];
  businessName: string;
};

function greetingForHour(hour: number): string {
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

function shortBusinessName(name: string): string {
  return name.replace(/\s+HVAC$/i, "").trim() || name;
}

function computeStats(leads: Lead[]) {
  const total = leads.length;
  const newCount = leads.filter((l) => l.status === "new").length;
  const booked = leads.filter((l) => l.status === "booked").length;
  const conversionRate =
    total === 0 ? 0 : Math.round((booked / total) * 1000) / 10;
  return { total, newCount, booked, conversionRate };
}

export function DashboardClient({ initialLeads, businessName }: Props) {
  const [leads, setLeads] = useState(initialLeads);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "all">("all");
  const [selected, setSelected] = useState<Lead | null>(null);

  const stats = useMemo(() => computeStats(leads), [leads]);
  const greeting = greetingForHour(new Date().getHours());
  const displayName = shortBusinessName(businessName);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return leads.filter((lead) => {
      if (statusFilter !== "all" && lead.status !== statusFilter) return false;
      if (!q) return true;
      return (
        lead.name.toLowerCase().includes(q) ||
        lead.email.toLowerCase().includes(q) ||
        lead.phone.includes(q) ||
        lead.service.toLowerCase().includes(q) ||
        lead.zip_code.includes(q)
      );
    });
  }, [leads, search, statusFilter]);

  function handleUpdated(updated: Lead) {
    setLeads((prev) => prev.map((l) => (l.id === updated.id ? updated : l)));
    setSelected(updated);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-[#0a1f36] sm:text-3xl">
          {greeting}, {displayName}{" "}
          <span aria-hidden>👋</span>
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Here&apos;s how your lead pipeline looks today.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard label="Total Leads" value={stats.total} accent="navy" />
        <StatCard label="New Leads" value={stats.newCount} accent="blue" />
        <StatCard label="Booked" value={stats.booked} accent="green" />
        <StatCard
          label="Conversion"
          value={`${stats.conversionRate}%`}
          accent="amber"
        />
      </div>

      <section className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#0a1f36]">Recent Leads</h2>
            <p className="text-sm text-slate-500">
              {filtered.length} {filtered.length === 1 ? "lead" : "leads"} shown
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="flex-1">
            <Input
              label="Search leads"
              placeholder="Name, email, phone, service, ZIP…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="w-full sm:w-48">
            <Select
              label="Status"
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value as LeadStatus | "all")
              }
            >
              <option value="all">All statuses</option>
              {LEAD_STATUSES.map((s) => (
                <option key={s} value={s}>
                  {LEAD_STATUS_LABELS[s]}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <LeadsTable
          leads={filtered}
          selectedId={selected?.id ?? null}
          onSelect={setSelected}
        />
      </section>

      {selected && (
        <LeadDetailPanel
          lead={selected}
          onClose={() => setSelected(null)}
          onUpdated={handleUpdated}
        />
      )}
    </div>
  );
}
