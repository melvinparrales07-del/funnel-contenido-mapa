import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WhatYouGetSection } from "@/components/sections/WhatYouGetSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <WhatYouGetSection />
        <HowItWorksSection />
      </main>
      <footer className="border-t border-border px-5 py-10 text-center text-xs text-ink-dim">
        © {new Date().getFullYear()} La Comunidad. Demo funcional — sin integraciones externas conectadas todavía.
      </footer>
    </>
  );
}
