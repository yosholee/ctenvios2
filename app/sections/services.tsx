import type { ReactElement } from "react";
import Image from "next/image";
import {
  PackageSearchIcon,
  ShipIcon,
  TruckIcon,
  type LucideIcon,
} from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";
import { services } from "@/content/landing";

const serviceIcons: Record<string, LucideIcon> = {
  maritimo: ShipIcon,
  puerta: TruckIcon,
  tracking: PackageSearchIcon,
};

export function Services(): ReactElement {
  const highlightIndex = services.headline.indexOf(services.highlight);
  const before =
    highlightIndex >= 0
      ? services.headline.slice(0, highlightIndex)
      : services.headline;
  const after =
    highlightIndex >= 0
      ? services.headline.slice(highlightIndex + services.highlight.length)
      : "";

  return (
    <section id="servicios" className="scroll-mt-20 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-brand-navy sm:rounded-[2rem]">
          <Image
            src={services.image.src}
            alt={services.image.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
          {/* Mobile: even wash across the full card */}
          <div
            aria-hidden
            className="absolute inset-0 bg-brand-navy/70 sm:hidden"
          />
          {/* Desktop: clear to the right */}
          <div
            aria-hidden
            className="absolute inset-0 hidden bg-brand-navy/15 sm:block"
          />
          <div
            aria-hidden
            className="absolute inset-0 hidden bg-linear-to-r from-brand-navy/90 via-brand-navy/35 from-35% via-55% to-transparent to-75% sm:block"
          />
          <div
            aria-hidden
            className="absolute inset-0 hidden bg-linear-to-t from-brand-navy/40 via-transparent to-transparent sm:block"
          />

          <div className="relative z-10 flex w-full flex-col justify-center px-6 py-10 sm:p-10 lg:max-w-[70%] lg:p-12">
            <p className="text-sm font-semibold text-brand">{services.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {before}
              {highlightIndex >= 0 ? (
                <Highlighter
                  action="underline"
                  color="#ff8a1a"
                  strokeWidth={3}
                  padding={4}
                >
                  {services.highlight}
                </Highlighter>
              ) : null}
              {after}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:max-w-xl">
              {services.support}
            </p>

            <ul className="mt-10 grid w-full gap-x-8 gap-y-8 sm:grid-cols-2">
              {services.items.map((item) => {
                const Icon = serviceIcons[item.id] ?? PackageSearchIcon;

                return (
                  <li key={item.id} className="flex gap-x-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
