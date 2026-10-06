"use client";

import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { Spinner } from "@/components/ui/Spinner";
import { leadFormSchema, type LeadFormInput } from "@/lib/validations/lead";
import { useState } from "react";
import { ZodError } from "zod";

type Props = {
  businessId: string;
  serviceOptions: readonly string[];
  submitLabel?: string;
  successMessage?: string;
  cardTitle?: string;
  cardHint?: string;
  className?: string;
};

type FieldErrors = Partial<Record<keyof LeadFormInput, string>>;

export function LeadCaptureForm({
  businessId,
  serviceOptions,
  submitLabel = "Request a Quote",
  successMessage = "Thanks—we received your request. Our team will contact you shortly.",
  cardTitle,
  cardHint,
  className,
}: Props) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);
    setSuccess(false);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      service: String(fd.get("service") ?? ""),
      zip_code: String(fd.get("zip_code") ?? ""),
      appointment_date: String(fd.get("appointment_date") ?? "") || undefined,
      message: String(fd.get("message") ?? "") || undefined,
    };

    try {
      const data = leadFormSchema.parse(raw);
      setErrors({});
      setSubmitting(true);

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, business_id: businessId }),
      });

      const json = (await res.json()) as { error?: string };

      if (!res.ok) {
        setServerError(json.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      if (err instanceof ZodError) {
        const fieldErrors: FieldErrors = {};
        err.errors.forEach((issue) => {
          const key = issue.path[0] as keyof LeadFormInput;
          if (key) fieldErrors[key] = issue.message;
        });
        setErrors(fieldErrors);
      } else {
        setServerError("Network error. Check your connection and try again.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div
        className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-8 text-center sm:px-6"
        role="status"
      >
        <div
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-700"
          aria-hidden
        >
          ✓
        </div>
        <p className="mt-4 text-lg font-semibold text-emerald-950">Request received</p>
        <p className="mt-2 text-sm leading-relaxed text-emerald-900/90">{successMessage}</p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-6"
          onClick={() => setSuccess(false)}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      {(cardTitle || cardHint) && (
        <div className="mb-6 border-b border-stone-200 pb-5">
          {cardTitle && (
            <h3 className="text-lg font-semibold text-[#0a1f36]">{cardTitle}</h3>
          )}
          {cardHint && (
            <p className="mt-1 text-sm text-stone-500">{cardHint}</p>
          )}
        </div>
      )}

      <fieldset className="space-y-4">
        <legend className="sr-only">Contact information</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            name="name"
            label="Name *"
            autoComplete="name"
            placeholder="Your full name"
            error={errors.name}
            required
          />
          <Input
            name="phone"
            label="Phone *"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            error={errors.phone}
            required
          />
          <Input
            name="email"
            label="Email *"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            className="sm:col-span-2"
            error={errors.email}
            required
          />
        </div>
      </fieldset>

      <fieldset className="mt-6 space-y-4">
        <legend className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500">
          Service details
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Select
            name="service"
            label="Service Needed *"
            error={errors.service}
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
          <Input
            name="zip_code"
            label="ZIP Code *"
            inputMode="numeric"
            autoComplete="postal-code"
            placeholder="75201"
            error={errors.zip_code}
            required
          />
          <Input
            name="appointment_date"
            label="Preferred Date"
            type="date"
            className="sm:col-span-2"
            error={errors.appointment_date}
          />
          <Textarea
            name="message"
            label="Message"
            placeholder="Describe the issue, system age, or preferred time window."
            className="sm:col-span-2"
            error={errors.message}
          />
        </div>
      </fieldset>

      {serverError && (
        <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {serverError}
        </p>
      )}

      <Button
        type="submit"
        variant="secondary"
        size="lg"
        className="mt-6 w-full"
        disabled={submitting}
      >
        {submitting ? (
          <span className="inline-flex items-center gap-2">
            <Spinner className="h-4 w-4 text-white" />
            Sending…
          </span>
        ) : (
          submitLabel
        )}
      </Button>

      <p className="mt-3 text-center text-xs text-stone-500">
        By submitting, you agree to be contacted about this service request.
      </p>
    </form>
  );
}
