"use client";

import { comfortPro } from "@/config/comfortpro";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#areas", label: "Areas" },
  { href: "#quote", label: "Get a Quote" },
];

export function ComfortProHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#14304f]/80 bg-[#0a1f36]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5">
        <Link href="/comfortpro" className="min-w-0">
          <span className="block text-base font-bold tracking-tight sm:text-lg">
            {comfortPro.name}
          </span>
          <span className="block text-xs text-sky-200/80">
            {comfortPro.city} · Licensed & insured
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-sky-100/90 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${comfortPro.phoneTel}`}
            className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Call Now
          </a>
          <a
            href="#quote"
            className="rounded-lg bg-[#e85d04] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#d14f00] sm:px-4"
          >
            Free Quote
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-sky-100 lg:hidden"
            aria-expanded={open}
            aria-controls="comfortpro-mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="comfortpro-mobile-nav"
          className="border-t border-white/10 px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1 text-sm text-sky-50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={`tel:${comfortPro.phoneTel}`}
                className="flex w-full items-center justify-center rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Call {comfortPro.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
