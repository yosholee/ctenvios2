import type { ReactElement } from "react";
import type { Metadata } from "next";
import { ServiceLanding } from "@/app/sections/service-landing";
import { buildServiceMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildServiceMetadata("envio-medicamentos-cuba");

export default function EnvioMedicamentosCubaPage(): ReactElement {
  return <ServiceLanding slug="envio-medicamentos-cuba" />;
}
