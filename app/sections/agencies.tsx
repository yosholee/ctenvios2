import type { ReactElement } from "react";
import Image from "next/image";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { agencies } from "@/content/landing";

export function Agencies(): ReactElement {
  return (
    <section id="agencias" className="scroll-mt-20 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-[2rem] bg-brand-navy p-6 text-white sm:p-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-10 lg:p-10">
          <div className="relative aspect-square overflow-hidden rounded-3xl sm:aspect-[4/5] lg:aspect-square lg:max-h-[26rem]">
            <Image
              src={agencies.image.src}
              alt={agencies.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {agencies.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              {agencies.support}
            </p>

            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {agencies.benefits.map((benefit) => (
                <li key={benefit.id} className="flex items-center gap-2.5">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckIcon className="size-3" />
                  </span>
                  <span className="text-sm font-medium text-white">
                    {benefit.title}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={agencies.cta.href}
              target={agencies.cta.external ? "_blank" : undefined}
              rel={agencies.cta.external ? "noreferrer" : undefined}
              className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-yellow transition-colors hover:text-white"
            >
              {agencies.cta.label}
              <ArrowRightIcon className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
