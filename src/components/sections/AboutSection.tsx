import { ArrowUpRight, BadgeCheck, Layers3, Rocket, Workflow } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutSection() {
  const strengths = [
    {
      title: 'Enterprise frontend delivery',
      body: 'I’ve built robust, high-scale systems for government and enterprise platforms with product-grade reliability.',
      icon: Workflow,
    },
    {
      title: 'Modern architecture',
      body: 'React, TypeScript, Next.js, Redux Toolkit, React Query, micro frontends, and module federation are part of my core toolkit.',
      icon: Layers3,
    },
    {
      title: 'Performance obsessed',
      body: 'My work focuses on reusable component architecture, clean code, low-latency experiences, and meaningful UX.',
      icon: Rocket,
    },
  ]

  return (
    <AnimatedSection id="about" className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="Designing enterprise-grade experiences with clarity and speed."
        description="Over 5+ years of experience building frontend systems for complex products, public-sector platforms, and growth-focused digital experiences."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_18px_60px_rgba(2,8,23,0.35)]">
          <p className="text-lg leading-8 text-slate-300">
            I specialize in building frontend architecture that scales across teams and products. My experience spans enterprise applications, government platforms, and ambitious SaaS products where performance, maintainability, and exceptional UI matter equally.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'React.js',
              'TypeScript',
              'Next.js',
              'Redux Toolkit',
              'React Query',
              'Micro Frontend',
              'Module Federation',
              'REST APIs',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                <BadgeCheck size={16} className="text-emerald-400" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {strengths.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_45px_rgba(2,8,23,0.25)]">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 p-3 text-sky-300">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-50">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.body}</p>
                <a href="#projects" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition hover:text-sky-200">
                  Explore work
                  <ArrowUpRight size={14} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
