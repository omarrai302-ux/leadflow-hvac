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
  className?: string;
};

type FieldErrors = Partial<Record<keyof LeadFormInput, string>>;

export function LeadCaptureForm({
  businessId,
  serviceOptions,
  submitLabel = "Request a Quote",
  successMessage = "Thanks—we received your request. Our team will contact you shortly.",
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
        className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center"
        role="status"
      >
        <p className="font-semibold text-emerald-900">{successMessage}</p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-4"
          onClick={() => setSuccess(false)}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="name" label="Name" autoComplete="name" error={errors.name} required />
        <Input
          name="phone"
          label="Phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 123-4567"
          error={errors.phone}
          required
        />
        <Input
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          className="sm:col-span-2"
          error={errors.email}
          required
        />
        <Select name="service" label="Service Needed" error={errors.service} required defaultValue="">
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
          label="ZIP Code"
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

      {serverError && (
        <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={submitting}>
        {submitting ? (
          <span className="inline-flex items-center gap-2">
            <Spinner className="h-4 w-4 text-white" />
            Sending…
          </span>
        ) : (
          submitLabel
        )}
      </Button>
    </form>
  );
}
