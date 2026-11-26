---
name: Pedro Pinho — portfolio pilot
description: One fixed page, four tabs, light grey paper with dark floating points. Black, white and greys only.
colors:
  paper: "#e6e6e3"
  ink: "#0d0d0d"
  grey-1: "#3a3a38"
  grey-2: "#5c5c59"
  line: "#c2c2bf"
typography:
  display:
    fontFamily: "Inter Tight, system-ui, sans-serif"
    fontSize: "clamp(40px, min(9vw, 15vh), 160px)"
    fontWeight: 300
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Inter Tight, system-ui, sans-serif"
    fontSize: "clamp(32px, min(4.6vw, 8vh), 80px)"
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  figure:
    fontFamily: "Inter Tight, system-ui, sans-serif"
    fontSize: "clamp(28px, min(3.4vw, 6vh), 56px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
  item:
    fontFamily: "Inter Tight, system-ui, sans-serif"
    fontSize: "clamp(24px, min(3.4vw, 6vh), 52px)"
    fontWeight: 300
    letterSpacing: "-0.03em"
  lede:
    fontFamily: "Inter Tight, system-ui, sans-serif"
    fontSize: "clamp(15px, 1.35vw, 20px)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Inter Tight, system-ui, sans-serif"
    fontSize: "clamp(14px, 1.1vw, 17px)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.12em"
  label-sm:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.12em"
rounded:
  none: "0"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "48px"
  "8": "64px"
  gutter: "clamp(16px, 3vw, 40px)"
components:
  tab:
    textColor: "{colors.grey-2}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  tab-hover:
    textColor: "{colors.ink}"
  tab-active:
    textColor: "{colors.ink}"
  link-large:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
---

# Design System: portfolio pilot

The CSS custom properties at the top of `style.css` are the source of truth. This file explains them. If the two disagree, fix one; don't add a third value.

## Overview

**North star: "The printed programme."** The page reads like a printed exhibition programme lying on grey paper: big, light headlines; small mono labels in capitals; thin rules between things; nothing rounded, nothing glossy. The one moving thing is the particle field behind the paper, which drifts slowly and never competes with the text.

- One fixed page that never scrolls. Tabs swap content in place, and long content is fitted with type and layout instead of scrolling.
- Black, white and greys only. No accent color, no tints.
- Sharp corners everywhere, and hairline rules instead of boxes or shadows.

## Colors

| Token | Hex | Role | Contrast on paper |
|---|---|---|---|
| `--c-paper` | #e6e6e3 | Page background and the three.js clear color | – |
| `--c-ink` | #0d0d0d | Headings, figures, the active-tab marker, strong rules, selection background | 15.5:1 |
| `--c-grey-1` | #3a3a38 | Secondary text: lede, descriptions, figure labels, secondary links | 9.1:1 |
| `--c-grey-2` | #5c5c59 | Tertiary text: labels, dates, inactive tabs, footer chrome, the muted word in a display line | 5.4:1 |
| `--c-line` | #c2c2bf | Hairlines and dividers only. Never text. | 1.4:1 (decorative) |

**The grey-only rule.** A new color is a new token here first, and it must be a neutral grey. Particles use near-ink (`rgb 0.08`) at low alpha, so they read as graphite dust on paper.

## Typography

- **Display: Inter Tight**, light (300) for every heading, semibold (600) only for stat figures.
- **Labels: JetBrains Mono**, uppercase, tracked `0.12em`. Use it for labels, dates, tab names, units and footer chrome: data and navigation, never for running text.

| Role | Token | Used for |
|---|---|---|
| Display | `--t-display` | The About headline, "Write to me." |
| Title | `--t-title` | A company name in Work |
| Figure | `--t-figure` | Stat numbers (3M, 1 GB < 5 min), tabular numerals |
| Item | `--t-item` | Lab project names |
| Link, large | `--t-link-lg` | The email address |
| Lede | `--t-lede` | The intro paragraph, max 52ch |
| Body | `--t-body` | Descriptions, max 40ch |
| Label | `--t-label` 12px, `--t-label-sm` 11px | Tabs, name mark, footer, figure units, dates |

