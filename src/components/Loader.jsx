import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import data from '../data/portfolio.json';

/**
 * Full-screen intro loader. Counts a progress value from 0 to 100, then
 * curtains upward to reveal the page. Calls `onDone` once it has left.
 */
export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 1900;

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out so it decelerates near 100
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink px-6 py-8 md:px-10 md:py-10"
      initial={{ y: 0 }}
      animate={progress >= 100 ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.35 }}
      onAnimationComplete={() => progress >= 100 && onDone?.()}
    >
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.25em] text-muted">
        <span>{data.profile.name}</span>
        <span>AI / ML Product Developer</span>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <span className="display text-[22vw] leading-none text-paper md:text-[16vw]">
          {String(progress).padStart(3, '0')}
        </span>
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between font-mono text-xs uppercase tracking-[0.25em] text-muted">
          <span>Loading</span>
          <span>{progress}%</span>
        </div>
        <div className="h-px w-full bg-paper/10">
          <motion.div
            className="h-px bg-accent"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
