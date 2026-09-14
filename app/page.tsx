import { Hero } from "@/components/sections/Hero";
import { PartnerStrip } from "@/components/sections/PartnerStrip";
import { Highlights } from "@/components/sections/Highlights";
import { KeychainConfigurator } from "@/components/sections/KeychainConfigurator";
import { Collections } from "@/components/sections/Collections";
import { Boutique } from "@/components/sections/Boutique";
import { BrandStory } from "@/components/sections/BrandStory";
import { Countdown } from "@/components/sections/Countdown";
import { Reviews } from "@/components/sections/Reviews";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnerStrip />
      <Highlights />
      <KeychainConfigurator />
      <Collections />
      <Boutique />
      <BrandStory />
      <Countdown />
      <Reviews />
      <FinalCta />
    </>
  );
}
