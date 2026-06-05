---
name: Hassan Mohamed Portfolio
description: A warm, amber-lit dark portfolio for a senior full stack engineer, editorial over templated.
colors:
  amber-ember: "oklch(80% 0.15 72)"
  amber-deep: "oklch(72% 0.16 62)"
  warm-cream: "oklch(86% 0.085 88)"
  ink-black: "oklch(15% 0.012 70)"
  ink-raised: "oklch(18.5% 0.015 70)"
  surface-warm: "oklch(20.5% 0.015 70)"
  surface-hover: "oklch(24% 0.017 70)"
  paper-white: "oklch(95% 0.01 85)"
  muted-sand: "oklch(64% 0.014 75)"
  muted-strong: "oklch(79% 0.012 80)"
  border-warm: "oklch(30% 0.015 70)"
  border-strong: "oklch(41% 0.022 70)"
  signal-green: "oklch(74% 0.15 150)"
  signal-red: "oklch(68% 0.18 30)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 2
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.18em"
rounded:
  md: "6px"
  lg: "8px"
  xl2: "16px"
  xl3: "24px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "56px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.amber-ember}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.warm-cream}"
    textColor: "{colors.ink-black}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  button-ghost-hover:
    textColor: "{colors.amber-ember}"
  chip:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.muted-strong}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
  chip-hover:
    textColor: "{colors.amber-ember}"
  card:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
  panel-signature:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.xl3}"
    padding: "48px"
---

# Design System: Hassan Mohamed Portfolio

## 1. Overview

**Creative North Star: "The Amber Workshop"**

This is the late-evening workspace of a senior engineer who builds things that last. The room is warm and low-lit, an amber lamp throwing a soft glow across a dark surface, with the faint grain of real material under everything. It reads as crafted and considered, never neon, never corporate. The personality is confident and editorial: large display type, generous whitespace, and content arranged like a printed feature rather than a SaaS template.

The system explicitly rejects the default "developer portfolio" look. That means no cold blue-black background, no single electric-blue accent, no endless grid of identical icon-heading-text cards. Where the lazy answer is a card, this system reaches for a numbered editorial list or a bare divider instead. Where the lazy answer is a flat `#0a0a0a`, this system uses a warm near-black tinted toward amber.

Density is deliberate: sections breathe with 96px of vertical rhythm, body copy is capped for readability, and the single amber accent is rationed so it still means something when it appears.

**Key Characteristics:**
- Warm amber-tinted dark, never cold blue-black
- One rationed accent (amber), carrying identity without shouting
- Display grotesque headings paired with a clean humanist body
- Editorial layouts (numbered lists, dividers) over card grids
- Subtle physical texture: ambient glow plus low-opacity film grain

## 2. Colors

A warm monochrome dark anchored by a single amber accent and a soft cream highlight. Every neutral is tinted toward the warm hue (70-85), so nothing is truly grey.

### Primary
- **Amber Ember** (`oklch(80% 0.15 72)`): The identity color. Used on primary buttons, the highlighted phrase in the hero headline, eyebrow labels, active link and hover states, list index numerals, and the ambient page glow. This is the only saturated color in the system.
- **Amber Deep** (`oklch(72% 0.16 62)`): A darker step for pressed states and gradient anchoring.

### Secondary
- **Warm Cream** (`oklch(86% 0.085 88)`): A soft, low-chroma highlight for secondary badges ("Featured", "Available") and the primary-button hover fill. It is the warm cousin of the accent, not a second loud color.

