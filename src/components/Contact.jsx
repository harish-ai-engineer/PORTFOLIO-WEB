import { motion } from 'framer-motion';
import Section from './Section';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import data from '../data/portfolio.json';

export default function Contact() {
  const { profile } = data;

  return (
    <Section id="contact" index="07" eyebrow="Get in touch">
      <div className="hairline pt-8">
        <motion.a
          href={`mailto:${profile.email}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group block"
        >
          <span className="display block text-[12vw] leading-[0.95] text-paper transition-colors group-hover:text-accent md:text-[9rem]">
            Let's talk
            <span className="text-accent">.</span>
          </span>
          <span className="mt-4 inline-flex items-center gap-3 font-mono text-sm text-paper/70 group-hover:text-paper md:text-base">
            {profile.email}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </motion.a>

        <div className="mt-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-md text-base leading-relaxed text-paper/60">
            If you're building something serious with AI — from autonomous agents to
            production observability platforms — let's make it real.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href={`tel:${profile.phone}`}
              className="font-mono text-sm text-paper/70 link-underline"
            >
              {profile.phone}
            </a>
            <div className="flex items-center gap-3">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-all hover:border-accent hover:text-accent"
              >
                <GithubIcon />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-all hover:border-accent hover:text-accent"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
