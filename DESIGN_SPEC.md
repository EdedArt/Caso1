# DESIGN SPECIFICATION — Crust Pizza Co. Landing Page Clone

## 1. Overview & Analysis
This document defines the visual design system, layout specifications, typography, color tokens, and asset inventory extracted from the reference design (`reference/design.png`).

- **Original Reference Resolution**: 768 × 1344 px
- **Target Desktop Resolution**: 1440 × 2520 px (Scale factor: ~1.875×)
- **Container Max Width**: ~1200px (centered with responsive horizontal padding)
- **Design Aesthetic**: Modern tavern-style pizzeria, vintage Americana cues, kraft/cream paper textures, washi tape accents, bold condensed uppercase headings, high-contrast dark cards, warm brand orange accents.

---

## 2. Color Palette & Design Tokens

Exact hex colors sampled from pixel analysis of `reference/design.png`:

| Token Name | Sampled Hex | Use Case | Accessibility (WCAG 2.2 AA) |
|---|---|---|---|
| `--color-brand` | `#EB7E2A` | Primary buttons, icons, highlight pills, accents | Paired with dark text or white text with bold weight for large elements |
| `--color-brand-hover` | `#D86D1B` | Hover & focus states on brand buttons | High contrast hover feedback |
| `--color-brand-light` | `#FDF4ED` | Light orange badge backgrounds / subtle highlights | High contrast background |
| `--color-ink` | `#1A1A1A` | Dark cards, hero torn paper, headings, footer background, logo | Conforms to AAA for text on light backgrounds |
| `--color-ink-muted` | `#2D2D2D` | Dark card secondary background / subtle borders | Subtle contrast against pure ink |
| `--color-cream` | `#F7F5F0` | Page background, warm textured paper canvas | Warm off-white, easy on the eyes |
| `--color-cream-border` | `#E8E5DD` | Subtle borders, dividers, card shadows | Clean separation |
| `--color-surface-white` | `#FFFFFF` | Menu cards, polaroid frames, "Why Choose Us" card | Clean elevation against cream background |
| `--color-text-muted` | `#6B7280` / `#595959` | Subtitles, descriptions, captions | Meets AA 4.5:1 on white and cream |
| `--color-text-light` | `#E5E7EB` | Subtext on dark cards | Meets AA on #1A1A1A |
| `--color-washi-tape` | `rgba(235, 228, 210, 0.75)` | Washi tape overlays on photos & torn banner | Realistic translucent masking tape |

---

## 3. Typography System

### Display & Heading Font: `Oswald` / `Barlow Condensed` (via `next/font/google`)
- **Weights**: 600 (Semi-Bold), 700 (Bold)
- **Transform**: `uppercase`
- **Letter Spacing**: `-0.01em` to `0.02em` (`tracking-tight` or `tracking-wide` depending on size)
- **Heading Scales (Desktop / 1440px)**:
  - Hero Headline: `clamp(2rem, 3.5vw, 3rem)` (`text-4xl` to `text-5xl`), line-height: 1.05
  - Section Headings ("OUR MENU", "WAYS TO ENJOY"): `1.25rem` (`text-xl`), bold
  - Large Section Title ("HOME OF THE CHICAGO-STYLE..."): `clamp(2rem, 3vw, 2.75rem)`, line-height: 1.08
  - Card Titles ("CHICKEN PARM", "AWARD-WINNING..."): `1.125rem` to `1.25rem` (`text-lg` to `text-xl`)
  - Subhead / Tags ("@crustpizzaco", "WHY CHOOSE US"): `0.875rem` to `1rem` (`text-sm` to `text-base`), font-bold

### Body Font: `Inter` (via `next/font/google`)
- **Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold)
- **Scales**:
  - Body Text: `0.875rem` to `1rem` (14px - 16px), line-height: 1.5
  - Small / Captions: `0.75rem` to `0.8125rem` (12px - 13px)
  - Navigation Links: `0.8125rem` (13px), uppercase, bold, letter-spacing: 0.05em

---

## 4. Spacing, Geometry & Component Tokens

