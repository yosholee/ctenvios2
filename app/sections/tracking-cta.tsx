"use client";

import type { FormEvent, ReactElement } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { tracking } from "@/content/landing";

export function TrackingCta(): ReactElement {
  const [value, setValue] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const query = value.trim();
    const url = query
      ? `${tracking.cta.href}?q=${encodeURIComponent(query)}`
      : tracking.cta.href;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="tracking" className="scroll-mt-20 border-y bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {tracking.headline}
            </h2>
            <p className="mt-3 text-muted-foreground">{tracking.support}</p>
          </div>

          <form
            onSubmit={onSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder={tracking.placeholder}
              aria-label={tracking.placeholder}
              className="h-11 flex-1"
            />
            <Button type="submit" size="lg" className="sm:min-w-36">
              {tracking.buttonLabel}
            </Button>
          </form>

          <ol className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {tracking.steps.map((step, index) => (
              <li
                key={step.id}
                className="rounded-xl border border-border bg-background px-3 py-3 text-center"
              >
                <span className="block text-xs font-semibold text-primary">
                  0{index + 1}
                </span>
                <span className="mt-1 block text-sm font-medium text-foreground">
                  {step.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
