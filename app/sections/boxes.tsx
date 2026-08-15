import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { boxes, formatPrice, site } from "@/content/landing";
import { cn } from "@/lib/utils";

export function Boxes(): ReactElement {
  return (
    <section
      id="cajas"
      className="scroll-mt-20 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
            {boxes.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance text-brand-navy sm:text-4xl">
            {boxes.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/60 sm:text-lg">
            {boxes.support}
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 lg:divide-x lg:divide-brand-navy/10">
          {boxes.items.map((box, index) => {
            const whatsappHref = `${site.whatsappUrl}?text=${encodeURIComponent(
              `Hola, quiero reservar la ${box.sizeLabel} a ${formatPrice(box.price)} USD.`
            )}`;

            return (
              <article
                key={box.id}
                className={cn(
                  "row-span-7 grid grid-rows-subgrid items-start py-10 lg:px-8 lg:py-0",
                  index > 0 && "border-t border-brand-navy/10 lg:border-t-0",
                  index === 0 && "lg:pl-0",
                  index === boxes.items.length - 1 && "lg:pr-0"
                )}
              >
                <div className="flex min-h-12 flex-col items-center justify-end gap-2">
                  {box.featured ? (
                    <span className="rounded-full bg-brand-yellow px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-brand-navy uppercase">
                      {box.badge}
                    </span>
                  ) : (
                    <span className="invisible h-[18px] text-[10px]" aria-hidden>
                      {box.badge}
                    </span>
                  )}
                  <span className="rounded-full bg-brand-navy px-3 py-1 text-xs font-bold tracking-wide text-white">
                    {box.dimensions}
                  </span>
                </div>

                <div className="mt-6 flex h-40 items-end justify-center sm:h-44">
                  <Image
                    src={box.image.src}
                    alt={box.image.alt}
                    width={320}
                    height={320}
                    className="h-full w-auto object-contain"
                  />
                </div>

                <p className="mt-6 flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold tracking-tight text-brand-navy tabular-nums">
                    {formatPrice(box.price)}
                  </span>
                  <span className="text-sm text-brand-navy/45">USD</span>
                </p>

                <p className="mt-2 text-center text-sm text-brand-navy/45">
                  {box.priceNote}
                </p>

                <div className="mt-6">
                  <Button
                    nativeButton={false}
                    render={
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                      />
                    }
                    size="lg"
                    className={cn(
                      "w-full rounded-xl",
                      box.featured
                        ? "bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90"
                        : "border border-brand-navy/15 bg-transparent text-brand-navy hover:bg-brand-navy/[0.04]"
                    )}
                  >
                    {boxes.ctaLabel}
                  </Button>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-brand-navy">
                  {box.summary}
                </p>

                <ul className="mt-6 space-y-3">
                  {box.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-brand-navy/80"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#3b6cff]">
                        <CheckIcon
                          className="size-3 text-white"
                          strokeWidth={3}
                          aria-hidden
                        />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={boxes.moreHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-navy/70"
          >
            {boxes.moreLabel}
            <ArrowUpRightIcon className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
