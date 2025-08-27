import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
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
import FooterLinks from "@/components/FooterLinks";
import DisclaimerFooter from "@/components/DisclaimerFooter";
export default function Home() {
  return (
    <>

      <TopBar />
      <Header />
      <HeroBanner />
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
      <FooterLinks />
      <DisclaimerFooter />
    </>
  );
}
