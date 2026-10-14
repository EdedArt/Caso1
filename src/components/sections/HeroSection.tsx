import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const HeroSection: React.FC = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="w-full pt-3 sm:pt-4"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-[16/9] sm:aspect-[2.4/1] md:aspect-[2.6/1] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-md">
          {/* Background Pizza Share Image with authentic torn paper card */}
          <Image
            src="/images/hero-pizza-share.jpg"
            alt="Friends sharing made-from-scratch thin crust pizza over a rustic wooden table"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover select-none"
          />

          {/* Accessible Semantic Title Overlay */}
          <div className="absolute top-[18%] left-[3.8%] z-10 w-[35%] max-w-[360px] pointer-events-none">
            <h1
              id="hero-heading"
              className="sr-only"
            >
              FOR DELICIOUS, MADE-FROM SCRATCH PIZZAS
            </h1>
            <p className="sr-only">
              Handcrafted daily with fresh dough, signature sauce, and premium cheeses.
            </p>
          </div>

          {/* Interactive and Accessible Order Online CTA Button positioned exactly over the button slot */}
          <div className="absolute bottom-[10%] sm:bottom-[12%] md:bottom-[13%] left-[3.2%] sm:left-[3.8%] z-20">
            <Button
              variant="primary"
              href="#order"
              className="shadow-sm text-[11px] sm:text-xs md:text-sm px-4 sm:px-6 py-1 sm:py-2 min-h-[32px] sm:min-h-[40px] font-heading tracking-wider rounded-full"
            >
              Order Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
