"use client";

import { leadflowSite } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "/comfortpro", label: "Live demo" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-brand-600)] text-sm font-bold text-white">
            LF
          </span>
          <span className="font-semibold tracking-tight text-slate-900">
            {leadflowSite.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink href={leadflowSite.loginHref} variant="ghost" size="sm">
            Log in
          </ButtonLink>
          <ButtonLink href="#demo" size="sm">
            Request a Demo
          </ButtonLink>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-600 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={cn(
          "border-t border-[var(--color-border)] bg-white px-4 pb-4 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-3 pt-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href={leadflowSite.loginHref} variant="outline" size="sm" className="w-full">
            Log in
          </ButtonLink>
          <ButtonLink href="#demo" size="sm" className="w-full">
            Request a Demo
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
