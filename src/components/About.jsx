import Section from './Section';
import data from '../data/portfolio.json';

export default function About() {
  const { profile } = data;
  return (
    <Section id="about" eyebrow="who am i" title="About Me">
      <div className="glass mx-auto max-w-3xl p-8 md:p-10">
        <p className="text-base leading-relaxed text-slate-300 md:text-lg">
          {profile.summary}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: 'Role', v: 'AI / ML Engineer' },
            { k: 'Focus', v: 'Generative AI' },
            { k: 'Based in', v: profile.location },
            { k: 'Status', v: 'Open to work' },
          ].map((item) => (
            <div key={item.k} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-cyan">{item.k}</p>
              <p className="mt-1 text-sm font-medium text-white">{item.v}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
