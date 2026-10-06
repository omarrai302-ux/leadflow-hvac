import { Spinner } from "@/components/ui/Spinner";

export default function DashboardLoading() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3">
      <Spinner />
      <p className="text-sm text-slate-500">Loading your leads…</p>
    </div>
  );
}
