import { summary } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 border-t border-slate-800/50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-12">
          <p className="section-label mb-2">About Me</p>
          <h2 id="about-heading" className="section-heading">
            Backend engineer with a focus on{' '}
            <span className="text-blue-400">enterprise reliability</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-4 reveal reveal-delay-1">
            {summary.paragraphs.map((para, i) => (
              <p key={i} className="text-slate-400 leading-relaxed text-base">
                {para}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap gap-3">
              <span className="tag">
                <svg className="mr-1.5" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Chennai, India
              </span>
              <span className="tag">
                <svg className="mr-1.5" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                Open to relocation
              </span>
              <span className="tag">
                <svg className="mr-1.5" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                Visa sponsorship required
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-2 reveal reveal-delay-2">
            <div className="card p-6 space-y-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                By the numbers
              </p>
              {summary.highlights.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                  <span className="text-sm text-slate-400">{item.label}</span>
                  <span className="text-xl font-bold text-white">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="card p-6 mt-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Domain experience
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <span className="text-base">💳</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-200">Financial Technology</p>
                    <p className="text-xs text-slate-500">eBay Co-Branded Credit Card</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <span className="text-base">🚗</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-200">Automotive Lending</p>
                    <p className="text-xs text-slate-500">Ford Credit – FOBOS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
