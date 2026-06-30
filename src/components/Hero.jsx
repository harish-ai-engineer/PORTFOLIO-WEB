import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import data from '../data/portfolio.json';

const reveal = {
  hidden: { y: '110%' },
  show: (i) => ({
    y: '0%',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.12 },
  }),
};

/** A single line of the headline that slides up from a clipped mask. */
function Line({ children, i }) {
  return (
    <span className="block overflow-hidden">
      <motion.span variants={reveal} custom={i} initial="hidden" animate="show" className="block">
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const { profile } = data;

  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-16 pt-32">
      <div className="container-x">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="index-label mb-8 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-accent" />
          {profile.location} · Available for work
        </motion.p>

        <h1 className="display text-[15vw] leading-[0.86] sm:text-[13vw] lg:text-[11rem]">
          <Line i={0}>Harish</Line>
          <Line i={1}>
            R<span className="text-accent">.</span>
          </Line>
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-xl text-lg leading-relaxed text-paper/70 md:text-xl"
          >
            {profile.tagline}{' '}
            <span className="text-paper">{profile.titles[0]}</span> crafting agentic AI
            systems, RAG pipelines, and production-ready AI products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-paper px-7 py-3 font-mono text-xs uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.03]"
            >
              Let's talk
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="font-mono text-xs uppercase tracking-[0.18em] text-paper link-underline"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scrolling marquee of titles along the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hairline mt-16 overflow-hidden py-5"
      >
        <div className="flex w-max animate-marquee">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {profile.titles.concat(['Multi-Agent Systems', 'LangChain · LangGraph']).map((t) => (
                <span
                  key={`${dup}-${t}`}
                  className="flex items-center font-display text-2xl text-paper/40 md:text-3xl"
                >
                  <span className="px-8">{t}</span>
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="container-x mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-paper"
      >
        <ArrowDownIcon className="h-4 w-4 animate-bounce" />
        Scroll
      </motion.a>
    </section>
  );
}
