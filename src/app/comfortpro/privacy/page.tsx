import { comfortPro } from "@/config/comfortpro";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function ComfortProPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f4f1eb] px-4 py-12 sm:px-6">
      <article className="mx-auto max-w-2xl rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-stone-500">{comfortPro.name}</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#0a1f36]">Privacy Policy</h1>
        <p className="mt-6 text-sm leading-relaxed text-stone-600">
          This is a demo website for LeadFlow HVAC sales presentations. Quote requests submitted through
          this site are stored in the demo Supabase database so HVAC prospects can see how lead capture
          works. Do not submit real personal information you are not comfortable sharing in a demo
          environment.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-stone-600">
          Information collected through the quote form may include name, phone, email, service needed,
          ZIP code, preferred date, and message. Demo data may be reviewed and deleted by the demo
          account owner.
        </p>
        <Link href="/comfortpro" className="mt-8 inline-block text-sm font-semibold text-[#c2410c] hover:underline">
          ← Back to {comfortPro.name}
        </Link>
      </article>
    </div>
  );
}
