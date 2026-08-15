import type { ReactElement } from "react";
import {
  HomeIcon,
  PackageIcon,
  ReceiptTextIcon,
  ShipIcon,
  type LucideIcon,
} from "lucide-react";
import { howItWorks } from "@/content/landing";

const stepIcons: Record<string, LucideIcon> = {
  prepara: PackageIcon,
  factura: ReceiptTextIcon,
  transporte: ShipIcon,
  entrega: HomeIcon,
};

export function HowItWorks(): ReactElement {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-20 bg-background/90 py-16 backdrop-blur-md sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
            {howItWorks.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance text-brand-navy sm:text-4xl">
            {howItWorks.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/65 sm:text-lg">
            {howItWorks.support}
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {howItWorks.steps.map((step, index) => {
            const Icon = stepIcons[step.id] ?? PackageIcon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <li
                key={step.id}
                className="relative rounded-2xl border border-brand-navy/10 bg-white p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand-yellow text-brand-navy">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-mono text-xs tracking-widest text-brand-navy/30">
                    {number}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/60">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
