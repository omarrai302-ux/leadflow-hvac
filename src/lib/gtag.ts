declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fire GA4 recommended event `generate_lead` when a lead is saved.
 * No PII — event name only. Safe no-op if gtag is unavailable.
 */
export function trackGenerateLead(): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "generate_lead");
}
