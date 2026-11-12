import type { ReactElement } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { formatPrice, getActiveOffers, offers, site } from "@/content/landing";

const CARD_ORDER = ["jueves", "duraderos", "finde"];

export function Offers(): ReactElement {
  const promoOffers = getActiveOffers()
    .filter((offer) => offer.id !== "regular")
    .sort(
      (a, b) => CARD_ORDER.indexOf(a.id) - CARD_ORDER.indexOf(b.id)
    );
  const highlightIndex = offers.headline.indexOf(offers.highlight);
  const headlineBefore =
    highlightIndex >= 0
      ? offers.headline.slice(0, highlightIndex)
      : offers.headline;
  const headlineAfter =
    highlightIndex >= 0
      ? offers.headline.slice(highlightIndex + offers.highlight.length)
      : "";

  return (
    <section id="ofertas" className="relative z-0 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
            {offers.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance text-brand-navy sm:text-4xl lg:text-5xl">
            {headlineBefore}
            {highlightIndex >= 0 ? (
              <Highlighter
                action="underline"
                color="#ffd141"
                strokeWidth={3}
                padding={4}
              >
                {offers.highlight}
              </Highlighter>
            ) : null}
            {headlineAfter}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/65 sm:text-lg">
            {offers.support}
          </p>
          <p className="mt-5 text-lg font-bold tracking-tight text-balance text-brand-navy sm:text-xl">
            No por gusto nos dicen{" "}
            <Highlighter
              action="underline"
              color="#ffd141"
              strokeWidth={3}
              padding={4}
            >
              Mister 99
            </Highlighter>
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {promoOffers.map((offer) => {
            const whatsappHref = `${site.whatsappUrl}?text=${encodeURIComponent(
              `Hola, quiero cotizar la oferta: ${offer.dayLabel} a ${formatPrice(offer.price)}${offer.unit}`
            )}`;

            return (
              <article
                key={offer.id}
                className="flex flex-col items-center rounded-[28px] bg-white p-7 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-brand-navy/5 sm:p-8"
              >
                <p className="text-sm font-bold tracking-[0.08em] text-[#b25000] uppercase">
                  {offer.dayLabel}
                </p>

                <p className="mt-3 flex items-baseline justify-center gap-1">
                  <span className="text-[52px] leading-none font-extrabold tracking-tight text-brand-navy tabular-nums">
                    {formatPrice(offer.price)}
                  </span>
                  <span className="text-xl font-bold text-brand-navy/50">
                    {offer.unit}
                  </span>
                </p>

                <p className="mt-3 min-h-12 text-[17px] leading-snug text-brand-navy/65">
                  {offer.category}
                </p>

                {offer.price < offer.regularPrice ? (
                  <p className="mt-1 text-sm text-brand-navy/40 line-through">
                    Antes {formatPrice(offer.regularPrice)}
                    {offer.unit}
                  </p>
                ) : null}

                <Button
                  nativeButton={false}
                  render={
                    <a href={whatsappHref} target="_blank" rel="noreferrer" />
                  }
                  size="lg"
                  className="mt-5 rounded-full bg-[#0071e3] px-6 text-white hover:bg-[#0077ed]"
                >
                  Cotizar por WhatsApp
                </Button>

                {offer.image ? (
                  <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-[18px]">
                    <Image
                      src={offer.image.src}
                      alt={offer.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}

                <p className="mt-4 text-sm text-brand-navy/50">
                  Mínimo {offer.minLbs} lb · Puerta a puerta a toda Cuba
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
