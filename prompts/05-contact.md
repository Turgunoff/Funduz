# Contact Us — UI Prompt

## Context
Design a Contact Us page for **Funduz**, a crowdfunding platform for Uzbekistan. Visitors can send a message, find contact info, and reach the team via social channels.

## Brand
- Primary green: `#1a946b`, dark green: `#0f5238`, light green: `#f0fdf4`
- Warm, personal, human — this page should feel inviting
- Rounded corners, bold headings, plenty of whitespace

## Page purpose
Give visitors multiple ways to contact the Funduz team and let them submit a general inquiry via a simple form.

## Layout

**Header:** Standard Funduz sticky header.

**Hero strip:**
- Breadcrumb: Home › Contact
- Large heading: "Let's talk" or "Get in touch" (56px, `font-black`)
- Subheading: "Have a question, a partnership idea, or press inquiry? We'd love to hear from you." (18–20px, gray-500, max-width 560px)

**Main two-column section:**

Left column — Contact form (60% width on desktop):
- Heading: "Send us a message"
- Subtext: "We usually reply within 24 hours"
- Form fields (inside a white rounded-2xl card with soft shadow):
  1. Full name (text input with label above)
  2. Email (text input)
  3. Subject — dropdown with options: General inquiry, Partnership, Press, Report a project, Technical issue
  4. Message (textarea, 5 rows)
  5. Checkbox: "I agree to the Privacy Policy" with a green link
- Submit button: "Send Message" — large, filled dark green, rounded-xl, full-width on mobile, arrow icon on hover

Right column — Contact info (40% width on desktop):
- Stacked cards with icon + title + detail:
  1. 📧 Email — "hello@funduz.uz" — "General inquiries"
  2. 📞 Phone — "+998 XX XXX XX XX" — "Mon–Fri, 9:00–18:00"
  3. 📍 Office — "Tashkent, Uzbekistan" — "Address line"
  4. 💬 Telegram — "@funduz_uz" — "Fastest response"
- Below the cards: a row of social icons (Telegram, Instagram, Facebook, YouTube) in green circles

**FAQ shortcut strip (below main section):**
- Card with light green background
- Heading: "Looking for quick answers?"
- Subtext: "Check our FAQ — most common questions are answered there."
- Button: "Visit FAQ"

**Optional map section:**
- Full-width embedded map card showing Tashkent office location
- Rounded-3xl corners, overflow hidden
- Marker in Funduz green

**Footer:** Standard Funduz footer.

## Responsive behavior
- Desktop: two-column (form 60% / info 40%)
- Tablet: form and info stacked, form first
- Mobile: single column, form first, info cards below, map last

## Visual notes
- Form inputs: large (56px height), rounded-xl, gray-100 border, green focus ring
- Success state after submit: replace form with a green checkmark card "Message sent! We'll reply within 24 hours."
- Error state: inline validation with red text under each field

## Copy language
English, friendly and direct. First-person plural ("we / our team").
