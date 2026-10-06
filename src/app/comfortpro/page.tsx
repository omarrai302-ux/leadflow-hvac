import { LeadCaptureForm } from "@/components/leads/LeadCaptureForm";
import { ComfortProHeader } from "@/components/comfortpro/ComfortProHeader";
import { comfortPro } from "@/config/comfortpro";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ComfortPro HVAC | 24/7 Heating & Air in Dallas, TX",
  description:
    "HVAC repair, installation, and emergency service for Dallas homeowners. Get a free quote or call ComfortPro HVAC today.",
};

function CtaPrimary({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex w-full items-center justify-center rounded-lg bg-[#e85d04] px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-[#d14f00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e85d04] sm:w-auto"
    >
      {children}
    </a>
  );
}

function CtaSecondary({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <a
      href={href}
      className={
        light
          ? "inline-flex w-full items-center justify-center rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          : "inline-flex w-full items-center justify-center rounded-lg border border-[#0a1f36]/20 bg-white px-6 py-3.5 text-base font-semibold text-[#0a1f36] transition hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1f36] sm:w-auto"
      }
    >
      {children}
    </a>
  );
}

export default function ComfortProPage() {
  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#1c1917]">
      <ComfortProHeader />

      <main>
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[#0a1f36] text-white">
          <Image
            src={comfortPro.hero.image}
            alt={comfortPro.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%] opacity-45"
          />
          <div className="absolute inset-0 bg-[#0a1f36]/75" />

          <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
            <p className="inline-flex items-center rounded-full border border-[#ffb347]/40 bg-[#ffb347]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#ffb347] sm:text-sm">
              {comfortPro.hero.badge}
            </p>
            <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-[2rem] font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {comfortPro.hero.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-sky-100/95 sm:text-xl">
              {comfortPro.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaPrimary href="#quote">{comfortPro.hero.primaryCta}</CtaPrimary>
              <CtaSecondary href={`tel:${comfortPro.phoneTel}`} light>
                {comfortPro.hero.secondaryCta} · {comfortPro.phone}
              </CtaSecondary>
            </div>

            <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base">
              <span className="text-[#ffb347]" aria-hidden>
                {comfortPro.rating.stars}
              </span>
              <span className="font-semibold text-white">{comfortPro.rating.score}</span>
              <span className="text-sky-200/80">· {comfortPro.rating.label}</span>
            </p>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="border-b border-stone-200 bg-white" aria-label="Trust highlights">
          <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 text-sm font-medium text-[#0a1f36] sm:justify-between sm:px-6 sm:py-5">
            {comfortPro.trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-emerald-600" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* EMERGENCY CTA */}
        <section
          className="border-b border-orange-200/70 bg-[#fff4eb]"
          aria-labelledby="emergency-heading"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-6 sm:py-10">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-[#c2410c]">
                Emergency HVAC
              </p>
              <h2
                id="emergency-heading"
                className="mt-1 text-2xl font-bold tracking-tight text-[#9a3412] sm:text-3xl"
              >
                {comfortPro.emergency.headline}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-[#7c2d12]/90 sm:text-lg">
                {comfortPro.emergency.body}
              </p>
            </div>
            <a
              href="#quote"
              className="inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-[#c2410c] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#9a3412] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c2410c] sm:w-auto"
            >
              {comfortPro.emergency.cta}
            </a>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="scroll-mt-24 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[#0a1f36] sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-3 text-base leading-relaxed text-stone-600">
                Repair, installation, and maintenance for Dallas-area homes—backed by clear pricing and responsive scheduling.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {comfortPro.services.map((service) => (
                <article
                  key={service.title}
                  className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm"
                >
                  <div className="relative h-40 w-full sm:h-44">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#0a1f36]">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">
                      {service.description}
                    </p>
                    <a
                      href="#quote"
                      className="mt-4 inline-block text-sm font-semibold text-[#c2410c] hover:underline"
                    >
                      Request this service →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="why-us" className="scroll-mt-24 border-y border-stone-200 bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[#0a1f36] sm:text-4xl">
              Why Choose ComfortPro
            </h2>
            <p className="mt-3 max-w-2xl text-base text-stone-600">
              Straightforward service from a Dallas HVAC team built for homeowners who want answers fast.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {comfortPro.whyChoose.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-stone-200 bg-[#f4f1eb]/70 p-5"
                >
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700"
                    aria-hidden
                  >
                    ✓
                  </div>
                  <h3 className="mt-3 font-semibold text-[#0a1f36]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-14 sm:py-20" aria-labelledby="how-heading">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2
              id="how-heading"
              className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[#0a1f36] sm:text-4xl"
            >
              How It Works
            </h2>
            <p className="mt-3 max-w-2xl text-base text-stone-600">
              A simple path from request to resolved—built for busy Dallas homeowners.
            </p>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {comfortPro.steps.map((step) => (
                <li
                  key={step.step}
                  className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0a1f36] text-sm font-bold text-white">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-semibold text-[#0a1f36]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* REVIEWS — clearly sample/demo */}
        <section id="reviews" className="scroll-mt-24 border-y border-stone-200 bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[#0a1f36] sm:text-4xl">
              Sample Reviews
            </h2>
            <p className="mt-3 max-w-2xl text-base text-stone-600">
              These are sample comments for demonstration only—not real customer testimonials.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {comfortPro.testimonials.map((t) => (
                <blockquote
                  key={t.author}
                  className="flex flex-col rounded-2xl border border-stone-200 bg-[#f4f1eb]/70 p-6"
                >
                  <span className="inline-flex w-fit rounded-full bg-stone-200/80 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-stone-600">
                    Sample
                  </span>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-700">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-5 border-t border-stone-200 pt-4">
                    <p className="text-sm font-semibold text-[#0a1f36]">{t.author}</p>
                    <p className="text-xs text-stone-500">
                      {t.location} · {t.note}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section id="areas" className="scroll-mt-24 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[#0a1f36] sm:text-4xl">
              Service Areas
            </h2>
            <p className="mt-3 max-w-2xl text-base text-stone-600">
              Serving homeowners across Dallas and surrounding DFW communities.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
              {comfortPro.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-xl border border-stone-200 bg-white px-4 py-4 text-center text-sm font-semibold text-[#0a1f36] shadow-sm"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* QUOTE FORM */}
        <section id="quote" className="scroll-mt-24 border-t border-stone-200 bg-[#0a1f36] py-14 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-12">
            <div className="text-white">
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
                {comfortPro.form.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-sky-100/90">
                {comfortPro.form.intro}
              </p>
              <ul className="mt-8 space-y-3 text-sm text-sky-100/90">
                <li className="flex gap-2">
                  <span className="text-[#ffb347]" aria-hidden>
                    ✓
                  </span>
                  Same-day appointments when available
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ffb347]" aria-hidden>
                    ✓
                  </span>
                  Upfront pricing before work begins
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ffb347]" aria-hidden>
                    ✓
                  </span>
                  Licensed technicians across Dallas
                </li>
              </ul>
              <div className="mt-8 rounded-xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-200">
                  Prefer to call?
                </p>
                <a
                  href={`tel:${comfortPro.phoneTel}`}
                  className="mt-2 block text-2xl font-bold text-white hover:text-[#ffb347] sm:text-3xl"
                >
                  {comfortPro.phone}
                </a>
                <p className="mt-1 text-sm text-sky-200/80">{comfortPro.hours.emergency}</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-xl sm:p-8">
              <LeadCaptureForm
                businessId={comfortPro.id}
                serviceOptions={comfortPro.form.services}
                submitLabel={comfortPro.form.submitLabel}
                successMessage={comfortPro.form.successMessage}
                cardTitle={comfortPro.form.cardTitle}
                cardHint={comfortPro.form.cardHint}
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-stone-200 bg-[#f4f1eb] py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[#0a1f36] sm:text-4xl">
              {comfortPro.finalCta.headline}
            </h2>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <CtaPrimary href="#quote">{comfortPro.finalCta.primaryCta}</CtaPrimary>
              <CtaSecondary href={`tel:${comfortPro.phoneTel}`}>
                {comfortPro.finalCta.secondaryCta} · {comfortPro.phone}
              </CtaSecondary>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky mobile CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-white/95 p-3 backdrop-blur-md sm:hidden">
        <div className="mx-auto flex max-w-lg gap-2">
          <a
            href={`tel:${comfortPro.phoneTel}`}
            className="inline-flex flex-1 items-center justify-center rounded-lg border border-[#0a1f36]/15 bg-white px-3 py-3 text-sm font-semibold text-[#0a1f36]"
          >
            Call Now
          </a>
          <a
            href="#quote"
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-[#e85d04] px-3 py-3 text-sm font-semibold text-white"
          >
            Free Quote
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-[#14304f] bg-[#071525] pb-24 text-sky-100/90 sm:pb-0">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-white">{comfortPro.name}</p>
            <p className="mt-1 text-sm text-sky-200/80">{comfortPro.city}</p>
            <p className="mt-4 text-sm leading-relaxed text-sky-200/70">
              Heating, air conditioning, and emergency HVAC service for homeowners across the Dallas–Fort Worth area.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`tel:${comfortPro.phoneTel}`} className="font-medium hover:text-white">
                  {comfortPro.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${comfortPro.email}`} className="hover:text-white">
                  {comfortPro.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">
              Business Hours
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-sky-100/80">
              <li>{comfortPro.hours.weekdays}</li>
              <li>{comfortPro.hours.saturday}</li>
              <li>{comfortPro.hours.sunday}</li>
              <li className="pt-1 font-medium text-[#ffb347]">{comfortPro.hours.emergency}</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">
              Service Areas
            </p>
            <p className="mt-3 text-sm leading-relaxed text-sky-100/80">
              {comfortPro.serviceAreas.join(" · ")}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <Link href="/comfortpro/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/comfortpro/terms" className="hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 text-center text-xs text-sky-200/50">
          <p>
            © {new Date().getFullYear()} {comfortPro.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
