import { LoginForm } from "@/components/auth/LoginForm";
import { Card } from "@/components/ui/Card";
import { leadflowSite } from "@/config/site";
import Link from "next/link";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-surface)] px-4">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-brand-600)] text-sm font-bold text-white">
          LF
        </span>
        <span className="font-semibold text-slate-900">{leadflowSite.name}</span>
      </Link>
      <Card className="w-full max-w-md p-6 sm:p-8">
        <h1 className="text-xl font-semibold text-slate-900">Sign in to your dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">
          Use the Supabase Auth user linked to your HVAC business.
        </p>
        <div className="mt-6">
          <Suspense fallback={<p className="text-sm text-slate-500">Loading…</p>}>
            <LoginForm />
          </Suspense>
        </div>
      </Card>
      <p className="mt-6 text-center text-xs text-slate-500">
        <Link href="/comfortpro" className="underline hover:text-slate-700">
          Submit a test lead
        </Link>{" "}
        on the demo site first, then view it here after signing in.
      </p>
    </div>
  );
}
