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
      className="w-full pt-7 sm:pt-9 pb-1"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionTitle id="ways-to-enjoy-heading" size="md" className="mb-3.5 sm:mb-4.5">
          WAYS TO ENJOY
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          {/* Left Column: Big Square Pizza with Brand Stamp */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full aspect-square rounded-[22px] overflow-hidden shadow-md bg-neutral-100">
              <Image
                src="/images/pepperoni-pizza.jpg"
                alt="Signature Chicago-style pepperoni thin crust pizza with Crust Pizza Co. brand stamp"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: 2 Dark Cards + Why Choose Us White Card */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4 sm:gap-5">
            {/* Top Row: Two Dark Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {darkCards.map((card) => (
                <article
                  key={card.id}
                  className="bg-[var(--color-ink)] text-white rounded-[20px] p-4.5 sm:p-5 flex flex-col justify-between shadow-md border border-neutral-800"
                >
                  <div>
                    {/* Orange Icon Pill */}
                    <div className="w-9 h-9 rounded-full bg-[var(--color-brand)] flex items-center justify-center mb-3">
                      {card.iconType === "award" ? (
                        <Award className="w-4.5 h-4.5 text-white" aria-hidden="true" />
                      ) : (
                        <Sparkles className="w-4.5 h-4.5 text-white" aria-hidden="true" />
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-sm sm:text-base uppercase tracking-tight text-white leading-snug">
                      {card.title}
                    </h3>

                    <p className="mt-1.5 text-[11px] sm:text-xs text-neutral-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-3.5">
                    <Button
                      variant="primary"
                      href={card.ctaHref}
                      className="w-full text-xs py-1.5 font-heading tracking-wider"
                    >
                      {card.ctaText}
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Row: White Card "WHY CHOOSE US" with 3x2 photo gallery */}
            <div className="bg-white rounded-[20px] p-4 sm:p-5 shadow-[var(--shadow-card)] border border-neutral-100">
              <h3 className="font-heading font-bold text-sm sm:text-base uppercase tracking-tight text-[var(--color-ink)] mb-2.5">
                WHY CHOOSE US
              </h3>

              {/* 3x2 Photo Gallery Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                {galleryPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className="relative aspect-[7/6] rounded-md overflow-hidden bg-neutral-100 group"
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
