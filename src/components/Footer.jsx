import { GithubIcon, LinkedinIcon } from './BrandIcons';
import data from '../data/portfolio.json';

export default function Footer() {
  const { profile } = data;
  return (
    <footer className="relative z-10 border-t border-paper/10 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
          © {new Date().getFullYear()} {profile.name} — All rights reserved
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
