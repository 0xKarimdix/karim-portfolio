import { experience } from "../data/portfolio";
import Section, { Reveal } from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      kicker="field work"
      title="Experience"
    >
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[120px]" />
        <div className="space-y-12">
          {experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 100}>
              <article className="relative grid gap-4 sm:grid-cols-[104px_1fr] sm:gap-8">
                <div className="flex items-center gap-4 sm:justify-end">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-ink-mute sm:pt-0.5">
                    {item.period}
                  </span>
                  <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-base sm:left-[113px]" />
                </div>
                <div className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-strong">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-ink">
                        {item.role}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-accent">
                        {item.org}
                      </p>
                    </div>
                    {item.current && (
                      <span className="rounded-full border border-accent/30 bg-accent-deep px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-dim">
                    {item.summary}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight.slice(0, 32)}
                        className="flex gap-3 text-sm leading-relaxed text-ink-dim"
                      >
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
