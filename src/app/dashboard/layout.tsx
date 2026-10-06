import { LogoutButton } from "@/components/auth/LogoutButton";
import { leadflowSite } from "@/config/site";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f4f6f8]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0a1f36] text-xs font-bold text-white">
              LF
            </span>
            <div>
              <span className="block text-sm font-semibold text-[#0a1f36]">
                {leadflowSite.name}
              </span>
              <span className="block text-xs text-slate-500">Lead dashboard</span>
            </div>
          </Link>
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/comfortpro"
              className="hidden text-sm font-medium text-slate-600 hover:text-[#0a1f36] sm:inline"
            >
              View website
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</div>
    </div>
  );
}
