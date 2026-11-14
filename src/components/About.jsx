import { about } from "../data/portfolio";
import { Reveal } from "./Section";
import { IconShield } from "./Icons";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 sm:mb-16">
            <p className="font-mono text-sm text-accent">
              <span className="text-ink-mute">01.</span> about
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Behind the research
            </h2>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-line-strong via-line to-transparent" />
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {about.paragraphs.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 24)}>
                <p className="leading-relaxed text-ink-dim">{paragraph}</p>
              </Reveal>
            ))}
            <Reveal delay={100}>
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-mute">
                  Current focus
                </p>
                <ul className="flex flex-wrap gap-2">
                  {about.interests.map((interest) => (
                    <li
                      key={interest}
                      className="rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs text-accent"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="rounded-xl border border-line bg-surface p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
                  <IconShield className="h-5 w-5" />
                </span>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-mute">
                  Education
                </p>
              </div>
              <h3 className="mt-4 font-semibold leading-snug text-ink">
                {about.education.institution}
              </h3>
              <p className="mt-1 text-sm text-ink-dim">{about.education.field}</p>
              <p className="mt-3 font-mono text-xs text-accent">
                {about.education.period}
              </p>
              <div className="mt-5 border-t border-line pt-5">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-mute">
                  Based in
                </p>
                <p className="mt-1 text-sm text-ink-dim">
                  Cairo, Egypt — working with global bug bounty programs.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
