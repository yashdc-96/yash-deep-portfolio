# Yash Deep — React Portfolio ⚡

> **Senior Frontend Engineer · 8+ Years React · Oracle · Infosys**  
> Building high-performance, accessible, and beautiful web experiences at scale.

<div align="center">

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-EF0080?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Portfolio-00C896?style=for-the-badge)](https://yash-deep-portfolio.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yash_Deep-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yash-deep-78a392188/)

</div>

---

## 📸 Screenshots

<div align="center">

| Hero Section | Projects Section |
|:---:|:---:|
| ![Hero](./public/screenshots/hero.png) | ![Projects](./public/screenshots/projects.png) |

| Skills Section | Contact Section |
|:---:|:---:|
| ![Skills](./public/screenshots/skills.png) | ![Contact](./public/screenshots/contact.png) |

> 📌 _Screenshots coming after first deploy. Run locally to see the full experience._

</div>

---

## ✨ Features

- 🌑 **Dark-mode-first** design with a refined monochromatic + accent palette
- 🎞️ **Framer Motion** animations — scroll-triggered reveals, staggered entries, hover micro-interactions
- 📱 **Fully responsive** — mobile → tablet → desktop
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard-navigable, focus-visible styles
- ⚡ **Vite-powered** — sub-second HMR, optimised production builds
- 🗂️ **Redux Toolkit** integration (theme slice — demonstrates real Redux skill)
- 🗺️ **React Leaflet** map in the Gaia EV Fleet project card
- 📊 **Scroll progress indicator** and active-section detection
- 🤖 **Built with Cline AI** coding assistant for accelerated, quality-first development

---

## 🗂️ Project Highlights

| # | Project | Stack | Impact |
|---|---------|-------|--------|
| 1 | **Oracle Orchestration Platform** | React 19, TypeScript, REST | Internal tooling serving 1000+ Oracle engineers |
| 2 | **Gaia — EV Fleet Management** | React, Leaflet, Context API | UK Govt electric fleet deployed across 12 cities |
| 3 | **Pegasus — Route Optimizer** | React, Algorithms, Maps | Reduced home-to-school routing costs by 23% |
| 4 | **Allstate Insurance Portal** | React, Redux, REST | Enterprise insurance platform, 50K+ daily users |
| 5 | **PayFlow — Payment Dashboard** | React, Redux Toolkit, Recharts | Demo: real-time payment analytics dashboard |

---

## 🛠️ Tech Stack

```
Frontend     →  React 19 · Vite 5 · JavaScript ES2024
Styling      →  Tailwind CSS 3 · CSS Custom Properties
Animation    →  Framer Motion 11
State        →  Redux Toolkit 2 · React Context API
Maps         →  React Leaflet 4
Charts       →  Recharts 2
AI Tooling   →  Cline AI Coding Agent
Deploy       →  Vercel / Netlify
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js **≥ 18.x**
- npm **≥ 9.x** or pnpm **≥ 8.x**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yashdc96/yash-deep-portfolio.git
cd yash-deep-portfolio

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev        # Start dev server with HMR
npm run build      # Production build → ./dist
npm run preview    # Preview production build locally
npm run lint       # ESLint check
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (follow prompts)
vercel

# Production deploy
vercel --prod
```

Or click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yashdc96/yash-deep-portfolio)

### Deploy to Netlify

```bash
# Build first
npm run build

# Deploy dist/ folder via Netlify dashboard
# Or use Netlify CLI:
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

> **Note**: Both Vercel and Netlify auto-detect Vite projects. No extra config needed.

---

## 📁 Folder Structure

```
yash-deep-portfolio/
├── public/                    # Static assets
├── src/
│   ├── assets/                # Fonts, images
│   ├── components/
│   │   ├── layout/            # Navbar, Footer
│   │   ├── sections/          # Hero, About, Experience, Projects, Skills, Contact
│   │   └── ui/                # Reusable UI primitives
│   ├── data/                  # Portfolio content (projects, experience, skills)
│   ├── hooks/                 # Custom React hooks
│   ├── store/                 # Redux Toolkit store + slices
│   ├── styles/                # Global CSS
│   ├── utils/                 # Utility functions
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🔧 Environment Variables

```bash
# .env.example
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> The contact form uses [EmailJS](https://www.emailjs.com/) for zero-backend email delivery.

---

## 🤝 Contact

**Yash Deep**  
📧 [yashdc96@gmail.com](mailto:yashdc96@gmail.com)  
📱 [+91 98105 80402](tel:+919810580402)  
🔗 [linkedin.com/in/yash-deep-78a392188](https://www.linkedin.com/in/yash-deep-78a392188/)  
📍 Noida, India

---

## 📄 License

This portfolio is open-source under the [MIT License](./LICENSE).  
Feel free to fork and customise — a credit link back is appreciated but not required.

---

<div align="center">

Built with ❤️ by **Yash Deep** · Accelerated with 🤖 **[Cline AI](https://github.com/cline/cline)**

_"Ship fast. Ship well. Never stop learning."_

</div>
