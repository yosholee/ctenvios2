import type { ReactElement } from "react";
import type { Metadata } from "next";
import { PrivacyClient } from "@/app/privacy/privacy-client";
import { site } from "@/content/landing";

export const metadata: Metadata = {
  title: `Política de privacidad | ${site.brand}`,
  description:
    "Cómo CT Envios y Atlas Logistics tratan tus datos en el sitio, WhatsApp, el formulario de contacto y el tracking.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: `Política de privacidad | ${site.brand}`,
    description:
      "Información sobre datos de contacto, envíos, consentimiento de marketing y cómo pedirnos acceso o eliminación.",
    url: "/privacy",
    type: "article",
    locale: "es_US",
  },
  twitter: {
    card: "summary",
    title: `Política de privacidad | ${site.brand}`,
    description:
      "Consulta cómo CT Envios usa y protege tus datos personales.",
  },
};

export default function PrivacyPage(): ReactElement {
  return <PrivacyClient />;
}
