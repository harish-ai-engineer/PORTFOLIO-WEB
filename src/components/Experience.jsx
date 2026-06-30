import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from './Section';
import data from '../data/portfolio.json';

export default function Experience() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 70%', 'end 60%'],
  });
  // The accent line "draws" itself as the section scrolls into view.
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="experience" index="02" eyebrow="Career" title="The Roadmap">
      <div ref={trackRef} className="relative pl-12 md:pl-16">
        {/* Roadmap rail */}
        <div className="absolute bottom-0 left-3 top-0 w-px bg-paper/10 md:left-5" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute bottom-0 left-3 top-0 w-px origin-top bg-accent md:left-5"
        />

        {/* Start cap */}
        <div className="absolute left-3 top-0 -translate-x-1/2 md:left-5">
          <span className="block h-2.5 w-2.5 rounded-full bg-accent" />
        </div>

        <div className="space-y-12 pb-4 pt-2">
          {data.experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${i}`}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Milestone marker — numbered node sitting on the rail */}
              <div className="absolute -left-12 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-accent/60 bg-ink font-mono text-xs text-accent md:-left-16 md:h-12 md:w-12">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="group rounded-2xl border border-paper/10 bg-ink2/40 p-6 transition-colors hover:border-accent/40 hover:bg-ink2 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-xl text-paper md:text-2xl">{job.role}</h3>
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 font-mono text-sm text-accent/90">
                  {job.company}
                  <span className="text-muted"> · {job.location}</span>
                </p>

                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((h, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed text-paper/70">
                      <span className="mt-2 h-px w-3 shrink-0 bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* End cap — "Now" */}
        <div className="absolute -bottom-1 left-3 -translate-x-1/2 md:left-5">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
          </span>
        </div>
        <p className="absolute -bottom-1 left-9 font-mono text-xs uppercase tracking-[0.2em] text-accent md:left-12">
          Now
        </p>
      </div>
    </Section>
  );
}
