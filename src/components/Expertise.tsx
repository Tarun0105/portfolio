import { expertise } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Expertise() {
  const ref = useScrollReveal()

  return (
    <section
      id="expertise"
      ref={ref}
      className="py-24 border-t border-slate-800/50"
      aria-labelledby="expertise-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-12">
          <p className="section-label mb-2">Engineering Expertise</p>
          <h2 id="expertise-heading" className="section-heading">
            Where I create the most value
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertise.map((area, i) => (
            <div
              key={area.title}
              className={`card-hover p-5 reveal reveal-delay-${Math.min(i + 1, 6)}`}
            >
              <div
                className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700/60 flex items-center justify-center mb-4 text-xl"
                aria-hidden="true"
              >
                {area.icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{area.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
