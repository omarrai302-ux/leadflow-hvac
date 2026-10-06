import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string | number;
  sub?: string;
  accent?: "blue" | "green" | "amber" | "slate" | "navy";
}) {
  const accents = {
    blue: {
      bar: "bg-sky-500",
      value: "text-sky-700",
      soft: "from-sky-50 to-white",
    },
    green: {
      bar: "bg-emerald-500",
      value: "text-emerald-700",
      soft: "from-emerald-50 to-white",
    },
    amber: {
      bar: "bg-amber-500",
      value: "text-amber-700",
      soft: "from-amber-50 to-white",
    },
    slate: {
      bar: "bg-slate-400",
      value: "text-slate-800",
      soft: "from-slate-50 to-white",
    },
    navy: {
      bar: "bg-[#0a1f36]",
      value: "text-[#0a1f36]",
      soft: "from-[#eef3f8] to-white",
    },
  }[accent ?? "slate"];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b p-5 shadow-sm",
        accents.soft,
      )}
    >
      <div className={cn("absolute left-0 top-0 h-1 w-full", accents.bar)} />
      <p className={cn("mt-1 text-3xl font-bold tracking-tight sm:text-4xl", accents.value)}>
        {value}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
      {sub && <p className="mt-1 text-xs text-slate-400">{sub}</p>}
    </div>
  );
}
