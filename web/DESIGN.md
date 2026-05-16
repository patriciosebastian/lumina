# DESIGN.md — Lumina

## Brand Overview

**Lumina** is a Christian AI chat application — a warm, intelligent spiritual companion that helps users think through faith questions and explore scripture together. The experience should feel like sitting with a wise, trusted friend who knows the Bible deeply: unhurried, thoughtful, deeply human. Not a church app. Not a tech product with a cross on it. Something genuinely its own.

**Tagline:** Scripture, faithfully.

**Domain:** chatwithlumina.com

---

## Brand Personality

| Attribute       | Expression                                                                 |
|-----------------|----------------------------------------------------------------------------|
| Warm            | Feels like candlelight, not a screen                                       |
| Pastoral        | Wise and gentle, never preachy or performative                             |
| Literary        | Treats ideas seriously, reads like a book you want to linger in            |
| Timeless        | Classical references, not trend-chasing                                    |
| Trustworthy     | Quiet confidence — doesn't need to shout                                   |

---

## Visual Identity

### Aesthetic Direction

**Light, airy, and warm with a classical/Renaissance soul.**

The interface should feel like a beautifully designed book or journal — cream pages, elegant type, generous margins, and art that rewards close looking. Think a museum gift shop book on Renaissance painting, designed by someone who also loves modern editorial design.

This is *not*:

- A generic SaaS landing page
- A church website
- A dark-mode AI product
- Anything with gradients, glassmorphism, or glowing orbs

### Color Palette

Cream paper, warm browns, and aged gold. No cool tones, ever.

| Role              | Token          | Value         | Notes                                              |
|-------------------|----------------|---------------|----------------------------------------------------|
| Background        | `--bg`         | `#FAF7F2`     | Warm cream — aged parchment, not clinical white    |
| Surface           | `--surface`    | `#F3EDE3`     | Slightly deeper cream for cards, panels            |
| Surface (alt)     | `--surface-2`  | `#EFE8DA`     | Recessed surface — sidebar hovers, chip tracks     |
| Border            | `--border`     | `#DDD3C0`     | Warm taupe — like a book's ruled line              |
| Border (soft)     | `--border-soft`| `#E6DCC9`     | Hairline divider for dense lists & internal rules  |
| Text Primary      | `--ink`        | `#2C2416`     | Deep warm brown — not black                        |
| Text Secondary    | `--ink-2`      | `#7A6A52`     | Muted warm brown for supporting copy               |
| Text Tertiary     | `--ink-3`      | `#9A8A6E`     | Even quieter — placeholders, timestamps            |
| Accent Gold       | `--gold`       | `#B8922A`     | Aged gold — candlelight, illuminated manuscripts   |
| Accent Gold deep  | `--gold-deep`  | `#9A7A22`     | Hover / pressed state for gold                     |
| Accent Amber      | `--amber`      | `#D4975A`     | Warm amber for highlights, streaming states        |
| Accent Olive      | `--olive`      | `#6B7A3E`     | Muted olive — used sparingly, secondary accent     |
| White             | `--white`      | `#FFFFFF`     | Used sparingly — composer field, popovers          |

No blues, purples, or greys unless deeply warm.

### Typography

**Display / Headings:** `Cormorant Garamond` — a deeply literary, classical serif with exceptional elegance at large sizes. Tall x-height, fine strokes, beautiful in italics.

**Body:** `Libre Baskerville` — warm, readable, classical without being stiff. Feels like a well-set book.

**UI / Labels / Captions:** `Jost` — clean, geometric, modern enough to balance the classical serifs without fighting them.

**Type Scale:**

- Hero headline: 56–96px (clamp), Cormorant Garamond, light italic, tight tracking
- Section headings: 40–56px, Cormorant Garamond italic
- Subheadings / step titles: 30–34px, Cormorant Garamond italic
- Pull quote: 46–72px, Cormorant Garamond italic, light
- Body: 16–18px, Libre Baskerville, 1.7–1.78 line-height
- UI labels: 11–13px, Jost, uppercase, `.18–.28em` tracking

**Rules:**

- Headings may be italic — lean into it
- Mix italic and roman within a single headline by wrapping roman words in `.roman` — this is part of the typographic voice (e.g. *"A quiet place to* think *through what you* believe.*"*)
- Never use bold headings in a heavy weight; let the serif carry the elegance
- Pull quotes and callouts should be set large, in Cormorant Garamond italic
- Curly quotes always — never straight

### Numbering & Section Marks

The product uses two recurring numbering systems, lifted from book typography:

