import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-8" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            aria-label={`Email ${profile.name}`}
          >
            {profile.email}
          </a>
          <span className="text-slate-700" aria-hidden="true">·</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <span className="text-slate-700" aria-hidden="true">·</span>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
