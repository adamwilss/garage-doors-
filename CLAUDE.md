# Quality Garage Doors Carlisle — Project Guide

## Tech Stack
- Next.js 15 App Router + TypeScript
- Tailwind CSS v4 (CSS theme variables in `globals.css`)
- Framer Motion for scroll animations
- Lucide React for icons
- Static export to `/out`

## Brand Colours
All colours live as CSS theme variables in `app/globals.css`. Do not introduce unrelated colours (no blue, orange, purple, red).

| Token | Hex | Usage |
|-------|-----|-------|
| Primary green (`accent`) | `#3F742F` | Buttons, nav active states, highlights |
| Dark green (`accent-600/700`) | `#28591F` | Hover states, dark sections |
| Accent green | `#67A844` | Small highlights only |
| Charcoal (`slate-900/800`) | `#333333` | Headings, footer bg |
| Near black | `#050505` | Hero bg only |
| Mid grey (`slate-700/600`) | `#777777` | Secondary text, borders |
| Light grey (`slate-100/200`) | `#F2F2F2` | Section backgrounds |
| White | `#FFFFFF` | Cards, content areas |

## Architecture
- **Content**: `lib/content.ts` is the single source of truth. All copy, services, areas, FAQs, reviews, gallery items and case studies live here.
- **Components**: All reusable components in `app/components/`. Page-specific logic stays in page files.
- **Pages**: App Router. Every page exports `metadata` with local SEO titles.
- **Animations**: `ScrollReveal` wraps most sections. `AssembleText` for hero headlines. `TiltCard` for mouse-reactive cards. `MagneticButton` for CTAs. Respect `prefers-reduced-motion`.

## Navbar Rules
- Desktop nav is intentionally minimal: **Home | Services dropdown | Gallery | Contact**
- Services dropdown contains: Garage Doors, Repairs, Automation, Gates, Case Studies, Areas Covered, Brochures
- Mobile hamburger shows all items grouped under Services
- Active nav link uses primary green (`text-accent`)
- Quote button always visible on desktop

## Button Rules
- Primary: green bg (`bg-accent`) + white text
- Secondary: white bg + charcoal text, or charcoal bg + white text
- Outline: white bg + green border for light sections
- Never use amber/orange/red/blue/purple

## Mobile Sticky CTA
- Charcoal (`#333333`) background
- Call + WhatsApp: white text, green hover
- Quote: green bg + white text (primary action)

## Footer Rules
- Charcoal (`#333333`) or dark green (`#28591F`) background
- White text, mid-grey secondary text
- Trust points use green checkmarks

## SEO
- Each page exports a `metadata` object with local-intent titles
- `SEOJsonLd` component injects JSON-LD: LocalBusiness, Service, FAQPage, Review
- Never fabricate awards, reviews, pricing or guarantees

## Images
- Placeholder images live in `public/images/`
- Replace `placeholder.svg` with real photography when available
- All `<Image>` components need proper `width`, `height`, `alt`, and `sizes`

## Build
```bash
npm run build   # outputs to /out
```
