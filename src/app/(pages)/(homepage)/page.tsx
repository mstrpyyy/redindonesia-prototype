import { BodyWrapper } from "@/app/components/body-wrapper";
import { AboutHomeSection } from "./(sections)/about";
import { HeroHomeSection } from "./(sections)/hero";
import { StatCounter } from "./(sections)/stat-counter";
import { VideoHomeSection } from "./(sections)/video";
import { ChooseUsHomeSection } from "./(sections)/choose-us";
import { CredibilityHomeSection } from "./(sections)/certification";
import { BrandHomeSection } from "./(sections)/brand";
import { ProductHomeSection } from "./(sections)/products";


export default function Home() {
  return (
    <div>
      <main className="">
        {/* HERO */}
        <HeroHomeSection />

        <div className="shadow-[0_5px_25px_rgba(0,0,0,0.20)]">
          {/* ABOUT */}
          <BodyWrapper className="py-24 bg-white">
            <AboutHomeSection />
          </BodyWrapper>

          {/* STATS */}
          <StatCounter />

          {/* VIDEO */}
          <BodyWrapper className="py-14 lg:py-24 bg-brand-pink/50 backdrop-blur-md">
            <VideoHomeSection />
          </BodyWrapper>
        </div>

        {/* CHOOSE US */}
        <BodyWrapper className="">
          <ChooseUsHomeSection />
        </BodyWrapper>

        <div className="shadow-[0px_10px_25px_10px_rgba(0,0,0,0.20)]">
          {/* BRAND */}
          <BrandHomeSection />

          {/* CREDIBILITY */}
          <BodyWrapper className="py-14 bg-brand-pink">
            <CredibilityHomeSection />
          </BodyWrapper>

          {/* PRODUCTS */}
          <BodyWrapper className="py-24 bg-white">
            <div className="space-y-14">
              <ProductHomeSection />
              <ProductHomeSection />
            </div>
          </BodyWrapper>
        </div>
      </main>
    </div>
  );
}
