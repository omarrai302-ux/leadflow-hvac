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
  if (typeof window === "undefined") {
    // TEMP diagnostic — remove after verifying generate_lead in production
    console.info("[GA4 diagnostic] trackGenerateLead skipped: no window");
    return;
  }

  // TEMP diagnostic — remove after verifying generate_lead in production
  console.info("[GA4 diagnostic] trackGenerateLead invoked", {
    gtagType: typeof window.gtag,
    measurementId: GA_MEASUREMENT_ID,
  });

  const send = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        send_to: GA_MEASUREMENT_ID,
      });
      // TEMP diagnostic — remove after verifying generate_lead in production
      console.info("[GA4 diagnostic] gtag generate_lead dispatched");
      return;
    }

    // Fallback if gtag stub was replaced/unavailable mid-load
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(["event", "generate_lead", { send_to: GA_MEASUREMENT_ID }]);
    // TEMP diagnostic — remove after verifying generate_lead in production
    console.info("[GA4 diagnostic] generate_lead queued on dataLayer (gtag missing)");
  };

  window.setTimeout(send, 0);
}
