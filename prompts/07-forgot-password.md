# Forgot Password — UI Prompt

## Context
Design a Forgot Password page for **Funduz**, a crowdfunding platform for Uzbekistan. Users who can't remember their password request a reset link via email.

## Brand
- Primary green: `#1a946b`, dark green: `#0f5238`, light green: `#f0fdf4`
- Calm, reassuring, low-friction
- Rounded corners, plenty of whitespace, minimal distractions

## Page purpose
Let a user enter their email and receive a password reset link. Keep the flow simple and reassuring — the user is probably frustrated.

## Layout

**Header:** Minimal — FUNDUZ logo (left), "Back to Sign in" link with arrow icon (right).

**Main content (centered card, max-width 480px, vertically centered on viewport):**

White rounded-2xl card with soft shadow, generous padding (48–64px):

- Small illustration or icon at the top (centered): a key, a lock, or an envelope in a green circle (80px)
- Heading: "Forgot your password?" (32–40px, `font-black`)
- Subtext: "No worries. Enter the email address associated with your account and we'll send you a link to reset your password." (16px, gray-500, centered)
- Single input field:
  - Label: "Email address"
  - Large rounded-xl input (56px height), placeholder "you@example.com"
  - Focus ring in green
- Primary button: "Send reset link" — full-width, dark green, rounded-xl, `font-bold`
- Secondary link below: "Back to sign in" (gray with green hover)

**Success state (replaces the form after submit):**
- Green checkmark circle at top (80px)
- Heading: "Check your email"
- Text: "We've sent a password reset link to **you@example.com**. The link will expire in 1 hour."
- Button: "Open email app" (outlined green)
- Small text: "Didn't receive the email? Check your spam folder or resend" (with a green "resend" link that becomes active after 30 seconds)

**Footer:** Minimal — small gray links to Terms, Privacy, Help, centered at the bottom.

## Visual notes
- Background: very subtle gradient from white to `#f0fdf4`, or plain near-white
- Card floats above the background with soft shadow
- No navigation links in header to reduce exit distractions
- Error state: if email not found, show inline red message "No account found with this email"

## Responsive behavior
- Desktop: centered card, vertical centering
- Mobile: card fills width with padding, still vertically centered

## Copy language
English, calm and reassuring. Short sentences. No blame.
