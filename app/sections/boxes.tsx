import type { ReactElement } from "react";
import { Button } from "@/components/ui/button";
import {
  boxes,
  formatPrice,
  getActiveOffers,
  site,
} from "@/content/landing";

export function Boxes(): ReactElement {
  const regularOffer = getActiveOffers().find((offer) => offer.id === "regular");

  return (
    <section
      id="cajas"
      className="scroll-mt-20 bg-background/90 py-16 backdrop-blur-md sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-0">
          {regularOffer ? (
            <div className="flex h-full flex-col justify-center text-center lg:min-h-[28rem] lg:pr-10 xl:pr-14">
              <p className="text-base font-semibold text-brand-navy sm:text-lg">
                Precio regular
              </p>
              <p className="mt-2 text-sm text-brand-navy/60 sm:text-base">
                {regularOffer.description}
              </p>

              <div className="my-8 border-t border-dashed border-brand-navy/20" />

              <div className="flex items-end justify-center gap-2.5">
                <span className="text-5xl font-black tracking-tight text-brand-navy tabular-nums sm:text-6xl">
                  {formatPrice(regularOffer.price)}
                </span>
                <span className="mb-1.5 flex flex-col text-left text-sm leading-tight text-brand-navy/45">
                  <span>USD</span>
                  <span>{regularOffer.unit.replace("/", "")} · libra</span>
                </span>
              </div>
            </div>
          ) : null}

          <div className="border-t border-dashed border-brand-navy/20 pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-14">
            <span className="inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
              {boxes.eyebrow}
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance text-brand-navy sm:text-4xl">
              {boxes.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-navy/65">
              {boxes.support}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {boxes.allowedItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand-navy/10 bg-white px-3 py-1 text-xs font-semibold text-brand-navy/70"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-brand-navy/10 bg-white">
              <ul className="divide-y divide-brand-navy/10">
                {boxes.items.map((box) => {
                  const whatsappHref = `${site.whatsappUrl}?text=${encodeURIComponent(
                    `Hola, quiero cotizar la ${box.sizeLabel} a ${formatPrice(box.price)} USD (Alimentos, Aseo, Ropa y Medicinas).`
                  )}`;

                  return (
                    <li
                      key={box.id}
                      className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6"
                    >
                      <div className="min-w-0">
                        <p className="text-base font-semibold text-brand-navy">
                          {box.sizeLabel}
                        </p>
                        <p className="mt-0.5 text-sm text-brand-navy/55">
                          {box.category}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2.5 sm:justify-end">
                        <span className="rounded-full border border-brand-navy/15 bg-brand-navy/[0.04] px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-brand-navy/60 uppercase">
                          {box.badge}
                        </span>
                        <span className="text-lg font-black tracking-tight text-brand-navy tabular-nums">
                          {formatPrice(box.price)}{" "}
                          <span className="text-xs font-semibold text-brand-navy/45">
                            USD
                          </span>
                        </span>
                        <Button
                          nativeButton={false}
                          render={
                            <a
                              href={whatsappHref}
                              target="_blank"
                              rel="noreferrer"
                            />
                          }
                          size="sm"
                          className="bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90"
                        >
                          {boxes.ctaLabel}
                        </Button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
