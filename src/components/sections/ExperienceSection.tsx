import { motion } from 'framer-motion'
import { BriefcaseBusiness, Sparkles } from 'lucide-react'
import { experience } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="A career built around product excellence and implementation depth."
        description="From enterprise platforms to modern growth products, my work has centered on thoughtful architecture and high-quality execution."
      />

      <div className="mt-12 space-y-6">
        {experience.map((item, index) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            className="relative rounded-[1.6rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(2,8,23,0.28)] sm:p-8"
          >
            <div className="absolute left-6 top-6 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_0_6px_rgba(59,130,246,0.2)]" />
            <div className="pl-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sky-300">
                    <BriefcaseBusiness size={16} />
                    <span className="text-sm font-medium uppercase tracking-[0.3em]">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-50">{item.company}</h3>
                  <p className="mt-2 text-lg text-slate-300">{item.role}</p>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
                  {item.period}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span key={highlight} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                    <Sparkles size={13} className="text-sky-300" />
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  )
}
