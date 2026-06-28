import { GithubIcon, LinkedinIcon } from './BrandIcons';
import data from '../data/portfolio.json';

export default function Footer() {
  const { profile } = data;
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-xs text-slate-500">
          Designed & built by <span className="text-cyan">{profile.name}</span> ·{' '}
          {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition-colors hover:text-cyan"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition-colors hover:text-cyan"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
