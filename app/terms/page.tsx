import type { ReactElement } from "react";
import type { Metadata } from "next";
import { TermsClient } from "@/app/terms/terms-client";
import { site } from "@/content/landing";

export const metadata: Metadata = {
  title: `Términos y Condiciones | ${site.brand}`,
  description:
    "Consulta los términos y condiciones de CT Envios para envíos marítimos y aéreos a Cuba, políticas de responsabilidad, reclamaciones y contacto.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: `Términos y Condiciones | ${site.brand}`,
    description:
      "Políticas y condiciones de servicio para envíos a Cuba: tarifas, tiempos, artículos permitidos y reclamaciones.",
    url: "/terms",
    type: "article",
    locale: "es_US",
  },
  twitter: {
    card: "summary",
    title: `Términos y Condiciones | ${site.brand}`,
    description:
      "Revisa las políticas de envío, responsabilidad y reclamaciones de CT Envios.",
  },
};

export default function TermsPage(): ReactElement {
  return <TermsClient />;
}
