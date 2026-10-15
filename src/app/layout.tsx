import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crust Pizza Co. — Chicago-Style Thin Crust Pizza",
  description:
    "Home of the delicious, made-from-scratch Chicago-style thin crust pizzas, oven-baked pastas, and award-winning service.",
  keywords: [
    "Crust Pizza Co",
    "Chicago Style Pizza",
    "Thin Crust Pizza",
    "Tavern Style Pizza",
    "Pizza Delivery",
    "Scratch Made Pizza",
  ],
  authors: [{ name: "Crust Pizza Co." }],
  openGraph: {
    title: "Crust Pizza Co. — Chicago-Style Thin Crust Pizza",
    description:
      "Home of delicious made-from-scratch Chicago-style thin crust pizzas and family-friendly dining.",
    type: "website",
    locale: "en_US",
    siteName: "Crust Pizza Co.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crust Pizza Co. — Chicago-Style Thin Crust Pizza",
    description:
      "Home of delicious made-from-scratch Chicago-style thin crust pizzas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-[var(--color-ink)] selection:bg-[var(--color-brand)] selection:text-white">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
