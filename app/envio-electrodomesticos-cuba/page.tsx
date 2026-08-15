import type { ReactElement } from "react";
import type { Metadata } from "next";
import { ServiceLanding } from "@/app/sections/service-landing";
import { buildServiceMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildServiceMetadata(
  "envio-electrodomesticos-cuba"
);

export default function EnvioElectrodomesticosPage(): ReactElement {
  return <ServiceLanding slug="envio-electrodomesticos-cuba" />;
}
