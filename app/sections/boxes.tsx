import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { boxes, formatPrice, site } from "@/content/landing";
import { cn } from "@/lib/utils";

export function Boxes(): ReactElement {
  return (
    <section
      id="cajas"
      className="scroll-mt-20 py-16 sm:py-20"
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

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {boxes.items.map((box) => {
            const whatsappHref = `${site.whatsappUrl}?text=${encodeURIComponent(
              `Hola, quiero reservar la ${box.sizeLabel} a ${formatPrice(box.price)} USD.`
            )}`;

            return (
              <article
                key={box.id}
                className={cn(
                  "row-span-7 grid grid-rows-subgrid items-start rounded-[28px] bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-brand-navy/5 sm:p-8"
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
                      "w-full rounded-full",
                      box.featured
                        ? "bg-[#0071e3] text-white hover:bg-[#0077ed]"
                        : "bg-brand-navy/5 text-brand-navy hover:bg-brand-navy/10"
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
                      <CheckIcon
                        className="mt-0.5 size-4 shrink-0 text-brand-navy/55"
                        strokeWidth={2.5}
                        aria-hidden
                      />
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
            <Highlighter
              action="highlight"
              color="#ffd141"
              strokeWidth={2}
              padding={3}
            >
              {boxes.moreLabel}
            </Highlighter>
            <ArrowUpRightIcon className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
