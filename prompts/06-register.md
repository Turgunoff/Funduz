# Sign Up / Register — UI Prompt

## Context
Design a Sign Up page for **Funduz**, a crowdfunding platform for Uzbekistan. New users create an account to back projects or launch their own.

## Brand
- Primary green: `#1a946b`, dark green: `#0f5238`, light green: `#f0fdf4`
- Welcoming, trustworthy, premium feel
- Rounded corners, bold headings, soft shadows

## Page purpose
Let a new visitor create a Funduz account quickly with minimal friction, while still collecting the essentials.

## Layout

**Header:** Minimal header — just the FUNDUZ logo (left) and a small "Already have an account? Sign in" link (right). No full nav to reduce distraction.

**Main two-column layout (desktop):**

Left column (form, 50% width, centered on white background):
- Heading: "Create your account" (40–48px, `font-black`)
- Subheading: "Join thousands of backers and creators on Funduz" (16px, gray-500)
- Social sign-up buttons (stacked):
  1. "Continue with Google" — white with border and Google icon
  2. "Continue with Telegram" — white with border and Telegram icon (blue)
- Divider with "or sign up with email" (gray, thin line on each side)
- Form fields (all with labels above, rounded-xl inputs, 56px height):
  1. Full name
  2. Email address
  3. Password (with eye icon to toggle visibility)
  4. Password strength indicator bar (red → yellow → green) with label
- Checkboxes:
  - "I agree to the Terms of Service and Privacy Policy" (green links)
  - "Send me Funduz news and updates" (optional)
- Primary CTA button: "Create account" — large, filled dark green, full-width, rounded-xl
- Below the button: "Already have an account? Sign in" centered

Right column (visual, 50% width):
- Full-height decorative panel with light green gradient background
- Large illustration or photo: happy creators/backers, Uzbek cultural motifs, project launches
- Overlay card or quote testimonial:
  - Avatar + "Launching my bakery on Funduz changed my life. I reached 150% of my goal in 12 days." — Malika K., Creator
- Small stats below: "12,000+ backers • 250+ funded projects • 15B UZS raised"
- Rounded-3xl outer corners, decorative floating shapes (coins, hearts, sparkles)

**Footer:** Minimal — small links to Terms, Privacy, Help (gray, centered, bottom of page).

## Responsive behavior
- Desktop: two-column (form left, visual right)
- Tablet: two-column but narrower, or visual becomes compact banner on top
- Mobile: single column, form only (no visual panel), full-width form

## Visual notes
- Focus state: green ring around inputs on focus
- Validation: inline red text under fields, green checkmark when valid
- Loading state for submit: button shows spinner + "Creating account…"
- Link color: `#1a946b`

## Copy language
English, warm and welcoming. Keep field labels short. Encourage completion with positive microcopy.
