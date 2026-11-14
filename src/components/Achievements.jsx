import { achievements } from "../data/portfolio";
import Section, { Reveal } from "./Section";
import { IconAward, IconExternal } from "./Icons";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      index="06"
      kicker="track record"
      title="Achievements"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.rankings.map((entry, index) => (
          <Reveal key={`${entry.rank}-${entry.detail}`} delay={index * 60}>
            <div className="flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/40">
              <div className="flex items-start justify-between">
                <p className="font-mono text-3xl font-bold text-accent">
                  {entry.rank}
                </p>
                <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-mute">
                  {entry.platform}
                </span>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">
                {entry.scope}
              </h3>
              <p className="mt-1 font-mono text-xs text-ink-mute">
                {entry.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="mt-5 flex items-start gap-4 rounded-xl border border-accent/25 bg-accent-deep/60 p-6">
          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-surface text-accent">
            <IconAward className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-semibold text-ink">
              HackerOne Egypt Club — Live Event Finalist
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-dim">
              {achievements.finals}
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink-mute">
              Acknowledged by
            </h3>
            <a
              href="https://hackerone.com/0xkarim_dix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-mute transition-colors hover:text-accent"
            >
              verify on HackerOne
              <IconExternal className="h-3.5 w-3.5" />
            </a>
          </div>
          <ul className="flex flex-wrap gap-2.5">
            {achievements.vendors.map((vendor) => (
              <li
                key={vendor}
                className="rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink-dim transition-colors hover:border-accent/40 hover:text-ink"
              >
                {vendor}
              </li>
            ))}
            <li className="rounded-lg border border-dashed border-line-strong px-4 py-2.5 font-mono text-sm text-ink-mute">
              + {achievements.vendorsNote}
            </li>
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
