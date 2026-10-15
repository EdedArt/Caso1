import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const HeroSection: React.FC = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="w-full pt-3.5 sm:pt-4 pb-2"
    >
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6">
        <div className="relative w-full aspect-[2.35/1] rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-md">
          {/* Background Pizza Share Image */}
          <Image
            src="/images/hero-pizza-share.jpg"
            alt="Friends sharing made-from-scratch thin crust pizza over a rustic wooden table"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1050px) 100vw, 1050px"
            className="object-cover select-none"
          />

          {/* Clean Visible Vector Headline inside the Torn Paper Area */}
          <div className="absolute top-[28%] left-[8%] z-10 w-[34%] max-w-[320px] pointer-events-none">
            <h1
              id="hero-heading"
              className="font-heading font-bold text-white uppercase text-base sm:text-xl md:text-2xl lg:text-[27px] leading-[1.04] tracking-tight drop-shadow-xs"
            >
              FOR DELICIOUS,
              <br />
              MADE-FROM
              <br />
              SCRATCH PIZZAS
            </h1>
            <p className="mt-1.5 sm:mt-2 text-[9px] sm:text-[10px] md:text-[11px] text-neutral-300 font-sans leading-tight">
              Handcrafted daily with fresh dough, signature sauce, and premium cheeses.
            </p>
          </div>

          {/* Interactive and Accessible Order Online CTA Button */}
          <div className="absolute top-[73.5%] left-[8.2%] z-20">
            <Button
              variant="primary"
              href="#order"
              className="text-[10px] sm:text-xs md:text-[13px] px-4 sm:px-6 py-1 sm:py-1.5 h-7 sm:h-9 md:h-10 font-heading tracking-wider rounded-full shadow-sm"
            >
              Order Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
