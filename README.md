# Harish R — Portfolio

A modern, single-page personal portfolio for **Harish R**, AI / ML Engineer.
Built with React (Vite), Tailwind CSS, Framer Motion, and React Router — dark
"AI lab / terminal" aesthetic with glassmorphism cards and scroll-triggered
animations.

## ✨ Features

- ⚡️ **Vite + React 19** — fast dev server and optimized production build
- 🎨 **Tailwind CSS** — custom dark navy/electric-blue/cyan theme
- 🎞️ **Framer Motion** — typing hero animation + scroll fade-ins
- 🧭 **React Router** — SPA routing
- 📝 **Single editable data file** — all content lives in
  [`src/data/portfolio.json`](src/data/portfolio.json)
- 📱 Fully responsive

## 🗂️ Editing your content

> You only ever need to edit **one file**: `src/data/portfolio.json`.

It holds your profile, experience, skills, projects, education, and courses.
Update it and the whole site updates — no component code to touch.

To change your **resume download**, drop a PDF into the `public/` folder named
`Harish_R_Resume.pdf` (or change `profile.resumeUrl` in the JSON to match your
file name). A placeholder note lives at `public/README-resume.txt`.

## 🛠️ Local development

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## 🚀 Deploy to Vercel (free)

A [`vercel.json`](vercel.json) is included (framework `vite`, output `dist`,
plus SPA rewrites so React Router routes resolve).

### Option A — Deploy from the Vercel dashboard (easiest)

1. Push this repo to GitHub (see commands below).
2. Go to <https://vercel.com/new> and **Import** the GitHub repo.
3. Vercel auto-detects Vite — keep the defaults and click **Deploy**.
4. Your site goes live at `https://<project>.vercel.app`.

### Option B — Deploy from the terminal (Vercel CLI)

```bash
npm i -g vercel        # install the Vercel CLI (one-time)
vercel login           # authenticate
vercel                 # deploy a preview, follow the prompts
vercel --prod          # promote to production
```

## 📤 Push to GitHub

```bash
git add -A
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

## 📁 Project structure

```
portifolo/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/        # Navbar, Hero, About, Experience, Skills, …
│   ├── data/
│   │   └── portfolio.json # ← edit this to update all content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

---

Built by Harish R.
