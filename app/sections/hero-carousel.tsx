"use client";

import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export interface OfferSlide {
  id: string;
  label: string;
  title: string;
  description: string;
  regularPrice?: string;
  featured?: boolean;
}

interface HeroCarouselProps {
  slides: readonly OfferSlide[];
}

export function HeroCarousel({ slides }: HeroCarouselProps): ReactElement {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = (): void => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    onSelect();
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full px-6 text-white">
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 3500, stopOnInteraction: true })]}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="flex flex-col items-center justify-center px-3 py-0.5 text-center">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-brand-yellow px-2 py-px text-[9px] font-bold tracking-wide text-brand-navy uppercase">
                    {slide.featured ? "Super oferta" : "Oferta"}
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.12em] text-white/70 uppercase">
                    {slide.label}
                  </span>
                </div>
                <div className="mt-0.5 flex items-baseline justify-center gap-2">
                  <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                    {slide.title}
                  </h3>
                  {slide.regularPrice ? (
                    <span className="text-[11px] font-semibold text-white/45 line-through">
                      {slide.regularPrice}
                    </span>
                  ) : null}
                </div>
                <p className="mt-0.5 line-clamp-1 max-w-[18rem] text-[11px] text-white/55">
                  {slide.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="ghost"
          size="icon"
          className="left-0 size-7 border-0 bg-transparent text-white/80 shadow-none hover:bg-white/10 hover:text-brand-yellow"
        />
        <CarouselNext
          variant="ghost"
          size="icon"
          className="right-0 size-7 border-0 bg-transparent text-white/80 shadow-none hover:bg-white/10 hover:text-brand-yellow"
        />
      </Carousel>

      <div className="mt-1 flex items-center justify-center gap-1">
        {slides.map((slide, index) => {
          const isActive = selectedIndex === index;

          return (
            <button
              key={slide.id}
              type="button"
              aria-label={`Ir a oferta ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                isActive
                  ? "w-4 bg-brand-yellow"
                  : "w-1 bg-white/30 hover:bg-white/45"
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
