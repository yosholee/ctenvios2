"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactElement,
} from "react";
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

  return (
    <section
      ref={sectionRef}
      aria-label="CT Envios en cifras"
      className="relative overflow-hidden bg-brand-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(251,191,36,0.14),transparent_45%),radial-gradient(circle_at_85%_90%,rgba(56,132,255,0.16),transparent_50%)]"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
            {stats.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
            {stats.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-white/70">
            {stats.description}
          </p>
        </div>

        <dl className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.items.map((item, index) => {
            const Icon = statIcons[item.key] ?? PackageCheckIcon;
            return (
              <div
                key={item.key}
                className={cn(
                  "rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-700 hover:bg-white/10",
                  inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0",
                )}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-2xl bg-brand-yellow/15 p-2.5 text-brand-yellow">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  {item.key === "rating" ? (
                    <span
                      className="flex gap-0.5 text-brand-yellow"
                      aria-hidden="true"
                    >
                      {Array.from({ length: 5 }).map((_, star) => (
                        <StarIcon
                          key={star}
                          className="h-4 w-4 fill-brand-yellow"
                        />
                      ))}
                    </span>
                  ) : null}
                </div>
                <dd className="mt-5 text-5xl font-extrabold tracking-tight text-white tabular-nums">
                  <AnimatedNumber
                    item={item}
                    start={inView}
                    delay={index * 120}
                  />
                </dd>
                <dt className="mt-2 text-base font-semibold text-white">
                  {item.label}
                </dt>
                <p className="mt-1 text-sm leading-relaxed text-white/60">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
