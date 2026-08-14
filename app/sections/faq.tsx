"use client";

import type { ReactElement } from "react";
import Image from "next/image";
import { MinusIcon, PlusIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Meteors } from "@/components/ui/meteors";
import { faq } from "@/content/landing";

export function Faq(): ReactElement {
  const items = faq.groups.flatMap((group) => group.items);
  const defaultOpen = items[0]?.id;

  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-background/90 pt-6 pb-16 backdrop-blur-md sm:pt-8 sm:pb-20"
    >
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-brand-navy sm:rounded-[2rem] lg:grid lg:grid-cols-2 lg:items-stretch">
          <div className="relative flex items-end justify-center overflow-hidden px-6 pt-10 sm:px-8 lg:px-10 lg:pt-12">
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
              aria-hidden
              className="pointer-events-none absolute inset-x-[10%] top-0 z-[1] h-44 overflow-hidden sm:h-52 lg:h-56 [mask-image:linear-gradient(to_bottom,black_45%,transparent)]"
            >
              <Meteors
                number={14}
                minDuration={2}
                maxDuration={5}
                className="bg-brand-yellow text-brand-yellow shadow-[0_0_0_1px_#ffd14140]"
              />
            </div>
            <Image
              src={faq.image.src}
              alt={faq.image.alt}
              width={408}
              height={612}
              quality={75}
              className="relative z-10 h-auto w-full max-w-sm object-contain object-bottom lg:max-w-md"
              sizes="(max-width: 1024px) 384px, 448px"
              priority
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center p-8 sm:p-10 lg:p-12">
            <span className="inline-flex w-fit rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
              FAQ
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
              {faq.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              {faq.support}
            </p>

            <Accordion
              defaultValue={defaultOpen ? [defaultOpen] : undefined}
              className="mt-8 rounded-none border-0 bg-transparent"
            >
              {items.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-0 border-b border-white/15 not-last:border-b data-open:bg-transparent"
                >
                  <AccordionTrigger className="px-0 py-4 text-base font-semibold text-white hover:no-underline hover:text-brand-yellow sm:py-5 [&_[data-slot=accordion-trigger-icon]]:hidden">
                    <span className="pr-4">{item.question}</span>
                    <PlusIcon
                      aria-hidden
                      className="size-5 shrink-0 text-white/70 group-aria-expanded/accordion-trigger:hidden"
                    />
                    <MinusIcon
                      aria-hidden
                      className="hidden size-5 shrink-0 text-brand-yellow group-aria-expanded/accordion-trigger:inline"
                    />
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pb-4 text-sm leading-relaxed text-white/60 sm:pb-5 sm:text-base">
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
