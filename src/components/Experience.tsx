import { experience } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

function highlightNumbers(text: string) {
  const parts = text.split(/(\d+[\d,]*(?:\.\d+)?[%+x]?(?:\s*(?:SLA|APIs?|years?|months?|ms))?)/i)
  return parts.map((part, i) =>
    /^\d/.test(part) ? (
      <strong key={i} className="text-slate-200 font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  )
}

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 border-t border-slate-800/50"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-12">
          <p className="section-label mb-2">Work Experience</p>
          <h2 id="experience-heading" className="section-heading">
            Professional history
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-slate-700 to-transparent hidden md:block"
            aria-hidden="true"
            style={{ left: '7px' }}
          />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <article
                key={`${job.company}-${i}`}
                className={`relative reveal reveal-delay-${Math.min(i + 1, 4)}`}
              >
                <div className="md:pl-9">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 hidden md:block ${
                      i === 0
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-slate-600 bg-slate-950'
                    }`}
                    aria-hidden="true"
                  />

                  <div className="card p-6 hover:border-slate-700 transition-colors duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {job.role}
                        </h3>
                        <p className="text-sm text-blue-400 font-medium mt-0.5">
                          {job.company}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xs text-slate-400 font-mono whitespace-nowrap">
                          {job.duration}
                        </span>
                        <span
                          className={`ml-2 text-[10px] px-2 py-0.5 rounded-full font-medium ${
                            job.type === 'Full-time'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : 'bg-slate-700/60 text-slate-400 border border-slate-700'
                          }`}
                        >
                          {job.type}
                        </span>
                      </div>
                    </div>

                    {/* Project + client */}
                    <div className="flex flex-wrap items-center gap-2 mb-3 text-xs text-slate-500">
                      <span className="font-medium text-slate-300">{job.project}</span>
                      {job.client && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>Client: {job.client}</span>
                        </>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-4 border-l-2 border-slate-700 pl-3">
                      {job.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="tag text-[11px]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2" aria-label={`Achievements at ${job.company}`}>
                      {job.achievements.map((item, j) => (
                        <li key={j} className="flex gap-2.5 text-sm text-slate-400 leading-relaxed">
                          <span className="text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true">
                            ▹
                          </span>
                          <span>{highlightNumbers(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
