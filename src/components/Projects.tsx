import { projects } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 border-t border-slate-800/50"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-12">
          <p className="section-label mb-2">Engineering Highlights</p>
          <h2 id="projects-heading" className="section-heading">
            Production systems I've worked on
          </h2>
          <p className="text-slate-500 mt-2 text-sm max-w-xl">
            These are proprietary enterprise platforms — described here without exposing confidential information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`card-hover p-6 flex flex-col gap-5 reveal reveal-delay-${i + 1}`}
            >
              {/* Domain chip */}
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded">
                  {project.domain}
                </span>
              </div>

              {/* Title + client */}
              <div>
                <h3 className="text-lg font-bold text-white leading-snug mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Client: {project.client}
                </p>
              </div>

              {/* Overview */}
              <p className="text-sm text-slate-400 leading-relaxed">
                {project.overview}
              </p>

              {/* My role */}
              <div className="bg-slate-800/40 rounded-lg p-4 border border-slate-700/40">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  My contribution
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.myRole}
                </p>
              </div>

              {/* Tech stack */}
              <div>
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="border-t border-slate-800 pt-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Key outcomes
                </p>
                <ul className="space-y-1.5">
                  {project.outcomes.map((outcome, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-400">
                      <span className="text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
