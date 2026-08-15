import type { ReactElement } from "react";
import type { Metadata } from "next";
import { ServiceLanding } from "@/app/sections/service-landing";
import { buildServiceMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildServiceMetadata("cajas-envios-cuba");

export default function CajasEnviosCubaPage(): ReactElement {
  return <ServiceLanding slug="cajas-envios-cuba" />;
}
