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
- Education, Research Experience, Awards, Publications content
- Project structure and file organisation
