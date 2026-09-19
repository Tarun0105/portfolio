# Tarun Haribabu — Portfolio

Personal portfolio website for **Tarun Haribabu**, Java Backend Engineer.

**Live site:** https://tarun0105.github.io/portfolio

---

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 3
- GitHub Actions (CI/CD → GitHub Pages)

---

## Getting Started

### Prerequisites

- Node.js 24+
- npm 11+

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Opens at **http://localhost:5173**

---

## Other Commands

| Command | Description |
|---|---|
| `npm run build` | Production build (output in `dist/`) |
| `npm run preview` | Preview the production build locally |

---

## Deployment

Pushing to `main` automatically triggers GitHub Actions, which builds and deploys to GitHub Pages.

**Live URL:** https://tarun0105.github.io/portfolio

---

## Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          # Resume download
├── src/
│   ├── components/         # Page sections (Hero, About, Skills, etc.)
│   ├── data/
│   │   └── content.ts      # Single source of truth for all content
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   └── index.css
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions CI/CD
└── vite.config.ts
```
