"use client";
import { Hero } from "./components/Hero";
import { Calculator } from "./components/Calculator";
import { HowItWorks } from "./components/HowItWorks";
import { ComparisonCards } from "./components/Comparison";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { BeforeAfterLocus } from "./components/BeforeAfterLocus";
import { ManualManagementProblem } from "./components/ManualManagementProblem";

export default function Home() {
  return (
    <div>
      <main className="bg-[#F5F8EB] ">
        {/* Container */}
        <Hero />
        <div className="max-w-6xl mx-auto px-2 py-1">
          <ManualManagementProblem />
          <Calculator />
          <BeforeAfterLocus />
          <HowItWorks />
          <ComparisonCards />
        </div>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
