import { profile } from '../data/content'

const primaryTech = ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'GCP']

export default function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-16"
      aria-label="Introduction"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/8 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-slate-700/60 bg-slate-900/60 backdrop-blur-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs text-slate-400">
              Open to international relocation · 45-day notice period
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Tarun
            <br />
            <span className="text-gradient">Haribabu</span>
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl font-medium text-blue-400 mb-4 tracking-wide">
            {profile.title}
          </p>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-6 max-w-xl">
            {profile.tagline}
          </p>

          {/* Experience callout */}
          <div className="flex flex-wrap gap-6 mb-8 text-sm">
            <div>
              <span className="block text-2xl font-bold text-white">4+</span>
              <span className="text-slate-500 text-xs">Years experience</span>
            </div>
            <div className="border-l border-slate-800 pl-6">
              <span className="block text-2xl font-bold text-white">15+</span>
              <span className="text-slate-500 text-xs">APIs delivered</span>
            </div>
            <div className="border-l border-slate-800 pl-6">
              <span className="block text-2xl font-bold text-white">2</span>
              <span className="text-slate-500 text-xs">Enterprise domains</span>
            </div>
            <div className="border-l border-slate-800 pl-6">
              <span className="block text-2xl font-bold text-white">35%</span>
              <span className="text-slate-500 text-xs">Faster API responses</span>
            </div>
          </div>

          {/* Tech stack chips */}
          <div className="flex flex-wrap gap-2 mb-10" aria-label="Primary technologies">
            {primaryTech.map((tech) => (
              <span key={tech} className="tag-accent font-mono text-xs px-3 py-1">
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() => scrollToSection('#experience')}
              className="btn-primary"
            >
              View Experience
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
            <a
              href={profile.resumePdf}
              download="Tarun_Haribabu_Resume.pdf"
              className="btn-secondary"
            >
              Download Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary"
            >
              Get in Touch
            </button>
          </div>

          {/* Social links + location */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {profile.location}
            </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              aria-label="GitHub profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}
