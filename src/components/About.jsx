import Section from './Section';
import data from '../data/portfolio.json';

export default function About() {
  const { profile } = data;
  const about = profile.about ?? { paragraphs: [profile.summary], coreTechnologies: [], openTo: [] };

  return (
    <Section id="about" index="01" eyebrow="About" title="Building AI products — not just models.">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-paper/70 md:text-lg">
              {p}
            </p>
          ))}

          {about.coreTechnologies?.length > 0 && (
            <div className="pt-4">
              <p className="index-label mb-3">Core Technologies</p>
              <div className="flex flex-wrap gap-2">
                {about.coreTechnologies.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10">
            {[
              { k: 'Role', v: 'AI / ML Product Developer' },
              { k: 'Focus', v: 'Agentic AI & LLMs' },
              { k: 'Based in', v: profile.location },
              { k: 'Status', v: 'Open to work' },
            ].map((item) => (
              <div key={item.k} className="bg-ink p-5">
                <p className="index-label mb-2">{item.k}</p>
                <p className="font-display text-sm text-paper">{item.v}</p>
              </div>
            ))}
          </div>

          {about.openTo?.length > 0 && (
            <div>
              <p className="index-label mb-3">Open to</p>
              <ul className="space-y-2.5">
                {about.openTo.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-paper/70">
                    <span className="text-accent">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
