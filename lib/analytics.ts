// lib/analytics.ts
// Lightweight event telemetry and conversion tracking

export type AnalyticsEvent = 
  | 'whatsapp_click'
  | 'phone_call_click'
  | 'booking_started'
  | 'booking_submitted'
  | 'destination_viewed'
  | 'faq_opened';

export const trackEvent = (event: AnalyticsEvent, properties?: Record<string, any>) => {
  if (typeof window === 'undefined') return;

  const payload = {
    event,
    properties: properties || {},
    timestamp: new Date().toISOString(),
    url: window.location.href,
  };

  // Log in browser console & dispatch event for analytics providers (e.g. Google Analytics / Plausible)
  console.log(`[ANALYTICS] ${event}`, payload);

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event, properties);
  }
};
