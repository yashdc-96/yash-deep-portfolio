// src/data/projects.js

/**
 * Portfolio projects data.
 * Each project maps to a ProjectCard component in the Projects section.
 */
export const projects = [
  {
    id: 'oracle-orchestration',
    title: 'Oracle Orchestration Platform',
    role: 'Member of Technical Staff (Frontend)',
    company: 'Oracle',
    period: '2022 – Present',
    tagline: 'Internal developer tooling serving 1000+ Oracle engineers worldwide.',
    description:
      'Led frontend architecture of a complex orchestration platform enabling Oracle engineers to configure, deploy, and monitor distributed workflows. Implemented a dynamic form engine, real-time job status feeds, and a custom design system built on React 19 with strict a11y compliance (WCAG 2.1 AA).',
    highlights: [
      'Architected dynamic form engine supporting 40+ field types with runtime schema validation',
      'Reduced bundle size by 38% via code-splitting, lazy loading, and dependency audit',
      'Delivered WCAG 2.1 AA compliance across 200+ UI components',
      'Mentored 3 junior engineers and led weekly tech-debt sprints',
    ],
    tech: ['React 19', 'JavaScript ES2024', 'Tailwind CSS', 'REST APIs', 'Webpack'],
    type: 'enterprise',
    color: '#F80000', // Oracle red
    icon: '⚙️',
    link: null, // Internal — no public URL
    repo: null,
    featured: true,
  },
  {
    id: 'gaia-ev-fleet',
    title: 'Gaia — EV Fleet Management',
    role: 'Senior System Engineer',
    company: 'Infosys (UK Government Client)',
    period: '2020 – 2022',
    tagline: 'Electric vehicle fleet tracking system deployed across 12 UK cities.',
    description:
      'Built the complete frontend for a UK Government initiative to manage electric vehicle fleets at scale. Integrated real-time GPS tracking via React Leaflet, live telemetry dashboards, and driver assignment workflows. Used Context API for fleet state management across deeply nested components.',
    highlights: [
      'Integrated React Leaflet with custom marker clustering for 500+ concurrent vehicles',
      'Built real-time telemetry dashboard with WebSocket-driven live updates',
      'Achieved sub-2s initial load on 3G via aggressive code splitting',
      'Collaborated directly with UK Government stakeholders for WCAG compliance',
    ],
    tech: ['React', 'React Leaflet', 'Context API', 'WebSockets', 'CSS Modules'],
    type: 'government',
    color: '#00A36C',
    icon: '⚡',
    hasMap: true, // Renders a live Leaflet map preview
    link: null,
    repo: null,
    featured: true,
  },
  {
    id: 'pegasus-route',
    title: 'Pegasus — Route Optimizer',
    role: 'Senior System Engineer',
    company: 'Infosys',
    period: '2021 – 2022',
    tagline: 'Intelligent home-to-school route optimization reducing transport costs by 23%.',
    description:
      'Developed the React frontend for a route optimization engine that automated school transport planning. Features included interactive map-based route editing, drag-and-drop stop reordering, and multi-constraint optimization visualization.',
    highlights: [
      'Interactive route editor with drag-and-drop stop management',
      '23% reduction in overall transport costs reported by the client',
      'Accessibility-first table and form components for local authority users',
      'Custom print layouts for route sheets and driver briefings',
    ],
    tech: ['React', 'React Leaflet', 'Redux', 'Algorithms', 'CSS Grid'],
    type: 'saas',
    color: '#6366F1',
    icon: '🗺️',
    hasMap: true,
    link: null,
    repo: null,
    featured: false,
  },
  {
    id: 'allstate-insurance',
    title: 'Allstate Insurance Portal',
    role: 'System Engineer',
    company: 'Infosys (Allstate Client)',
    period: '2018 – 2020',
    tagline: 'Enterprise insurance web app with 50K+ daily active users.',
    description:
      'Contributed to and later led a sub-team building the customer-facing insurance portal for Allstate. Migrated a legacy jQuery codebase to React with Redux, delivering a dramatic improvement in performance and maintainability.',
    highlights: [
      'Led jQuery → React migration for 3 core modules, 0 regressions in production',
      'Implemented Redux store with normalized state for policy & claims data',
      'Built reusable component library adopted across 4 product teams',
      '50K+ daily active users with 99.9% uptime SLA',
    ],
    tech: ['React', 'Redux', 'REST APIs', 'Jest', 'Enzyme', 'Sass'],
    type: 'enterprise',
    color: '#0073CF', // Allstate blue
    icon: '🛡️',
    link: null,
    repo: null,
    featured: false,
  },
  {
    id: 'payflow-dashboard',
    title: 'PayFlow — Payment Dashboard',
    role: 'Personal Project / Demo',
    company: 'Open Source',
    period: '2024',
    tagline: 'Real-time payment analytics dashboard built to showcase Redux + Recharts mastery.',
    description:
      'A production-quality payment analytics dashboard featuring real-time transaction feeds, revenue charts, category breakdowns, and fraud-alert indicators. Demonstrates Redux Toolkit for complex UI state, Recharts for data visualization, and responsive design at scale.',
    highlights: [
      'Redux Toolkit with RTK Query for mock API data fetching + caching',
      'Recharts integration: area chart, bar chart, pie chart with live refresh',
      'Dark-mode-first with full Tailwind CSS design system',
      'Accessible data tables with sortable columns and keyboard navigation',
    ],
    tech: ['React', 'Redux Toolkit', 'Recharts', 'Tailwind CSS', 'Vite'],
    type: 'demo',
    color: '#00E5A0',
    icon: '💳',
    link: 'https://payflow-demo.vercel.app', // placeholder
    repo: 'https://github.com/yashdc96/payflow-dashboard',
    featured: true,
    isDemo: true,
  },
]
