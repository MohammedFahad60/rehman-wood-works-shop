import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import ProductCategories from "@/components/sections/product-categories";
import Testimonials from "@/components/sections/testimonials";
import VisionFeatures from "@/components/sections/vision-features";
import StatsCTA from "@/components/sections/stats-cta";
import FAQSection from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductCategories />
      <Testimonials />
      <VisionFeatures />
      <StatsCTA />
      <FAQSection />
      <Footer />
    </main>
  );
}

