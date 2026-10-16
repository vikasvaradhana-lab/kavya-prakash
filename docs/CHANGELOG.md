# Website Changelog

## Version 1.0 — Refactor Baseline
**Date**: 2026-05-23

Original refactor of monolithic single-file HTML portfolio into a clean, maintainable multi-file project structure.

### Changes
- Monolithic HTML refactored into semantic, section-marked `index.html`
- All CSS externalized to `css/styles.css` with labelled section blocks
- All JavaScript externalized to `js/main.js` with IIFE-wrapped sections
- Base64-embedded images removed and replaced with external file references
- Profile photograph saved as `images/kavya-profile.jpg`
- CV saved as `cv/Kavya_Prakash_CV.pdf`
- Semantic HTML5 elements added (`<header>`, `<main>`, `<article>`, `<footer>`)
- Section markers added for all major content sections
- AI Editing Map created (`docs/AI_EDITING_MAP.md`)
- Roadmap created (`docs/ROADMAP.md`) with v1.0–v8.0 evolution plan
- README.md created with project overview and instructions

### Preserved (No Changes)
- Visual design and colour palette
- Typography (Cormorant Garamond, DM Sans, DM Mono)
- Responsive breakpoints (900px tablet, 600px mobile)
- Dark mode theming and toggle
- All animations (fadeUp, fadeIn, pulse, scroll reveal, skill bars, counters)
- All content text — zero content modifications
- Layout and component structure

## Version 2.0 — Academic + Industry Hybrid Positioning
**Date**: 2026-05-23

Content positioning update to transform perception from "MSc Student" to "Early-Career Molecular Biologist".

### Changes
- **LinkedIn URL corrected** to `https://www.linkedin.com/in/kavya-prakash-vks/` across all files
- **Hero section**: Updated status badge to "Molecular Biologist | Epigenetics | Developmental Toxicology"
- **Hero section**: New tagline focusing on environmental exposures and neurodevelopment
- **Hero section**: Added professional summary paragraph below headline
- **Hero CTAs**: Changed to "Download CV" (primary), "Research Enquiries", and "LinkedIn" (outline)
- **Research Snapshot**: New section added below Hero with 6 cards (Institution, Degree, Experimental Models, Molecular Techniques, Data Analysis, Career Direction)
- **Navigation**: Labels updated to "Research Profile", "Education", "Research Experience", "Technical Expertise", "Research Vision", "Contact"
- **Research Profile**: Section heading and content rewritten for academic positioning (3 paragraphs: research interests, experimental training, future direction)
- **Teaching & Mentorship**: New dedicated section added after Education, highlighting laboratory instruction experience
- **Technical Expertise**: Restructured into 4 expertise clusters (Experimental Models, Molecular Biology Techniques, Data Analysis, Laboratory Practice)
- **Scientific Communication**: New dedicated section added before Publications with 4 cards (Presentations, Laboratory Mentoring, International Engagement, Scientific Writing)
- **Research Vision**: Completely rewritten with focus on developmental epigenetics, molecular mechanisms, and translational relevance
- **Contact section**: Updated messaging to support PhD opportunities, research collaborations, and biotechnology opportunities
- **Footer**: LinkedIn URL corrected
- **README.md**: Version and LinkedIn URL updated
- **OG metadata**: Updated to reflect "Molecular Biologist" positioning

### Preserved (No Changes)
- Visual design, colour palette, and typography
- All existing CSS styling and design tokens
- JavaScript behaviour and animations
- Responsive breakpoints and dark mode
- Education, Awards, Publications content
- Project structure and file organisation

## Version 2.1 — Academic CV & Bioinformatics Project Alignment
**Date**: 2026-06-24

Content and technical expertise alignment with the updated LaTeX PhD Application CV.

### Changes
- **LaTeX CV Source Saved**: Saved the full LaTeX source code to `cv/Kavya_Prakash_CV.tex` to maintain version control of CV updates.
- **Hero Section**: Updated professional summary with PhD-focused messaging, highlighting transcriptomics and independent bioinformatics research.
- **About Section**: Refined research training and vision paragraphs to incorporate DESeq2, pathway analysis, and advanced cell culture methodologies.
- **Research Experience**: Added a new card for the **Independent Bioinformatics Project** ("Transcriptomic Analysis of Valproic Acid-Induced Neurodevelopmental Alterations in Human Forebrain Organoids") detailing contributions and key findings.
- **Skills Grid**: Expanded technical expertise from 4 to 6 categories (Epigenetics & Molecular Biology, Additional Wet-Lab Techniques, Cell Culture & Models, Bioinformatics & Data Analysis, Laboratory & Regulatory, Languages & Communication) to map directly to the updated CV.

## Version 2.2 — LaTeX Alignment & Wording Refinement
**Date**: 2026-06-24

Fine-tuning and alignment of resume content and portfolio website details to match the user's specific wording choices and updated project figures.

### Changes
- **LaTeX CV Updated**: Applied precise edits to `cv/Kavya_Prakash_CV.tex`, including header links (Portfolio, LinkedIn), a shortened Professional Summary, simplified experience bullets, and updated Bioinformatics Project details (7,151 DEGs, Salmon, and GitHub repository URL).
- **Website Alignment**: Synced `index.html` with all CV content refinements, including the updated Bioinformatics Project findings, the shortened professional summary, and trimmed experience bullets.

## Version 3.0 — Scientific Visual Redesign
**Date**: 2026-10-16

Complete visual redesign ("Editorial Molecular" art direction) with **zero content changes**. All wording, headings, links, downloads, images, and functional features preserved exactly.

