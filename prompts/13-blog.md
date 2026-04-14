# Blog — UI Prompt (list + article detail)

## Context
Design a Blog for **Funduz**, a crowdfunding platform for Uzbekistan. Two screens are needed: a blog **list page** and a single **article page**. Content covers creator tips, platform news, success stories, and industry insights.

## Brand
- Primary green: `#1a946b`, dark green: `#0f5238`, light green: `#f0fdf4`
- Editorial, magazine-like, readable
- Rounded corners, bold typography, generous whitespace, photography-first

## Page purpose
- **List page:** browse recent articles, filter by category, discover featured posts.
- **Article page:** read a single article with excellent typography and related content.

---

## SCREEN 1 — Blog list page

**Header:** Standard Funduz sticky header.

**Hero (full-width):**
- Breadcrumb: Home › Blog
- Large heading: "Stories, tips & news from the Funduz community" (56px, `font-black`)
- Subheading: "Everything you need to know about crowdfunding in Uzbekistan — from creator guides to success stories." (18px, gray-500)
- Search input on the right (rounded-xl, placeholder "Search articles…")

**Featured article card (below hero):**
- Full-width card, two-column (60/40 split)
- Left: large rounded-2xl photo
- Right: "Featured" green pill, category, headline (`font-black`, 32px), excerpt (2–3 lines), author avatar + name + reading time, "Read article" arrow link

**Category filter chip bar:**
- Horizontally scrollable pills: "All / Creator tips / Success stories / Platform news / Industry / Events"
- Active chip: filled green

**Article grid:**
- 3 columns on desktop, 2 on tablet, 1 on mobile
- Each card:
  - Cover image (16:9, rounded-2xl top)
  - Category pill
  - Headline (`font-black`, 18px, 2-line clamp)
  - Excerpt (gray-500, 2-line clamp)
  - Footer row: small avatar, author name, reading time, publish date
- Around 9–12 visible, pagination or "Load more" at the bottom

**Newsletter CTA strip:**
- Wide light green card
- Heading: "Get the best of Funduz in your inbox"
- Subtext: "Monthly digest. No spam."
- Email input + "Subscribe" button inline

**Footer:** Standard Funduz footer.

---

## SCREEN 2 — Single article page

**Header:** Standard Funduz sticky header.

**Article header section:**
- Breadcrumb: Home › Blog › Creator tips
- Category pill (green)
- Huge headline (48–64px, `font-black`)
- Subheadline / lede paragraph (20px, gray-500, max-width 720px)
- Author row: large avatar, "By Malika Karimova" (green name), role, publish date, reading time
- Large cover image (rounded-3xl, full-width, 16:9)

**Main content (two-column on desktop):**

Left sidebar (20%, sticky):
- Small "Share" vertical strip with social icons (Telegram, Facebook, LinkedIn, Copy link)
- Reading progress bar (vertical, green)

Main body (60%, centered, max-width 720px):
- Long-form article with excellent typography:
  - Paragraphs (17–18px, comfortable line-height 1.75)
  - Headings H2 / H3 in `font-black` dark gray with small green underline accent
  - Pull quotes in large green italic
  - Inline images (rounded-2xl with captions)
  - Callout boxes (light green, rounded, with icon)
  - Bullet and numbered lists
  - Code/snippet blocks (if needed)
  - Links in green

Right sidebar (20%, sticky):
- "Table of contents" with anchor links (active section highlighted)
- Below TOC: small "Author" card with avatar, name, bio, "Follow" button

**Related articles strip (below content):**
- Heading: "Keep reading"
- 3 article cards in a row

**Newsletter CTA strip:**
- Same as on the list page

**Comments section (optional, guest-visible):**
- Heading: "Join the discussion"
- For guests: locked card "Sign in to comment" with Login CTA
- Below: list of existing comments

**Footer:** Standard Funduz footer.

## Responsive behavior
- Desktop: two sticky sidebars, wide editorial body
- Tablet: sidebars collapse, share bar becomes horizontal at the top
- Mobile: single column, TOC as collapsible accordion above content, share as floating bottom bar

## Visual notes
- Article typography must be the star — clear hierarchy, comfortable reading
- Large touch targets for all interactive elements

## Copy language
English, editorial and friendly.
