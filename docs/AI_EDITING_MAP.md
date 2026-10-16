# AI Editing Map — Kavya Prakash Scientific Portfolio

> **Purpose**: This document enables any AI system to understand the full project architecture and safely modify any section in under 2 minutes.

---

## Project Architecture

```
kavya-prakash-portfolio/
│
├── index.html              ← Main HTML document (semantic, section-marked)
│
├── css/
│   └── styles.css          ← All styling (design tokens → responsive)
│
├── js/
│   └── main.js             ← All interactivity (IIFEs, labelled sections)
│
├── images/
│   ├── hero-researcher-portrait.webp   ← Hero portrait photograph
│   └── research-profile-lab.webp       ← Research profile photograph
│
├── cv/
│   ├── Kavya_Prakash_CV.pdf            ← Downloadable CV
│   ├── Kavya_Prakash_CV.tex            ← LaTeX source (academic)
│   └── Kavya_Prakash_CV_Industry.tex   ← LaTeX source (industry)
│
├── docs/
│   ├── AI_EDITING_MAP.md   ← This file
│   ├── CHANGELOG.md        ← Version history
│   └── ROADMAP.md          ← Evolution plan (v1.0–v8.0)
│
└── README.md               ← Project overview & instructions
```

---

## Section Hierarchy

The HTML is organised into clearly marked sections. Each section begins with a visible comment marker:

```html
<!-- ================================================= -->
<!-- SECTION: [NAME]                                   -->
<!-- ================================================= -->
```

| Section ID      | Marker Name            | HTML Element                  | Description                              |
|-----------------|------------------------|-------------------------------|------------------------------------------|
| —               | NAVIGATION             | `<header>` → `<nav>`          | Fixed top navbar + mobile menu           |
| `#hero`         | HERO                   | `<section id="hero">`          | Name, tagline, photo, stats              |
| `#snapshot`    | RESEARCH_SNAPSHOT      | `<section id="snapshot">`      | 6 research snapshot cards                |
| `#about`        | RESEARCH_PROFILE       | `<section id="about">`         | Bio, highlights, affiliation             |
| `#education`    | EDUCATION              | `<section id="education">`     | Timeline of degrees                      |
| `#teaching`    | TEACHING_MENTORSHIP    | `<section id="teaching">`      | Teaching & mentorship experience         |
| `#experience`   | RESEARCH_EXPERIENCE    | `<section id="experience">`    | Research & industry cards                |
| `#skills`       | TECHNICAL_EXPERTISE    | `<section id="skills">`        | Skill bars by category                   |
| `#interests`    | RESEARCH_INTERESTS     | `<section id="interests">`     | 6 interest cards                         |
| `#communication` | SCIENTIFIC_COMMUNICATION | `<section id="communication">` | Scientific communication activities    |
| `#publications` | PUBLICATIONS           | `<section id="publications">` | Conference + upcoming publication        |
| `#awards`       | AWARDS                 | `<section id="awards">`        | Awards & leadership cards                |
| `#vision`       | RESEARCH_VISION        | `<section id="vision">`        | Future research vision (accent bg)       |
| `#why`          | —                      | `<section id="why">`           | Candidate profile for recruiters         |
| `#contact`      | CONTACT                | `<section id="contact">`       | Contact info + form                      |
| —               | FOOTER                 | `<footer>`                     | Footer credits                           |

---

## CSS Architecture

**File**: `css/styles.css`

The CSS is organised into the following labelled blocks (top to bottom):

1. **DESIGN TOKENS — LIGHT** — `:root` custom properties (palette, type, layout, motion)
2. **DESIGN TOKENS — DARK** — `[data-theme="dark"]` overrides
3. **RESET & BASE** — box model, body dot-grid motif, scrollbar, selection
4. **ICONS** — `.i` stroke styling for the SVG sprite
5. **TYPOGRAPHY** — heading/paragraph/link defaults, focus-visible
6. **UTILITIES** — `.container`, `.section`, `.label` (auto-numbered), `.divider`, `.section-header`
7. **SCROLL PROGRESS** — top reading-progress bar
8. **NAVIGATION** — fixed blurred nav, links, buttons, theme toggle, hamburger, mobile menu
9. **HERO** — hero grid, status pill, portrait frame, baseline motif
10. **RESEARCH SNAPSHOT** — seamless tiled grid + icon tokens
11. **RESEARCH PROFILE (ABOUT)** — portrait frame, affiliation, highlights
12. **EDUCATION (TIMELINE)** — hairline rail + nodes
13. **TEACHING & MENTORSHIP / RESEARCH EXPERIENCE** — dossier cards, tech tags
14. **TECHNICAL EXPERTISE (SKILLS)** — card grid, animated bars
15. **RESEARCH INTERESTS / SCIENTIFIC COMMUNICATION** — gradient-top cards
16. **PUBLICATIONS** — citation-style cards
17. **AWARDS** — copper icon cards
18. **RESEARCH VISION** — deep petrol plate + helix motif
19. **WHY KAVYA** — seamless ledger grid
20. **CONTACT** — info links + form card
21. **FOOTER** — ink block
22. **ANIMATIONS** — `@keyframes fadeUp`, `fadeIn`, `pulse`, `.reveal`
23. **RESPONSIVE — TABLET** — `@media (max-width: 960px)`
24. **RESPONSIVE — MOBILE** — `@media (max-width: 620px)`
25. **ACCESSIBILITY — REDUCED MOTION** — `@media (prefers-reduced-motion: reduce)`

