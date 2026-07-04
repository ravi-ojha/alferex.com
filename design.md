---
version: 1.0
name: Ticketping
description: Ticketping design system for the SvelteKit frontend. Light theme uses Sand; dark theme uses Cement. Full brand guidelines live at /brand.
colors:
  spaceblack: '#020202'
  daylight: '#fafaf9'
  white: '#ffffff'
  black: '#000000'
  sand-50: '#f3f2f2'
  sand-100: '#e4e3e2'
  sand-200: '#cbcac8'
  sand-300: '#afaeab'
  sand-400: '#94928f'
  sand-500: '#7a7874'
  sand-600: '#615f5c'
  sand-700: '#494846'
  sand-800: '#32312f'
  sand-900: '#181716'
  sand-950: '#0d0d0c'
  cement-50: '#f3f5f6'
  cement-100: '#e5e9eb'
  cement-200: '#cbd3d7'
  cement-300: '#b1bdc3'
  cement-400: '#9aaab2'
  cement-500: '#7f939d'
  cement-600: '#647882'
  cement-700: '#49585f'
  cement-800: '#313b40'
  cement-900: '#181d20'
  cement-950: '#0d1011'
  parrot-50: '#f5faef'
  parrot-100: '#e9f5dc'
  parrot-200: '#d5ebbc'
  parrot-300: '#bee199'
  parrot-400: '#aad779'
  parrot-500: '#94cd56'
  parrot-600: '#78b536'
  parrot-700: '#598628'
  parrot-800: '#3c5b1b'
  parrot-900: '#1d2b0d'
  parrot-950: '#101807'
  forest-100: '#e2f3eb'
  forest-500: '#4cb782'
  forest-700: '#23794f'
  water-500: '#45abf7'
  water-600: '#1f98f5'
  brownpaper-50: '#fbf9f3'
  brownpaper-200: '#f2e9d4'
  brownpaper-500: '#dfcb99'
  brownpaper-600: '#d2b66f'
  brownpaper-700: '#c4a045'
  brownpaper-800: '#9f8032'
  priority-urgent: '#ef4444'
  priority-high: '#fb923c'
  priority-medium: '#facc15'
  priority-low: 'rgb(127 147 157 / 50%)'
typography:
  display-5xl:
    fontFamily: InterVariable
    fontSize: 3rem
    fontWeight: 500
    lineHeight: tight
    class: font-display text-4xl lg:text-[2.5rem] font-500 leading-tight
  display-4xl:
    fontFamily: InterVariable
    fontSize: 2.25rem
    fontWeight: 500
    lineHeight: tight
    class: font-display text-3xl md:text-4xl font-500 leading-tight
  display-3xl:
    fontFamily: InterVariable
    fontSize: 1.875rem
    fontWeight: 500
    lineHeight: tight
    class: font-display text-2xl md:text-3xl font-500 leading-tight
  display-xl:
    fontFamily: InterVariable
    fontSize: 1.25rem
    fontWeight: 500
    lineHeight: tight
    class: font-display text-xl md:text-2xl font-500 leading-tight
  display-lg:
    fontFamily: InterVariable
    fontSize: 1.125rem
    fontWeight: 500
    lineHeight: snug
    class: font-display text-lg md:text-xl font-500
  heading-3xl:
    fontFamily: InterVariable
    fontSize: 1.875rem
    fontWeight: 600
    class: text-3xl font-semibold
  heading-2xl:
    fontFamily: InterVariable
    fontSize: 1.5rem
    fontWeight: 600
    class: text-2xl font-semibold
  body-base:
    fontFamily: InterVariable
    fontSize: 1rem
    fontWeight: 400
    lineHeight: relaxed
    class: text-base text-sand-700 dark:text-cement-300 leading-relaxed
  body-sm:
    fontFamily: InterVariable
    fontSize: 0.875rem
    fontWeight: 400
    class: text-sm
  body-xs:
    fontFamily: InterVariable
    fontSize: 0.8125rem
    fontWeight: 400
    class: text-xs
  body-xss:
    fontFamily: InterVariable
    fontSize: 0.75rem
    fontWeight: 500
    class: text-xss font-medium
  body-md:
    fontFamily: InterVariable
    fontSize: 0.938rem
    fontWeight: 400
    lineHeight: 1.35rem
    class: text-md
  mono-base:
    fontFamily: GeistMonoVariable
    fontSize: 0.875rem
    fontWeight: 400
    class: font-mono text-sm
  label-xs:
    fontFamily: InterVariable
    fontSize: 0.75rem
    fontWeight: 600
    class: text-xs font-semibold text-sand-700 dark:text-cement-300
