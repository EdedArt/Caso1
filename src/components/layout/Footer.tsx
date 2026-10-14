import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { footerNavItems } from "@/data/nav";

export const Footer: React.FC = () => {
  return (
    <footer
      aria-label="Footer Navigation and Legal Information"
      className="w-full bg-[var(--color-cream)] border-t border-[var(--color-cream-border)] pt-6 pb-8 mt-8 sm:mt-10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Logo Stamp + CTA */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <Link href="/" aria-label="Crust Pizza Co. Homepage" className="shrink-0 focus-visible:outline-2 focus-visible:outline-[var(--color-brand)] rounded-full">
            <BrandLogo size={52} />
          </Link>
          <span className="font-heading font-bold text-base sm:text-lg uppercase tracking-normal text-[var(--color-ink)]">
            WANT TO PLACE AN ORDER NOW?
          </span>
        </div>

        {/* Right Side: Navigation Links */}
        <nav
          aria-label="Footer Secondary Links"
          className="flex flex-wrap items-center justify-center gap-5 sm:gap-7"
        >
          {footerNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Subtle Copyright line for accessibility */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-[var(--color-cream-border)] text-center text-xs text-[var(--color-text-muted)]">
        <p>© 2026 Crust Pizza Co. All rights reserved. Chicago Tavern-Style Thin Crust Pizza.</p>
      </div>
    </footer>
  );
};
