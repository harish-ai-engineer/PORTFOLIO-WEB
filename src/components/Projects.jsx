import { motion } from 'framer-motion';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Section from './Section';
import data from '../data/portfolio.json';

export default function Projects() {
  return (
    <Section id="projects" eyebrow="things i've built" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass glass-hover group flex flex-col p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <CodeBracketIcon className="h-8 w-8 text-electric" />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
                className="text-slate-400 transition-colors hover:text-cyan"
              >
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              </a>
            </div>

            {project.context && (
              <p className="mb-1 font-mono text-xs uppercase tracking-wider text-cyan">
                {project.context}
              </p>
            )}
            <h3 className="font-mono text-lg font-semibold leading-snug text-white">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
