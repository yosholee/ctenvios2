import type { ReactElement } from "react";
import { Boxes } from "@/app/sections/boxes";
import { Faq } from "@/app/sections/faq";
import { Hero } from "@/app/sections/hero";
import { Offers } from "@/app/sections/offers";
import { Testimonials } from "@/app/sections/testimonials";
import { Tracking } from "@/app/sections/tracking";

export default function Home(): ReactElement {
  return (
    <main id="contenido" className="flex flex-1 flex-col">
      <Hero />
      <Offers />
      <Boxes />
      <Testimonials />
      <Faq />
      <Tracking />
    </main>
  );
}
