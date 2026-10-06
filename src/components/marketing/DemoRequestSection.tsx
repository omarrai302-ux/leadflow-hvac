"use client";

import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { landingContent } from "@/config/site";
import { useState } from "react";

export function DemoRequestSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="demo" className="scroll-mt-24 bg-[var(--color-brand-900)] py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="text-white">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
            {landingContent.primaryCta}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-blue-100/90">
            See how LeadFlow fits your shop in a 20-minute walkthrough. We&apos;ll use your
            actual service area and website setup as examples.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
          {sent ? (
            <div className="py-6 text-center" role="status">
              <p className="font-semibold text-slate-900">Request received.</p>
              <p className="mt-2 text-sm text-slate-600">
                For this MVP, demo requests are captured locally. Connect your CRM or email
                automation when you&apos;re ready to go live.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="company" label="Company name" required />
              <Input name="email" label="Work email" type="email" required />
              <Input name="phone" label="Phone" type="tel" />
              <Textarea name="notes" label="What would you like to see?" />
              <Button type="submit" className="w-full">
                {landingContent.primaryCta}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
