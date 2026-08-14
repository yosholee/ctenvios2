import type { ReactElement } from "react";
import { AppsTile } from "@/app/sections/apps";
import { ContactForm } from "@/app/sections/contact-form";
import { contact } from "@/content/landing";

export function Contact(): ReactElement {
  return (
    <section
      id="contacto"
      className="scroll-mt-20 bg-background/90 py-16 backdrop-blur-md sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-5 lg:grid-rows-[auto_1fr] lg:gap-5">
          <AppsTile />

          <article className="order-3 flex flex-col rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-sm sm:p-8 lg:order-none lg:col-span-2 lg:col-start-4 lg:row-span-2 lg:row-start-1">
            <h3 className="text-xl font-semibold text-brand-navy">
              {contact.formTitle}
            </h3>
            <div className="mt-6 flex-1">
              <ContactForm />
            </div>
          </article>

          <article className="order-2 flex flex-col justify-center rounded-3xl border border-brand-navy/10 bg-white p-6 sm:p-8 lg:order-none lg:col-span-3 lg:col-start-1 lg:row-start-2">
            <span className="inline-flex w-fit rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
              {contact.eyebrow}
            </span>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-balance text-brand-navy sm:text-3xl">
              {contact.headline}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-navy/65 sm:text-base">
              {contact.support}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
