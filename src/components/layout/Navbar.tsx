import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems } from '../../data/content'

interface NavbarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/70 shadow-[0_12px_45px_rgba(2,8,23,0.45)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium tracking-[0.28em] text-slate-100 transition hover:border-sky-400/50 hover:bg-sky-500/10"
        >
         Satyajeet Maurya
        </button>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <button
                key={item.href}
                type="button"
                onClick={() => onNavigate(item.href.replace('#', ''))}
                className={`transition ${isActive ? 'text-white' : 'hover:text-sky-300'}`}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-100 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-slate-950/90 px-4 py-4 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-3 text-sm text-slate-300">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => {
                    onNavigate(item.href.replace('#', ''))
                    setIsMenuOpen(false)
                  }}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left transition hover:border-sky-400/40 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
