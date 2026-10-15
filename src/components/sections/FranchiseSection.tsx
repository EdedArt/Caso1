import React from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

export const FranchiseSection: React.FC = () => {
  return (
    <section
      id="franchise"
      aria-labelledby="franchise-heading"
      className="w-full pt-6 sm:pt-7 pb-4 sm:pb-5"
    >
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-center">
          {/* Left Column: Franchise Opportunity Pitch */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <SectionTitle
              id="franchise-heading"
              size="lg"
              className="text-xl sm:text-2xl md:text-[28px] leading-[1.08]"
            >
              WANT TO OWN YOUR OWN
              <br />
              CRUST PIZZA CO.?
            </SectionTitle>

            <p className="mt-2.5 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed max-w-[320px]">
              Join our rapidly expanding franchise network and bring authentic scratch-made Chicago-style thin crust pizza to your local community.
            </p>

            <div className="mt-4">
              <Button
                variant="primary"
                href="#franchise-inquiry"
                className="text-xs sm:text-sm px-6 py-2 font-heading tracking-wider"
              >
                SUBMIT A REQUEST
              </Button>
            </div>
          </div>

          {/* Middle Column: Storefront Photo at Dusk */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full aspect-[16/10] rounded-[20px] overflow-hidden shadow-md bg-neutral-100">
              <Image
                src="/images/storefront.jpg"
                alt="Exterior view of Crust Pizza Co. modern restaurant building at dusk with warm lighting"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Quick Action Pillars */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-center">
            <SectionTitle size="md" className="mb-2.5 text-sm sm:text-base">
              SUBMIT A REQUEST
            </SectionTitle>

            {/* 3 Action Buttons in a horizontal row */}
            <div className="grid grid-cols-3 gap-2 w-full max-w-[300px]">
              <Button
                variant="square-action"
                href="#locations"
                className="font-heading font-bold text-[10px] sm:text-[11px] leading-tight"
              >
                LOCATIONS
              </Button>

              <Button
                variant="square-action"
                href="#get-started"
                className="font-heading font-bold text-[10px] sm:text-[11px] leading-tight"
              >
                GET
                <br />
                STARTED
              </Button>

              <Button
                variant="square-action"
                href="#follow-us"
                className="font-heading font-bold text-[10px] sm:text-[11px] leading-tight"
              >
                FOLLOW
                <br />
                US
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
