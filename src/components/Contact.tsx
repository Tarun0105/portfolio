import { profile } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 border-t border-slate-800/50"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-12">
          <p className="section-label mb-2">Get in Touch</p>
          <h2 id="contact-heading" className="section-heading">
            Let's connect
          </h2>
          <p className="text-slate-400 mt-3 text-base max-w-xl leading-relaxed">
            I'm actively exploring senior backend engineering roles internationally. If you're hiring for Java/Spring Boot engineering talent, I'd be glad to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact cards */}
          <div className="space-y-3 reveal reveal-delay-1">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 card p-5 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-200"
              aria-label={`Send email to ${profile.email}`}
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Email</p>
                <p className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                  {profile.email}
                </p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto text-slate-700 group-hover:text-blue-500 transition-colors" aria-hidden="true">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 card p-5 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-200"
              aria-label="LinkedIn profile"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">LinkedIn</p>
                <p className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                  {profile.linkedinHandle}
                </p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto text-slate-700 group-hover:text-blue-500 transition-colors" aria-hidden="true">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 card p-5 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-200"
              aria-label="GitHub profile"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-300">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">GitHub</p>
                <p className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                  {profile.githubHandle}
                </p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto text-slate-700 group-hover:text-blue-500 transition-colors" aria-hidden="true">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>

          {/* Resume download + location info */}
          <div className="reveal reveal-delay-2 space-y-4">
            <div className="card p-6 border-blue-500/20 bg-gradient-to-br from-blue-600/5 to-transparent">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-2xl" aria-hidden="true">
                  📄
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    Download My Resume
                  </h3>
                  <p className="text-sm text-slate-400">
                    Full international resume with complete work history, skills, and achievements.
                  </p>
                </div>
              </div>
              <a
                href={profile.resumePdf}
                download="Tarun_Haribabu_Resume.pdf"
                className="btn-primary w-full justify-center"
              >
                Download Resume (PDF)
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" x2="12" y1="15" y2="3"/>
                </svg>
              </a>
            </div>

            <div className="card p-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                Availability
              </p>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500" aria-hidden="true">●</span>
                  <span>Available for international opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500" aria-hidden="true">●</span>
                  <span>45-day notice period</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-500" aria-hidden="true">●</span>
                  <span>Requires employer visa sponsorship</span>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-slate-800 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="text-slate-500">{profile.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
