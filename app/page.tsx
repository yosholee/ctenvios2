import type { ReactElement } from "react";
import { Boxes } from "@/app/sections/boxes";
import { ContactFooter } from "@/app/sections/contact-footer";
import { Faq } from "@/app/sections/faq";
import { Hero } from "@/app/sections/hero";
import { Offers } from "@/app/sections/offers";
import { SiteHeader } from "@/app/sections/site-header";
import { Testimonials } from "@/app/sections/testimonials";
import { Tracking } from "@/app/sections/tracking";

export default function Home(): ReactElement {
  return (
    <main className="flex flex-1 flex-col">
      <SiteHeader />
      <Hero />
      <Offers />
      <Boxes />
      <Testimonials />
      <Faq />
      <Tracking />
      <ContactFooter />
    </main>
  );
}
