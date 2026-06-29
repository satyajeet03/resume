import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUp, LoaderCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { GlowBackground } from './components/ui/GlowBackground'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 90, damping: 24, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 90, damping: 24, mass: 0.5 })
  const glowX = useTransform(springX, (value) => value - 140)
  const glowY = useTransform(springY, (value) => value - 140)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1100)
    const onScroll = () => {
      const top = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const progress = height > 0 ? (top / height) * 100 : 0
      setScrollProgress(progress)
      setShowScrollTop(top > 560)
    }

    const onMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY })
      x.set(event.clientX)
      y.set(event.clientY)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    window.addEventListener('mousemove', onMove)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
    }
  }, [x, y])

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.35 },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigate = (section: string) => {
    setActiveSection(section)
    const target = document.getElementById(section)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-50">
      <GlowBackground />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-20 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl"
        style={{ x: glowX, y: glowY }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-[120px]"
        animate={{ x: cursor.x - 180, y: cursor.y - 180 }}
        transition={{ type: 'spring', stiffness: 90, damping: 24, mass: 0.5 }}
      />

      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-slate-900/80">
        <motion.div
          className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400"
          animate={{ width: `${scrollProgress}%` }}
        />
      </div>

      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950"
          >
            <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-slate-900/80 px-8 py-10 shadow-[0_20px_70px_rgba(2,8,23,0.45)]">
              <LoaderCircle className="h-10 w-10 animate-spin text-sky-400" />
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Preparing portfolio
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <HeroSection />
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <AboutSection />
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <SkillsSection />
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <ExperienceSection />
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <ProjectsSection />
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <ContactSection />
      </main>

      <Footer />

      <AnimatePresence>
        {showScrollTop ? (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-50 rounded-full border border-sky-400/30 bg-slate-900/90 p-3 text-sky-300 shadow-[0_12px_40px_rgba(2,8,23,0.4)] backdrop-blur"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default App
