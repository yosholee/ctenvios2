import type { ReactElement } from "react";
import type { Metadata } from "next";
import { ServiceLanding } from "@/app/sections/service-landing";
import { buildServiceMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildServiceMetadata("envio-alimentos-cuba");

export default function EnvioAlimentosPage(): ReactElement {
  return <ServiceLanding slug="envio-alimentos-cuba" />;
}
