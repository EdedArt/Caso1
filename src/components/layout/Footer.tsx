import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { footerNavItems } from "@/data/nav";

export const Footer: React.FC = () => {
  return (
    <footer
      aria-label="Footer Navigation"
      className="w-full bg-[var(--color-cream)] border-t border-[var(--color-cream-border)] pt-5 pb-7 mt-7 sm:mt-9"
    >
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side: Logo Stamp + CTA */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <Link href="/" aria-label="Crust Pizza Co. Homepage" className="shrink-0 focus-visible:outline-2 focus-visible:outline-[var(--color-brand)] rounded-full">
            <BrandLogo size={50} />
          </Link>
          <span className="font-heading font-bold text-xs sm:text-sm md:text-base uppercase tracking-tight text-[var(--color-ink)] leading-tight">
            WANT TO PLACE AN
            <br className="hidden sm:inline" />
            {" "}ORDER NOW?
          </span>
        </div>

        {/* Right Side: Navigation Links with min 44px touch targets */}
        <nav
          aria-label="Footer Secondary Links"
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
        >
          {footerNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-heading font-bold text-xs lg:text-[13px] uppercase tracking-wider text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-brand)] min-h-[44px] inline-flex items-center px-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};
