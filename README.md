# Kavya Prakash — Scientific Portfolio

Personal research portfolio website for **Kavya Prakash**, M.Sc. Biologist specialising in epigenetics, neurodevelopmental toxicology, and stem cell biology at Uppsala University, Sweden.

---

## Project Overview

A clean, semantic, responsive portfolio website designed with an academic aesthetic. Built with vanilla HTML, CSS, and JavaScript — no frameworks or build tools required.

**Version**: 2.0 — Academic + Industry Hybrid Positioning

---

## File Structure

```
kavya-prakash-portfolio/
│
├── index.html              ← Main HTML page
│
├── css/
│   └── styles.css          ← All styles (design tokens, layout, responsive)
│
├── js/
│   └── main.js             ← All interactivity (theme toggle, animations)
│
├── images/
│   └── kavya-profile.jpg   ← Professional photograph
│
├── cv/
│   └── Kavya_Prakash_CV.pdf ← Downloadable CV
│
├── docs/
│   ├── AI_EDITING_MAP.md   ← Architecture reference for AI editing
│   ├── CHANGELOG.md        ← Version history
│   └── ROADMAP.md          ← Evolution plan (v1.0 → v8.0)
│
└── README.md               ← This file
```

---

## Local Testing

### Option 1: Direct file opening
Open `index.html` directly in a modern browser (Chrome, Firefox, Edge, Safari).

### Option 2: Local development server
Using Python:
```bash
cd kavya-prakash-portfolio
python -m http.server 8000
```
Then navigate to `http://localhost:8000`

Using Node.js:
```bash
npx serve .
```
Then navigate to the URL provided.

Using VS Code:
- Install the "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

---

## Deployment

### GitHub Pages
1. Push the project to a GitHub repository
2. Go to Settings → Pages
3. Set source to the `main` branch, root directory
4. Access via `https://username.github.io/kavya-prakash-portfolio/`

### Netlify
1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository for continuous deployment

### Vercel
1. Import the repository on [Vercel](https://vercel.com)
2. No build configuration needed — static HTML deployment

### Custom Domain
1. Deploy to any of the above platforms
2. Add a custom domain in the platform settings
3. Configure DNS records as instructed

---

## Maintenance Notes

### For AI Systems
Refer to `docs/AI_EDITING_MAP.md` for comprehensive editing guidance. This file contains:
- Complete project architecture
- Section-by-section editing instructions
- CSS and JS organisation maps
- Design token reference table

### For Human Developers
- **No build step required** — edit files directly
- **CSS custom properties** control the entire colour system — edit `:root` in `styles.css`
- **Dark mode** is controlled via `[data-theme="dark"]` overrides
- **Responsive breakpoints**: 900px (tablet), 600px (mobile)
- **Google Fonts**: Cormorant Garamond (display), DM Sans (body), DM Mono (monospace)

### Version Control
- Always update `docs/CHANGELOG.md` after modifications
- Follow the version progression defined in `docs/ROADMAP.md`
- Never overwrite earlier versions — maintain rollback capability

---

## Technologies

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, grid, flexbox, animations
- **Vanilla JavaScript** — No dependencies
- **Google Fonts** — Cormorant Garamond, DM Sans, DM Mono

---

## Contact

- **Email**: kavyaprakash0398@gmail.com
- **LinkedIn**: [linkedin.com/in/kavya-prakash-vks](https://www.linkedin.com/in/kavya-prakash-vks/)
- **Location**: Uppsala, Sweden
