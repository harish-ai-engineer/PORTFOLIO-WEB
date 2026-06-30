import { motion } from 'framer-motion';

/**
 * Editorial section wrapper with a numbered, left-aligned header:
 *   (01) — ABOUT
 *   About Me            ← oversized display heading
 * Content fades/rises into view on scroll.
 */
export default function Section({ id, index, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`container-x py-24 md:py-32 ${className}`}>
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="hairline mb-12 pt-6 md:mb-16"
        >
          <div className="flex items-baseline gap-3">
            {index && <span className="index-label text-accent">({index})</span>}
            {eyebrow && <span className="index-label">— {eyebrow}</span>}
          </div>
          {title && (
            <h2 className="display mt-4 text-5xl leading-[0.95] md:text-7xl">{title}</h2>
          )}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