The size roles clamp against viewport width and height, so a tab always fits the frame. Tracking is never tighter than `-0.04em`.

**The no-eyebrow rule.** A label never sits above a heading. Dates and domains go under the title as a caption.

## Layout

- The frame is a fixed 3-row grid: header, tab content, footer. The gutter (`--gutter`) is 16–40px.
- Tab content is centred vertically. Blocks inside it are spaced by `--stack` (16–36px, scaled with height).
- Spacing follows the 4px scale `--s-1` to `--s-8` (4, 8, 12, 16, 24, 32, 48, 64).
- At 760px and below: the header stacks, tabs stretch across the full width, Work becomes a single column, and the phone size overrides live in the same tokens inside the media query. On short phones (under 700px tall), job descriptions are hidden so Work still fits.

## Elevation & Depth

Flat. There are no shadows. Depth comes only from the particle field behind the paper. Things are separated by hairlines (`--hairline`, 1px `--c-line`) and by space, never by boxes.

## Shapes

`--radius: 0` is applied globally. No pills, no circles, no rounded cards. Lines come in two weights: a 1px hairline for structure, and a 2px `--mark` for emphasis (the active tab, the large email underline).

## Components

**Tab nav.** Mono labels sit on a 1px hairline track (the `.tabs` bottom border).
- Default: `--c-grey-2` text.
- Hover: the text turns `--c-ink`.
- Active (`aria-selected="true"`): `--c-ink` text plus a 2px ink bar over the track under that tab. The bar grows in from the left in `--d-base` with `--ease-out`.
- Focus-visible: a 1px ink outline inset inside the tab, square.

Why a bar instead of a pill: the site's language is rules and type. A bar on the hairline is the same mark as the dividers and the link underline, just heavier. A pill or circle was the only curved shape on the page.

**Name mark** (top left). The name in label 500, with "Product Engineer · Brazil" in grey-2 under it. It works as a link to the About tab.

**Labels / meta.** `.meta` uses label-sm in grey-2 and sits directly under the title it describes.

**Headings.** `.display` and `.job h2` use weight 300 and display tracking. A secondary phrase inside a heading (`em`, or the `span` in "Hero99 at Merchadise") turns grey-2 and is set smaller for the span. It never changes weight or color beyond the greys.

**Stat figure** (`.fact`). The number in figure type and ink, with tabular numerals, and the unit under it as a label in grey-1. There is one figure per experience and no supporting stat rows.

**Links.**
- Large link (email): `--t-link-lg`, with a 2px `--mark` underline in currentColor. Hover turns it grey-1.
- Inline mono links: grey-1 with a `--c-line` underline. Hover turns both text and underline ink.
- Index rows (Lab): the whole row is the link, between hairlines. Hover indents it by `--s-4`.

**Footer chrome.** Labels in grey-2, one at each end. Nothing interactive.

**Browser surfaces.** Selection is ink on paper (inverted). The focus ring is a 1px ink outline, square.

## Motion

| Token | Value | Use |
|---|---|---|
| `--d-fast` | 150ms | Color changes on hover |
| `--d-base` | 300ms | Tab marker, row indent, panel fade |
| `--d-slow` | 600ms | Panel rise on tab change |
| `--ease-out` | cubic-bezier(.16, 1, .3, 1) | All movement |

The tab change is the one designed moment: the old panel fades out while the new one fades in and rises 12px. The particle field is created once and never restarts. With `prefers-reduced-motion`, transitions are off and the field renders one still frame.

## Do's and Don'ts

- **Do** reach for a token. If none fits, add one here and in `:root`.
- **Do** fit content by adjusting type and layout. Never let the page scroll.
- **Don't** use rounded corners, pills, shadows, gradients, or any color that isn't a grey.
- **Don't** put a label above a heading.
- **Don't** use mono for running text.
