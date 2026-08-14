import type { ReactElement } from "react";
import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/content/landing";

function Stars({ rating }: { rating: number }): ReactElement {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${rating} de 5`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon
          key={index}
          className={
            index < rating
              ? "size-3.5 fill-brand-yellow text-brand-yellow"
              : "size-3.5 text-brand-navy/20"
          }
          aria-hidden
        />
      ))}
    </div>
  );
}

export function Testimonials(): ReactElement {
  return (
    <section
      id="reseñas"
      className="scroll-mt-20 bg-background/90 py-16 backdrop-blur-md sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
            {testimonials.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance text-brand-navy sm:text-4xl lg:text-5xl">
            {testimonials.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/65 sm:text-lg">
            {testimonials.support}
          </p>
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-sm text-brand-navy">
            <Stars rating={Math.round(testimonials.rating)} />
            <span className="font-bold tabular-nums">
              {testimonials.rating.toFixed(1)}
            </span>
            <span className="text-brand-navy/40">·</span>
            <span className="text-brand-navy/65">
              {testimonials.reviewCount} reseñas en {testimonials.sourceLabel}
            </span>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-5 sm:mt-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <figure
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-brand-navy/10 bg-white p-6 sm:rounded-3xl sm:p-7"
            >
              <div>
                <Stars rating={item.rating} />
                <blockquote className="mt-4 text-base leading-relaxed text-brand-navy/80">
                  “{item.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-brand-navy/10 pt-5">
                <Avatar size="lg" className="bg-brand-navy/5">
                  <AvatarFallback className="bg-brand-navy text-sm font-semibold text-white">
                    {item.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 text-left">
                  <div className="truncate text-sm font-semibold text-brand-navy">
                    {item.name}
                  </div>
                  <div className="truncate text-sm text-brand-navy/45">
                    {item.handle}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={testimonials.cta.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-yellow/90 focus-visible:ring-2 focus-visible:ring-brand-navy/35 focus-visible:outline-none"
          >
            {testimonials.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
