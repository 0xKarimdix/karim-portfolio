import { heroStats, profile } from "../data/portfolio";
import useReveal from "../hooks/useReveal";
import {
  IconArrow,
  IconGitHub,
  IconHackerOne,
  IconMail,
  IconPin,
} from "./Icons";

function HeroCard() {
  const rows = [
    { key: "operator", value: profile.name },
    { key: "role", value: profile.role },
    { key: "focus", value: "web · api · android" },
    { key: "location", value: profile.location },
    { key: "platforms", value: "hackerone · bugcrowd" },
    { key: "clearance", value: "responsible disclosure only" },
  ];
  return (
    <div className="relative rounded-xl border border-line bg-surface/70 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#3c5245]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3c5245]" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-2 font-mono text-xs text-ink-mute">
          ~/profile — summary
        </span>
      </div>
      <div className="px-5 py-5 font-mono text-[13px] leading-7">
        <p className="text-ink-mute">$ cat ./profile.info</p>
        {rows.map((row) => (
          <p key={row.key} className="truncate">
            <span className="text-accent">{row.key}</span>
            <span className="text-ink-mute"> : </span>
            <span className="text-ink">{row.value}</span>
          </p>
        ))}
        <p className="mt-1 flex items-center gap-2 text-ink-mute">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          active on hackerone
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const { ref, visible } = useReveal(0.05);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(52,211,153,0.12), transparent)",
        }}
      />
      <div
        ref={ref}
        className={`reveal ${visible ? "is-visible" : ""} relative mx-auto grid w-full max-w-5xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:items-center`}
      >
        <div>
          <p className="font-mono text-sm text-accent">
            <span className="text-ink-mute">$</span> whoami
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            {profile.name}
            <span className="mt-1 block text-xl font-semibold text-ink-dim sm:text-2xl">
              {profile.role} — {profile.focus}
            </span>
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-ink-dim">
            I find and responsibly disclose real-world vulnerabilities in web,
            API, and Android applications — from broken access control and auth
            flaws to reverse-engineered mobile attack surfaces — through
            HackerOne and Bugcrowd.
          </p>

          <div className="mt-6 flex items-center gap-2 font-mono text-xs text-ink-mute">
            <IconPin className="h-3.5 w-3.5 text-accent" />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-[#062016] transition-all hover:bg-[#4be3ab]"
            >
              View Experience
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent/50 hover:bg-surface-2"
            >
              Get in Touch
            </a>
            <div className="flex items-center gap-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-lg border border-line p-2.5 text-ink-mute transition-colors hover:border-accent/50 hover:text-accent"
              >
                <IconGitHub className="h-4 w-4" />
              </a>
              <a
                href={profile.socials.hackerone}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackerOne profile"
                className="rounded-lg border border-line p-2.5 text-ink-mute transition-colors hover:border-accent/50 hover:text-accent"
              >
                <IconHackerOne className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                className="rounded-lg border border-line p-2.5 text-ink-mute transition-colors hover:border-accent/50 hover:text-accent"
              >
                <IconMail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-8">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-2xl font-semibold text-accent">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-ink-mute">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:justify-self-end">
          <HeroCard />
        </div>
      </div>
    </section>
  );
}
