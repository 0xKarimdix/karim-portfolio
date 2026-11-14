import { research } from "../data/portfolio";
import Section, { Reveal } from "./Section";

export default function Research() {
  return (
    <Section
      id="research"
      index="04"
      kicker="focus areas"
      title="Security Research"
    >
      <Reveal>
        <p className="-mt-6 mb-10 max-w-2xl text-sm text-ink-mute">
          Documented areas of research and hands-on assessment work — as
          demonstrated across engagements and bug bounty platforms.
        </p>
      </Reveal>
      <div className="grid gap-5 lg:grid-cols-3">
        {research.map((area, index) => (
          <Reveal key={area.title} delay={index * 90}>
            <article className="group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/40">
              <p className="font-mono text-xs text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-semibold leading-snug text-ink">
                {area.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-dim">
                {area.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {area.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-line bg-surface-2 px-2 py-1 font-mono text-[10.5px] text-ink-mute"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
