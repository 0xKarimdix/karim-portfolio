# Karim Mohamed — Personal Portfolio

A static, frontend-only portfolio website for **Karim Mohamed**, Security Researcher (Web · API · Android Application Security).

No backend, no database, no authentication, no server-side logic, no external APIs. Everything runs locally in the browser.

## Tech Stack

- **React 18** — UI components
- **Vite 5** — dev server & build tool
- **Tailwind CSS 4** — styling (CSS-based `@theme` tokens)
- **Self-hosted fonts** — Inter & JetBrains Mono (local woff2, no CDN calls at runtime)

## Project Structure

```
portfolio/
├── index.html                  # HTML shell
├── public/
│   └── favicon.svg             # Local favicon
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Page composition
    ├── index.css               # Tailwind + theme tokens + fonts
    ├── data/
    │   └── portfolio.js        # ← ALL portfolio content (single source of truth)
    ├── hooks/
    │   └── useReveal.js        # Scroll-reveal hook
    ├── assets/fonts/           # Self-hosted woff2 fonts
    └── components/
        ├── Navbar.jsx          # Fixed nav, active section, mobile menu
        ├── Hero.jsx            # Name, title, intro, CTAs, stats
        ├── About.jsx           # Bio, education, focus
        ├── Skills.jsx          # Categorized skills
        ├── Experience.jsx      # Timeline of professional experience
        ├── Research.jsx        # Security research focus areas
        ├── Certifications.jsx  # Certificates & courses
        ├── Achievements.jsx    # Leaderboard ranks, finalist, vendor acknowledgments
        ├── Contact.jsx         # Email (copy), phone, GitHub, HackerOne
        ├── Footer.jsx
        ├── Section.jsx         # Reusable section wrapper + Reveal
        └── Icons.jsx           # Inline SVG icon set
```

## Editing Content

All text content lives in **one file**: `src/data/portfolio.js`.
Update your bio, skills, experience, certificates, achievements, and contact
links there — no component changes needed.

## Run Locally

Requires Node.js 18+.

```bash
npm install     # first time only
npm run dev     # development server → http://localhost:5173
```

Production build:

```bash
npm run build   # outputs static site to dist/
npm run preview # serve the built site → http://localhost:4173
```

The `dist/` folder is fully static — it can be hosted on GitHub Pages,
Netlify, Vercel, or any static file server.

## Notes

- **No contact form by design** — there is no backend to receive submissions.
  The contact section provides direct links (email, phone, GitHub, HackerOne)
  and a client-side email copy button.
- **Content accuracy** — every statement on the site is sourced from the CV.
  Nothing was invented or exaggerated. Items not present in the CV (e.g., a
  LinkedIn profile, individual project links) are intentionally omitted; add
  them in `src/data/portfolio.js` if available.
