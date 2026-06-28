import { motion } from 'framer-motion';
import { BriefcaseIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Section from './Section';
import data from '../data/portfolio.json';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="career" title="Experience">
      <div className="relative mx-auto max-w-3xl">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-electric via-cyan to-transparent md:left-1/2" />

        <div className="space-y-10">
          {data.experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pl-12 md:pl-0"
            >
              {/* Node */}
              <span className="absolute left-[9px] top-2 h-3.5 w-3.5 rounded-full border-2 border-cyan bg-base shadow-glow-cyan md:left-1/2 md:-translate-x-1/2" />

              <div className="md:flex md:justify-end md:[&:nth-child(even)]:justify-start">
                <div className="glass glass-hover w-full p-6 md:w-[calc(50%-2rem)]">
                  <div className="mb-3 flex items-center gap-2">
                    <BriefcaseIcon className="h-5 w-5 text-electric" />
                    <h3 className="font-mono text-lg font-semibold text-white">{job.role}</h3>
                  </div>
                  <p className="font-mono text-sm text-cyan">{job.company}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-slate-400">
                    <span>{job.period}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPinIcon className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-slate-300">
                        <span className="mt-1 text-electric">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
