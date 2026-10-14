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
      className="w-full pt-6 sm:pt-8 pb-1"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionTitle id="our-menu-heading" size="md" className="mb-3.5 sm:mb-4.5">
          OUR MENU
        </SectionTitle>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4.5">
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

                {/* Bottom Right Circle Button */}
                <div className="mt-2.5 flex justify-end">
                  <Link
                    href={`#${item.id}`}
                    aria-label={`Order ${item.title}`}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View Complete Menu Pill Button */}
        <div className="mt-6 sm:mt-7 flex justify-center">
          <Button
            variant="primary"
            href="#full-menu"
            className="text-xs sm:text-sm px-7 sm:px-8 py-2 font-heading tracking-wider"
          >
            VIEW OUR COMPLETE MENU
          </Button>
        </div>
      </div>
    </section>
  );
};
