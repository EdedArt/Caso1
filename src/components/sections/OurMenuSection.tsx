import React from "react";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/data/menu";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export const OurMenuSection: React.FC = () => {
  return (
    <section
      id="menu"
      aria-labelledby="our-menu-heading"
      className="w-full pt-5 sm:pt-6 pb-2 sm:pb-3"
    >
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <SectionTitle id="our-menu-heading" size="md" className="mb-3.5 sm:mb-4">
          OUR MENU
        </SectionTitle>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {menuItems.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-[20px] overflow-hidden shadow-[var(--shadow-card)] border border-neutral-100/90 flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] bg-neutral-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Small orange badge overlay in bottom-right corner of image as in reference */}
                <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-[var(--color-brand)] text-white text-[9px] font-bold flex items-center justify-center shadow-xs">
                  {item.id === "chicken-parm" ? "★" : item.id === "chicken-alfredo" ? "4.9" : item.id === "spaghetti-meatballs" ? "♥" : "TOP"}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between relative">
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base uppercase tracking-tight text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] sm:text-xs text-[var(--color-text-muted)] leading-relaxed line-clamp-2 max-w-[85%]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Right Circle Button with accessible touch target wrapper */}
                <div className="mt-2.5 flex justify-end -mr-1 -mb-1">
                  <div className="min-w-[44px] min-h-[44px] flex items-center justify-center">
                    <Link
                      href={`#${item.id}`}
                      aria-label={`Order ${item.title}`}
                      className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View Complete Menu Pill Button */}
        <div className="mt-4 sm:mt-5 flex justify-center">
          <Button
            variant="primary"
            href="#full-menu"
            className="text-xs sm:text-[13px] px-8 sm:px-10 py-2.5 font-heading tracking-wider"
          >
            VIEW OUR COMPLETE MENU
          </Button>
        </div>

        {/* Subtle section divider line as in reference */}
        <div className="mt-5 sm:mt-6 border-b border-[var(--color-cream-border)]" />
      </div>
    </section>
  );
};
