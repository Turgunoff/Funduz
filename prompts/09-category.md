# Category Landing Page — UI Prompt

## Context
Design a Category landing page for **Funduz**, a crowdfunding platform for Uzbekistan. Visitors browsing by category (e.g., Technology, Art, Education, Ecology, Social, Business, Health) see projects filtered by that category plus a hero and editorial content.

## Brand
- Primary green: `#1a946b`, dark green: `#0f5238`, light green: `#f0fdf4`
- Each category can have its own accent color for variety (but keep green as the anchor)
- Modern, editorial, visually rich
- Rounded corners, bold typography, generous whitespace

## Page purpose
Show a curated, filtered view of projects in a specific category, with a category-themed hero and secondary filters.

## Layout

**Header:** Standard Funduz sticky header.

**Category hero (full-width, themed):**
- Background: large blurred photo relevant to the category (e.g., circuit boards for Tech, brushes for Art, green forests for Ecology) with a dark gradient overlay
- OR: light green background with large emoji/illustration (lighter feel)
- Breadcrumb: Home › Explore › Technology (white text)
- Large heading: "Technology" (64–72px, `font-black`, white)
- Subheading: "Discover innovative tech projects built by creators across Uzbekistan" (18–20px, white/80)
- Stats row: "48 active projects • 12,500 backers • 3.2B UZS raised"
- Optional: small pill showing trending subcategories (AI, Hardware, Software, Gaming, etc.)

**Filter bar (sticky below header):**
- Left: chip filters — "All / Trending / New / Almost funded / Ending soon"
- Right: sort dropdown — "Most popular / Newest / Ending soon / Most funded"
- Right end: grid/list view toggle icons

**Projects grid (main content):**
- 3 columns on desktop, 2 on tablet, 1 on mobile
- Each card:
  - Cover image (16:9, rounded-2xl top)
  - Category pill (top-left of image, small)
  - Title (`font-black`, 18px)
  - Author name with small avatar
  - Progress bar (green fill)
  - Raised amount • Goal amount • Days left (small gray stats row)
  - "Support" button (full-width, light green bg, dark green text, rounded-xl, hover flips to filled green)
- Approximately 9–12 cards visible, "Load more" button at bottom (outlined green)

**Editorial strip (between rows of projects):**
- "Editor's pick" card — wider, featured project with larger image on the left and a long-form description on the right
- "Staff favorite" badge

**Related categories strip (bottom of page):**
- Heading: "Explore other categories"
- Horizontal row of category cards — each with icon, name, project count — pastel backgrounds
- Mobile: horizontally scrollable

**CTA at the very bottom:**
- Light green card: "Have an idea in technology? Launch your project on Funduz."
- Button: "Start your project"

**Footer:** Standard Funduz footer.

## Responsive behavior
- Desktop: 3-column project grid, sticky filter bar
- Tablet: 2-column grid, filter bar wraps
- Mobile: 1-column grid, filters in a horizontal scroll strip, compact hero

## Copy language
English, editorial and enthusiastic. Let the category personality show.
