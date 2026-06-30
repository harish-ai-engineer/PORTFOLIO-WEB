import { motion } from 'framer-motion';
import Section from './Section';
import data from '../data/portfolio.json';

export default function Education() {
  return (
    <Section id="education" index="06" eyebrow="Background" title="Education & Courses">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="index-label mb-6">Education</p>
          <div className="space-y-8">
            {data.education.map((edu) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="hairline pt-5"
              >
                <h3 className="font-display text-xl text-paper">{edu.degree}</h3>
                <p className="mt-1 text-sm text-paper/70">{edu.institution}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="chip">{edu.detail}</span>
                  <span className="chip">{edu.period}</span>
                  <span className="chip">{edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <p className="index-label mb-6">Courses & Certifications</p>
          <ul className="hairline">
            {data.courses.map((course) => (
              <motion.li
                key={course.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
                className="flex items-start justify-between gap-3 border-b border-paper/10 py-4"
              >
                <div>
                  <p className="font-display text-base text-paper">{course.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-accent/90">{course.provider}</p>
                </div>
                <span className="whitespace-nowrap font-mono text-xs text-muted">
                  {course.year}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
