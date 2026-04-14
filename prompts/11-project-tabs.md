# Project Detail Page with Tabs — UI Prompt

## Context
Redesign the Project Detail page for **Funduz**, a crowdfunding platform for Uzbekistan. Currently it's a single static view. We need to add tabs (Story, Updates, Comments, Backers, FAQ) as used on all major crowdfunding platforms. This page is visible to **guest (unauthenticated)** visitors — they can read everything but need to sign in to interact.

## Brand
- Primary green: `#1a946b`, dark green: `#0f5238`, light green: `#f0fdf4`
- Editorial, immersive, trustworthy
- Rounded corners (cards, buttons, media), bold typography, generous whitespace

## Page purpose
Let visitors explore a single project in depth: read the story, see updates from the creator, read comments and backer list, find answers to project-specific FAQs, and decide whether to back it.

## Layout

**Header:** Standard Funduz sticky header.

**Project hero section (top):**
- Breadcrumb: Home › Explore › Technology › Project title
- Two-column (60% / 40% on desktop):

Left column (60%):
- Large cover image or video player (rounded-2xl, 16:9)
- Thumbnail strip below showing 4–5 more media items (click to swap main)

Right column (40%, sticky on scroll):
- Category pill + "Ends in 12 days" chip
- Large project title (`font-black`, 32–40px)
- Short tagline (18px, gray-500)
- Creator row: avatar + "by Anvar Qosimov" + "Tashkent, Uzbekistan" with a small green "View profile" link
- Big stat: **120,000,000 UZS** raised (48px, `font-black`, dark green)
- Secondary: "of 150,000,000 UZS goal" (gray-500)
- Progress bar (thick, green fill, rounded-full)
- Row of three stats: 845 backers • 12 days left • 80% funded
- Primary CTA: "Back this project" — full-width, filled dark green, large, `font-bold`
- Secondary buttons row: "Share" (outlined), "Save" (outlined with heart icon)
- Small trust line with shield icon: "Funduz Escrow Protected — you'll only be charged if the project reaches its goal"

**Tab navigation (sticky below hero):**
- Horizontal tab bar with 5 tabs:
  1. Story (default active)
  2. Updates (with badge showing count)
  3. Comments (with count)
  4. Backers (with count)
  5. FAQ
- Active tab: bold dark green text + green underline
- Inactive: gray-500
- On mobile: horizontally scrollable

**Tab content (left column, with a reward sidebar on the right on desktop):**

Main content (left, 65%):

**Tab 1 — Story:**
- Rich long-form content: headings, paragraphs, images, quotes, bullet lists
- Embedded video blocks (rounded-2xl)
- "Risks & challenges" section with a subtle red-tinted callout

**Tab 2 — Updates:**
- Vertical feed of updates, each:
  - Update number (#3), date, title
  - Body text with optional image
  - "Like" and "Share" buttons
- Empty state if no updates: "The creator hasn't posted any updates yet"

**Tab 3 — Comments:**
- Top: locked-looking input card "Sign in to leave a comment" with Login CTA (for guests)
- Below: list of existing comments — avatar, name, "Backer" or "Creator" pill, time, comment text, heart count, reply button
- Threaded replies nested one level
- "Load more comments" button

**Tab 4 — Backers:**
- Row showing 3 stats: total backers, average pledge, top pledge
- List/grid of backer cards: avatar, name (or "Anonymous backer"), pledge amount hidden unless public, backed date
- Some backers may show "Top 10 supporter" gold pill

**Tab 5 — FAQ:**
- Accordion of project-specific questions
- Empty state if none: "No questions yet — be the first to ask"

Right sidebar (35%, sticky on desktop only, visible on Story tab):
- Heading: "Select a reward"
- 3–5 reward tier cards, each:
  - Pledge amount header (e.g., "50,000 UZS or more")
  - Reward title
  - Description
  - Estimated delivery date
  - "X backers" count
  - "Limited: 25 of 100 left" (if limited)
  - "Select this reward" button (outlined green, hover fills)
- "No reward? Back without a reward" ghost link at the bottom

**Similar projects section (below tab content):**
- Heading: "You might also like"
- Row of 3–4 project cards
- Mobile: horizontally scrollable

**Footer:** Standard Funduz footer.

## Responsive behavior
- Desktop: two-column hero, sticky right sidebar for rewards, horizontal tabs
- Tablet: stacked hero, rewards inline above tabs, tabs horizontal
- Mobile: full-width hero, sticky "Back this project" button fixed at the bottom of the viewport, rewards become a section above similar projects, tabs scroll horizontally

## Visual notes
- Use media-rich layout — lots of images, videos, quotes
- Tab switching should feel instant (no page reload look)
- Creator avatar and name should be a subtle link to their future profile page

## Copy language
English, editorial, builds trust and excitement.
