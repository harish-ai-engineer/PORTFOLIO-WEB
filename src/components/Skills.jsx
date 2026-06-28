import { motion } from 'framer-motion';
import { CpuChipIcon } from '@heroicons/react/24/outline';
import Section from './Section';
import data from '../data/portfolio.json';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="toolbox" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {data.skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass glass-hover p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <CpuChipIcon className="h-5 w-5 text-cyan" />
              <h3 className="font-mono text-base font-semibold text-white">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="tag">
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
