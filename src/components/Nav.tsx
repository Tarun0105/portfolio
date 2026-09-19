import { useState, useEffect } from 'react'
import { navItems, profile } from '../data/content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map((item) => item.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-slate-950/20'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo / Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm font-semibold text-white hover:text-blue-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          aria-label="Back to top"
        >
          <span className="text-blue-500 font-mono">&lt;</span>
          {profile.name.split(' ')[0]}
          <span className="text-blue-500 font-mono"> /&gt;</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 ${
                  activeSection === item.href.slice(1)
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={profile.resumePdf}
              download="Tarun_Haribabu_Resume.pdf"
              className="ml-2 btn-primary text-xs py-1.5 px-3.5"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-slate-900/98 backdrop-blur-md border-b border-slate-800"
        >
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-2 border-t border-slate-800 mt-1">
              <a
                href={profile.resumePdf}
                download="Tarun_Haribabu_Resume.pdf"
                className="btn-primary w-full justify-center mt-1"
                onClick={() => setMobileOpen(false)}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
