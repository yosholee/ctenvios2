import type { ReactElement, ReactNode } from "react";
import { SmartphoneIcon } from "lucide-react";
import { apps } from "@/content/landing";

interface StoreBadgeProps {
  label: string;
  caption: string;
  href: string;
  icon: ReactNode;
}

function StoreBadge({
  label,
  caption,
  href,
  icon,
}: StoreBadgeProps): ReactElement {
  const content = (
    <>
      <span className="flex size-8 shrink-0 items-center justify-center text-white">
        {icon}
      </span>
      <span className="flex min-w-0 flex-col items-start leading-tight">
        <span className="text-[10px] font-medium tracking-wide text-white/70 uppercase">
          {caption}
        </span>
        <span className="text-base font-semibold text-white">{label}</span>
      </span>
    </>
  );

  const className =
    "inline-flex min-w-46 items-center gap-3 rounded-xl bg-black px-4 py-3 ring-1 ring-white/15 transition-colors";

  if (!href) {
    return (
      <span className={`${className} cursor-default opacity-90`}>{content}</span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${className} hover:bg-black/80 focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none`}
    >
      {content}
    </a>
  );
}

function AppleIcon(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden fill="currentColor">
      <path d="M16.365 1.43c0 1.14-.42 2.07-1.12 2.86-.75.84-1.98 1.49-3.12 1.4-.14-1.08.4-2.23 1.1-3.02.75-.86 2.04-1.48 3.14-1.24zM20.5 17.12c-.54 1.25-1.2 2.4-2.14 3.48-.8.9-1.46 1.52-2.5 1.54-1.02.02-1.36-.66-2.84-.66-1.5 0-1.86.64-2.9.68-1.06.04-1.86-.98-2.66-1.88-1.64-1.86-2.9-5.26-1.22-7.56.84-1.16 2.34-1.9 3.96-1.92 1.24-.02 2.4.84 3.16.84.74 0 2.14-1.04 3.62-.88.62.02 2.36.25 3.48 1.88-.09.06-2.08 1.22-2.06 3.64.03 2.9 2.54 3.86 2.1 5.84z" />
    </svg>
  );
}

function PlayIcon(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
      <path fill="#34A853" d="M3.6 20.4 13.2 12 3.6 3.6v16.8z" />
      <path fill="#FBBC04" d="M16.8 8.4 13.2 12l3.6 3.6 4.2-2.4c.8-.5.8-1.7 0-2.2L16.8 8.4z" />
      <path fill="#EA4335" d="M3.6 3.6 13.2 12l3.6-3.6L5.4 2.1C4.4 1.5 3.2 2.2 3.6 3.6z" />
      <path fill="#4285F4" d="M13.2 12 3.6 20.4c-.4 1.4.8 2.1 1.8 1.5l11.4-6.3L13.2 12z" />
    </svg>
  );
}

export function AppsTile(): ReactElement {
  return (
    <article
      id="app"
      className="relative order-1 flex flex-col justify-between overflow-hidden rounded-3xl bg-brand-navy p-6 sm:p-8 lg:order-none lg:col-span-3 lg:col-start-1 lg:row-start-1"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-[radial-gradient(circle,rgba(255,209,65,0.18)_0%,transparent_68%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-10 size-72 rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.28)_0%,transparent_70%)]"
      />

      <div className="relative z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
          <SmartphoneIcon className="size-3.5" aria-hidden />
          {apps.eyebrow}
        </span>
        <h2 className="mt-5 text-2xl font-bold tracking-tight text-balance text-white sm:text-3xl">
          {apps.headline}
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
          {apps.support}
        </p>
      </div>

      <div className="relative z-10 mt-8 flex flex-wrap items-center gap-3">
        <StoreBadge
          label={apps.appStore.label}
          caption={apps.appStore.caption}
          href={apps.appStore.href}
          icon={<AppleIcon />}
        />
        <StoreBadge
          label={apps.playStore.label}
          caption={apps.playStore.caption}
          href={apps.playStore.href}
          icon={<PlayIcon />}
        />
      </div>
    </article>
  );
}
