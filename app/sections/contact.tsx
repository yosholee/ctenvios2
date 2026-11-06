import type { ReactElement } from "react";
import { ContactForm } from "@/app/sections/contact-form";
import { contact } from "@/content/landing";

export function Contact(): ReactElement {
  return (
    <section
      id="contacto"
      className="scroll-mt-20 bg-background/90 py-16 backdrop-blur-md sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <article className="rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
            <div className="flex flex-col justify-center lg:col-span-3">
              <span className="inline-flex w-fit rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
                {contact.eyebrow}
              </span>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-balance text-brand-navy sm:text-3xl">
                {contact.headline}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-navy/65 sm:text-base">
                {contact.support}
              </p>
            </div>

            <div className="border-t border-brand-navy/10 pt-8 lg:col-span-2 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <h3 className="text-xl font-semibold text-brand-navy">
                {contact.formTitle}
              </h3>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