| Property | Value | Notes |
|---|---|---|
| Page Container Max Width | `1200px` (`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8`) | Matches desktop proportional margins |
| Hero Card Radius | `24px` to `28px` (`rounded-3xl`) | Deeply rounded modern container |
| Standard Card Radius | `20px` to `24px` (`rounded-2xl`) | Menu cards, dark cards, Why Choose Us |
| Feature Icon Radius | `14px` (`rounded-xl` or `rounded-2xl`) | 3x2 feature icon boxes |
| Button Pill Radius | `9999px` (`rounded-full`) | "Order Online", "View Complete Menu", etc. |
| Button Touch Targets | Min `44px` height (`h-11` or `h-12`) | Complies with WCAG 2.2 AA target size |
| Card Box Shadows | `0 10px 25px -5px rgba(0,0,0,0.06), 0 8px 10px -6px rgba(0,0,0,0.04)` | Soft diffuse shadow for clean elevation |
| Polaroid Tilt | Man: `rotate-[-4deg]`, Woman: `rotate-[6deg]` | Overlapping casual polaroid style |
| Polaroid Borders | `p-3 pb-8 bg-white shadow-xl` | Authentic instant film border |

---

## 5. Layout Breakdown (Top to Bottom)

1. **Header (Sticky Navigation)**:
   - Left Navigation: `[HOME]` (orange active pill), `MENU`, `LOCATIONS`, `ORDER ONLINE`
   - Center: Stamp circular logo "CRUST PIZZA CO." (SVG / optimized asset)
   - Right Navigation: `ABOUT`, `CONTACT`, Profile button (orange circle), X/Twitter icon, `CALL NOW`
   - Mobile: Hamburger menu button with accessible toggle drawer, centered logo, call button.

2. **Hero Section**:
   - Aspect ratio: ~2.4 : 1
   - Background: `hero-pizza-share.jpg` (friends sharing pizza over wooden table)
   - Left Overlay: Torn dark paper block (`#1A1A1A`) with washi tape strip at top-left.
   - Text: "FOR DELICIOUS, MADE-FROM SCRATCH PIZZAS"
   - Subtitle: "Handcrafted daily with fresh dough, signature sauce, and premium cheeses."
   - Button: "Order Online" (orange pill button)

3. **Our Menu Section**:
   - Header: "OUR MENU" (condensed bold uppercase)
   - Grid: 4 columns on desktop, 2 columns on tablet, 1 column on mobile.
   - Cards (White, rounded, subtle shadow):
     - `menu-chicken-parm.jpg`: "CHICKEN PARM"
     - `menu-chicken-alfredo.jpg`: "CHICKEN ALFREDO"
     - `menu-spaghetti-meatballs.jpg`: "SPAGHETTI & MEATBALLS"
     - `menu-baked-mac.jpg`: "BAKED MAC & CHEESE"
     - Each card features 2-line description and orange circular action button.
   - Centered CTA Button: "VIEW OUR COMPLETE MENU" (orange pill)

4. **Home of the Chicago-Style Thin Crust Pizza**:
   - 3-column asymmetric layout:
     - Left (35%): Large title, authentic description, "LEARN MORE" pill button, "SEE LOCATIONS" link.
     - Center (30%): 3x2 grid of orange squircle feature icons + labels.
     - Right (35%): Two overlapping Polaroid photos with washi tape.

5. **Ways to Enjoy Section**:
   - 2-column layout:
     - Left (50%): Large square card with `pepperoni-pizza.jpg` and circular "CRUST PIZZA CO." brand stamp overlay.
     - Right (50%):
       - Top: 2 dark cards side-by-side ("AWARD-WINNING PIZZA & SERVICE" & "KIDS EAT FREE TUESDAYS!").
       - Bottom: White card ("WHY CHOOSE US") with 3x2 photo gallery.

6. **Community Section**:
   - 2-column card / banner:
     - Left: "@crustpizzaco", "LET'S WORK TOGETHER FOR OUR COMMUNITY", paragraph describing community outreach.
     - Right: Illustration of two team members holding a community banner.

7. **Franchise Section**:
   - 3-column banner:
     - Left: "WANT TO OWN YOUR OWN CRUST PIZZA CO.?", description, "SUBMIT A REQUEST" button.
     - Center: Dusk storefront photo (`storefront.jpg`).
     - Right: "SUBMIT A REQUEST" heading with 3 orange action buttons: "LOCATIONS", "GET STARTED", "FOLLOW US".

8. **Footer**:
   - Logo stamp + "WANT TO PLACE AN ORDER NOW?"
   - Links: `MENU`, `CATERING`, `COMMUNITY`, `PRIVACY`, `TERMS`
   - Semantic `<footer>` with copyright and aria labels.

---

## 6. Accessibility & Responsive Targets
- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Skip-to-content link for keyboard users
- Color contrast meets WCAG 2.2 AA (minimum 4.5:1 for body text, 3:1 for large text/UI components)
- Interactive target sizes $\ge 44 \times 44$ px
- All decorative elements marked `aria-hidden="true"`, photos have meaningful descriptive `alt` texts.
- Tested across breakpoints: 360px, 390px, 768px, 1024px, 1280px, 1440px.
