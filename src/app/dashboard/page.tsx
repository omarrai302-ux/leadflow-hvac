import { DashboardClient } from "@/components/dashboard/DashboardClient";
import { createClient } from "@/lib/supabase/server";
import type { Lead } from "@/types/database";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/dashboard");
  }

  const { data: membership, error: memberError } = await supabase
    .from("business_users")
    .select("business_id, businesses(name)")
    .eq("user_id", user.id)
    .maybeSingle();

  if (memberError || !membership) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
        <h1 className="font-semibold text-amber-900">Account not linked to a business</h1>
        <p className="mt-2 text-sm text-amber-800">
          Ask your administrator to add your user to{" "}
          <code className="rounded bg-amber-100 px-1">business_users</code> in Supabase, or run
          the SQL snippet in{" "}
          <code className="rounded bg-amber-100 px-1">supabase/migrations/001_initial_schema.sql</code>.
        </p>
        <Link href="/login" className="mt-4 inline-block text-sm font-medium text-amber-900 underline">
          Back to login
        </Link>
      </div>
    );
  }

  const businessRow = membership.businesses as { name: string } | { name: string }[] | null;
  const businessName = Array.isArray(businessRow)
    ? businessRow[0]?.name
    : businessRow?.name ?? "Your business";

  const { data: leads, error: leadsError } = await supabase
    .from("leads")
    .select("*")
    .eq("business_id", membership.business_id)
    .order("created_at", { ascending: false });

  if (leadsError) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6" role="alert">
        <h1 className="font-semibold text-red-900">Could not load leads</h1>
        <p className="mt-2 text-sm text-red-800">{leadsError.message}</p>
      </div>
    );
  }

  return (
    <DashboardClient
      initialLeads={(leads ?? []) as Lead[]}
      businessName={businessName}
    />
  );
}
