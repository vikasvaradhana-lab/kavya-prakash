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
│   └── kavya-profile.jpg   ← Professional photograph
│
├── cv/
│   └── Kavya_Prakash_CV.pdf ← Downloadable CV
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

1. **DESIGN TOKENS** — CSS custom properties for colours, spacing, typography, shadows
2. **DARK MODE TOKENS** — `[data-theme="dark"]` overrides
3. **RESET** — Box model, smooth scrolling, body defaults, scrollbar, selection
4. **TYPOGRAPHY** — Heading and paragraph defaults
5. **UTILITIES** — `.container`, `.section`, `.label`, `.divider`, `.section-header`
6. **NAVIGATION** — Fixed nav, links, buttons, theme toggle, hamburger, mobile menu
7. **HERO** — Hero grid, photo wrap, stats, status badge, focus tags
8. **RESEARCH PROFILE** — About grid, portrait, affiliation, highlights
9. **EDUCATION** — Timeline, year markers, content blocks
10. **RESEARCH EXPERIENCE** — Experience cards, tech tags
11. **TECHNICAL EXPERTISE** — Skills grid, skill bars
12. **RESEARCH INTERESTS** — Interest cards grid
13. **PUBLICATIONS** — Publication cards, upcoming placeholder
14. **AWARDS** — Award cards grid
15. **RESEARCH VISION** — Full-accent-background section
16. **WHY KAVYA** — Candidate profile cards
17. **CONTACT** — Contact info, form fields
18. **FOOTER** — Footer styling
19. **ANIMATIONS** — `@keyframes fadeUp`, `fadeIn`, `pulse`, `.reveal`
20. **RESPONSIVE — TABLET** — `@media (max-width: 900px)`
21. **RESPONSIVE — MOBILE** — `@media (max-width: 600px)`

### Design Token Reference

| Token             | Light Mode      | Dark Mode       | Purpose                  |
|-------------------|-----------------|-----------------|-------------------------|
| `--ink`           | `#0f0f0e`       | `#f0ede6`       | Primary text             |
| `--ink-soft`      | `#2c2c2a`       | `#d6d2c8`       | Body text                |
| `--ink-muted`     | `#5a5955`       | `#9a9688`       | Secondary text           |
| `--ink-faint`     | `#9a9891`       | `#5c594f`       | Tertiary/label text      |
| `--surface`       | `#f8f6f1`       | `#111110`       | Page background          |
| `--surface-warm`  | `#f0ede6`       | `#191817`       | Alternating section bg   |
| `--surface-card`  | `#fdfcf9`       | `#1d1c1a`       | Card background          |
| `--accent`        | `#2d5a4f`       | `#5aaa94`       | Primary accent (green)   |
| `--accent-light`  | `#3d7a6a`       | `#7abfad`       | Accent hover             |
| `--accent-gold`   | `#8a7340`       | `#c9a96e`       | Industry/gold accent     |

---

## JavaScript Architecture

**File**: `js/main.js`

All logic is wrapped in IIFEs to prevent global scope pollution.

| Section               | Function                | Description                                        |
|-----------------------|------------------------|----------------------------------------------------|
| THEME TOGGLE          | `initTheme()`          | Reads/writes localStorage, toggles `data-theme`    |
| MOBILE NAVIGATION     | `initMobileNav()`      | Hamburger toggle, `closeMobile()` global function  |
| SCROLL ANIMATIONS     | `initScrollReveal()`   | IntersectionObserver adds `.visible` to `.reveal`  |
| INTERACTIONS          | `initSkillBars()`      | Animates skill fill bars on intersection           |
| INTERACTIONS          | `initCounters()`       | Counter animation for `.stat-num[data-count]`      |
| UTILITIES             | `handleForm()`         | Shows thank-you message on form submit             |
| UTILITIES             | `initNavActiveState()` | Highlights nav links based on scroll position      |

---

## Asset Inventory

| File                          | Type       | Used In                     | Notes                       |
|-------------------------------|------------|-----------------------------|-----------------------------||
| `images/kavya-profile.jpg`    | JPEG       | Hero, Research Profile      | Professional portrait        |
| `cv/Kavya_Prakash_CV.pdf`     | PDF        | Download CTA (future)       | ATS-optimised resume         |

---

## Future Editing Guidance

### Modifying the Hero
- **Location**: `index.html` → `<!-- SECTION: HERO -->`
- **CSS**: `css/styles.css` → `/* HERO */` block
- **Content elements**: `.hero-status span` (status text), `h1` (name), `.hero-tagline`, `.hero-focus` (tags), `.hero-actions` (CTA buttons)
- **Photo**: Replace `images/kavya-profile.jpg`; update `alt` attribute
- **Stats**: Edit `.stat-num data-count` values and `.stat-label` text

### Modifying Research Profile
- **Location**: `index.html` → `<!-- SECTION: RESEARCH_PROFILE -->`
- **CSS**: `css/styles.css` → `/* RESEARCH PROFILE */` block
- **Content elements**: `h2` (heading), `.subtitle`, paragraph text, `.highlight-item` cards
- **Portrait**: Same image as hero; change `class="about-portrait"` img src if needed

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
6. **Test at 600px and 900px breakpoints** for responsiveness
7. **Update CHANGELOG.md** after every modification
