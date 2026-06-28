import { motion } from 'framer-motion';
import { AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';
import Section from './Section';
import data from '../data/portfolio.json';

export default function Education() {
  return (
    <Section id="education" eyebrow="learning" title="Education & Courses">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Education */}
        <div className="space-y-6">
          {data.education.map((edu) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="glass glass-hover p-6"
            >
              <div className="mb-3 flex items-center gap-2">
                <AcademicCapIcon className="h-6 w-6 text-electric" />
                <h3 className="font-mono text-base font-semibold text-white">{edu.degree}</h3>
              </div>
              <p className="text-sm text-slate-300">{edu.institution}</p>
              <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs text-slate-400">
                <span className="tag">{edu.detail}</span>
                <span className="tag">{edu.period}</span>
                <span className="tag">{edu.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Courses */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="glass glass-hover p-6"
        >
          <div className="mb-4 flex items-center gap-2">
            <TrophyIcon className="h-6 w-6 text-cyan" />
            <h3 className="font-mono text-base font-semibold text-white">Courses & Certifications</h3>
          </div>
          <ul className="space-y-4">
            {data.courses.map((course) => (
              <li
                key={course.name}
                className="flex items-start justify-between gap-3 border-b border-white/5 pb-4 last:border-0 last:pb-0"
              >
                <div>
                  <p className="text-sm font-medium text-white">{course.name}</p>
                  <p className="font-mono text-xs text-cyan">{course.provider}</p>
                </div>
                <span className="whitespace-nowrap font-mono text-xs text-slate-400">
                  {course.year}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
