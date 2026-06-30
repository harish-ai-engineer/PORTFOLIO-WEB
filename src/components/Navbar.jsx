import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import data from '../data/portfolio.json';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-paper/10 bg-ink/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex items-center justify-between py-5">
        <a
          href="#hero"
          className="font-display text-base font-medium tracking-tight text-paper"
        >
          {data.profile.name}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group flex items-baseline gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-paper"
              >
                <span className="text-[10px] text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={data.profile.resumeUrl}
          download
          className="hidden font-mono text-xs uppercase tracking-[0.18em] text-paper md:inline-block link-underline"
        >
          Resume
        </a>

        <button
          aria-label="Toggle menu"
          className="text-paper md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-paper/10 bg-ink/95 backdrop-blur-md md:hidden">
          <ul className="container-x flex flex-col py-4">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-2 py-3 font-mono text-sm uppercase tracking-[0.15em] text-muted hover:text-paper"
                >
                  <span className="text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={data.profile.resumeUrl}
                download
                onClick={() => setOpen(false)}
                className="mt-2 inline-block font-mono text-sm uppercase tracking-[0.15em] text-accent"
              >
                Download Resume →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
