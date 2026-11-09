import type { ReactElement } from "react";
import { stats } from "@/content/landing";

export function Stats(): ReactElement {
  return (
    <section aria-label="CT Envios en cifras" className="bg-brand-navy">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-center text-xs font-bold tracking-wide text-brand-yellow uppercase">
          {stats.eyebrow}
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 text-center lg:grid-cols-4">
          {stats.items.map((item) => (
            <div key={item.label}>
              <dd className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                {item.value}
              </dd>
              <dt className="mt-2 text-sm text-white/65">{item.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
