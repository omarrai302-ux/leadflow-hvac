import { z } from "zod";

export const leadFormSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name")
    .max(120, "Name is too long"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(20)
    .refine(
      (val) => val.replace(/\D/g, "").length >= 10,
      "Enter a valid phone number",
    ),
  email: z.string().email("Enter a valid email address"),
  service: z.string().min(1, "Select a service"),
  zip_code: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/, "Enter a valid US ZIP code"),
  appointment_date: z
    .string()
    .optional()
    .refine(
      (val) => !val || !Number.isNaN(Date.parse(val)),
      "Enter a valid date",
    ),
  message: z.string().max(2000, "Message is too long").optional(),
});

export type LeadFormInput = z.infer<typeof leadFormSchema>;

export const leadStatusSchema = z.enum([
  "new",
  "contacted",
  "qualified",
  "booked",
  "completed",
  "lost",
]);
