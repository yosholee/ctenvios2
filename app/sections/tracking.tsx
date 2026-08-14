"use client";

import type { ReactElement } from "react";
import Image from "next/image";
import {
  MapPinIcon,
  PackageCheckIcon,
  PackageIcon,
  ShipIcon,
  TruckIcon,
  WarehouseIcon,
} from "lucide-react";
import { AnimatedList } from "@/components/ui/animated-list";
import { Ripple } from "@/components/ui/ripple";
import { tracking } from "@/content/landing";
import { cn } from "@/lib/utils";

const eventIcons: Record<string, typeof PackageIcon> = {
  entregado: PackageCheckIcon,
  reparto: TruckIcon,
  aduana: WarehouseIcon,
  transito: ShipIcon,
  recibido: PackageIcon,
};

interface TrackingNotificationProps {
  name: string;
  description: string;
  time: string;
  color: string;
  eventId: string;
}

function TrackingNotification({
  name,
  description,
  time,
  color,
  eventId,
}: TrackingNotificationProps): ReactElement {
  const Icon = eventIcons[eventId] ?? PackageIcon;

  return (
    <figure
      className={cn(
        "relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-brand-navy/10 bg-white p-4",
        "transition-[border-color] duration-200 ease-in-out hover:border-brand-navy/20"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-xl",
            color === "#ffd141" ? "text-brand-navy" : "text-white"
          )}
          style={{ backgroundColor: color }}
        >
          <Icon className="size-5" aria-hidden />
        </div>
        <div className="flex min-w-0 flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-sm font-semibold whitespace-pre text-brand-navy sm:text-base">
            <span className="truncate">{name}</span>
            <span className="mx-1 text-brand-navy/30">·</span>
            <span className="text-xs font-normal text-brand-navy/45">
              {time}
            </span>
          </figcaption>
          <p className="truncate text-sm text-brand-navy/55">{description}</p>
        </div>
      </div>
    </figure>
  );
}

export function Tracking(): ReactElement {
  const loopEvents = Array.from({ length: 4 }, () => tracking.events).flat();

  return (
    <section
      id="tracking"
      className="scroll-mt-20 overflow-hidden bg-background/90 py-16 backdrop-blur-md sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
            {tracking.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance text-brand-navy sm:text-4xl lg:text-5xl">
            {tracking.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/65 sm:text-lg">
            {tracking.support}
          </p>
          <a
            href={tracking.cta.href}
            target={tracking.cta.external ? "_blank" : undefined}
            rel={tracking.cta.external ? "noreferrer" : undefined}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-yellow/90 focus-visible:ring-2 focus-visible:ring-brand-navy/35 focus-visible:outline-none"
          >
            <MapPinIcon className="size-4" aria-hidden />
            {tracking.cta.label}
          </a>
        </div>

        <div className="relative mt-10 grid items-center gap-6 lg:mt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-lg">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-[18%]"
              style={{
                maskImage:
                  "radial-gradient(ellipse at center, black 32%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 32%, transparent 70%)",
              }}
            >
              <Ripple
                mainCircleSize={140}
                mainCircleOpacity={0.22}
                numCircles={7}
                className="[mask-image:none] [--foreground:var(--brand)]"
              />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-[radial-gradient(circle,rgba(255,209,65,0.28)_0%,transparent_68%)] blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-10 size-72 rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.22)_0%,transparent_70%)] blur-2xl"
            />

            <div
              className="relative z-10"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 72%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 72%, transparent 100%)",
              }}
            >
              <Image
                src={tracking.image.src}
                alt={tracking.image.alt}
                width={559}
                height={447}
                quality={75}
                priority={false}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
            </div>
          </div>

          <div
            className="relative mx-auto h-[360px] w-full max-w-md overflow-hidden sm:h-[400px] lg:mx-0 lg:h-[440px] lg:-translate-x-2"
            aria-live="polite"
            aria-atomic="false"
          >
            <p className="mb-3 text-center text-xs font-semibold tracking-wide text-brand-navy/45 uppercase lg:text-left">
              Actualizaciones en vivo
            </p>
            <AnimatedList delay={1800} className="gap-3 px-1">
              {loopEvents.map((event, index) => (
                <TrackingNotification
                  key={`${event.id}-${index}`}
                  eventId={event.id}
                  name={event.name}
                  description={event.description}
                  time={event.time}
                  color={event.color}
                />
              ))}
            </AnimatedList>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-background via-background/70 to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
