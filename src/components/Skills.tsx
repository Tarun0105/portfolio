import { skills } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 border-t border-slate-800/50"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-12">
          <p className="section-label mb-2">Technical Skills</p>
          <h2 id="skills-heading" className="section-heading">
            Tools and technologies
          </h2>
          <p className="text-slate-500 mt-2 text-sm max-w-xl">
            Skills listed here are backed by production experience from enterprise projects — not self-assessed ratings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`card-hover p-5 reveal reveal-delay-${Math.min(i + 1, 6)}`}
            >
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
