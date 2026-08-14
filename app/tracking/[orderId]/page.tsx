import type { ReactElement } from "react";
import type { Metadata } from "next";
import { TrackingView } from "@/app/tracking/tracking-view";
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

export default function TrackingOrderPage(): ReactElement {
  return <TrackingView />;
}
