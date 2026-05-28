# Frontend Task Course

Use this task course to turn the current Vite starter into a business landing page. Scope is frontend only.

## Project Goal

Build a responsive, conversion-focused business landing page with polished motion and strong accessibility fundamentals.

## Phase 1: Replace the Starter

- [ ] Remove the default Vite counter/demo content from `client/src/App.tsx`.
- [ ] Define the landing page sections before styling:
  - hero
  - social proof or trust bar
  - features/services
  - process or how it works
  - testimonials or results
  - final call-to-action
  - footer
- [ ] Replace placeholder copy with business-oriented messaging.
- [ ] Remove unused starter assets that are no longer part of the page.

### Done When

- [ ] The page reads like a real business landing page instead of a starter template.
- [ ] Every section supports a clear conversion path.

## Phase 2: Responsive Layout System

- [ ] Establish a consistent layout system in `client/src/index.css` and `client/src/App.css`.
- [ ] Create reusable spacing, container, typography, and color variables.
- [ ] Build mobile-first layouts for all sections.
- [ ] Add tablet and desktop breakpoints.
- [ ] Verify that navigation, cards, buttons, and text blocks reflow cleanly at small widths.
- [ ] Ensure images and decorative elements scale without overlap or clipping.

### Done When

- [ ] The page is usable and visually stable on mobile, tablet, and desktop.
- [ ] No horizontal scrolling appears at common viewport sizes.

## Phase 3: Conversion-Focused UX

- [ ] Write a strong hero headline, supporting copy, and primary CTA.
- [ ] Add a secondary CTA where it improves decision-making.
- [ ] Structure sections so value proposition appears before supporting detail.
- [ ] Add trust-building UI elements such as metrics, client logos, guarantees, or testimonials.
- [ ] Make CTA buttons visually prominent and repeated at logical points.
- [ ] Reduce friction by keeping forms or lead actions short and obvious.

### Done When

- [ ] The page has one primary conversion goal.
- [ ] Users can understand the offer and act within a few seconds of landing.

## Phase 4: Motion and Visual Polish

- [ ] Add tasteful entrance animations for hero content.
- [ ] Add subtle hover and focus states for interactive elements.
- [ ] Introduce section reveals or staggered motion where it improves hierarchy.
- [ ] Use motion to support attention, not distract from CTAs.
- [ ] Respect reduced-motion preferences.
- [ ] Replace the current starter visual language with a more intentional branded direction.

### Done When

- [ ] Motion feels smooth and purposeful.
- [ ] The design no longer resembles the default Vite starter.

## Phase 5: Accessibility

- [ ] Use semantic landmarks and heading order.
- [ ] Ensure sufficient color contrast for text, buttons, and links.
- [ ] Provide meaningful alt text for content images and hide decorative images from assistive tech.
- [ ] Make all interactive elements keyboard accessible.
- [ ] Add visible focus states that match the design system.
- [ ] Check link/button labels for clarity and screen-reader context.

### Done When

- [ ] The full page can be navigated with a keyboard.
- [ ] The page meets baseline accessibility expectations for a marketing site.

## Phase 6: Frontend QA

- [ ] Test common viewport sizes:
  - mobile
  - tablet
  - laptop
  - large desktop
- [ ] Check for layout shifts, overflow, and broken spacing.
- [ ] Verify hover, focus, and reduced-motion behavior.
- [ ] Confirm copy hierarchy and CTA placement still work after final styling.
- [ ] Remove dead code, unused imports, and unused assets.

### Done When

- [ ] The landing page is production-ready from a frontend perspective.
- [ ] The codebase is clean and only contains assets/styles used by the page.

## Suggested Build Order

- [ ] Page structure and content
- [ ] Responsive layout and design tokens
- [ ] Conversion elements and CTA hierarchy
- [ ] Animation and polish
- [ ] Accessibility pass
- [ ] Final QA cleanup
