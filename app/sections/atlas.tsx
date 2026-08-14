import type { ReactElement } from "react";
import Image from "next/image";
import {
  ArrowRightIcon,
  LockIcon,
  ShieldCheckIcon,
  CloudIcon,
} from "lucide-react";
import { atlas } from "@/content/landing";

export function Atlas(): ReactElement {
  const { dashboard, performance, security, consolidation } = atlas.cards;

  return (
    <section
      id="agencias"
      className="scroll-mt-20 bg-background/90 py-16 backdrop-blur-md sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
            {atlas.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
            {atlas.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/65 sm:text-lg">
            {atlas.support}
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-5">
          {/* Left tall — Dashboard */}
          <article className="relative flex min-h-[22rem] flex-col overflow-hidden rounded-3xl bg-brand-navy p-6 sm:p-7 lg:row-span-2 lg:min-h-0 lg:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,102,255,0.28),transparent_55%)]"
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white">{dashboard.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {dashboard.description}
              </p>
            </div>
            {dashboard.image ? (
              <div className="relative z-10 mt-auto flex flex-1 items-end justify-center pt-8">
                <Image
                  src={dashboard.image.src}
                  alt={dashboard.image.alt}
                  width={640}
                  height={400}
                  className="h-auto w-full max-w-sm object-contain drop-shadow-2xl lg:max-w-none"
                  sizes="(max-width: 1024px) 80vw, 360px"
                />
              </div>
            ) : null}
          </article>

          {/* Center top — Performance */}
          <article className="relative flex flex-col overflow-hidden rounded-3xl bg-brand-navy p-6 sm:p-7">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -bottom-10 size-40 rounded-full bg-brand/25 blur-3xl"
            />
            <h3 className="relative z-10 text-xl font-bold text-white">
              {performance.title}
            </h3>
            <p className="relative z-10 mt-2 text-sm leading-relaxed text-white/60">
              {performance.description}
            </p>
            <div className="relative z-10 mt-6 flex items-end gap-3">
              <span className="text-5xl font-black tracking-tight text-white">
                {performance.metric}
              </span>
              <span className="mb-1.5 rounded-full bg-brand-yellow/20 px-2.5 py-0.5 text-xs font-bold text-brand-yellow">
                {performance.metricNote}
              </span>
            </div>
            <div
              aria-hidden
              className="relative z-10 mt-6 flex h-16 items-end gap-1.5"
            >
              {[40, 55, 35, 70, 48, 82, 60, 90, 65, 78].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-linear-to-t from-brand to-brand-yellow/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </article>

          {/* Right tall — Consolidation */}
          <article className="relative flex min-h-[22rem] flex-col overflow-hidden rounded-3xl bg-brand-navy p-6 sm:p-7 lg:row-span-2 lg:min-h-0 lg:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(255,209,65,0.16),transparent_50%)]"
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white">
                {consolidation.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {consolidation.description}
              </p>
            </div>
            {consolidation.image ? (
              <div className="relative z-10 mt-auto flex flex-1 items-end justify-center pt-8">
                <Image
                  src={consolidation.image.src}
                  alt={consolidation.image.alt}
                  width={520}
                  height={520}
                  className="h-auto w-[85%] max-w-xs object-contain drop-shadow-2xl"
                  sizes="(max-width: 1024px) 70vw, 280px"
                />
              </div>
            ) : null}
          </article>

          {/* Center bottom — Security */}
          <article className="relative flex flex-col overflow-hidden rounded-3xl bg-brand-navy p-6 sm:p-7">
            <h3 className="text-xl font-bold text-white">{security.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {security.description}
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-full border border-brand/40 bg-brand/20 text-brand">
                <CloudIcon className="size-5" aria-hidden />
              </span>
              <span className="h-px w-8 bg-brand-yellow/50" aria-hidden />
              <span className="flex size-14 items-center justify-center rounded-full border border-brand-yellow/50 bg-brand-yellow/15 text-brand-yellow">
                <ShieldCheckIcon className="size-6" aria-hidden />
              </span>
              <span className="h-px w-8 bg-brand-yellow/50" aria-hidden />
              <span className="flex size-12 items-center justify-center rounded-full border border-brand/40 bg-brand/20 text-brand">
                <LockIcon className="size-5" aria-hidden />
              </span>
            </div>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={atlas.cta.href}
            target={atlas.cta.external ? "_blank" : undefined}
            rel={atlas.cta.external ? "noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-yellow/90"
          >
            {atlas.cta.label}
            <ArrowRightIcon className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
