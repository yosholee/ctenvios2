import type { ReactElement } from "react";
import type { Metadata } from "next";
import { ServiceLanding } from "@/app/sections/service-landing";
import { buildServiceMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildServiceMetadata("envios-cuba-miami");

export default function EnviosCubaMiamiPage(): ReactElement {
  return <ServiceLanding slug="envios-cuba-miami" />;
}
