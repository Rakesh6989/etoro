import HeroBanner from "@/components/HeroBanner";
import HeroAISection from "@/components/HeroAISection";
import InterestSection from "@/components/InterestSection";
import Marquee from "@/components/Marquee";
import CryptoSection from "@/components/CryptoSection";
import PortfolioDiversify from "@/components/PortfolioDiversify";
import TopInvestorSection from "@/components/TopInvestorSection";
import SliderComponent from "@/components/EToroTradeSlider ";
import EToroAcademy from "@/components/EToroAcademy";
import BankPartners from "@/components/BankPartners";
import TrustedWorldwide from "@/components/TrustedWorldwide";
import SponsorSlider from "@/components/SponsorSlider";

export default function Home() {
  return (
    <>
      <HeroBanner
        breadcrumb={true}  // ab ye auto chalu hoga
        title="Yep it's "
        highlight="all in one app"
        description="Invest in thousands of stocks, crypto, ETFs… all in one easy-to-use app"
        buttonText="Join eToro"
        buttonLink="/staking/start"
        imageSrc="/user.webp"
        imageAlt="eToro staking"
        termsText=""
      />

      <HeroAISection />
      <InterestSection />
      <Marquee />
      <PortfolioDiversify />
      <CryptoSection />
      <TopInvestorSection />
      <EToroAcademy />
      <SliderComponent />
      <BankPartners />
      <TrustedWorldwide />
      <SponsorSlider />
    </>
  );
}