spacing:
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
  16: 64px
  base: 4px
rounded:
  sm: 2px
  md: 6px
  lg: 8px
  xl: 12px
  full: 9999px
components:
  button-primary:
    class: btn btn-primary
    backgroundColor: '{colors.parrot-500}'
    textColor: '{colors.spaceblack}'
    borderColor: '{colors.parrot-400}'
    rounded: '{rounded.full}'
    height: auto
  button-secondary:
    class: btn btn-secondary
    backgroundColor: '{colors.sand-50}'
    textColor: '{colors.sand-800}'
    rounded: '{rounded.full}'
  button-danger:
    class: btn btn-rose
    backgroundColor: rose-600
    textColor: '{colors.white}'
    rounded: '{rounded.full}'
  button-transparent:
    class: btn btn-transparent
    textColor: '{colors.sand-900}'
    rounded: '{rounded.full}'
  form-input:
    class: form-input
    backgroundColor: '{colors.sand-50}'
    textColor: '{colors.sand-900}'
    rounded: '{rounded.lg}'
    padding: '8px 16px'
    height: auto
  form-select:
    class: form-select
    backgroundColor: '{colors.sand-50}'
    textColor: '{colors.sand-900}'
    rounded: '{rounded.lg}'
  ticket-status-open:
    backgroundColor: '{colors.water-500}'
    textColor: '{colors.water-600}'
  ticket-status-resolved:
    backgroundColor: '{colors.forest-500}'
    textColor: '{colors.forest-700}'
  ticket-status-waiting:
    backgroundColor: '{colors.brownpaper-600}'
    textColor: '{colors.brownpaper-800}'
  ticket-status-spam:
    backgroundColor: '{colors.sand-500}'
    textColor: '{colors.sand-700}'
  toast:
    class: rounded-full backdrop-blur-2xl
    backgroundColor: '{colors.white}'
    borderColor: '{colors.sand-100}'
---

# Ticketping

## Overview

Ticketping is a warm, grounded support platform. The aesthetic pairs neutral Sand (light) and Cement (dark) surfaces with Parrot green as the primary accent. Typography is clean and readable; motion is smooth but never flashy. Prioritize clarity for support workflows — tickets, statuses, and priorities should be scannable at a glance.

This is the canonical design spec for the SvelteKit frontend (`ticketping.com`). Interactive examples live at `/brand`. Tokens are defined in `src/app.css` (`@theme`) and component classes in `src/styles/common.css`.

## Colors

### Neutral scales

Sand is the light-mode neutral scale; Cement is the dark-mode equivalent. Always pair them with `dark:` variants:

| Role | Light | Dark |
|------|-------|------|
| Page background | `bg-daylight` / `bg-white` | `dark:bg-spaceblack` / `dark:bg-cement-950` |
| Card / panel | `bg-white` / `bg-sand-50` | `dark:bg-cement-900` |
| Primary text | `text-sand-900` / `text-spaceblack` | `dark:text-cement-100` / `dark:text-white` |
| Secondary text | `text-sand-600` / `text-sand-700` | `dark:text-cement-400` / `dark:text-cement-300` |
| Muted text | `text-sand-400` / `text-sand-500` | `dark:text-cement-500` / `dark:text-cement-600` |
| Border | `border-sand-100` / `border-sand-200` | `dark:border-cement-900` / `dark:border-cement-800` |

