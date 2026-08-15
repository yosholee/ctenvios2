"use client";

import type { ReactElement } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/content/landing";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenId?: string;
  variant?: "navy" | "light";
}

export function FaqAccordion({
  items,
  defaultOpenId,
  variant = "navy",
}: FaqAccordionProps): ReactElement {
  const isNavy = variant === "navy";

  return (
    <Accordion
      defaultValue={defaultOpenId ? [defaultOpenId] : undefined}
      className="rounded-none border-0 bg-transparent"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className={cn(
            "border-0 border-b not-last:border-b data-open:bg-transparent",
            isNavy ? "border-white/15" : "border-brand-navy/10"
          )}
        >
          <AccordionTrigger
            className={cn(
              "px-0 py-4 text-base font-semibold hover:no-underline sm:py-5 [&_[data-slot=accordion-trigger-icon]]:hidden",
              isNavy
                ? "text-white hover:text-brand-yellow"
                : "text-brand-navy hover:text-brand-navy/80"
            )}
          >
            <span className="pr-4">{item.question}</span>
            <PlusIcon
              aria-hidden
              className={cn(
                "size-5 shrink-0 group-aria-expanded/accordion-trigger:hidden",
                isNavy ? "text-white/70" : "text-brand-navy/50"
              )}
            />
            <MinusIcon
              aria-hidden
              className={cn(
                "hidden size-5 shrink-0 group-aria-expanded/accordion-trigger:inline",
                isNavy ? "text-brand-yellow" : "text-brand-navy"
              )}
            />
          </AccordionTrigger>
          <AccordionContent
            className={cn(
              "px-0 pb-4 text-sm leading-relaxed sm:pb-5 sm:text-base",
              isNavy ? "text-white/60" : "text-brand-navy/70"
            )}
          >
            <p>{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
