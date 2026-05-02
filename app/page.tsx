import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Pricing from "@/components/Pricing";
import ClientTestimonials from "@/components/ClientTestimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Pricing />
      <ClientTestimonials />
      <Process />
      <FAQ />
      <About />
      <CTASection />
    </>
  );
}


