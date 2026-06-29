export interface NavItem {
  label: string
  href: string
}

export interface SkillGroup {
  title: string
  items: string[]
  accent: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  highlights: string[]
}

export interface ProjectItem {
  title: string
  description: string
  highlights: string[]
  tech: string[]
  architecture: string[]
  challenge: string
  links: {
    github: string
    demo: string
  }
}