### Neutral
- **Ink Black** (`oklch(15% 0.012 70)`): Page background. Warm near-black, never `#000`.
- **Ink Raised** (`oklch(18.5% 0.015 70)`): Alternating section backgrounds and input fields, one step up from the page.
- **Surface Warm** (`oklch(20.5% 0.015 70)`): Cards, panels, chips. The default raised surface.
- **Surface Hover** (`oklch(24% 0.017 70)`): Hover state for raised surfaces.
- **Paper White** (`oklch(95% 0.01 85)`): Primary text and headings. Warm off-white, never `#fff`.
- **Muted Strong** (`oklch(79% 0.012 80)`): Secondary body copy and emphasis within muted blocks.
- **Muted Sand** (`oklch(64% 0.014 75)`): Tertiary text, captions, inactive nav links, list descriptions.
- **Border Warm** (`oklch(30% 0.015 70)`): Default dividers and card borders.
- **Border Strong** (`oklch(41% 0.022 70)`): Emphasis borders (ghost buttons, signature panel, framed avatar).

### Tertiary
- **Signal Green** (`oklch(74% 0.15 150)`): Reserved exclusively for the "available" status dot and the WhatsApp / success affordances.
- **Signal Red** (`oklch(68% 0.18 30)`): Reserved exclusively for form error states.

### Named Rules
**The Single Voice Rule.** Amber Ember is the only saturated accent on any screen, and it stays under ~10% of the surface. Its rarity is what makes it read as intentional. Never introduce a second competing accent hue; reach for Warm Cream or a neutral instead.

**The Warm Neutral Rule.** No pure black, no pure white, no untinted grey. Every neutral carries a low chroma (0.01-0.02) toward hue 70-85. A cold grey anywhere breaks the workshop warmth instantly.

## 3. Typography

**Display Font:** Bricolage Grotesque (with system-ui fallback)
**Body Font:** Inter (with system-ui, -apple-system fallback)

**Character:** Bricolage Grotesque gives headings a contemporary, slightly idiosyncratic grotesque personality, confident without being cold. Inter keeps body copy quiet, neutral, and highly legible underneath it. The pairing is the single biggest driver of the "modern" read; the previous system-ui-everywhere setup is what made it feel dated.

### Hierarchy
- **Display** (Bricolage, 600, `clamp(3rem, 6vw, 4.5rem)`, line-height 1.02, letter-spacing -0.02em): Hero headline only. One per page.
- **Headline** (Bricolage, 600, `clamp(1.875rem, 4vw, 3rem)`, line-height 1.05): Section titles ("Where I create leverage", "Senior engineering outcomes").
- **Title** (Bricolage, 600, `clamp(1.25rem, 2vw, 1.5rem)`): Card and list-item titles, experience roles, project names.
- **Body** (Inter, 400, 1rem, line-height ~1.75-2): Paragraphs and descriptions. Cap measure at 65-75ch (`max-w-2xl`).
- **Label** (Inter, 400, 0.875rem, letter-spacing 0.18em, uppercase): Eyebrow kickers above section titles, always in Amber Ember.

### Named Rules
**The Display-For-Identity Rule.** Bricolage Grotesque appears on headings only (`.font-display`). Body, labels, buttons, and UI text stay on Inter. Never set a paragraph in the display face; never set a heading in the body face.

**The Tight-Heading Rule.** Display and headline type always carry -0.02em tracking and line-height at or below 1.05. Loose, default-tracked large type is the tell of a dated layout.

## 4. Elevation

This is a near-flat system. Depth comes from tonal layering (Ink Black to Ink Raised to Surface Warm) and warm borders, not from drop shadows. The only "shadow" in the system is soft, colored, and atmospheric rather than structural: a large blurred amber glow behind the signature panel and at the top of the page.

### Shadow Vocabulary
- **Ambient amber glow** (`filter: blur(48px)` on an amber blob at ~12% opacity, or a fixed radial-gradient): Purely atmospheric. Used behind the signature AI panel and as the page-level top glow. Never used to lift a card off the page.

### Named Rules
**The Tonal-Depth Rule.** Layer surfaces by lightness, not by shadow. A raised element steps up one neutral (Ink Black to Ink Raised to Surface Warm) and may gain a Border Warm outline. Structural box-shadows are forbidden; if something needs to feel lifted, brighten its surface or strengthen its border.

## 5. Components

