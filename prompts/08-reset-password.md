# Reset Password — UI Prompt

## Context
Design a Reset Password page for **Funduz**, a crowdfunding platform for Uzbekistan. Users land here after clicking a reset link in their email. They enter a new password.

## Brand
- Primary green: `#1a946b`, dark green: `#0f5238`, light green: `#f0fdf4`
- Secure, simple, confident
- Rounded corners, minimal distractions, centered card layout

## Page purpose
Let the user set a new password in two fields (new + confirm), enforce password strength, and confirm success.

## Layout

**Header:** Minimal — FUNDUZ logo (left), "Back to Sign in" link (right).

**Main content (centered card, max-width 480px):**

White rounded-2xl card with soft shadow and generous padding:

- Icon at top: padlock or key in green circle (80px)
- Heading: "Set a new password" (32–40px, `font-black`)
- Subtext: "Your new password must be different from your previous one and at least 8 characters long." (16px, gray-500)
- Form fields:
  1. **New password**
     - Rounded-xl input (56px)
     - Eye icon to toggle visibility
     - Below: password strength bar (red → yellow → green) with label ("Weak" / "Fair" / "Strong")
     - Below strength bar: small checklist with green checkmarks as criteria are met:
       - At least 8 characters
       - One uppercase letter
       - One number
       - One special character
  2. **Confirm new password**
     - Same input style
     - Inline validation: red text "Passwords don't match" when mismatched, green check when matched
- Primary button: "Update password" — full-width, dark green, rounded-xl, `font-bold`
- Disabled state when password is too weak or fields don't match

**Success state (replaces the form after submit):**
- Green checkmark circle (80px)
- Heading: "Password updated"
- Subtext: "Your password has been changed successfully. You can now sign in with your new password."
- Button: "Go to sign in" — full-width, dark green

**Expired link state (shown if token is invalid):**
- Red/orange warning icon
- Heading: "This link has expired"
- Subtext: "Password reset links expire after 1 hour for security. Please request a new one."
- Button: "Request new link" linking to Forgot Password page

**Footer:** Minimal gray links to Terms, Privacy, Help.

## Visual notes
- Background: subtle gradient white → `#f0fdf4`
- Card floats with soft shadow
- Strength bar uses Tailwind green shades, smooth transition
- Security reassurance: small lock icon + "Secured with 256-bit encryption" below the button

## Responsive behavior
- Desktop: centered card, max-width 480px
- Mobile: full-width card with padding

## Copy language
English, clear, security-focused but not alarmist.
