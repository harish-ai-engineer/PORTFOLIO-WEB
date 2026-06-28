import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Section from './Section';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import data from '../data/portfolio.json';

export default function Contact() {
  const { profile } = data;

  return (
    <Section id="contact" eyebrow="get in touch" title="Contact">
      <div className="glass mx-auto max-w-2xl p-8 text-center md:p-12">
        <p className="mx-auto max-w-md text-slate-300">
          I'm currently open to new opportunities and collaborations. Whether you have a
          question or just want to say hi, my inbox is always open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mx-auto mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-electric to-cyan px-7 py-3 font-mono text-sm font-semibold text-base shadow-glow transition-transform hover:scale-105"
        >
          <EnvelopeIcon className="h-5 w-5" />
          Say Hello
        </a>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 font-mono text-sm text-slate-300 sm:flex-row sm:gap-8">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-cyan"
          >
            <EnvelopeIcon className="h-4 w-4 text-cyan" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-cyan"
          >
            <PhoneIcon className="h-4 w-4 text-cyan" />
            {profile.phone}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-3 text-slate-300 transition-all hover:border-electric/50 hover:text-cyan hover:shadow-glow"
          >
            <GithubIcon />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-3 text-slate-300 transition-all hover:border-electric/50 hover:text-cyan hover:shadow-glow"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </Section>
  );
}
