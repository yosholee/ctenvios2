import type { ReactElement } from "react";
import Image from "next/image";
import {
  ArrowRightIcon,
  MapPinIcon,
  MessageCircleIcon,
  PackageIcon,
  ShipIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { getActiveOffers, formatPrice, hero, site } from "@/content/landing";
import { HeroCarousel } from "@/app/sections/hero-carousel";

function OrbitIcon({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}): ReactElement {
  return (
    <span
      className={`flex size-full items-center justify-center rounded-full border shadow-sm ${className}`}
    >
      {children}
    </span>
  );
}

export function Hero(): ReactElement {
  const offerSlides = getActiveOffers().map((offer) => ({
    id: offer.id,
    label: offer.dayLabel,
    title: `${formatPrice(offer.price)} ${offer.unit}`,
    description: `${offer.category}. Mínimo ${offer.minLbs} lb.`,
    regularPrice:
      offer.price < offer.regularPrice
        ? `${formatPrice(offer.regularPrice)}${offer.unit}`
        : undefined,
    featured: offer.featured,
  }));

  return (
    <section className="relative z-0 overflow-hidden bg-background/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <span className="inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
            {hero.eyebrow}
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance text-brand-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.2]">
            Envíos a Cuba desde Miami:{" "}
            <Highlighter
              action="underline"
              color="#ffd141"
              strokeWidth={3}
              padding={4}
            >
              rápidos y confiables
            </Highlighter>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-brand-navy/70 sm:text-lg">
            {hero.support}
          </p>

          <div className="mt-7 flex justify-center lg:justify-start">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full min-w-0 max-w-full items-center justify-center gap-2 rounded-full border border-brand-navy/10 bg-brand-navy/[0.03] px-3 py-2 text-left text-sm text-brand-navy/70 transition-colors hover:border-brand-navy/20 hover:bg-brand-navy/[0.06] hover:text-brand-navy focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none sm:w-auto sm:justify-start sm:px-3.5 lg:justify-start"
            >
              <MapPinIcon
                className="size-4 shrink-0 text-brand-navy/55"
                aria-hidden
              />
              <span className="min-w-0 truncate">
                <span className="text-brand-navy/45">Ubicación:</span>{" "}
                <span className="font-semibold text-brand-navy">
                  <span className="sm:hidden">{site.address}</span>
                  <span className="hidden sm:inline">
                    {site.address}, Hialeah Gardens
                  </span>
                </span>
              </span>
            </a>
          </div>

          <div className="mt-7 flex flex-nowrap items-center justify-center gap-3 sm:gap-5 lg:justify-start">
            <Button
              nativeButton={false}
              render={
                <a
                  href={hero.primaryCta.href}
                  target={hero.primaryCta.external ? "_blank" : undefined}
                  rel={hero.primaryCta.external ? "noreferrer" : undefined}
                />
              }
              size="lg"
              className="shrink-0 bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90"
            >
              <MessageCircleIcon data-icon="inline-start" aria-hidden />
              {hero.primaryCta.label}
            </Button>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex shrink items-center gap-1 rounded-sm text-sm font-semibold whitespace-nowrap text-brand-navy transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
            >
              {hero.secondaryCta.label}
              <ArrowRightIcon className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative flex min-h-[28rem] items-center justify-center overflow-hidden sm:min-h-[34rem] sm:overflow-visible">
            <div className="pointer-events-none absolute inset-0 origin-center -translate-y-8 scale-[0.68] sm:translate-y-4 sm:scale-100">
              <div
                aria-hidden
                className="absolute inset-4 rounded-full bg-brand-yellow/20 blur-3xl"
              />

              <OrbitingCircles
                className="border-0 bg-transparent"
                radius={140}
                duration={22}
                delay={0}
                iconSize={40}
                speed={1}
              >
                <OrbitIcon className="border-brand/30 bg-brand text-white shadow-sm">
                  <MessageCircleIcon className="size-5" aria-hidden />
                </OrbitIcon>
              </OrbitingCircles>

              <OrbitingCircles
                className="border-0 bg-transparent"
                radius={190}
                duration={28}
                delay={-10}
                iconSize={42}
                speed={0.9}
                reverse
              >
                <OrbitIcon className="border-brand-navy/20 bg-white text-brand-navy shadow-sm">
                  <ShipIcon className="size-5" aria-hidden />
                </OrbitIcon>
              </OrbitingCircles>

              <OrbitingCircles
                className="border-0 bg-transparent"
                radius={240}
                duration={34}
                delay={-20}
                iconSize={44}
                speed={0.8}
              >
                <OrbitIcon className="border-brand-yellow/50 bg-brand-yellow text-brand-navy shadow-sm">
                  <PackageIcon className="size-5" aria-hidden />
                </OrbitIcon>
              </OrbitingCircles>
            </div>

            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={408}
              height={612}
              priority
              className="relative z-10 mx-auto h-auto w-[78%] max-w-sm object-contain"
            />
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1/2 bg-linear-to-t from-background via-background/40 to-transparent"
          />

          <div className="absolute inset-x-4 bottom-3 z-30 overflow-hidden rounded-2xl bg-linear-to-br from-brand-navy via-[#12285f] to-[#06122e] px-1 py-2 shadow-lg sm:inset-x-5 sm:bottom-4 sm:rounded-3xl">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgb(255,255,255,0.22) 1px, transparent 0)",
                backgroundSize: "18px 18px",
                maskImage:
                  "radial-gradient(ellipse 90% 80% at 50% 40%, black 20%, transparent 75%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 90% 80% at 50% 40%, black 20%, transparent 75%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-8 top-0 size-28 rounded-full bg-brand-yellow/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 bottom-0 size-32 rounded-full bg-brand/30 blur-3xl"
            />
            <div className="relative z-10">
              <HeroCarousel slides={offerSlides} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
