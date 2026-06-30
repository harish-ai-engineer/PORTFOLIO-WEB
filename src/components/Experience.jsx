import { motion } from 'framer-motion';
import Section from './Section';
import data from '../data/portfolio.json';

export default function Experience() {
  return (
    <Section id="experience" index="02" eyebrow="Career" title="Experience">
      <div className="hairline">
        {data.experience.map((job, i) => (
          <motion.div
            key={`${job.company}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group grid gap-4 border-b border-paper/10 py-8 transition-colors hover:bg-paper/[0.02] md:grid-cols-[auto_1fr_1.2fr] md:gap-10 md:px-2"
          >
            <span className="font-mono text-xs text-accent md:pt-1.5">
              {String(i + 1).padStart(2, '0')}
            </span>

            <div>
              <h3 className="font-display text-xl text-paper md:text-2xl">{job.role}</h3>
              <p className="mt-1 font-mono text-sm text-accent/90">{job.company}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-muted">
                {job.period}
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
                {job.location}
              </p>
            </div>

            <ul className="space-y-2.5">
              {job.highlights.map((h, idx) => (
                <li key={idx} className="flex gap-3 text-sm leading-relaxed text-paper/70">
                  <span className="mt-2 h-px w-3 shrink-0 bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