### Design Token Reference

| Token             | Light Mode      | Dark Mode       | Purpose                    |
|-------------------|-----------------|-----------------|----------------------------|
| `--ink`           | `#161b1a`       | `#ece7dd`       | Primary text               |
| `--ink-soft`      | `#333a38`       | `#cfc9bd`       | Body text                  |
| `--ink-muted`     | `#5f6866`       | `#969c95`       | Secondary text             |
| `--ink-faint`     | `#8d938f`       | `#6a716c`       | Tertiary/label text        |
| `--paper`         | `#f4f1ea`       | `#0d1211`       | Page background (bone)     |
| `--paper-2`       | `#ece7dc`       | `#141b19`       | Alternating section bg     |
| `--card`          | `#fbf9f4`       | `#18201e`       | Card background            |
| `--accent`        | `#0e4f4a`       | `#62c3b1`       | Primary accent (petrol)    |
| `--accent-2`      | `#1c766c`       | `#8ad8c8`       | Accent hover               |
| `--accent-pale`   | `#dcebe6`       | `#12302c`       | Accent tint                |
| `--copper`        | `#a15c34`       | `#d29a68`       | Industry/copper accent     |
| `--copper-pale`   | `#f0e4d8`       | `#2a2119`       | Copper tint                |
| `--line`          | `rgba(22,27,26,0.10)` | `rgba(236,231,221,0.09)` | Hairline borders |
| `--dots`          | `rgba(22,27,26,0.05)` | `rgba(236,231,221,0.045)` | Dot-grid motif |

---

## JavaScript Architecture

**File**: `js/main.js`

All logic is wrapped in IIFEs to prevent global scope pollution.

| Section               | Function                | Description                                        |
|-----------------------|------------------------|----------------------------------------------------|
| —                     | `prefersReducedMotion` | Detects `prefers-reduced-motion` to disable motion  |
| —                     | `finePointer`          | Detects hover/pointer capability for pointer effects |
| THEME TOGGLE          | `initTheme()`          | Reads/writes localStorage, toggles `data-theme`    |
| MOBILE NAVIGATION     | `initMobileNav()`      | Hamburger toggle, `closeMobile()` global function  |
| SCROLL ANIMATIONS     | `initScrollReveal()`   | IntersectionObserver adds `.visible` to `.reveal`  |
| INTERACTIONS          | `initSkillBars()`      | Animates skill fill bars on intersection           |
| INTERACTIONS          | `initScrollState()`    | Scroll-progress bar, `nav.scrolled`, section rail  |
| UTILITIES             | `handleForm()`         | Shows thank-you message on form submit             |
| UTILITIES             | `initNavActiveState()` | Highlights nav links based on scroll position      |
| PREMIUM               | `initParallax()`       | Translates `[data-parallax]` elements on scroll    |
| PREMIUM               | `initMagnetic()`       | Magnetic pointer-follow on `.btn` (fine pointer)   |
| PREMIUM               | `initCursorSpot()`     | Eased cursor spotlight (`.cursor-spot`)            |
| PREMIUM               | `initMolecularCanvas()`| Ambient brass molecular-network canvas (`#molCanvas`) |
| MOBILE (v3.2)         | `initTouchMotion()`    | Touch-only: ambient + finger-follow glow, device-tilt parallax |
| —                     | `window.__tiltX/__tiltY` | Device-tilt offsets consumed by `initParallax()` |
| —                     | `window.__parallaxUpdate` | Parallax redraw hook called by tilt handler    |

---

## Asset Inventory

