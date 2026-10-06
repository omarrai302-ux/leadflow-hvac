import { DemoRequestSection } from "@/components/marketing/DemoRequestSection";
import { FeatureIcon } from "@/components/marketing/FeatureIcon";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { ButtonLink } from "@/components/ui/Button";
import { landingContent, leadflowSite } from "@/config/site";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-[var(--color-surface)]">
          <div
            className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[var(--color-brand-100)] blur-3xl"
            aria-hidden
          />
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand-600)]">
                {leadflowSite.tagline}
              </p>
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl text-balance">
                {landingContent.headline}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {landingContent.subheadline}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#demo" size="lg">
                  {landingContent.primaryCta}
                </ButtonLink>
                <ButtonLink href="#how-it-works" variant="outline" size="lg">
                  {landingContent.secondaryCta}
                </ButtonLink>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-lg">
                <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
                  <span className="text-sm font-medium text-slate-500">Today&apos;s pipeline</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                    Live
                  </span>
                </div>
                <ul className="mt-4 space-y-3">
                  {[
                    { name: "Sarah M.", service: "AC repair", status: "New", zip: "62704" },
                    { name: "David R.", service: "Furnace install", status: "Contacted", zip: "62711" },
                    { name: "Kim W.", service: "Maintenance", status: "Booked", zip: "62702" },
                  ].map((row) => (
                    <li
                      key={row.name}
                      className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5 text-sm"
                    >
                      <div>
                        <p className="font-medium text-slate-900">{row.name}</p>
                        <p className="text-xs text-slate-500">
                          {row.service} · {row.zip}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-slate-600">{row.status}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-center text-xs text-slate-400">
                  Illustration — your real leads appear in the dashboard
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900">
              Everything you need to follow up fast
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              No bloated CRM. LeadFlow focuses on the moment a homeowner fills out your form—and
              everything that happens until the job is booked.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {landingContent.features.map((f) => (
                <article
                  key={f.title}
                  className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-brand-50)]">
                    <FeatureIcon name={f.icon} />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-24 border-y border-[var(--color-border)] bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900">
              How it works
            </h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {landingContent.steps.map((step) => (
                <li key={step.step} className="relative pl-12">
                  <span className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand-600)] text-sm font-bold text-white">
                    {step.step}
                  </span>
                  <h3 className="font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-sm text-slate-600">
              Try it now on our sample site{" "}
              <Link href="/comfortpro" className="font-medium text-[var(--color-brand-600)] hover:underline">
                ComfortPro HVAC →
              </Link>
            </p>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900">
              Straightforward pricing
            </h2>
            <p className="mt-3 text-slate-600">Monthly plans. No per-lead fees on the MVP.</p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {landingContent.pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border p-8 ${
                    plan.highlighted
                      ? "border-[var(--color-brand-500)] bg-white shadow-md ring-1 ring-[var(--color-brand-200)]"
                      : "border-[var(--color-border)] bg-white"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-600)]">
                      Most popular
                    </span>
                  )}
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{plan.name}</h3>
                  <p className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                    <span className="text-slate-500">{plan.period}</span>
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-slate-700">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-emerald-600">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href="#demo"
                    variant={plan.highlighted ? "primary" : "outline"}
                    className="mt-8 w-full"
                  >
                    {landingContent.primaryCta}
                  </ButtonLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DemoRequestSection />
      </main>
      <SiteFooter />
    </>
  );
}
