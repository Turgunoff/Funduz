# Search Results — UI Prompt

## Context
Design a Search Results page for **Funduz**, a crowdfunding platform for Uzbekistan. Users type a keyword in the header search and land here. Results include projects, creators, and categories.

## Brand
- Primary green: `#1a946b`, dark green: `#0f5238`, light green: `#f0fdf4`
- Fast, focused, efficient
- Rounded corners, bold headings

## Page purpose
Show relevant search results with filters, sorting, and clear visual hierarchy. Handle the empty state gracefully.

## Layout

**Header:** Standard Funduz sticky header, but with the search input **expanded and prominent** — large rounded input with magnifying glass icon, the user's query pre-filled, and an X to clear. On mobile, the search is full-width below the logo row.

**Results header strip:**
- Left: "Results for '**yashil energiya**'" (`font-black`, 32px, query in green)
- Right: total results count — "124 results" (gray-500)

**Filter and tabs row (sticky below header):**
- Tabs at the top: "All (124) / Projects (98) / Creators (15) / Categories (3)"
- Active tab underlined in green
- Below tabs — filter chips: "All categories / Tech / Art / Ecology / …"
- Right side: sort dropdown ("Most relevant / Newest / Most funded / Ending soon")

**Results grid (Projects tab, default):**
- 3-column grid of project cards (same design as Explore / Category pages):
  - Image with category pill
  - Title (with **highlighted** matching words in green)
  - Author avatar and name
  - Progress bar, raised/goal, days left
  - Support button
- Pagination at bottom: "Load more" button OR numbered pagination

**Creators tab:**
- Horizontal list of creator cards: large avatar, name, bio snippet (with highlighted search term), stats (projects launched, total raised, backers), "View profile" button

**Categories tab:**
- Grid of category cards with icon, name, and count of matching projects

**Empty state (when no results):**
- Centered card
- Large illustration: magnifying glass over empty space, or a confused character
- Heading: "No results for '**yashil energiya**'"
- Suggestions:
  - "Try different keywords"
  - "Check your spelling"
  - "Browse popular categories instead"
- Row of clickable suggestion chips with popular searches
- Below: "Or explore trending projects" heading with 3 project cards

**Recent searches (shown if user lands on /search with no query):**
- "Your recent searches" heading
- Horizontal chip row of recent queries (with small X to remove each)
- Below: "Trending searches" heading with another chip row

**Footer:** Standard Funduz footer.

## Visual notes
- Matching keywords in results should be highlighted with a light green background (`bg-[#f0fdf4]`) or bold green text
- Loading state: skeleton cards (gray shimmer)
- The search input in the header should stay focused and sticky

## Responsive behavior
- Desktop: 3-column project grid, horizontal tab bar
- Tablet: 2-column grid
- Mobile: 1-column grid, tabs scroll horizontally, filters collapse into a "Filter" button that opens a bottom sheet

## Copy language
English, fast and helpful. Short phrases.
