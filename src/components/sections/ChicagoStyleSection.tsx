import React from "react";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { Polaroid } from "@/components/ui/Polaroid";
import { WashiTape } from "@/components/ui/WashiTape";
import { featurePillars } from "@/data/features";

export const ChicagoStyleSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="chicago-style-heading"
      className="w-full pt-6 sm:pt-7 pb-3 sm:pb-4 overflow-hidden"
    >
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6">
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
                className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-brand)] min-h-[44px] inline-flex items-center"
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
            <div className="relative w-[330px] sm:w-[370px] h-[255px] sm:h-[275px] flex items-center justify-center">
              {/* Floating background washi tape piece at top right */}
              <WashiTape className="-top-3 right-0 z-0" rotate="38deg" width="70px" height="20px" />
              {/* Floating background washi tape piece at bottom right */}
              <WashiTape className="-bottom-3 right-4 z-30" rotate="-24deg" width="70px" height="20px" />

              {/* Back Polaroid: Smiling Man (Team 1) */}
              <div className="absolute left-0 sm:left-2 top-0 z-10">
                <Polaroid
                  imageSrc="/images/team-1.jpg"
                  alt="Smiling team member in Crust Pizza Co. uniform"
                  width={165}
                  height={190}
                  rotate="-4deg"
                  tapePosition="top-left"
                />
              </div>

              {/* Front Polaroid: Smiling Woman (Team 2) */}
              <div className="absolute right-2 sm:right-4 top-4 z-20">
                <Polaroid
                  imageSrc="/images/team-2.jpg"
                  alt="Smiling manager at Crust Pizza Co. kitchen"
                  width={170}
                  height={195}
                  rotate="6deg"
                  tapePosition="both"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Subtle section divider line as in reference */}
        <div className="mt-7 sm:mt-8 border-b border-[var(--color-cream-border)]" />
      </div>
    </section>
  );
};