| File                          | Type       | Used In                     | Notes                        |
|-------------------------------|------------|-----------------------------|------------------------------|
| `images/hero-researcher-portrait.webp` | WebP | Hero (`#hero`)          | Portrait, eager-loaded        |
| `images/research-profile-lab.webp`     | WebP | Research Profile (`#about`) | Lab photograph, lazy-loaded |
| `cv/Kavya_Prakash_CV.pdf`     | PDF        | Hero "Download CV" CTA      | ATS-optimised resume          |
| `favicon.svg`                 | SVG        | `<head>` favicon            | Brass "KP" monogram           |

### Premium Layers (v3.1)

| Element / Hook   | Location            | Purpose                                            |
|------------------|---------------------|----------------------------------------------------|
| `.grain`         | `index.html` (body) | Fixed film-grain overlay (SVG noise data URI)      |
| `#cursorSpot`    | `index.html` (body) | Pointer-following radial spotlight                 |
| `#sectionRail`   | `index.html` (body) | Decorative 5-tick rail tracking primary sections   |
| `.brand-mark`    | Nav logo            | Inline SVG monogram                                |
| `#molCanvas`     | Hero                | Ambient molecular-network animation                |
| `[data-parallax]`| Hero/About/Vision   | Scroll parallax speed factor                       |

### Icon System

Decorative emoji glyphs were replaced with a hand-built **inline SVG sprite** placed at the top of `index.html` (element `.sprite`, containing `<symbol id="i-…">` defs). Icons are referenced with `<svg class="i"><use href="#i-…"/></svg>`. Stroke styling lives in the `/* ICONS */` CSS block (`.i`), so icons inherit `currentColor`.

---

## Future Editing Guidance

### Modifying the Hero
- **Location**: `index.html` → `<!-- SECTION: HERO -->`
- **CSS**: `css/styles.css` → `/* HERO */` block
- **Content elements**: `.hero-status span` (status text), `h1` (name), `.hero-theme` (headline), `.hero-statement`, `.hero-summary`, `.hero-focus` (tags), `.hero-actions` (CTA buttons)
- **Photo**: Replace `images/hero-researcher-portrait.webp`; update `alt` attribute
- **Decorative**: `.hero-bg-decor` (gradients), `.hero-baseline` (hairline motif)

### Modifying Research Profile
- **Location**: `index.html` → `<!-- SECTION: RESEARCH_PROFILE -->`
- **CSS**: `css/styles.css` → `/* RESEARCH PROFILE (ABOUT) */` block
- **Content elements**: `h2` (heading), `.subtitle`, paragraph text, `.highlight-item` cards
- **Portrait**: `images/research-profile-lab.webp`; update `alt` if replaced

### Modifying Research Experience
- **Location**: `index.html` → `<!-- SECTION: RESEARCH_EXPERIENCE -->`
- **CSS**: `css/styles.css` → `/* RESEARCH EXPERIENCE */` block
- **To add a new card**: Duplicate an `<article class="exp-card reveal">` block
- **Industry cards**: Add class `industry` to `exp-card` for gold accent styling
- **Tech tags**: Add `<span class="tech-tag">` or `<span class="tech-tag gold">` for industry

### Modifying Technical Expertise
- **Location**: `index.html` → `<!-- SECTION: TECHNICAL_EXPERTISE -->`
- **CSS**: `css/styles.css` → `/* TECHNICAL EXPERTISE */` block
- **To add a skill**: Add `.skill-item` inside a `.skill-cat`
- **Bar width**: Set `data-width` attribute (0–100) on `.skill-fill`
- **To add a category**: Duplicate a `.skill-cat reveal` block

### Modifying Publications
- **Location**: `index.html` → `<!-- SECTION: PUBLICATIONS -->`
- **CSS**: `css/styles.css` → `/* PUBLICATIONS */` block
- **To add a publication**: Duplicate `.pub-card` block
- **Upcoming**: Edit `.pub-upcoming` content

### Modifying Contact
- **Location**: `index.html` → `<!-- SECTION: CONTACT -->`
- **CSS**: `css/styles.css` → `/* CONTACT */` block
- **JS**: `js/main.js` → `handleForm()` function
- **Email**: Update `href="mailto:..."` in contact links and nav button
- **Phone**: Update `href="tel:..."` and display text

---

## Quick Reference: How to Safely Edit

1. **Never modify the original v1.0 files** — create new version copies
2. **Search for section markers** in HTML to locate content
3. **Search for labelled blocks** in CSS to locate styles
4. **Search for section labels** in JS to locate behaviour
5. **Test in both light and dark mode** after any change
6. **Test at 620px and 960px breakpoints** for responsiveness
7. **Update CHANGELOG.md** after every modification
