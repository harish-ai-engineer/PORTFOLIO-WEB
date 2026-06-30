import { motion } from 'framer-motion';
import Section from './Section';
import data from '../data/portfolio.json';

export default function Skills() {
  return (
    <Section id="skills" index="03" eyebrow="Toolbox" title="Skills & Stack">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-2">
        {data.skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-ink p-7 transition-colors hover:bg-ink2"
          >
            <div className="mb-5 flex items-baseline gap-2">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-lg text-paper">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
