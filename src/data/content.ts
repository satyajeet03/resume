import type { ExperienceItem, NavItem, ProjectItem, SkillGroup } from '../types'

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    accent: 'from-sky-500/20 to-cyan-400/10',
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Redux Toolkit',
      'React Query',
      'React Native',
      'Tailwind CSS',
      'Material UI',
    ],
  },
  {
    title: 'Backend',
    accent: 'from-emerald-500/20 to-lime-400/10',
    items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Architecture',
    accent: 'from-fuchsia-500/20 to-violet-400/10',
    items: [
      'Micro Frontend',
      'Module Federation',
      'Frontend Architecture',
      'Design Systems',
      'Reusable Components',
      'Performance Optimization',
      'Code Splitting',
      'Lazy Loading',
    ],
  },
  {
    title: 'Testing',
    accent: 'from-amber-500/20 to-orange-400/10',
    items: ['Jest', 'Enzyme', 'TDD'],
  },
  {
    title: 'Tools',
    accent: 'from-indigo-500/20 to-blue-400/10',
    items: ['Git', 'GitHub', 'CI/CD', 'Firebase'],
  },
]

export const experience: ExperienceItem[] = [
  {
    company: 'EY',
    role: 'Senior Software Engineer',
    period: 'Nov 2025 – Present',
    highlights: [
      'Enterprise applications for NCRB',
      'React.js, TypeScript, React Query',
      'Micro Frontend architecture and reusable UI components',
      'DTO-based architecture and role-based workflows',
      'Performance optimization for large-scale platforms',
    ],
  },
  {
    company: 'Ennovations Techserv',
    role: 'Senior Software Engineer',
    period: 'Apr 2024 – Sep 2025',
    highlights: [
      'React.js and Redux Toolkit-powered enterprise systems',
      'Component libraries and scalable frontend architecture',
      'Lazy loading and responsive enterprise experiences',
      'Performance tuning across complex dashboards',
    ],
  },
  {
    company: 'Okoders',
    role: 'Software Developer',
    period: 'Feb 2022 – Mar 2024',
    highlights: [
      'React.js applications for merchant transaction systems',
      'Hotel booking platform with REST API integration',
      'Jest-based test coverage and reliability improvements',
    ],
  },
  {
    company: 'Tecfortiy',
    role: 'Frontend Developer',
    period: 'Aug 2021 – Feb 2022',
    highlights: [
      'Responsive UI implementation for analytics dashboards',
      'Role-based interfaces with polished user flows',
      'Collaboration with product and UX teams',
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'CCTNS',
    description:
      'Enterprise-scale government platform built for the NCRB with secure, role-aware workflows and modular frontend delivery.',
    highlights: [
      'Micro Frontend architecture',
      'Reusable UI components',
      'Complex workflows',
      'Performance optimization',
      'Role-based access',
    ],
    tech: ['React.js', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'Material UI'],
    architecture: ['Host & Remote apps', 'Shared components', 'Independent deployment', 'Dynamic loading'],
    challenge:
      'Balanced reliability and speed while orchestrating a high-volume government platform with multiple user roles.',
    links: {
      github: 'https://github.com/satyajeet03',
      demo: '#',
    },
  },
  {
    title: 'Module Federation Architecture',
    description:
      'A production-style microfrontend reference implementation built with React, Vite, and Module Federation for scalable host and remote app orchestration.',
    highlights: [
      'Host & Remote apps',
      'Shared components',
      'Independent deployment',
      'Dynamic loading',
      'Microfrontend architecture',
    ],
    tech: ['React', 'Vite', 'Module Federation'],
    architecture: ['Federated host shell', 'Remote app composition', 'Shared runtime contracts', 'Progressive loading'],
    challenge:
      'Designed a modular architecture that keeps product teams autonomous while preserving a cohesive user experience and shared design system.',
    links: {
      github: 'https://github.com/satyajeet03',
      demo: '#',
    },
  },
  {
    title: 'Engagemo.com',
    description:
      'An interactive educational platform for real-time communication, live collaboration, and reliable product-led growth flows.',
    highlights: [
      'Real-time communication experiences',
      'Scalable interface architecture',
      'Fast onboarding journeys',
      'Firebase-backed data flows',
    ],
    tech: ['React.js', 'TypeScript', 'Firebase', 'Redux Toolkit'],
    architecture: ['Component-driven UI', 'State orchestration', 'API integration', 'Performance-first delivery'],
    challenge:
      'Shipped a lively product experience without sacrificing clarity or maintainability for the growth team.',
    links: {
      github: 'https://github.com/satyajeet03',
      demo: 'https://engagemo.ai',
    },
  },
  {
    title: 'NetAmbit Insurance Platform',
    description:
      'Insurance booking and management platform with responsive UI, dynamic forms, and optimized frontend performance.',
    highlights: [
      'Responsive insurance workflows',
      'Dynamic form systems',
      'API integration',
      'Frontend performance tuning',
    ],
    tech: ['React.js', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'Material UI'],
    architecture: ['Reusable modules', 'Composable services', 'Optimized rendering', 'Accessible component library'],
    challenge:
      'Simplified complex insurance processes into a clean, high-conversion experience for both customers and agents.',
    links: {
      github: 'https://github.com/satyajeet03',
      demo: '#',
    },
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/satyajeet03' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/satyajeet-maurya' },
  { label: 'Email', href: 'mailto:satyajeetmaurya11@gmail.com' },
]
