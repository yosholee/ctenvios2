import type { ReactElement } from "react";
import { Boxes } from "@/app/sections/boxes";
import { Contact } from "@/app/sections/contact";
import { Faq } from "@/app/sections/faq";
import { Hero } from "@/app/sections/hero";
import { HowItWorks } from "@/app/sections/how-it-works";
import { Offers } from "@/app/sections/offers";
import { SeoHub } from "@/app/sections/seo-hub";
import { Testimonials } from "@/app/sections/testimonials";
import { Tracking } from "@/app/sections/tracking";

export default function Home(): ReactElement {
  return (
    <main id="contenido" className="flex flex-1 flex-col">
      <Hero />
      <Offers />
      <Boxes />
      <HowItWorks />
      <SeoHub />
      <Testimonials />
      <Faq />
      <Tracking />
      <Contact />
    </main>
  );
}