- **Section signposts** — sections of the homepage and major surfaces are introduced with an eyebrow like `§ I — What Lumina does`, set in Jost uppercase with `.22em` tracking. Use § with capital Roman numerals for major sections only.
- **Inline ordinals** — feature cards, step blocks, and lists use lowercase Roman in italic Cormorant Garamond (`i.`, `ii.`, `iii.`). On step blocks the numeral is huge (140–160px), gold at 22% opacity, anchored top-left of the card and the body text sits over it.

### Illustration & Imagery

Two distinct visual layers that work together:

**1. Renaissance-style paintings** (hero, mid-page, footer CTA)

- Full, rich, painterly illustrations in the tradition of Raphael, Rembrandt, or Fra Angelico
- Subject matter: figures in contemplation, light breaking through windows, open scriptures, quiet gardens, candlelit studies
- Treatment: displayed with reverence — large, given room to breathe
- Each painting carries a typeset caption beneath it, in Jost uppercase: `Plate I · The Sunlit Study, after a Flemish master`. Use Roman numeral plates and a short titled descriptor.
- Three placements established in product:
  - **Hero painting** — a 16:9 plate set below the headline
  - **Mid-page plate** — wide cinematic 16:7 banner between sections, full content-width, no border
  - **Footer-CTA plate** — small intimate 1:1 square (≤480px), bordered, centred above the closing headline

**2. Fine line illustrations** (icons, dividers, decorative elements)

- Delicate, hand-drawn quality linework, hairline to 1px strokes
- Think illuminated manuscript borders, botanical illustration, 19th-century engraving
- Used for: feature icons (open book with rays, lantern, olive branch, etc.), section dividers, ornamental corners, empty-state art
- Color: warm brown `--ink-2` or accent gold `--gold`

**Ornamental dividers**
A small fleuron — three curved strokes meeting in a dot — paired with hairline rules on either side, in `--gold` at ~55% opacity. Used between sections of the homepage and as the cap above the footer.

### Spacing & Layout

- Generous whitespace — breathing room is part of the brand
- Wide margins, especially on desktop
- Max content width: 1100px (homepage), 760px (chat thread)
- Section padding: 100–140px vertical
- Asymmetric layouts welcome — not everything needs to be centred
- Border-radius: square (0px) for editorial elements, gently rounded (4–6px) for cards, buttons, panels. Never fully pill-shaped except on the small circular composer-tool buttons.

### Texture & Atmosphere

- Subtle paper/grain texture overlay on the background (~4–5% opacity SVG fractal noise, multiply blend) — applied on `body::before` for the homepage and on the app shell for chat
- No drop shadows on layout elements. The single exception is floating popovers (sidebar menus, tools menu), which use a soft amber-tinted ring + low offset shadow to read as "lifted off the page"
- No animations that feel "techy" — transitions should be slow and graceful (300–500ms ease)
- A "::selection" rule sets selected text to a pale gold (`#E7D9A8`)

---

## UI Components

### Buttons

**Primary CTA:**

- Background: `--gold`
- Text: `--bg` (cream-on-gold)
- Font: Jost, uppercase, `.18em` tracking
- Border-radius: 4px
- Padding: 14px 32px
- Hover: deepen to `--gold-deep`; arrow icon translates 4px right

**Secondary / Ghost:**

- Border: 1px solid `--gold`
- Text: `--gold`
- Background: transparent
- Hover: fill with gold at 10% opacity

**No pill buttons. No rounded-full. No gradient buttons.**

### Cards / Panels

- Background: `--surface`
- Border: 1px solid `--border`
- Border-radius: 4–6px
- Padding: 32–48px
- Hover (where interactive): border shifts to `--gold`, no fill change
- No shadows — border is the only elevation signal

### Pricing tiers

Two tiers. A third premium tier may be added. Featured tier inverts: cream `--bg` background instead of `--surface`. A small understated star/asterisk mark in gold sits in the top-right of the featured card — never a "Most Popular" badge.

### Chat Interface

The primary authenticated screen. Two-column layout: 296px sidebar + main column.

**Sidebar:**

- Background: `--surface`, right border 1px `--border`
- "New conversation" button: gold-bordered card with a circular `+` mark and Jost uppercase label
- Search field: bordered, transparent, Jost
- Chat list: grouped under tracking-set Jost labels (`TODAY`, `THIS WEEK`, etc.) with a tiny gold `lum-rule` line; active item gets a 2px inset gold rule on the left and `--bg` background (this is to be confirmed)
- Profile card at the bottom: gold circular avatar (initial set in serif italic), name in Jost, plan in Jost uppercase gold

**Top bar:**

- 52px tall, 1px bottom border, holds the current conversation's title in Cormorant Garamond italic 18px

**Thread:**

- Centered column, max 760px, padded 40/56
- Folio header: italic gold "Folio xxiv" on the left, dated label on the right, separated by a hairline rule

**Messages:**