`spaceblack` (#020202) and `daylight` (#fafaf9) are the extreme anchors. Do not substitute generic `gray-*` Tailwind colors — use `sand-*` and `cement-*` exclusively.

### Accent scales

- **Parrot** — primary brand accent, CTAs, selection highlight, success toasts. `parrot-500` fill, `parrot-600` hover.
- **Water** — links, info states, open ticket status. `text-water-600 dark:text-water-500`.
- **Forest** — resolved tickets, success indicators. `forest-500` / `forest-700`.
- **Brownpaper** — waiting-for-customer status, warm secondary accents.
- **Rose** — destructive actions, errors, validation messages. `text-rose-500` / `text-rose-600`, `btn-rose`.
- **Amber** — warnings and warning toasts.

### Priority colors

Defined in `src/lib/common/constants.ts` (`PRIORITY_COLORS`):

- Urgent: `#ef4444`
- High: `#fb923c`
- Medium: `#facc15`
- Low: `rgb(127 147 157 / 50%)`

Use the existing `<PriorityLabel />` component; do not invent new priority colors.

### Custom brand (help center)

Help center pages use CSS variables (`--brand-*`) for per-team theming. Use `prose-helpcenter` for long-form content and `cbrand-*` Tailwind tokens for branded UI. Do not hardcode team colors.

## Typography

**InterVariable** is the primary typeface (body and display). **GeistMonoVariable** is for code, hex values, slugs, and tabular data.

| Use | Classes |
|-----|---------|
| Hero / landing headings | `font-display text-4xl lg:text-[2.5rem] font-500 leading-tight` |
| Section headings | `font-display text-2xl md:text-3xl font-500 leading-tight` |
| Subsection headings | `font-display text-xl md:text-2xl font-500` |
| Card / accordion titles | `font-display text-lg font-500` |
| Body copy | `text-base text-sand-700 dark:text-cement-300 leading-relaxed` |
| UI labels | `text-xs font-semibold text-sand-700 dark:text-cement-300` |
| Metadata / badges | `text-xss font-medium` |
| Monospace | `font-mono text-sm` |

Font weights use custom utilities (`font-300` through `font-800`) with `font-variation-settings` for InterVariable. Prefer `font-500` for display headings and `font-600` for emphasis.

Prose content uses `prose-sand` (app-wide) or `prose-helpcenter` (branded help center). Links in prose: `text-water-600 dark:text-water-500`.

## Layout

Spacing follows Tailwind's 4px scale. Common rhythm:

- 8px (`gap-2`, `p-2`) inside compact groups
- 16px (`gap-4`, `p-4`) between related elements
- 24–32px (`gap-6`/`gap-8`, `py-6`/`py-8`) between sections
- Card padding: `px-6 py-6` standard, `px-4 py-4` compact

Dashboard min-heights: `dash-min-h` (viewport − 48px). Landing first fold: `min-h-first-fold` (viewport − 130px).

Dark mode is class-based: add `dark` to `<html>` via the theme store. Every color-bearing class needs a `dark:` counterpart.

## Elevation & Depth

Hierarchy comes from borders and subtle tinted shadows, not heavy drop shadows.

- **Inputs / editors**: `shadow shadow-sand-200 dark:shadow-cement-900`
- **Dropdowns / menus**: `shadow-lg shadow-sand-200 dark:shadow-cement-900 border border-sand-200/60 dark:border-cement-900`
- **Modals / dialogs**: `shadow-lg border border-sand-200 dark:border-cement-900 rounded-xl`
- **Toasts**: `backdrop-blur-2xl` with a light border — see `Toaster` config in `src/routes/+layout.svelte`

Avoid stacking multiple shadow layers. Prefer `border` + single `shadow` for depth.

## Motion

Motion should feel smooth and understated.

- **Links**: `duration-300 transition ease-out`
- **Buttons**: `duration-500 transition ease-out`
- **Theme switch** (after `theme-ready` on `<html>`): 0.2–0.25s ease on color, border, shadow
- **Accordions**: `0.2s ease-out` (`--animate-accordion-down/up`)
- **Popovers / overlays**: `animate-in` / `animate-out` at 150ms
- **CTA caret** (landing): `cubic-bezier(0.65, 0, 0.35, 1)` over 200ms

Honor `prefers-reduced-motion`. Do not add decorative looping animations to dashboard UI.

## Shapes

Ticketping uses two radius families:

- **Pills** (`rounded-full`) — buttons, radio labels, toasts
- **Soft corners** (`rounded-lg`) — inputs, text editors, status badges, nav items
- **Tight corners** (`rounded-md`) — dropdown items, small popovers
- **Large panels** (`rounded-xl`) — modals

Do not mix sharp corners with rounded ones in the same view.

## Components

Reuse existing CSS classes and Svelte components. Do not recreate styles inline.

### Buttons

Base: `btn` + size (`btn-sm`, `btn-md`, `btn-lg`, etc.) + variant:

| Variant | Class | Use |
|---------|-------|-----|
| Primary | `btn-primary` | Single most important action; Parrot green fill |
| Secondary | `btn-secondary` | Default actions; sand/cement fill |
| Danger | `btn-rose` | Destructive actions |
| Transparent | `btn-transparent` | Low-emphasis, inline actions |
| Landing CTA | `btn-caret` | Marketing CTAs with animated arrow |

Disabled: add `disabled` class or `opacity-60 cursor-not-allowed pointer-events-none`. Focus: `ring-1 ring-cement-500`.

### Forms

| Element | Class / Component |
|---------|-----------------|
| Text input | `form-input` |
| Select | `form-select` or `<StandardSelect />` |
| Search | `ticket-search-input` |
| Rich text | `tptext-editor` |
| Checkbox | `<Checkbox />` |
| Switch | `<Switch />` |
| Radio pill | `form-radio-label` |

Focus ring on inputs: `border-parrot-500 dark:border-parrot-800/60`. Placeholders: `text-sand-400 dark:text-cement-600`.

### Ticket status

Use `<TicketStatus status={...} />` from `$lib/components/ui/ticket-status.svelte`. Status slugs: `open`, `resolved`, `waiting-for-customer`, `spam`. Do not create new status color combinations.

### Priority

Use `<PriorityLabel priority={...} />` with `PRIORITY_COLORS` from constants.

### Links

| Style | Class |
|-------|-------|
| Underline on hover | `link-type-1` |
| Animated underline | `link-type-2` |
| Inline / external | `text-water-600 dark:text-water-500` with `border-b` or `underline decoration-water-500/30` |

### Toasts

Use `svelte-sonner`: `toast.success()`, `toast.error()`, `toast.info()`, `toast.warning()`. Toasts are pill-shaped, top-center. Name the specific thing that changed; avoid "successfully".

## Voice & Content

- **Buttons**: verb + noun (`Save Changes`, `Delete Channel`), not bare `OK` or `Submit`
- **Labels**: sentence case for helper text; Title Case for nav items and section headers
- **Errors**: state what happened and what to do next
- **Empty states**: point to the first action (`No tickets yet. Create one from the dashboard.`)
- **Loading**: present participle with ellipsis (`Saving…`, `Deploying…`)
- **Toasts**: specific, no trailing period, no "successfully"

## Do's and Don'ts

- Use `sand-*` / `cement-*` pairs for every neutral color; always include `dark:` variants
- Use `parrot-500` for the single primary CTA per view
- Reuse `btn`, `form-input`, and existing UI components from `$lib/components/ui/`
- Use `<TicketStatus />` and `<PriorityLabel />` for ticket metadata
- Show focus styles on all interactive elements
- Hold WCAG AA contrast (4.5:1 for body text)
- Don't use raw `gray-*`, `zinc-*`, or `neutral-*` Tailwind colors
- Don't use `parrot` for non-accent fills (backgrounds, borders)
- Don't invent new button or input styles — extend `common.css` if a new variant is truly needed
- Don't signal state with color alone; pair with text labels or icons
- Don't mix `rounded-full` buttons with `rounded-none` cards in the same panel

## Implementation Reference

| Concern | Source |
|---------|--------|
| Color tokens | `src/app.css` → `@theme` |
| Component classes | `src/styles/common.css` |
| Priority colors | `src/lib/common/constants.ts` |
| Brand examples | `src/lib/components/brand/` → `/brand` routes |
| Theme toggle | `src/lib/stores/theme.ts` |
| Toast config | `src/routes/+layout.svelte` |

When building new UI, start from the closest existing component in `$lib/components/ui/` or `$lib/components/pages/`, then apply tokens from this file.
