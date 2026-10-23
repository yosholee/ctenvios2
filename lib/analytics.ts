/**
 * Helpers de medición GA4.
 *
 * Eventos de conversión que se registran en todo el sitio:
 * - `whatsapp_click`: clic en cualquier enlace wa.me / WhatsApp.
 * - `phone_click`: clic en cualquier enlace tel:.
 * - `tracking_search`: búsqueda válida enviada desde /tracking.
 * - `tracking_result`: resultado de la consulta de tracking (found true/false).
 *
 * Nunca se envía el número de orden ni el HBL como parámetro: solo se
 * contabiliza la acción para proteger los datos del cliente.
 */

type AnalyticsParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  eventName: string,
  params: AnalyticsParams = {}
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, {
    page_path: window.location.pathname,
    ...params,
  });
}
