import type { ReactElement } from "react";
import type { Metadata } from "next";
import { ServiceLanding } from "@/app/sections/service-landing";
import { buildServiceMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildServiceMetadata("envios-maritimos-cuba");

export default function EnviosMaritimosPage(): ReactElement {
  return <ServiceLanding slug="envios-maritimos-cuba" />;
}