- **User messages** are NOT right-aligned bubbles. They're full-width blocks with `--surface` background, `--border`, 5px radius, 18/22 padding — like a quoted note in a journal.
- **Lumina (AI) messages** are transparent with a 1px gold left rule and 22px left padding — like marginalia.
- Each message is preceded by a tiny meta line: a 22px circular gold-bordered mark, role label (`LUMINA` / `READER`), and a time, all Jost uppercase `.22–.24em` tracked.
- Streaming state: the gold left rule shifts to amber, with a blinking gold caret at the cursor.
- Thinking state: the rule turns dashed; an italic serif label "Considering…" sits above a list of step-rows with circle-stamped status marks (open / spinner / filled gold). ("Considering..." may change in the future).

**Scripture pull-quote:** (used inline within Lumina's responses)

- Card: `--surface` bg, `--border`, 4px radius, 22/28 padding
- A 32×1px gold rule above the quote
- Blockquote: Cormorant Garamond italic, 22px, 1.32 line-height
- Caption row in Jost uppercase: book reference in `--gold`, separator dot in `--ink-3`, translation in `--ink-2`

**Composer:**

- White (`--white`) shell, 1px `--border`, 5px radius
- Field has no inner border; placeholder is italic `--ink-3`
- Plus-button on the left opens a Tools menu (popover with itemised tool list, name in Jost + italic Libre Baskerville description)
- Send button on the right: gold pill-shaped Jost uppercase, deepens on hover, fades to `--surface-2` when disabled
- Foot helper text in Jost italic, very small, `--ink-3`

**Empty state:**

- Centred, 560px max
- Fine-line gold artwork at top
- Eyebrow + huge serif headline (italic gold accent on a key word)
- Lede in Libre Baskerville
- Numbered prompt list bordered above and below, with serif italic gold ordinals — clickable rows that slot the prompt into the composer

### Navigation

- Top nav: transparent on hero, cream-with-blur on scroll
- Links: Jost, uppercase, `.22em` tracking — gold underline animates in from the left on hover
- "Begin" CTA: gold-bordered ghost button
- Logo: nine-ray sun mark + "Lumina" wordmark in Cormorant Garamond

---

## Page Sections (Homepage)

### 1. Hero

- Eyebrow: `— scripture, illuminated`
- Large Cormorant Garamond headline, italic, generous, with mixed roman/italic words
- Subheadline in Libre Baskerville, secondary
- Two CTAs: primary gold + ghost
- Hero meta strip: three short trust phrases separated by gold dots
- Painting plate below headline
- Painting captioned `Plate I · …` in Jost

### 2. § I — What Lumina does

- Three features in a flat 3-column grid bordered top and bottom
- Each: tiny Roman ordinal (`i.`, `ii.`, `iii.`) top-right, hairline gold icon, italic serif title, body copy
- Section divided from neighbours by a fleuron ornament

### 3. § II — How it works

- Three steps on a `--surface` band (top + bottom border)
- Each step has a giant 22% gold italic Roman numeral behind it, a tiny `Ask` / `Explore` / `Discover` Jost label with a hairline underline, italic serif headline, and short Libre body

### 4. Mid plate (Plate II)

- Full content-width 16:7 painting, captioned

### 5. Pull Quote

- `--surface` panel, top + bottom borders
- 140×1px gold rule with bookend dots above and below the quote
- Cormorant italic 46–72px scripture (or evocative line), gold curly quotes
- Attribution in Jost uppercase tracked

### 6. § III — Pricing

- Two tiers, "The Reader" + "The Companion"
- 4–6px radius cards, hover shifts border to gold
- Featured tier flips background to cream

### 7. Footer CTA

- Centred 1:1 painting (Plate III), bordered
- Italic serif headline, short Libre lede, primary gold CTA

### 8. Footer

- Four-column grid (brand blurb + The Reader / The Library / The Studio link columns)
- Topped by a fleuron divider, ended with a hairline-ruled bottom row showing the domain and `© MMXXVI · Lumina` in Jost uppercase

---

## What to Avoid

- ❌ Stock photography of Christians praying or holding Bibles
- ❌ Purple, blue, or cool-toned palettes
- ❌ Glassmorphism, gradients, glowing effects
- ❌ Rounded pill buttons or chat bubble UI (user messages are journal-like blocks, not bubbles)
- ❌ Right-aligned chat messages
- ❌ Generic SaaS layouts (hero + 3 icons + testimonials in grey cards)
- ❌ Dark mode
- ❌ Robot or AI iconography
- ❌ Clip-art crosses or church iconography
- ❌ "Most Popular" pricing badges, gemstone tier names ("Gold"/"Platinum"/"Diamond")
- ❌ Lorem ipsum — use real, thoughtful placeholder copy
- ❌ Anything that looks like it was built from a Tailwind starter template
- ❌ Straight quotes — always curly

---

## Voice & Copy Direction

- **Tone:** Warm, unhurried, literary. Like a letter from a wise friend.
- **Avoid:** "Journey," "transform your faith," "game-changer," "unlock," "revolutionize"
- **Prefer:** Direct, specific, human. "Ask anything. Find answers rooted in scripture." Over "Begin your spiritual transformation today."
- Headlines should feel like they were written, not generated.
- Pull quotes and subheadings can be slightly poetic — earned, not decorative.
- Recurring product nouns: *conversation* (or "chat"), *notebook* (not "thread history"), *Reader / Companion* (proposed user roles by tier), *folio* (a single conversation's saved form), *plate* (an illustration). (*These nouns may all change*).

---

## Reference Aesthetic Touchstones

*Not to copy — to evoke the feeling:*

- The physical design of a Folio Society book
- The warmth of Fra Angelico's gold-leaf paintings
- The linework of 19th-century botanical engravings
- The editorial restraint of *The Paris Review*
- The quiet confidence of a well-designed seminary library

---

## Brand Logo Kit

Assets live in `web/public/brand/` with all SVG sources. The full kit is built around a single motif — a **radiant nine-ray sun** — small, even, hand-drawn-feeling, hairline strokes. No cross. No flame. No book icon. The sun does the work because it's quiet, it's pre-Christian, and it carries the "illuminated" idea without literalism.

### Construction

- 24×24 viewBox
- A central 3.4r circle, with eight rays at the cardinal and ordinal directions plus a ninth subtle ray cue — strokes are 1px round-capped
- Drawn at `currentColor` so it inherits whatever surrounding text color is set
- Optical balance is more important than mathematical symmetry — the rays at the verticals are slightly longer

### Files

| File                                | Purpose                                           |
|-------------------------------------|---------------------------------------------------|
| `lumina-mark.svg`                   | Mark, `currentColor` — the canonical asset        |
| `lumina-mark-gold.svg`              | Mark, baked gold — light backgrounds              |
| `lumina-mark-ink.svg`               | Mark, ink — functional UI, body text contexts     |
| `lumina-mark-paper.svg`             | Mark, cream/paper — for use on dark backgrounds   |
| `lumina-horizontal.svg`             | Primary signature: mark + wordmark, gold + ink    |
| `lumina-horizontal-mono-ink.svg`    | Horizontal lockup, mono ink                       |
| `lumina-horizontal-mono-gold.svg`   | Horizontal lockup, mono gold                      |
| `lumina-horizontal-reversed.svg`    | Horizontal lockup, reversed for dark backgrounds  |
| `lumina-stacked.svg`                | Stacked: mark above wordmark, for square spaces   |
| `lumina-wordmark.svg`               | Wordmark only — Cormorant Garamond, no mark       |
| `lumina-avatar-square.svg`          | App icon / avatar, ink ground                     |
| `lumina-avatar-paper.svg`           | App icon / avatar, paper ground                   |
| `favicon.svg`                       | Browser favicon                                   |

### Wordmark spec

- Family: **Cormorant Garamond**, regular weight, roman (not italic)
- Letter-spacing: `~0.04em`
- Capitalisation: title case — "Lumina"
- The SVGs reference the font by family name. Convert to outlines for fixed reproduction outside the design environment

### Lockup rules

- **Clear space** around any lockup is at least the height of the mark on all four sides
- **Minimum size** for the horizontal lockup: 96px wide on screen, ~24mm in print. Below that, prefer the mark alone
- **Color pairings** that ship with the kit:
  - Gold mark + ink wordmark (default, on cream)
  - All-ink (functional UI, low-emphasis)
  - All-gold (mono treatment for stationery, etc.)
  - Reversed: paper mark + paper wordmark on ink backgrounds
- Don't recolor the mark outside the palette
- Don't stretch, rotate, skew, or apply effects (shadows, glow, gradients)
- Don't pair the mark with another logo without the clear-space rule

### Color tokens used in the kit

| Role         | Value     |
|--------------|-----------|
| Gold         | `#B8922A` |
| Gold deep    | `#9A7A22` |
| Ink          | `#2C2416` |
| Ink soft     | `#7A6A52` |
| Paper        | `#FAF7F2` |
| Surface      | `#F3EDE3` |

### When to use which

- **Header navigation, business cards, deck covers** → horizontal primary
- **Square contexts (app icons, avatars, social profiles, certificates)** → stacked or avatar
- **Tight UI moments (favicon, single-line affordances, in-product nav)** → mark alone
- **Footers, signatures, where size is small but a name is needed** → wordmark only
- **Anything on a dark photographic surface** → reversed lockup or paper mark
