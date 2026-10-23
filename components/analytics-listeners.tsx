"use client";

import { useEffect, type ReactElement } from "react";
import { trackEvent } from "@/lib/analytics";

function linkLocation(anchor: HTMLAnchorElement): string {
  if (anchor.closest("header")) return "header";
  if (anchor.closest("footer")) return "footer";
  return "content";
}

/**
 * Escucha global de clics de conversión: cualquier enlace de WhatsApp
 * (wa.me) o de teléfono (tel:) del sitio dispara su evento GA4 sin
 * tener que instrumentar cada enlace por separado.
 */
export function AnalyticsListeners(): ReactElement | null {
  useEffect(() => {
    const handleClick = (event: MouseEvent): void => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        trackEvent("whatsapp_click", { link_location: linkLocation(anchor) });
      } else if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_location: linkLocation(anchor) });
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  return null;
}
