import React from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { darkCards } from "@/data/features";
import { galleryPhotos } from "@/data/gallery";
import { Award, Sparkles } from "lucide-react";

export const WaysToEnjoySection: React.FC = () => {
  return (
    <section
      id="ways-to-enjoy"
      aria-labelledby="ways-to-enjoy-heading"
      className="w-full pt-6 sm:pt-7 pb-3 sm:pb-4"
    >
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <SectionTitle id="ways-to-enjoy-heading" size="md" className="mb-4 sm:mb-5">
          WAYS TO ENJOY
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          {/* Left Column: Big Square Pepperoni Pizza + Community Subsection directly below */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
            {/* 1. Pepperoni Pizza with Central Stamp */}
            <div className="relative w-full aspect-square rounded-[22px] overflow-hidden shadow-md bg-neutral-100">
              <Image
                src="/images/pepperoni-pizza.jpg"
                alt="Signature Chicago-style pepperoni thin crust pizza with Crust Pizza Co. brand stamp"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>

            {/* 2. Community Subsection (Nested directly on the left as in reference) */}
            <div id="community" className="pt-2 sm:pt-3 flex items-center justify-between gap-4">
              <div className="flex-1 flex flex-col items-start">
                <span className="font-heading font-bold text-[11px] sm:text-xs text-[var(--color-ink)] uppercase tracking-wider mb-0.5">
                  @crustpizzaco
                </span>

                <h3 className="font-heading font-bold text-base sm:text-lg md:text-xl uppercase tracking-tight text-[var(--color-ink)] leading-[1.06]">
                  LET&apos;S WORK TOGETHER
                  <br />
                  FOR OUR COMMUNITY
                </h3>

                <p className="mt-1 text-[11px] sm:text-xs text-[var(--color-text-muted)] leading-relaxed max-w-[280px]">
                  We are proud to partner with local schools, sports leagues, and charities to make a positive impact in every community we call home.
                </p>
              </div>

              {/* Community Illustration */}
              <div className="shrink-0 w-24 sm:w-28 md:w-32 aspect-square relative">
                <Image
                  src="/images/community-illustration.png"
                  alt="Illustration of community partners collaborating with Crust Pizza Co."
                  fill
                  sizes="130px"
                  className="object-contain select-none"
                />
              </div>
            </div>
          </div>

          {/* Right Column: 2 Dark Cards + Why Choose Us White Card */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Top Row: Two Dark Cards Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {darkCards.map((card) => (
                <article
                  key={card.id}
                  className="bg-[var(--color-ink)] text-white rounded-[22px] p-5 sm:p-5.5 flex flex-col justify-between shadow-md border border-neutral-800"
                >
                  <div>
                    {/* Orange Icon Pill */}
                    <div className="w-9.5 h-9.5 rounded-full bg-[var(--color-brand)] flex items-center justify-center mb-3">
                      {card.iconType === "award" ? (
                        <Award className="w-5 h-5 text-white" aria-hidden="true" />
                      ) : (
                        <Sparkles className="w-5 h-5 text-white" aria-hidden="true" />
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-sm sm:text-[15px] uppercase tracking-tight text-white leading-tight">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-[11px] sm:text-xs text-neutral-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-3.5">
                    <Button
                      variant="primary"
                      href={card.ctaHref}
                      className="w-full text-xs py-2 sm:py-2.5 font-heading tracking-wider rounded-full shadow-sm"
                    >
                      {card.ctaText}
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Row: White Card "WHY CHOOSE US" with 3x2 photo gallery */}
            <div className="bg-white rounded-[22px] p-4.5 sm:p-5 shadow-[var(--shadow-card)] border border-neutral-100">
              <h3 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-tight text-[var(--color-ink)] mb-2.5">
                WHY CHOOSE US
              </h3>

              {/* 3x2 Photo Gallery Grid */}
              <div className="grid grid-cols-3 gap-2.5">
                {galleryPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className="relative aspect-square rounded-lg overflow-hidden bg-neutral-100 group"
                  >
                    <Image
                      src={photo.image}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 33vw, 150px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
