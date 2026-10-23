import type { ReactElement } from "react";
import Script from "next/script";

// Solo la propiedad GA4 del dueño (G-DMGE29VG1R). El segundo ID que estuvo
// configurado (G-E53C6QQ7Z8) no pertenece a la cuenta de Google del negocio
// y el usuario ordenó retirarlo el 2026-10-23.
const GA_MEASUREMENT_IDS = ["G-DMGE29VG1R"] as const;

export function Gtag(): ReactElement {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_IDS[0]}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${GA_MEASUREMENT_IDS.map((id) => `gtag('config', '${id}');`).join("\n          ")}
        `}
      </Script>
    </>
  );
}