### Changes
- **Palette**: Fresh bespoke system — deep petrol green (`--accent`) with copper (`--copper`) on warm bone/parchment surfaces, art-directed for both light and dark themes.
- **Typography**: Refined modular type scale, tighter display leading, italic accent details, tabular numerals for dates/indices, and mono micro-labels.
- **Iconography**: All decorative emoji replaced with a hand-built inline **SVG line-icon sprite** (`.sprite` / `<use href="#i-…">`), styled through the new `/* ICONS */` CSS block.
- **Scientific motifs**: Subtle dot-grid page background, hairline rules, diamond bullet markers, DNA-helix plate in the Research Vision section, and framed portraits.
- **Layout**: Asymmetric editorial hero with offset framed portrait; seamless tiled grids for Snapshot and Why-Kavya; numbered section labels (CSS counters); refined timeline, dossier cards, gauges, and citation-style publications.
- **Interactions**: Top scroll-progress bar, elevated nav on scroll, staggered reveals, and animated skill gauges.
- **Accessibility**: `prefers-reduced-motion` support, `:focus-visible` outlines, and preserved ARIA roles/labels.
- **JS**: Removed dead counter code (`initCounters`/`.stat-num`); added `initScrollState()`; guarded animations behind reduced-motion checks.
- **Responsive**: Refined breakpoints to 960px (tablet) and 620px (mobile).
- **Docs**: Updated README, AI Editing Map, and Roadmap to reflect the new architecture, tokens, icon system, and file assets.

### Preserved (No Changes)
- **All textual content** — verified zero unintended changes via automated visible-text diff (2,140 words identical)
- All links (`mailto:`, `tel:`, LinkedIn, GitHub repository), the CV download, and both images
- All section IDs, navigation, form fields, and JavaScript behaviours (theme toggle, mobile menu, form handler)

## Version 3.1 — Premium Pass (Deep Ink & Brass)
**Date**: 2026-10-16

Luxury art-direction pass over the v3.0 redesign. **Still zero content changes** — every word, link, download, image, and feature preserved.

### Changes
- **Palette**: Reworked to a "deep ink & brass" system — near-black warm charcoal surfaces (`--paper: #0a0b0c`) with a single metallic brass accent (`--accent`), copper reserved for industry labels. Both light (ivory) and dark themes fully art-directed; dark remains the statement default.
- **Foil headings**: Brass gradient text (`--foil`) applied to the hero surname and the "Why Kavya" numerals.
- **Glass surfaces**: Cards use translucent `color-mix` backgrounds with `backdrop-filter` blur and inset highlights.
- **Atmospheric layers**: Full-page **film-grain overlay** (`.grain`) and a pointer-following **cursor spotlight** (`.cursor-spot`, fine-pointer only).
- **Hero canvas**: Ambient **molecular-network animation** (`#molCanvas`) in brass tones; pauses off-screen and under reduced motion.
- **Signature chrome**: Brass **"KP" monogram favicon** (`favicon.svg`), an inline SVG **brand mark** in the nav, a **decorative section rail** (5 ticks tracking primary sections), and a **shortcut-icon link**.
- **Typography**: Larger display scale, tighter tracking, drop caps on the Research Profile and Research Vision lead paragraphs, tabular numerals for dates/indices.
- **Motion**: Parallax on key media (`[data-parallax]`), magnetic buttons, longer luxe easing for reveals, staggered mobile-menu entries.
- **Navigation**: Elevated glass nav with hairline border and softer box-shadow on scroll.
- **Accessibility**: All new motion gated behind `prefers-reduced-motion`; effects limited to fine pointers; focus-visible styles retained.

### Preserved (No Changes)
- **All textual content** — re-verified: 2,140 visible words identical (no removals across `href`, `src`, `id`, `data-width`)
- All links, CV download, images, section IDs, and behaviour

## Version 3.2 — Touch & Motion (Mobile Branch)
**Date**: 2026-10-16

Adds a dedicated, touch-native animation branch for mobile so the premium "alive" feel is no longer desktop-only. **Desktop behaviour is completely unchanged.** Zero content changes.

### Changes
- **Capability split**: A `touchMode` check (`hover: none and pointer: coarse`, with an `ontouchstart` fallback) runs the mobile branch only on touch devices; the desktop branch (cursor spotlight, magnetic buttons, hover) is untouched.
- **Ambient glow**: On mobile the `.cursor-spot` layer rises above surfaces with `mix-blend-mode` and gently **drifts on its own** when idle, keeping the page feeling alive without any input.
- **Touch spotlight**: The glow **follows the finger** on `touchmove` (eased), then eases back into ambient drift ~1.6s after release.
- **Device-tilt parallax**: `deviceorientation` (with iOS `requestPermission()` on first tap) nudges `[data-parallax]` elements and the glow. Optional — silently skipped if permission is denied or unsupported.
- **Tap/press states**: All desktop `:hover` effects are translated into `:active` feedback under `@media (hover: none)` — cards lift, buttons compress with a brass glow, tags/icons respond — avoiding "sticky hover" on touch.
- **Battery/perf**: The mobile branch pauses on `visibilitychange`, uses passive listeners and `requestAnimationFrame`, and reduces canvas density on small viewports.

### Preserved (No Changes)
- **All textual content** — re-verified: 2,140 visible words identical
- Desktop cursor spotlight, magnetic buttons, hover effects, and all scroll-based motion
- All links, CV download, images, section IDs, and behaviour


