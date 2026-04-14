# Funduz — UI Generation Prompts

This folder contains **English prompts** for [uxpilot.ai](https://uxpilot.ai) to generate screen designs for Funduz, a crowdfunding platform for Uzbekistan.

Each file is a standalone prompt — paste it directly into uxpilot without modification.

## Brand Guide (reuse in every prompt)

**Product:** Funduz — a crowdfunding platform for Uzbekistan where creators launch projects and backers pledge money in UZS (Uzbek som). All-or-nothing funding model with escrow.

**Brand identity:**
- Primary green: `#1a946b` (buttons, accents, brand text)
- Dark green: `#0f5238` (headings, strong CTAs)
- Light green background: `#f0fdf4` (cards, subtle fills)
- Neutral gray: `#f9fafb` backgrounds, `#e5e7eb` borders, `#6b7280` secondary text
- White cards on very light gray body background

**Visual language:**
- Modern, trustworthy, optimistic
- Rounded corners: `rounded-xl` (buttons), `rounded-2xl` (cards), `rounded-3xl` (hero sections)
- Bold typography — use `font-black` (900) for headings, `font-bold` for body emphasis
- Generous whitespace, large padding (`py-20 lg:py-28` for sections)
- Soft shadows (`shadow-sm`, `shadow-xl shadow-green-900/5`)
- Subtle borders (`border border-gray-100`)
- Large hit areas, min 44px tap targets
- Uzbek flag-inspired warmth — optimistic, sun-lit feeling

**Layout skeleton (every page):**
- Sticky top header: FUNDUZ logo (left), nav links (center: Explore, How It Works, Community), language switcher + Login button (right). Mobile: hamburger menu.
- Page content inside `max-w-7xl mx-auto px-4 md:px-8`
- Footer: 4-column grid (Product, Categories, Company, Legal) + copyright + socials

**Typography hints:**
- Headlines: 40–64px, `font-black`, tight tracking
- Subheadlines: 18–22px, `text-gray-500`
- Body: 16px, `text-gray-700`
- Buttons: 14–15px, `font-bold`, uppercase optional

**Component patterns already used in the product:**
- Project cards with image, category pill, title, author, progress bar, raised/goal amounts, days left, "Qo'llab-quvvatlash" (Support) button
- Rounded pill buttons with hover color swap (green bg → white text)
- Stat cards with large number + label
- Hero sections with illustration or photo on the right

**Responsive:** mobile-first, breakpoints at `sm`, `md`, `lg`, `xl`.

**Language for UI copy in prompts:** write copy suggestions in **English** (developers will translate to Uzbek/Russian later via i18n keys).

---

## Prompt files (by wave)

### Wave 1 — Static pages (critical)
- [01-faq.md](./01-faq.md) — FAQ / Help center
- [02-terms.md](./02-terms.md) — Terms of Service
- [03-privacy.md](./03-privacy.md) — Privacy Policy
- [04-not-found.md](./04-not-found.md) — 404 page
- [05-contact.md](./05-contact.md) — Contact us

### Wave 2 — Auth flow (guest-visible)
- [06-register.md](./06-register.md) — Sign up
- [07-forgot-password.md](./07-forgot-password.md) — Forgot password
- [08-reset-password.md](./08-reset-password.md) — Reset password

### Wave 3 — Discovery
- [09-category.md](./09-category.md) — Category landing page
- [10-search.md](./10-search.md) — Search results

### Wave 4 — Project detail enhancement
- [11-project-tabs.md](./11-project-tabs.md) — Project page with Story/Updates/Comments/Backers/FAQ tabs

### Wave 5 — Marketing / nice-to-have
- [12-about.md](./12-about.md) — About us
- [13-blog.md](./13-blog.md) — Blog list & article
- [14-success-stories.md](./14-success-stories.md) — Success stories
- [15-for-creators.md](./15-for-creators.md) — For creators landing
- [16-trust-safety.md](./16-trust-safety.md) — Trust & safety

## How to use

1. Open the prompt file for the screen you want to generate.
2. Copy the **entire content** of that file (the brand context is included in each prompt for standalone use).
3. Paste into uxpilot.ai.
4. Review the generated UI and request revisions in uxpilot if needed.
5. Implement the accepted design in the corresponding Vue view listed in [../docs/guest-screens-todo.md](../docs/guest-screens-todo.md).
