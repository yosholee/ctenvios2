"use client";

import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { FaqAccordion } from "@/app/sections/faq-accordion";
import { Highlighter } from "@/components/ui/highlighter";
import { faq, getFeaturedFaqItems } from "@/content/landing";

export function Faq(): ReactElement {
  const items = getFeaturedFaqItems();
  const defaultOpen = items[0]?.id;

  return (
    <section
      id="faq"
      className="scroll-mt-20 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-brand-navy/5 lg:grid lg:grid-cols-5 lg:items-stretch">
          <div className="relative flex items-end justify-center overflow-hidden bg-gradient-to-b from-[#e9e9fa] to-[#f7f7fd] px-6 pt-8 lg:col-span-2 lg:pt-10">
            <Image
              src={faq.image.src}
              alt={faq.image.alt}
              width={1024}
              height={1536}
              quality={75}
              className="relative h-auto w-52 object-contain object-bottom sm:w-64 lg:w-full lg:max-w-md"
              sizes="(max-width: 1024px) 256px, 448px"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center p-7 sm:p-10 lg:col-span-3 lg:p-12">
            <span className="inline-flex w-fit rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
              FAQ
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance text-brand-navy sm:text-4xl">
              {faq.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-navy/60 sm:text-lg">
              {faq.support}
            </p>

            <div className="mt-8">
              <FaqAccordion
                items={items}
                defaultOpenId={defaultOpen}
                variant="light"
              />
            </div>

            <Link
              href={faq.moreHref}
              className="mt-8 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-navy transition-colors hover:text-brand-navy/70"
            >
              <Highlighter
                action="highlight"
                color="#ffd141"
                strokeWidth={2}
                padding={3}
              >
                {faq.moreLabel}
              </Highlighter>
              <ArrowUpRightIcon className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
