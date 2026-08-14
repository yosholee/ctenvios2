import type { ReactElement } from "react";
import type { Metadata } from "next";
import { TrackingView } from "@/app/tracking/tracking-view";
import { site } from "@/content/landing";

export const metadata: Metadata = {
  title: `Tracking de envíos | ${site.brand}`,
  description:
    "Rastrea tu envío a Cuba con CT Envios. Introduce tu número de orden o HBL para ver el estado en tiempo real.",
  alternates: {
    canonical: "/tracking",
  },
};

export default function TrackingPage(): ReactElement {
  return <TrackingView />;
}
