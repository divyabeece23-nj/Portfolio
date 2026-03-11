# Portfolio

React + Vite + SCSS portfolio. Clean editorial aesthetic.

## Stack
- **React 18** — component architecture
- **Vite** — dev server & build
- **SASS/SCSS** — all styling, with `_variables.scss` and `_mixins.scss`
- **Framer Motion** — (installed, ready to use for extra animations)

## Quick Start
```bash
npm install
npm run dev
# → http://localhost:5173
```

## File Structure
```
src/
├── styles/
│   ├── _variables.scss   ← all design tokens (colours, fonts, spacing)
│   ├── _mixins.scss      ← reusable mixins (container, section, label, reveal)
│   └── main.scss         ← global reset + shared utilities
├── hooks/
│   └── useScrollReveal.js ← IntersectionObserver scroll animations
├── components/
│   ├── Cursor/            ← custom cursor dot + ring
│   ├── Navbar/            ← fixed nav, smooth scroll, mobile menu
│   ├── Hero/              ← full-screen hero, staggered letter animation
│   ├── About/             ← sticky left, bio, stats, photo slot
│   ├── Skills/            ← 4-column grid with exploring section
│   ├── Projects/          ← row list + case study modal
│   ├── Contact/           ← split layout, dark bg, form
│   └── Footer/
├── App.jsx
└── main.jsx
```

## Personalise
| File | What to update |
|---|---|
| `Hero/Hero.jsx` | Your name, tagline |
| `About/About.jsx` | Bio, stats, links — replace `about__img-placeholder` with `<img>` |
| `Skills/Skills.jsx` | `CATEGORIES` array |
| `Projects/Projects.jsx` | `PROJECTS` array — title, summary, case study fields |
| `Contact/Contact.jsx` | Your email, social links |
| `styles/_variables.scss` | Colours, fonts — change `$accent` to rebrand the whole site |
| `public/` | Add `resume.pdf` and `photo.jpg` |

## Deploy
```bash
npm run build    # outputs dist/
# drag dist/ to netlify.com/drop
```
