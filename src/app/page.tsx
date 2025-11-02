"use client";
import { Hero } from "./components/Hero";
import { Calculator } from "./components/Calculator";
import { HowItWorks } from "./components/HowItWorks";
import { ComparisonCards } from "./components/Comparison";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div>
      <main className="bg-[#F5F8EB] mb-8 ">
        {/* Container */}
        <Hero />
        <div className="max-w-6xl mx-auto px-2 py-1">
          <Calculator />
          <HowItWorks />
          <ComparisonCards />
        </div>
      <CTA />
      </main>
      <Footer />
    </div>
  );
}
