"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactElement,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "lucide-react";
import { stats, type StatItem } from "@/content/landing";
import { cn } from "@/lib/utils";

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

const tileClass =
  "rounded-[28px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-brand-navy/5 transition-all duration-700";

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
  const ratingBare: StatItem = { ...rating, suffix: "" };

  const reveal = (index: number) => ({
    className: inView
      ? "translate-y-0 opacity-100"
      : "translate-y-6 opacity-0",
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
          {/* Tile grande: la modelo + paquetes entregados */}
          <div
            className={cn(
              tileClass,
              "relative order-1 col-span-2 aspect-[4/5] overflow-hidden lg:order-none lg:row-span-2 lg:aspect-auto",
              reveal(0).className,
            )}
            style={reveal(0).style}
          >
            <Image
              src="/images/bento-modelo-almacen.jpg"
              alt="Representante de CT Envios sosteniendo una caja con alimentos y aseo para enviar a Cuba"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[50%_20%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/15 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-6xl font-extrabold tracking-tight text-white tabular-nums sm:text-7xl">
                <AnimatedNumber item={delivered} start={inView} delay={0} />
              </p>
              <p className="mt-1 text-lg font-bold text-white">
                {delivered.label}
              </p>
              <p className="mt-0.5 text-sm text-white/75">
                solo en lo que va de 2026
              </p>
              <Link
                href="/tracking"
                className="mt-4 inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-semibold text-brand-navy transition-colors hover:bg-white/90"
              >
                Rastrear mi envío
              </Link>
            </div>
          </div>

          {/* Tile: barco + años */}
          <div
            className={cn(
              tileClass,
              "relative order-2 col-span-2 aspect-[16/10] overflow-hidden lg:order-none lg:col-span-1 lg:aspect-[7/10]",
              reveal(1).className,
            )}
            style={reveal(1).style}
          >
            <Image
              src="/images/blog/cuanto-demora-envio-maritimo.webp"
              alt="Barco portacontenedores en ruta marítima hacia Cuba al atardecer"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-transparent to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-5xl font-extrabold tracking-tight text-white tabular-nums">
                <AnimatedNumber item={years} start={inView} delay={120} />
              </p>
              <p className="mt-1 font-semibold text-white">{years.label}</p>
            </div>
          </div>

          {/* Tile: mapa de Cuba */}
          <div
            className={cn(
              tileClass,
              "order-5 col-span-2 flex aspect-[16/9] flex-col overflow-hidden bg-[#f7f1e3] p-5 sm:p-6 lg:order-none lg:col-span-1 lg:aspect-[7/10]",
              reveal(2).className,
            )}
            style={reveal(2).style}
          >
            <div className="relative min-h-0 flex-1">
              <Image
                src="/images/blog/enviar-paquetes-por-provincia.webp"
                alt="Mapa de Cuba con entregas puerta a puerta en todas las provincias"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center font-bold text-brand-navy">
              Puerta a puerta a toda Cuba
            </p>
          </div>

          {/* Tile: agencias */}
          <div
            className={cn(
              tileClass,
              "order-3 flex aspect-[8/7] flex-col items-center justify-center bg-white p-6 text-center lg:order-none lg:aspect-[7/10]",
              reveal(3).className,
            )}
            style={reveal(3).style}
          >
            <p className="text-6xl font-extrabold tracking-tight text-brand-navy tabular-nums">
              <AnimatedNumber item={agencies} start={inView} delay={360} />
            </p>
            <p className="mt-2 text-brand-navy/60">{agencies.label}</p>
          </div>

          {/* Tile: rating de Google */}
          <div
            className={cn(
              tileClass,
              "order-4 flex aspect-[8/7] flex-col items-center justify-center bg-white p-6 text-center lg:order-none lg:aspect-[7/10]",
              reveal(4).className,
            )}
            style={reveal(4).style}
            aria-label="4.8 de 5, calificación en Google"
          >
            <p className="flex items-start gap-1.5 text-6xl font-extrabold tracking-tight text-brand-navy tabular-nums">
              <AnimatedNumber item={ratingBare} start={inView} delay={480} />
              <StarIcon
                className="mt-2 h-8 w-8 fill-[#f5a800] text-[#f5a800]"
                aria-hidden="true"
              />
            </p>
            <p className="mt-2 text-brand-navy/60">en Google</p>
            <a
              href="https://maps.google.com/?cid=3890236566317076358"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex h-10 items-center rounded-full bg-brand-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy/90"
            >
              Ver reseñas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
