declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-Z2SRR3WFQK";

/**
 * Fire GA4 recommended event `generate_lead` when a lead is saved.
 * No PII — event name only. Safe no-op if gtag is unavailable.
 *
 * Deferred with setTimeout so the hit is not lost when React immediately
 * unmounts the form for the success UI in the same synchronous turn.
 */
export function trackGenerateLead(): void {
  if (typeof window === "undefined") return;

  const send = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        send_to: GA_MEASUREMENT_ID,
      });
      return;
    }

    // Fallback if gtag stub was replaced/unavailable mid-load
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push([
      "event",
      "generate_lead",
      { send_to: GA_MEASUREMENT_ID },
    ]);
  };

  window.setTimeout(send, 0);
}
