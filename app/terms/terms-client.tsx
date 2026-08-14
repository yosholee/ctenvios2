"use client";

import { useState, type ReactElement } from "react";
import { GlobeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  terms,
  termsLanguage,
  type TermsLanguage,
} from "@/content/terms";

function formatTermsDate(isoDate: string, language: TermsLanguage): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString(
    language === termsLanguage.es ? "es-US" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

export function TermsClient(): ReactElement {
  const [language, setLanguage] = useState<TermsLanguage>(termsLanguage.es);
  const content = terms[language];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
          {content.title}
        </h1>
        <Button
          type="button"
          variant="ghost"
          className="text-brand-navy"
          onClick={() =>
            setLanguage(
              language === termsLanguage.es ? termsLanguage.en : termsLanguage.es
            )
          }
        >
          <GlobeIcon aria-hidden />
          {content.languageButton}
        </Button>
      </div>

      <p className="mt-4 text-sm text-brand-navy/60">
        {content.lastUpdatedLabel}: {formatTermsDate(terms.lastUpdated, language)}
      </p>

      <div className="mt-10 space-y-10">
        {content.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-semibold text-brand-navy">
              {section.title}
            </h2>
            {section.content.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-3 text-sm leading-relaxed text-brand-navy/75 sm:text-base"
              >
                {paragraph}
              </p>
            ))}
            {section.list ? (
              <ul className="mt-3 list-disc space-y-1.5 pl-6 text-sm leading-relaxed text-brand-navy/75 sm:text-base">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.afterList?.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-3 text-sm leading-relaxed text-brand-navy/75 sm:text-base"
              >
                {paragraph}
              </p>
            ))}
            {section.contact ? (
              <address className="mt-3 not-italic text-sm leading-relaxed text-brand-navy/75 sm:text-base">
                {section.contact.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}
