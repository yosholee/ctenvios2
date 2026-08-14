"use client";

import type { ReactElement } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/content/landing";

export function SiteHeader(): ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-8"
      >
        <Link
          href="/"
          translate="no"
          className="flex shrink-0 items-center gap-2 rounded-sm focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
        >
          <Image
            src={site.logoSrc}
            alt={site.brand}
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  className="lg:hidden"
                  aria-label="Abrir menú"
                />
              }
            >
              <MenuIcon className="size-5" aria-hidden />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100%,20rem)] overscroll-contain"
            >
              <SheetHeader>
                <SheetTitle>{site.brand}</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4 pb-6">
                {site.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  nativeButton={false}
                  render={
                    <a
                      href={site.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                  className="mt-4"
                >
                  WhatsApp {site.whatsappDisplay}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
