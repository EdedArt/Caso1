import React from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const CommunitySection: React.FC = () => {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="w-full pt-7 sm:pt-9 pb-1"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          {/* Left Text Block (7 cols) */}
          <div className="md:col-span-7 flex flex-col items-start">
            <span className="font-heading font-bold text-xs sm:text-sm text-[var(--color-ink)] uppercase tracking-wider mb-1">
              @crustpizzaco
            </span>

            <SectionTitle
              id="community-heading"
              size="lg"
              className="text-2xl sm:text-3xl md:text-[32px] leading-[1.05]"
            >
              LET&apos;S WORK TOGETHER
              <br />
              FOR OUR COMMUNITY
            </SectionTitle>

            <p className="mt-2.5 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed max-w-[440px]">
              We are proud to partner with local schools, sports leagues, and charities to make a positive impact in every community we call home through pizza nights and sponsorships.
            </p>
          </div>

          {/* Right Illustration (5 cols) */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-[200px] sm:w-[240px] aspect-[4/3]">
              <Image
                src="/images/community-illustration.png"
                alt="Illustration of community partners collaborating with Crust Pizza Co."
                fill
                sizes="(max-width: 768px) 200px, 240px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
