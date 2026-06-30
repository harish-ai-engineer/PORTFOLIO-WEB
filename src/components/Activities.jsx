import { motion } from 'framer-motion';
import { ArrowUpRightIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import Section from './Section';
import data from '../data/portfolio.json';

export default function Activities() {
  if (!data.activities?.length) return null;

  return (
    <Section id="activities" index="05" eyebrow="My Activities" title="Open Source">
      <div className="space-y-12">
        {data.activities.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 border-t border-paper/10 pt-10 md:grid-cols-[1.3fr_1fr] md:gap-12"
          >
            {/* Left: identity + description + highlights */}
            <div>
              {item.context && <p className="index-label mb-3">{item.context}</p>}
              <div className="flex items-center gap-3">
                <CommandLineIcon className="h-7 w-7 text-accent" />
                <h3 className="font-display text-3xl leading-tight text-paper md:text-4xl">
                  {item.title}
                </h3>
              </div>
              {item.tagline && (
                <p className="mt-3 font-display text-lg text-paper/80">{item.tagline}</p>
              )}
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper/60 md:text-base">
                {item.description}
              </p>

              {item.tech?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {item.links?.length > 0 && (
                <div className="mt-6 flex flex-wrap items-center gap-5">
                  {item.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] link-underline"
                    >
                      {link.label}
                      <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Right: install + highlights */}
            <div className="space-y-8">
              {item.install?.length > 0 && (
                <div>
                  <p className="index-label mb-3">Install</p>
                  <div className="rounded-xl border border-paper/10 bg-paper/[0.03] p-4">
                    {item.install.map((cmd) => (
                      <p key={cmd} className="flex gap-2 font-mono text-xs text-paper/80 md:text-sm">
                        <span className="select-none text-accent">$</span>
                        <span>{cmd}</span>
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {item.highlights?.length > 0 && (
                <div>
                  <p className="index-label mb-3">Highlights</p>
                  <ul className="space-y-2.5">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-paper/70">
                        <span className="mt-0.5 text-accent">→</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
