# Portfolio — Amine

> Dark, minimal portfolio built with **React + Vite + Bun**  
> Hosted on GitHub Pages · Bilingual FR/EN

## ✨ Features
- Custom animated cursor
- Bilingual toggle (FR / EN)
- Typing terminal animation on hero
- Glitch effect on name
- Animated skill bars
- Expandable project cards
- Framer Motion throughout
- CSS grid background + noise overlay

## 🚀 Stack
- **React 18** — UI components
- **Vite** — bundler & dev server
- **Bun** — package manager (or npm)
- **Framer Motion** — animations
- **react-intersection-observer** — scroll triggers

## 🛠 Local dev

```bash
# with bun
bun install
bun run dev

# with npm
npm install
npm run dev
```

## 📦 Deploy to GitHub Pages

1. Create a GitHub repo named `amine-portfolio`
2. Update `package.json` → `homepage` with your GitHub username
3. Update `vite.config.js` → `base: '/amine-portfolio/'`
4. Run:

```bash
git init
git remote add origin https://github.com/TON_USERNAME/amine-portfolio.git
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git push -u origin main
npm run deploy
```

Your site will be live at `https://TON_USERNAME.github.io/amine-portfolio/`

## 🎨 Sections
- **Hero** — terminal animation + glitch effect
- **About** — bio + animated timeline
- **Skills** — stack pills + animated bars
- **Projects** — expandable cards (Compiler, DB, UX, CLES)
- **Contact** — links with hover animation
