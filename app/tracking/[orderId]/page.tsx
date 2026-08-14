import type { ReactElement } from "react";
import type { Metadata } from "next";
import { Suspense } from "react";
import { TrackingClient } from "@/app/tracking/tracking-client";
import { Spinner } from "@/components/ui/spinner";
import { site } from "@/content/landing";

interface TrackingOrderPageProps {
  params: Promise<{ orderId: string }>;
}

export async function generateMetadata({
  params,
}: TrackingOrderPageProps): Promise<Metadata> {
  const { orderId } = await params;
  const decoded = decodeURIComponent(orderId);

  return {
    title: `Tracking ${decoded} | ${site.brand}`,
    description: `Estado del envío ${decoded} con CT Envios. Seguimiento en tiempo real Miami → Cuba.`,
    alternates: {
      canonical: `/tracking/${orderId}`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

function TrackingFallback(): ReactElement {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background">
      <Spinner className="size-6 text-brand-navy" />
    </div>
  );
}

export default function TrackingOrderPage(): ReactElement {
  return (
    <Suspense fallback={<TrackingFallback />}>
      <TrackingClient />
    </Suspense>
  );
}
