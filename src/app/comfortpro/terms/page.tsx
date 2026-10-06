import { comfortPro } from "@/config/comfortpro";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
};

export default function ComfortProTermsPage() {
  return (
    <div className="min-h-screen bg-[#f4f1eb] px-4 py-12 sm:px-6">
      <article className="mx-auto max-w-2xl rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-stone-500">{comfortPro.name}</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#0a1f36]">Terms</h1>
        <p className="mt-6 text-sm leading-relaxed text-stone-600">
          ComfortPro HVAC is a fictional company created for LeadFlow HVAC product demos. This website
          does not offer real HVAC services. Pricing, availability, reviews, and contact details are
          for demonstration only.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-stone-600">
          By submitting the quote form, you acknowledge this is a demo experience and that any response
          you receive is part of a software demonstration—not a commitment to perform HVAC work.
        </p>
        <Link href="/comfortpro" className="mt-8 inline-block text-sm font-semibold text-[#c2410c] hover:underline">
          ← Back to {comfortPro.name}
        </Link>
      </article>
    </div>
  );
}
