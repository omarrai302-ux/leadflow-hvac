import { landingContent, leadflowSite } from "@/config/site";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-900">{landingContent.footer.company}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
            {landingContent.footer.blurb}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Product
          </p>
          <ul className="mt-3 space-y-2">
            {landingContent.footer.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Demo
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Try the{" "}
            <Link href="/comfortpro" className="font-medium text-[var(--color-brand-600)] hover:underline">
              ComfortPro HVAC
            </Link>{" "}
            sample site and submit a test lead.
          </p>
        </div>
      </div>
      <div className="border-t border-[var(--color-border)] py-6 text-center text-xs text-slate-500">
        © {year} {leadflowSite.name}. All rights reserved.
      </div>
    </footer>
  );
}
