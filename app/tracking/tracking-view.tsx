import type { ReactElement } from "react";
import { Suspense } from "react";
import { Contact } from "@/app/sections/contact";
import { TrackingClient } from "@/app/tracking/tracking-client";
import { Spinner } from "@/components/ui/spinner";

function TrackingFallback(): ReactElement {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background">
      <Spinner className="size-6 text-brand-navy" />
    </div>
  );
}

export function TrackingView(): ReactElement {
  return (
    <div className="flex flex-1 flex-col">
      <Suspense fallback={<TrackingFallback />}>
        <TrackingClient />
      </Suspense>
      <Contact />
    </div>
  );
}
