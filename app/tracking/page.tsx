import type { ReactElement } from "react";
import type { Metadata } from "next";
import { Suspense } from "react";
import { TrackingClient } from "@/app/tracking/tracking-client";
import { Spinner } from "@/components/ui/spinner";
import { site } from "@/content/landing";

export const metadata: Metadata = {
  title: `Tracking de envíos | ${site.brand}`,
  description:
    "Rastrea tu envío a Cuba con CT Envios. Introduce tu número de orden o HBL para ver el estado en tiempo real.",
  alternates: {
    canonical: "/tracking",
  },
};

function TrackingFallback(): ReactElement {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background">
      <Spinner className="size-6 text-brand-navy" />
    </div>
  );
}

export default function TrackingPage(): ReactElement {
  return (
    <Suspense fallback={<TrackingFallback />}>
      <TrackingClient />
    </Suspense>
  );
}
