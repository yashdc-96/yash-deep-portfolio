// src/data/experience.js

export const experience = [
  {
    id: 'oracle-mts',
    title: 'Member of Technical Staff (Frontend)',
    company: 'Oracle',
    companyUrl: 'https://oracle.com',
    period: '2022 – Present',
    duration: '3+ years',
    location: 'Noida, India',
    logo: '🔴',
    color: '#F80000',
    type: 'full-time',
    description:
      'Driving frontend excellence across Oracle\'s internal developer tooling. Architecting scalable React applications, defining frontend standards, and mentoring engineers on performance, accessibility, and modern JavaScript patterns.',
    responsibilities: [
      'Led frontend architecture of a complex orchestration platform used by 1000+ engineers',
      'Established React coding standards, PR review guidelines, and component documentation practices',
      'Reduced critical-path bundle size by 38% through systematic performance audits',
      'Achieved WCAG 2.1 AA accessibility compliance across the platform',
      'Mentored 3 junior engineers via pair programming and structured code reviews',
      'Collaborated with design system team to build and maintain 200+ shared UI components',
    ],
    tech: ['React 19', 'JavaScript ES2024', 'Tailwind CSS', 'REST APIs', 'Git', 'Figma'],
  },
  {
    id: 'infosys-senior',
    title: 'Senior System Engineer',
    company: 'Infosys',
    companyUrl: 'https://infosys.com',
    period: '2020 – 2022',
    duration: '2 years',
    location: 'Noida, India (Remote – UK clients)',
    logo: '🔵',
    color: '#007CC2',
    type: 'full-time',
    description:
      'Delivered two flagship React applications for UK-based government and public sector clients. Worked in Agile/Scrum teams with UK-based product owners, contributing from discovery through production deployment.',
    responsibilities: [
      'Architected Gaia EV Fleet Management frontend with React Leaflet for the UK Government',
      'Built real-time GPS tracking and telemetry dashboards using WebSocket feeds',
      'Developed Pegasus route optimization UI with drag-and-drop stop management',
      'Collaborated with UK Government UX teams to meet GDS accessibility standards',
      'Delivered code reviews, technical walkthroughs, and sprint demos to stakeholders',
    ],
    tech: ['React', 'React Leaflet', 'Context API', 'WebSockets', 'Redux', 'CSS Modules'],
  },
  {
    id: 'infosys-engineer',
    title: 'System Engineer',
    company: 'Infosys',
    companyUrl: 'https://infosys.com',
    period: '2018 – 2020',
    duration: '2 years',
    location: 'Bengaluru, India',
    logo: '🔵',
    color: '#007CC2',
    type: 'full-time',
    description:
      'Joined Infosys as a fresh graduate and rapidly progressed to owning key React modules on the Allstate Insurance Portal. Contributed to a large-scale codebase serving millions of American insurance customers.',
    responsibilities: [
      'Migrated 3 core jQuery modules to React with Redux — zero production regressions',
      'Implemented reusable component library adopted across 4 product teams',
      'Built and unit-tested Redux slices for policy management and claims workflows',
      'Participated in agile ceremonies and delivered features in 2-week sprint cycles',
      'Collaborated with US-based Allstate engineers across time zones',
    ],
    tech: ['React', 'Redux', 'JavaScript ES6+', 'Jest', 'Enzyme', 'Sass', 'REST APIs'],
  },
]

// src/data/skills.js (combined export for convenience)
export const skillCategories = [
  {
    id: 'core',
    label: 'Core Stack',
    icon: '⚛️',
    skills: [
      { name: 'React 19', level: 98, years: 8 },
      { name: 'JavaScript ES2024', level: 95, years: 8 },
      { name: 'Vite', level: 90, years: 3 },
      { name: 'HTML5 / Semantic', level: 95, years: 10 },
      { name: 'CSS3 / Flexbox / Grid', level: 93, years: 8 },
    ],
  },
  {
    id: 'state',
    label: 'State Management',
    icon: '🗂️',
    skills: [
      { name: 'Redux Toolkit', level: 92, years: 6 },
      { name: 'Context API', level: 95, years: 6 },
      { name: 'Zustand', level: 75, years: 1 },
      { name: 'React Query / RTK Query', level: 82, years: 2 },
    ],
  },
  {
    id: 'styling',
    label: 'Styling & UI',
    icon: '🎨',
    skills: [
      { name: 'Tailwind CSS', level: 93, years: 3 },
      { name: 'Framer Motion', level: 85, years: 2 },
      { name: 'CSS Modules / Sass', level: 90, years: 6 },
      { name: 'Styled Components', level: 82, years: 3 },
    ],
  },
  {
    id: 'maps-viz',
    label: 'Maps & Visualisation',
    icon: '🗺️',
    skills: [
      { name: 'React Leaflet', level: 90, years: 3 },
      { name: 'Recharts', level: 85, years: 2 },
      { name: 'D3.js (basics)', level: 65, years: 1 },
    ],
  },
  {
    id: 'quality',
    label: 'Quality & Performance',
    icon: '🔬',
    skills: [
      { name: 'Jest / React Testing Library', level: 85, years: 5 },
      { name: 'Accessibility (WCAG 2.1)', level: 90, years: 4 },
      { name: 'Core Web Vitals / Performance', level: 88, years: 4 },
      { name: 'ESLint / Prettier', level: 95, years: 6 },
    ],
  },
  {
    id: 'tooling',
    label: 'Tooling & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 95, years: 8 },
      { name: 'Vercel / Netlify', level: 88, years: 3 },
      { name: 'Webpack / Rollup', level: 80, years: 4 },
      { name: 'AI Coding Agents (Cline)', level: 85, years: 1 },
      { name: 'Figma (collaboration)', level: 78, years: 4 },
    ],
  },
]

export const techBadges = [
  'React 19', 'Vite', 'JavaScript', 'Tailwind CSS',
  'Redux', 'Context API', 'React Leaflet', 'Framer Motion',
  'Recharts', 'REST APIs', 'WCAG 2.1', 'Git',
]
