import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";
import GettingStartedSection from "@/components/getting-started-section";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import OurService from "@/components/our-service";
import Pricing from "@/components/pricing";
import ReviewSection from "@/components/review-section";
import ToolsSection from "@/components/tools-section";
import TrustedBySection from "@/components/trusted-by-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <OurService />
      <Pricing />
      <ToolsSection />
      <GettingStartedSection />
      <ReviewSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
