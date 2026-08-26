"use client";

import {
  useRef,
  type ReactElement,
  type ReactNode,
  type RefObject,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  BookOpenIcon,
  MapPinIcon,
  RefrigeratorIcon,
  ShipIcon,
  ShoppingBasketIcon,
  PackageIcon,
  type LucideIcon,
} from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { site } from "@/content/landing";
import { seoHubLinks, type SeoHubLink } from "@/content/seo";
import { cn } from "@/lib/utils";

interface ServiceVisual {
  icon: LucideIcon;
  tag: string;
}

const serviceVisuals: Record<string, ServiceVisual> = {
  "/envios-cuba-miami": { icon: MapPinIcon, tag: "Agencia" },
  "/envios-maritimos-cuba": { icon: ShipIcon, tag: "Marítimo" },
  "/envio-alimentos-cuba": { icon: ShoppingBasketIcon, tag: "Alimentos" },
  "/envio-electrodomesticos-cuba": {
    icon: RefrigeratorIcon,
    tag: "Carga",
  },
  "/cajas-envios-cuba": { icon: PackageIcon, tag: "Cajas" },
  "/blog": { icon: BookOpenIcon, tag: "Guías" },
};

interface FlowNodeProps {
  nodeRef: RefObject<HTMLDivElement | null>;
  label: string;
  className?: string;
  children: ReactNode;
}

function FlowNode({
  nodeRef,
  label,
  className,
  children,
}: FlowNodeProps): ReactElement {
  return (
    <div className="z-10 flex flex-col items-center gap-2">
      <div
        ref={nodeRef}
        className={cn(
          "flex items-center justify-center rounded-full border-2 border-white/20 bg-white shadow-[0_0_24px_-8px_rgba(255,209,65,0.45)]",
          className
        )}
      >
        {children}
      </div>
      <span className="text-xs font-semibold tracking-wide text-white/70 uppercase">
        {label}
      </span>
    </div>
  );
}

function ServiceCard({
  link,
  cardRef,
}: {
  link: SeoHubLink;
  cardRef: RefObject<HTMLAnchorElement | null>;
}): ReactElement {
  const visual = serviceVisuals[link.href];
  const Icon = visual?.icon ?? ShipIcon;

  return (
    <Link
      ref={cardRef}
      href={link.href}
      className="group z-10 flex flex-col gap-2 rounded-xl border border-white/10 bg-white/6 px-2.5 py-2.5 backdrop-blur-sm transition-colors hover:border-brand-yellow/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow lg:flex-row lg:items-center lg:gap-2.5 lg:px-3 lg:py-2"
    >
      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/15 text-brand-yellow">
        <Icon className="size-3.5" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm leading-snug font-semibold text-white transition-colors group-hover:text-brand-yellow">
          {link.label}
        </span>
        <span className="mt-0.5 hidden truncate text-xs text-white/50 lg:block">
          {link.support}
        </span>
      </span>
      <ArrowUpRightIcon
        className="hidden size-3.5 shrink-0 text-white/35 transition-colors group-hover:text-brand-yellow lg:block"
        aria-hidden
      />
    </Link>
  );
}

export function SeoHub(): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const cardRefs = [
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
  ];

  return (
    <section
      id="servicios"
      className="scroll-mt-20 bg-background/90 py-12 backdrop-blur-md sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-brand-navy sm:rounded-[2rem]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_70%,rgba(0,102,255,0.35),transparent_55%),radial-gradient(ellipse_at_40%_30%,rgba(255,209,65,0.18),transparent_50%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgb(255,255,255,0.22) 1px, transparent 0)",
              backgroundSize: "18px 18px",
              maskImage:
                "radial-gradient(ellipse 80% 70% at 50% 55%, black 25%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 70% at 50% 55%, black 25%, transparent 75%)",
            }}
          />

          <div
            ref={containerRef}
            className="relative z-10 grid grid-cols-2 items-center gap-4 px-6 py-12 sm:px-8 sm:py-14 lg:grid-cols-3 lg:gap-8 lg:px-12 lg:py-16"
          >
            <div className="col-span-2 lg:col-span-1">
              <span className="inline-flex w-fit rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
                Servicios
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-balance text-white sm:text-3xl">
                Envíos a Cuba: elige el servicio que necesitas
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
                Agencia de envíos a Cuba en Hialeah Gardens, Miami
              </p>
            </div>

            <div className="col-span-2 flex justify-center lg:col-span-1">
              <FlowNode
                nodeRef={hubRef}
                label={site.brand}
                className="size-16 rounded-2xl p-2.5 sm:size-20 lg:size-24 lg:p-3"
              >
                <Image
                  src={site.logoSrc}
                  alt={site.brand}
                  width={96}
                  height={40}
                  className="h-auto w-full object-contain"
                />
              </FlowNode>
            </div>

            <nav
              aria-label="Servicios de envío"
              className="col-span-2 grid w-full grid-cols-2 gap-2 lg:col-span-1 lg:flex lg:flex-col"
            >
              {seoHubLinks.map((link, index) => (
                <ServiceCard
                  key={link.href}
                  link={link}
                  cardRef={cardRefs[index]}
                />
              ))}
            </nav>

            <div className="pointer-events-none absolute inset-0">
              {cardRefs.map((cardRef, index) => (
                <AnimatedBeam
                  key={seoHubLinks[index]?.href ?? index}
                  containerRef={containerRef}
                  fromRef={hubRef}
                  toRef={cardRef}
                  pathType="cubic"
                  fromAnchor="auto"
                  toAnchor="auto"
                  duration={5}
                  delay={0.18 * index}
                  pathWidth={1.5}
                  pathColor="rgba(255,255,255,0.22)"
                  pathOpacity={0.28}
                  gradientStartColor="#ffd141"
                  gradientStopColor="#6ea8ff"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
