import type { ReactElement } from "react";
import { CheckIcon } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { formatPrice, getActiveOffers, offers, site } from "@/content/landing";
import { cn } from "@/lib/utils";

export function Offers(): ReactElement {
  const activeOffers = getActiveOffers();
  const promoOffers = activeOffers.filter((offer) => offer.id !== "regular");
  const featuredOffer = promoOffers.find((offer) => offer.featured);
  const sideOffers = promoOffers.filter((offer) => !offer.featured);
  const orderedPromoOffers =
    featuredOffer && sideOffers.length >= 2
      ? [sideOffers[0], featuredOffer, ...sideOffers.slice(1)]
      : promoOffers;
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
    <section
      id="ofertas"
      className="relative z-0 scroll-mt-20 bg-background/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
            {offers.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
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
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {orderedPromoOffers.map((offer) => {
            const whatsappHref = `${site.whatsappUrl}?text=${encodeURIComponent(
              `Hola, quiero cotizar la oferta: ${offer.dayLabel} a ${formatPrice(offer.price)}${offer.unit}`
            )}`;
            const isFeatured = offer.featured;

            return (
              <article
                key={offer.id}
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-2xl p-7 shadow-sm sm:rounded-3xl",
                  isFeatured
                    ? "z-10 bg-linear-to-br from-brand-navy via-[#12285f] to-[#06122e] lg:scale-[1.03]"
                    : "border border-brand-navy/10 bg-white"
                )}
              >
                {isFeatured ? (
                  <>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 1px 1px, rgb(255,255,255,0.22) 1px, transparent 0)",
                        backgroundSize: "18px 18px",
                        maskImage:
                          "radial-gradient(ellipse 90% 80% at 50% 40%, black 20%, transparent 75%)",
                        WebkitMaskImage:
                          "radial-gradient(ellipse 90% 80% at 50% 40%, black 20%, transparent 75%)",
                      }}
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -left-8 top-0 size-28 rounded-full bg-brand-yellow/20 blur-3xl"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-6 bottom-0 size-32 rounded-full bg-brand/30 blur-3xl"
                    />
                    <BorderBeam
                      size={120}
                      duration={8}
                      borderWidth={2}
                      colorFrom="#0b1f4d"
                      colorTo="#ffd141"
                    />
                  </>
                ) : null}

                <div className="relative z-10">
                  {isFeatured ? (
                    <p className="text-sm font-bold text-brand-yellow">
                      <Highlighter
                        action="underline"
                        color="#ffd141"
                        strokeWidth={3}
                        padding={2}
                      >
                        Super oferta
                      </Highlighter>
                    </p>
                  ) : null}
                  <h3
                    className={cn(
                      "text-lg font-semibold",
                      isFeatured ? "mt-1 text-white" : "text-brand-navy"
                    )}
                  >
                    {offer.dayLabel}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm",
                      isFeatured ? "text-white/65" : "text-brand-navy/60"
                    )}
                  >
                    {offer.description}
                  </p>
                </div>

                <div className="relative z-10 mt-6 flex items-end gap-2">
                  <span
                    className={cn(
                      "text-5xl font-black tracking-tight",
                      isFeatured ? "text-white" : "text-brand-navy"
                    )}
                  >
                    {formatPrice(offer.price)}
                  </span>
                  <span
                    className={cn(
                      "mb-1.5 flex flex-col text-xs leading-tight",
                      isFeatured ? "text-white/45" : "text-brand-navy/45"
                    )}
                  >
                    <span>USD</span>
                    <span>{offer.unit.replace("/", "")} · libra</span>
                  </span>
                </div>
                {offer.price < offer.regularPrice ? (
                  <p
                    className={cn(
                      "relative z-10 mt-1 text-sm line-through",
                      isFeatured ? "text-white/45" : "text-brand-navy/45"
                    )}
                  >
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
                  className={cn(
                    "relative z-10 mt-6 w-full",
                    isFeatured
                      ? "bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90"
                      : "border border-brand-navy/15 bg-transparent text-brand-navy hover:bg-brand-navy/[0.04]"
                  )}
                >
                  {offer.ctaLabel}
                </Button>

                <ul
                  className={cn(
                    "relative z-10 mt-8 space-y-3 border-t pt-6",
                    isFeatured ? "border-white/15" : "border-brand-navy/10"
                  )}
                >
                  {offer.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex items-start gap-2.5 text-sm",
                        isFeatured ? "text-white/80" : "text-brand-navy/80"
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                          isFeatured
                            ? "bg-brand-yellow/20 text-brand-yellow"
                            : "bg-brand-yellow/40 text-brand-navy"
                        )}
                      >
                        <CheckIcon className="size-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
