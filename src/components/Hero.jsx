import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownTrayIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import data from '../data/portfolio.json';

/** Typewriter effect that cycles through the list of titles. */
function useTypewriter(words, typing = 90, deleting = 45, pause = 1600) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleted && text === current) {
      timeout = setTimeout(() => setDeleted(true), pause);
    } else if (deleted && text === '') {
      setDeleted(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleted ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleted ? deleting : typing
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleted, index, words, typing, deleting, pause]);

  return text;
}

export default function Hero() {
  const { profile } = data;
  const typed = useTypewriter(profile.titles);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Floating ambient orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 animate-float rounded-full bg-electric/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 animate-float rounded-full bg-cyan/20 blur-3xl [animation-delay:-3s]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm text-cyan md:text-base"
        >
          <span className="text-electric">$</span> hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-5xl font-extrabold tracking-tight text-white md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex min-h-[2.5rem] items-center justify-center font-mono text-xl text-gradient md:text-3xl"
        >
          <span>{typed}</span>
          <span className="ml-1 inline-block h-6 w-[3px] animate-blink bg-cyan md:h-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-2 font-mono text-sm text-slate-500"
        >
          <MapPinIcon className="h-4 w-4 text-cyan" />
          {profile.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={profile.resumeUrl}
            download
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-electric to-cyan px-6 py-3 font-mono text-sm font-semibold text-base shadow-glow transition-transform hover:scale-105"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-electric/40 px-6 py-3 font-mono text-sm font-semibold text-cyan transition-all hover:bg-electric/10 hover:shadow-glow"
          >
            <EnvelopeIcon className="h-5 w-5" />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
