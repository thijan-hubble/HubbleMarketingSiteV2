# Hubble Website — Update Plan

> Hand this file to Claude Code along with `WEBSITE.md` and `BRANDING.md` as context.
> Repo is at `/Users/thijandippenaar/Antigravity-Projects/HubbleWebsiteClaudeVersion`

---

## Overview of Changes

Three focused updates to the marketing site:

1. **Trim hero section copy** — subheadline is too long, reduce to one punchy sentence
2. **Add a client logo strip** — new section between the hero stats bar and the next section
3. **Replace stock case study images** — swap placeholder URLs for real project screenshots

---

## Change 1 — Hero Subheadline Copy

**File:** `client/src/components/hero-section.tsx`

### What to change

Find the subheadline paragraph (currently something like the text below) and replace with the shorter version.

**Current copy (approximately):**
> "We build custom tools for road freight, warehousing, 3PL, manufacturing, and packaging operations — built around how you actually work, not how a template says you should. Working software in 1–2 weeks."

**New copy:**
> "Custom software for supply chain operators. Built around your actual workflow — not a template. Working software in 1–2 weeks."

### Rules
- Keep the same font size, weight, and colour as the current subheadline
- Do not change the eyebrow chip ("Cape Town, South Africa"), the headline, the CTAs, the micro-copy below CTAs, or the stats bar
- The headline ("Your operation outgrew spreadsheets. Your software should too.") is perfect — do not touch it

---

## Change 2 — Client Logo Strip (New Section)

### What to build

A new React component: `client/src/components/logos-section.tsx`

### Placement

Insert it in `client/src/App.tsx` (or wherever the section order is defined) **immediately after the hero section** and **before** whichever section currently follows the hero (e.g. "Sound familiar?" or the services section).

### Design spec

- **Background:** White (`#FFFFFF`) — this creates the intended dark → light alternation coming off the dark hero
- **Section padding:** `py-12` or `py-16` — keep it compact, this is a trust signal not a feature section
- **Heading:** `"Operators we've built for"` — small, subdued. Use `text-sm font-semibold uppercase tracking-widest text-gray-400` centered
- **Logo display:** Horizontal row, centered, with `gap-10` or `gap-12` between logos. On mobile, wrap to 2 columns
- **Logo treatment:** Grayscale (`filter: grayscale(100%)`) at `opacity-50`, hover to `opacity-80` with a `transition-opacity duration-200`. This keeps the section clean and not visually competing with client brand colours
- **Logo image size:** `h-8` (32px height), `w-auto` — consistent height, natural width
- **Dividers:** Optional subtle `border-t border-b border-gray-100` to frame the section

### Logo data

Use this array as the logo source. Add it as a constant at the top of the component:

```ts
const clients = [
  { name: "Client 1", logo: "/logos/client-1.png" },
  { name: "Client 2", logo: "/logos/client-2.png" },
  { name: "Client 3", logo: "/logos/client-3.png" },
  { name: "Client 4", logo: "/logos/client-4.png" },
];
```

**Note for Thijan:** Replace the placeholder entries above with actual client names and logo file paths before deploying. Place logo files in `public/logos/`. If you only have 2–3 logos, that's fine — don't pad with fake ones. If clients haven't given logo approval yet, use the text-only fallback below.

### Text-only fallback (use if no logos are available yet)

Instead of `<img>` tags, render client names as styled text pills:

```tsx
// Fallback: styled text badges instead of logo images
const clients = [
  "National road freight operator",
  "Cape Town 3PL",
  "Stellenbosch packaging manufacturer",
  "Pharmaceutical QC lab",
];
```

Render each as a `<span>` with `text-sm font-semibold text-gray-500 bg-gray-100 rounded-full px-4 py-2`

### Component skeleton

```tsx
import { AnimatedSection } from "./ui/animated-section";

const clients = [
  // populate with real data — see above
];

export default function LogosSection() {
  return (
    <section className="bg-white border-t border-b border-gray-100 py-14">
      <AnimatedSection>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Operators we've built for
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {clients.map((client) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                className="h-8 w-auto grayscale opacity-50 hover:opacity-80 transition-opacity duration-200"
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
```

---

## Change 3 — Case Study Images

**File:** `client/src/components/case-studies-section.tsx`

### What to change

The case study cards currently use placeholder image URLs (stock photos). Replace them with real project screenshots.

**How to do it:**

1. Place real screenshot files in `public/case-studies/` (e.g. `road-freight.png`, `pharma-qc.png`, `rental-tracking.png`)
2. Update the `image` field in the case study data array inside the component to point to `/case-studies/filename.png`
3. Keep the existing `<img>` tag styling — just change the `src`

**Note for Thijan:** If screenshots aren't ready yet, skip this change for now. The placeholder images are a lower priority than changes 1 and 2 and can be done in a separate pass.

---

## No Other Changes

Do not change:
- The headline copy in the hero
- The "Sound familiar?", "How it works", "Built for operators", FAQ, or contact sections
- The navigation, footer, animations, or design system
- Any backend/API code

---

## QA Checklist After Changes

- [ ] Hero subheadline reads cleanly at desktop (1280px) and mobile (375px) — no awkward line breaks
- [ ] Logo strip renders correctly on both dark and light system themes
- [ ] Logo strip looks right at mobile — wraps to 2 columns gracefully
- [ ] Existing section order and animations are unchanged
- [ ] `npm run dev` starts without errors
- [ ] No TypeScript errors (`npx tsc --noEmit`)
