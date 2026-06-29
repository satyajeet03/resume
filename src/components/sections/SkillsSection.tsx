import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { skillGroups } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="A modern toolkit for building premium digital products."
        description="My stack blends product design intuition with engineering discipline to deliver polished interfaces that scale."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${group.accent} p-[1px] shadow-[0_16px_50px_rgba(15,23,42,0.35)]`}
          >
            <div className="h-full rounded-[calc(1.5rem-1px)] border border-white/10 bg-slate-950/80 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 p-2 text-sky-300">
                  <Sparkles size={16} />
                </div>
                <h3 className="text-lg font-semibold text-slate-50">{group.title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}
