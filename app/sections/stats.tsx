"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactElement,
} from "react";
import Image from "next/image";
import {
  NetworkIcon,
  PackageCheckIcon,
  ShipIcon,
  StarIcon,
  type LucideIcon,
} from "lucide-react";
import { stats, type StatItem } from "@/content/landing";
import { cn } from "@/lib/utils";

const statIcons: Record<string, LucideIcon> = {
  years: ShipIcon,
  agencies: NetworkIcon,
  delivered: PackageCheckIcon,
  rating: StarIcon,
};

function formatStat(item: StatItem, current: number): string {
  const formatted = new Intl.NumberFormat("es-US", {
    minimumFractionDigits: item.decimals ?? 0,
    maximumFractionDigits: item.decimals ?? 0,
  }).format(current);
  return `${item.prefix ?? ""}${formatted}${item.suffix ?? ""}`;
}

interface AnimatedNumberProps {
  item: StatItem;
  start: boolean;
  delay: number;
}

function AnimatedNumber({
  item,
  start,
  delay,
}: AnimatedNumberProps): ReactElement {
  const [current, setCurrent] = useState(item.value);

  useEffect(() => {
    if (!start) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    let raf = 0;
    const duration = 1400;
    const startedAt = performance.now() + delay;
    const tick = (now: number) => {
      const elapsed = now - startedAt;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(item.value * eased);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, delay, item.value]);

  return (
    <>
      <span className="sr-only">{formatStat(item, item.value)}</span>
      <span aria-hidden="true">{formatStat(item, current)}</span>
    </>
  );
}

const cardClass =
  "rounded-[28px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-brand-navy/5 transition-all duration-700";

function IconChip({ icon: Icon }: { icon: LucideIcon }): ReactElement {
  return (
    <span className="inline-flex rounded-2xl bg-[#0071e3]/10 p-2.5 text-[#0071e3]">
      <Icon className="h-6 w-6" aria-hidden="true" />
    </span>
  );
}

export function Stats(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const byKey = (key: string): StatItem =>
    stats.items.find((item) => item.key === key) ?? stats.items[0];
  const delivered = byKey("delivered");
  const years = byKey("years");
  const agencies = byKey("agencies");
  const rating = byKey("rating");

  const reveal = (index: number) => ({
    className: inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
    style: { transitionDelay: `${index * 120}ms` },
  });

  return (
    <section
      ref={sectionRef}
      aria-label="CT Envios en cifras"
      className="overflow-x-clip"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
            {stats.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance text-brand-navy sm:text-4xl">
            {stats.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-brand-navy/65">
            {stats.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {/* Tile grande: paquetes entregados */}
          <div
            className={cn(
              cardClass,
              "col-span-2 flex flex-col justify-between overflow-hidden p-7 sm:p-9 lg:row-span-2",
              reveal(0).className,
            )}
            style={reveal(0).style}
          >
            <div>
              <IconChip icon={statIcons.delivered} />
              <p className="mt-6 text-6xl font-extrabold tracking-tight text-brand-navy tabular-nums sm:text-7xl">
                <AnimatedNumber item={delivered} start={inView} delay={0} />
              </p>
              <p className="mt-2 text-lg font-semibold text-brand-navy">
                {delivered.label}
              </p>
              <p className="mt-1 max-w-sm text-sm leading-relaxed text-brand-navy/55">
                {delivered.detail}
              </p>
            </div>
            <div
              aria-hidden="true"
              className="mt-8 flex h-20 items-end gap-1.5 sm:h-24"
            >
              {[30, 42, 38, 52, 47, 63, 58, 74, 69, 84, 92, 100].map(
                (height, bar) => (
                  <span
                    key={bar}
                    className="flex-1 rounded-t-md bg-[#0071e3]"
                    style={{
                      height: `${height}%`,
                      opacity: 0.12 + (bar / 11) * 0.88,
                    }}
                  />
                ),
              )}
            </div>
          </div>

          {/* Tile foto: la modelo en el almacén */}
          <div
            className={cn(
              cardClass,
              "relative col-span-2 overflow-hidden max-lg:aspect-[16/10] lg:col-span-1 lg:row-span-2 lg:min-h-full",
              reveal(1).className,
            )}
            style={reveal(1).style}
          >
            <Image
              src="/images/bento-modelo-almacen.jpg"
              alt="Representante de CT Envios sosteniendo una caja con alimentos y aseo para enviar a Cuba"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover object-[50%_20%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-navy/70 to-transparent"
            />
            <p className="absolute bottom-4 left-5 text-sm font-semibold text-white">
              Lista para enviar a Cuba
            </p>
          </div>

          {/* Tile: años */}
          <div
            className={cn(cardClass, "p-6 sm:p-7", reveal(2).className)}
            style={reveal(2).style}
          >
            <IconChip icon={statIcons.years} />
            <p className="mt-5 text-5xl font-extrabold tracking-tight text-brand-navy tabular-nums">
              <AnimatedNumber item={years} start={inView} delay={240} />
            </p>
            <p className="mt-1.5 font-semibold text-brand-navy">{years.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-brand-navy/55">
              {years.detail}
            </p>
          </div>

          {/* Tile: agencias */}
          <div
            className={cn(cardClass, "p-6 sm:p-7", reveal(3).className)}
            style={reveal(3).style}
          >
            <IconChip icon={statIcons.agencies} />
            <p className="mt-5 text-5xl font-extrabold tracking-tight text-brand-navy tabular-nums">
              <AnimatedNumber item={agencies} start={inView} delay={360} />
            </p>
            <p className="mt-1.5 font-semibold text-brand-navy">
              {agencies.label}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-brand-navy/55">
              {agencies.detail}
            </p>
          </div>

          {/* Tile ancha: rating de Google */}
          <div
            className={cn(
              cardClass,
              "col-span-2 flex flex-wrap items-center gap-x-8 gap-y-4 p-7 sm:p-8",
              reveal(4).className,
            )}
            style={reveal(4).style}
          >
            <p className="text-6xl font-extrabold tracking-tight text-brand-navy tabular-nums">
              <AnimatedNumber item={rating} start={inView} delay={480} />
            </p>
            <div>
              <span className="flex gap-0.5 text-[#f5a800]" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, star) => (
                  <StarIcon key={star} className="h-5 w-5 fill-[#f5a800]" />
                ))}
              </span>
              <p className="mt-1.5 font-semibold text-brand-navy">
                {rating.label}
              </p>
              <p className="text-sm text-brand-navy/55">{rating.detail}</p>
            </div>
          </div>

          {/* Tile ancha: mapa de Cuba */}
          <div
            className={cn(
              cardClass,
              "col-span-2 flex items-center gap-4 overflow-hidden bg-[#f6f0e2] p-7 sm:gap-6 sm:p-8",
              reveal(5).className,
            )}
            style={reveal(5).style}
          >
            <div className="min-w-0 flex-1">
              <p className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
                Puerta a puerta
              </p>
              <p className="mt-1 text-sm leading-relaxed text-brand-navy/60">
                Entregas en todas las provincias de Cuba, con tracking en cada
                paso del camino.
              </p>
            </div>
            <Image
              src="/images/blog/enviar-paquetes-por-provincia.webp"
              alt=""
              width={1200}
              height={675}
              className="w-[42%] shrink-0 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
