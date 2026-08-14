"use client";

import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { liveOffer } from "@/content/landing";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(endsAt: string): TimeLeft {
  const diff = Math.max(0, new Date(endsAt).getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function TimeBox({ label, value }: { label: string; value: number }): ReactElement {
  return (
    <div className="min-w-16 rounded-xl bg-white/10 px-3 py-2 text-center">
      <div className="text-2xl font-bold tabular-nums text-white">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-[10px] font-semibold tracking-wide text-white/70 uppercase">
        {label}
      </div>
    </div>
  );
}

export function LiveOffer(): ReactElement {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = (): void => {
      setTimeLeft(getTimeLeft(liveOffer.endsAt));
    };

    tick();
    const id = window.setInterval(tick, 1000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-10 lg:flex-row lg:items-center lg:px-8">
        <div>
          <span className="inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
            {liveOffer.badge}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {liveOffer.title}: {liveOffer.price}{" "}
            <span className="text-brand-yellow">{liveOffer.unit}</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-white/70 uppercase">
              {liveOffer.endsLabel}
            </p>
            <div className="flex gap-2">
              <TimeBox label="Días" value={timeLeft.days} />
              <TimeBox label="Horas" value={timeLeft.hours} />
              <TimeBox label="Min" value={timeLeft.minutes} />
              <TimeBox label="Seg" value={timeLeft.seconds} />
            </div>
          </div>
          <Button
            nativeButton={false}
            render={
              <a
                href={liveOffer.cta.href}
                target={liveOffer.cta.external ? "_blank" : undefined}
                rel={liveOffer.cta.external ? "noreferrer" : undefined}
              />
            }
            size="lg"
            className="bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90"
          >
            {liveOffer.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