### Buttons
- **Shape:** Gently rounded (8px, `rounded-lg`).
- **Primary:** Amber Ember fill, Ink Black text, 12px 24px padding. Lifts 2px on hover (`translateY(-2px)`) and fills to Warm Cream; scales to 0.95-0.98 on tap.
- **Ghost:** Transparent fill, Border Strong outline, Paper White text, same padding. On hover the border and text shift to Amber Ember.

### Chips
- **Skill / tag chips:** Surface Warm background, Border Warm outline, Muted Strong text, 6px radius (`rounded-md`), 6px 12px padding. Hover shifts border and text to Amber Ember.
- **Project tags:** Lighter weight: Ink Raised background, no border, Muted Strong text at 0.75rem.
- **Status badges** ("Featured", "Available"): Pill (`rounded-full`), Border Warm outline, Warm Cream or Signal Green text.

### Cards / Containers
- **Corner Style:** 8px (`rounded-lg`) for standard cards; 24px (`rounded-xl3`) for the signature panel.
- **Background:** Surface Warm on an Ink Black or Ink Raised section.
- **Shadow Strategy:** None. See Elevation, The Tonal-Depth Rule.
- **Border:** Border Warm at rest; shifts to Amber Ember at ~70% opacity on hover.
- **Internal Padding:** 24px (`p-6`) standard, up to 48px (`p-12`) for the signature panel.

### Inputs / Fields
- **Style:** Ink Raised background, Border Warm outline, 8px radius, 12px 16px padding, Muted Sand placeholder.
- **Focus:** Border shifts to Amber Ember; the default browser outline is removed (`focus:outline-none`).
- **Error:** Message block uses Signal Red text on a 10%-opacity Signal Red fill with a 40%-opacity Signal Red border. Success uses the Signal Green equivalents.

### Navigation
- **Style:** Fixed top bar, transparent at the top of the page. After 50px of scroll it gains a Border Warm bottom edge and an Ink Black background at 90% opacity with `backdrop-blur-md`.
- **Logo:** "HM" monogram in a Border Strong pill that shifts to Amber Ember on hover.
- **Links:** Inter, Muted Sand at rest, Paper White on hover, lifting 2px. Mobile collapses to an animated height-expanding panel.

### Signature Component: The AI Workshop Panel
The "How I work now" section is the system's signature surface. A single large 24px-radius panel (Surface Warm, Border Strong) with an off-canvas amber glow blurred behind the top-right corner. Inside, the three AI tools are laid out as a seamless three-cell grid built from a 1px border gap (`gap-px` on a Border Warm background) rather than separate cards, each cell numbered with a display-face index. This is the reference example of "editorial over card grid."

## 6. Do's and Don'ts

### Do:
- **Do** keep Amber Ember as the only saturated accent, under ~10% of any screen (The Single Voice Rule).
- **Do** tint every neutral toward hue 70-85 with low chroma. Warm near-black and warm off-white only.
- **Do** set every heading in Bricolage Grotesque via `.font-display`, with -0.02em tracking and line-height at or below 1.05.
- **Do** convey depth through tonal layering and warm borders, not shadows.
- **Do** reach for a numbered list, a divider, or bare layout before a card. The Services section is the model.
- **Do** keep body measure at 65-75ch (`max-w-2xl`) and section rhythm at 96px.

### Don't:
- **Don't** reintroduce the cold dev-portfolio look: no `#0a0a0a` blue-black, no electric-blue accent, no `system-ui`-only type.
- **Don't** build identical icon + heading + text card grids. That pattern is banned here; it is what made the original Services section read as generic.
- **Don't** use pure `#000` or `#fff` anywhere.
- **Don't** add a second saturated accent hue. Use Warm Cream or a neutral for variety.
- **Don't** use structural drop shadows to lift elements. The only shadow is the soft atmospheric amber glow.
- **Don't** set body copy in the display face or stretch headings with default/loose tracking.
- **Don't** use side-stripe borders, gradient text, or decorative glassmorphism.
