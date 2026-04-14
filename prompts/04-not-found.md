# 404 Not Found — UI Prompt

## Context
Design a 404 "Page Not Found" error page for **Funduz**, a crowdfunding platform for Uzbekistan. This page appears when a visitor types a broken URL or clicks a dead link.

## Brand
- Primary green: `#1a946b`, dark green: `#0f5238`, light green: `#f0fdf4`
- Friendly, optimistic — never make the user feel they did something wrong
- Rounded corners, bold typography, playful but professional

## Page purpose
Gently inform the user the page doesn't exist and redirect them somewhere useful (home, explore, or help).

## Layout

**Header:** Standard Funduz sticky header.

**Main content (centered, full viewport minus header/footer):**

Two-column desktop layout, stacked on mobile:

Left column (text, 50% width):
- Small green label: "Error 404"
- Huge heading: "We couldn't find that page" (56px, `font-black`, dark gray)
- Subheading paragraph: "The page you're looking for doesn't exist or has been moved. But don't worry — there are plenty of amazing projects waiting for you." (18px, gray-500, max-width ~440px)
- Two buttons side by side:
  1. "Back to Home" — filled dark green, rounded-xl, `font-bold`
  2. "Explore Projects" — outlined green with arrow icon
- Below the buttons: a small text "Or get in touch: " with a green "Contact support" link

Right column (illustration, 50% width):
- Large playful illustration: a cartoon rocket that missed its launch pad, or a telescope looking at an empty sky, or a treasure map with a giant "404" in place of X
- Use Funduz green tones, soft gradients, friendly shapes
- Optional: small floating coins, stars, or sparkles for warmth

**Below the hero — suggested projects strip:**
- Small heading: "Check out these trending projects instead"
- Horizontal row of 3–4 project cards (same card design as Explore page: image, category pill, title, author, progress bar, raised/goal, days left, "Support" button)
- On mobile: horizontally scrollable

**Footer:** Standard Funduz footer.

## Visual notes
- Background: very soft gradient from white to `#f0fdf4`
- The "404" number can appear as a huge, light-green, semi-transparent background decoration behind the text
- Avoid pure black — use dark gray (`#1f2937`) for headings

## Responsive behavior
- Desktop: two-column hero, horizontal project cards
- Tablet: illustration above text, 2-column project cards
- Mobile: single column, illustration on top (smaller), text centered, project cards scroll horizontally

## Copy language
English, friendly and optimistic. Short sentences. No blaming the user.
