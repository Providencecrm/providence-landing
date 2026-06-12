import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import SocialProof from "@/components/sections/SocialProof";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
