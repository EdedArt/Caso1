import React from "react";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { Polaroid } from "@/components/ui/Polaroid";
import { featurePillars } from "@/data/features";

export const ChicagoStyleSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="chicago-style-heading"
      className="w-full pt-7 sm:pt-9 pb-1 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
          {/* Column 1: Narrative & CTAs (approx 4.5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <SectionTitle
              id="chicago-style-heading"
              size="lg"
              className="text-2xl sm:text-3xl lg:text-[36px] leading-[1.04]"
            >
              HOME OF THE
              <br />
              CHICAGO-STYLE
              <br />
              THIN CRUST PIZZA
            </SectionTitle>

            <p className="mt-3 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed max-w-[390px]">
              Our Chicago-style tavern thin crust pizza is rolled ultra-thin, layered with rich scratch sauce, and baked crispy before being party-cut into squares just as tradition demands.
            </p>

            <div className="mt-4 sm:mt-5 flex items-center gap-4 sm:gap-5 flex-wrap">
              <Button
                variant="primary"
                href="#learn-more"
                className="text-xs sm:text-sm px-6 py-2 font-heading tracking-wider"
              >
                LEARN MORE
              </Button>

              <Link
                href="#locations"
                className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]"
              >
                SEE LOCATIONS
              </Link>
            </div>
          </div>

          {/* Column 2: 3x2 Feature Icons Grid (approx 3.5 cols on desktop) */}
          <div className="lg:col-span-3 flex justify-center py-2">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-[250px]">
              {featurePillars.map((feature) => (
                <FeatureIcon
                  key={feature.id}
                  label={feature.label}
                  iconName={feature.iconName}
                />
              ))}
            </div>
          </div>

          {/* Column 3: Overlapping Polaroids with Washi Tape (approx 4 cols on desktop) */}
          <div className="lg:col-span-4 flex justify-center items-center py-2 lg:py-0">
            <div className="relative w-[280px] sm:w-[320px] h-[200px] sm:h-[220px] flex items-center justify-center">
              {/* Back Polaroid: Smiling Man (Team 1) */}
              <div className="absolute left-1 sm:left-2 top-0 z-10">
                <Polaroid
                  imageSrc="/images/team-1.jpg"
                  alt="Smiling team member in Crust Pizza Co. uniform"
                  width={135}
                  height={145}
                  rotate="-5deg"
                  tapePosition="top-left"
                />
              </div>

              {/* Front Polaroid: Smiling Woman (Team 2) */}
              <div className="absolute right-1 sm:right-2 top-2 z-20">
                <Polaroid
                  imageSrc="/images/team-2.jpg"
                  alt="Smiling manager at Crust Pizza Co. kitchen"
                  width={140}
                  height={150}
                  rotate="6deg"
                  tapePosition="both"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
