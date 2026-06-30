import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Section from './Section';
import data from '../data/portfolio.json';

export default function Projects() {
  return (
    <Section id="projects" index="04" eyebrow="Selected Work" title="Projects">
      <div className="hairline">
        {data.projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group block border-b border-paper/10 py-8 transition-colors hover:bg-paper/[0.02] md:px-2"
          >
            <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10">
              <span className="font-mono text-xs text-accent md:pt-2">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div>
                {project.context && (
                  <p className="index-label mb-2">{project.context}</p>
                )}
                <h3 className="font-display text-2xl leading-tight text-paper transition-colors group-hover:text-accent md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper/60 md:text-base">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <span className="hidden h-12 w-12 items-center justify-center rounded-full border border-paper/15 text-paper transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-ink md:flex">
                <ArrowUpRightIcon className="h-5 w-5" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
