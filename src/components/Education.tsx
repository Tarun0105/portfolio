import { education, certifications, achievements } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 border-t border-slate-800/50"
      aria-labelledby="education-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-12">
          <p className="section-label mb-2">Education & Credentials</p>
          <h2 id="education-heading" className="section-heading">
            Academic background & certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Education */}
          <div className="lg:col-span-1 reveal reveal-delay-1">
            <div className="card p-6 h-full">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Education
              </p>
              {education.map((edu) => (
                <div key={edu.institution}>
                  <div
                    className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-xl"
                    aria-hidden="true"
                  >
                    🎓
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-blue-400 font-medium mb-1">
                    {edu.field}
                  </p>
                  <p className="text-sm text-slate-400 mb-0.5">{edu.institution}</p>
                  <p className="text-xs text-slate-500 mb-3">{edu.affiliation}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag">CGPA {edu.cgpa}</span>
                    <span className="tag">{edu.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications + Achievements */}
          <div className="lg:col-span-2 space-y-4 reveal reveal-delay-2">
            <div className="card p-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Certifications
              </p>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex gap-4 items-start border-b border-slate-800/60 pb-4 last:border-0 last:pb-0"
                  >
                    <div
                      className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/60 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm"
                      aria-hidden="true"
                    >
                      📋
                    </div>
                    <div className="min-w-0">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors line-clamp-2"
                      >
                        {cert.title}
                      </a>
                      <div className="flex flex-wrap gap-2 mt-1.5">
                        <span className="text-xs text-slate-500">{cert.issuer}</span>
                        <span className="text-xs text-slate-600" aria-hidden="true">·</span>
                        <span className="text-xs text-slate-500">{cert.date}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Achievements
              </p>
              <div className="space-y-4">
                {achievements.map((ach) => (
                  <div
                    key={ach.title}
                    className="flex gap-4 items-start border-b border-slate-800/60 pb-4 last:border-0 last:pb-0"
                  >
                    <div
                      className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm"
                      aria-hidden="true"
                    >
                      🏆
                    </div>
                    <div>
                      {ach.link ? (
                        <a
                          href={ach.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors"
                        >
                          {ach.title}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-200">{ach.title}</p>
                      )}
                      <p className="text-xs text-slate-500 mt-0.5">{ach.from}</p>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
