"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { leftNavItems, rightNavItems } from "@/data/nav";
import { User, Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--color-cream)]/95 backdrop-blur-xs">
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6 h-20 sm:h-[84px] flex items-center justify-between">
        {/* Left Navigation (Desktop) */}
        <nav
          aria-label="Primary Left Navigation"
          className="hidden md:flex items-center gap-4 lg:gap-6 flex-1"
        >
          {leftNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                item.active
                  ? "bg-[var(--color-brand)] text-neutral-900 font-heading font-bold text-xs lg:text-[13px] uppercase px-4 py-1.5 rounded-full shadow-xs"
                  : "font-heading font-bold text-xs lg:text-[13px] uppercase tracking-wider text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors py-2"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Center Brand Logo Stamp */}
        <div className="flex justify-center items-center shrink-0 mx-3 sm:mx-4">
          <Link href="/" aria-label="Crust Pizza Co. Homepage" className="focus-visible:outline-2 focus-visible:outline-[var(--color-brand)] rounded-full">
            <BrandLogo size={68} priority />
          </Link>
        </div>

        {/* Right Navigation (Desktop) */}
        <nav
          aria-label="Primary Right Navigation"
          className="hidden md:flex items-center justify-end gap-3 lg:gap-4 flex-1"
        >
          {rightNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-heading font-bold text-xs lg:text-sm uppercase tracking-wider text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors py-2"
            >
              {item.label}
            </Link>
          ))}

          {/* User Profile Avatar Pill/Circle with min 44x44px touch target */}
          <div className="flex items-center justify-center min-w-[44px] min-h-[44px]">
            <button
              type="button"
              aria-label="User Account Profile"
              className="w-8 h-8 rounded-full bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)] cursor-pointer"
            >
              <User className="w-4 h-4 fill-white stroke-none" aria-hidden="true" />
            </button>
          </div>

          {/* Twitter / X Icon with min 44x44px touch target */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Crust Pizza Co. on Twitter"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
            </svg>
          </a>

          {/* Call Now with min 44px touch height */}
          <a
            href="tel:#"
            className="min-h-[44px] flex items-center font-heading font-bold text-xs lg:text-sm uppercase tracking-wider text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)] px-1"
          >
            CALL NOW
          </a>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:#"
            className="font-heading font-bold text-xs uppercase px-3 py-1.5 bg-[var(--color-brand)] text-white rounded-md"
          >
            CALL NOW
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 text-[var(--color-ink)] hover:text-[var(--color-brand)] focus-visible:outline-2 focus-visible:outline-[var(--color-brand)] rounded-md"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-[var(--color-cream-border)] bg-[var(--color-cream)] px-6 py-6 shadow-lg animate-in fade-in duration-200"
        >
          <nav className="flex flex-col gap-4">
            {leftNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={
                  item.active
                    ? "bg-[var(--color-brand)] text-white font-heading font-bold text-sm uppercase px-4 py-2.5 rounded-lg text-center"
                    : "font-heading font-bold text-sm uppercase tracking-wider text-[var(--color-ink)] hover:text-[var(--color-brand)] py-1"
                }
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-[var(--color-cream-border)] my-2" />
            {rightNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading font-bold text-sm uppercase tracking-wider text-[var(--color-ink)] hover:text-[var(--color-brand)] py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
