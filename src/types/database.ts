export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "booked"
  | "completed"
  | "lost";

export const LEAD_STATUSES: LeadStatus[] = [
  "new",
  "contacted",
  "qualified",
  "booked",
  "completed",
  "lost",
];

export const LEAD_STATUS_LABELS: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  booked: "Booked",
  completed: "Completed",
  lost: "Lost",
};

export type Lead = {
  id: string;
  business_id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  zip_code: string;
  appointment_date: string | null;
  message: string | null;
  status: LeadStatus;
  created_at: string;
};

export type Business = {
  id: string;
  name: string;
  slug: string;
  phone: string | null;
  created_at: string;
};
