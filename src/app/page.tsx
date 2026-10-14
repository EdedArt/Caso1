import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { OurMenuSection } from "@/components/sections/OurMenuSection";
import { ChicagoStyleSection } from "@/components/sections/ChicagoStyleSection";
import { WaysToEnjoySection } from "@/components/sections/WaysToEnjoySection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { FranchiseSection } from "@/components/sections/FranchiseSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-cream)]">
      {/* Global Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1 flex flex-col">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Our Menu */}
        <OurMenuSection />

        {/* 3. Home of Chicago-Style Thin Crust Pizza */}
        <ChicagoStyleSection />

        {/* 4. Ways to Enjoy */}
        <WaysToEnjoySection />

        {/* 5. Community */}
        <CommunitySection />

        {/* 6. Franchise */}
        <FranchiseSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
