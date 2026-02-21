

import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import AboutSection from "@/components/AboutSection";
import ProductDivisions from "@/components/ProductDivisions";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import QualitySection from "@/components/QualitySection";
import CTAStrip from "@/components/CTAStrip";
import FounderMessage from "@/components/FounderMessage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}


      <main className="flex-1 flex flex-col">
        <Hero />
        {/* <StatsCounter /> */}
        <AboutSection />
        <FounderMessage />
        <ProductDivisions />
        <FeaturedProducts />
        <WhyChooseUs />
        {/* <QualitySection /> */}
        <CTAStrip />
      </main>

      <Footer />
    </div>
  );
}
