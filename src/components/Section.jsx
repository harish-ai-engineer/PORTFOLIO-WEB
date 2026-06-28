import { motion } from 'framer-motion';

/**
 * A scroll-triggered fade-in wrapper used by every page section.
 * Pass an `id` for nav anchoring and an optional eyebrow + title heading.
 */
export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-5xl px-6 py-20 md:py-28 ${className}`}>
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          {eyebrow && (
            <p className="mb-2 font-mono text-sm tracking-widest text-cyan">
              <span className="text-electric">{'// '}</span>
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-mono text-3xl font-bold text-white md:text-4xl">{title}</h2>
          )}
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-electric to-cyan" />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
}
