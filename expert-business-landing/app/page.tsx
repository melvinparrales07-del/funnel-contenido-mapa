import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Proof } from "@/components/Proof";
import { OfferStack, ValueStackTotal } from "@/components/OfferStack";
import { Bonuses } from "@/components/Bonuses";
import { Guarantee } from "@/components/Guarantee";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/ui/SectionDivider";

const BG = "#050505";
const BG_ALT = "#111111";
const BG_CARD = "#181818";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Process />
      <SectionDivider from={BG_ALT} to={BG} />
      <Proof />
      <SectionDivider from={BG} to={BG_ALT} />
      <OfferStack />
      <Bonuses />
      <ValueStackTotal />
      <SectionDivider from={BG_ALT} to={BG_CARD} />
      <Guarantee />
      <SectionDivider from={BG_CARD} to={BG} />
      <Testimonials />
      <SectionDivider from={BG} to={BG_ALT} />
      <FAQ />
      <SectionDivider from={BG_ALT} to={BG_CARD} />
      <FinalCTA />
      <Footer />
    </main>
  );
}
