import { useState } from "react";
import { profile } from "../data/portfolio";
import { Reveal } from "./Section";
import {
  IconCheck,
  IconCopy,
  IconExternal,
  IconGitHub,
  IconHackerOne,
  IconMail,
  IconPhone,
  IconPin,
} from "./Icons";

function EmailCopy() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <div className="flex items-center justify-between rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-strong">
      <div className="flex items-center gap-4 overflow-hidden">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
          <IconMail className="h-4.5 w-4.5" />
        </span>
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-wider text-ink-mute">
            Email
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="block truncate text-sm font-medium text-ink transition-colors hover:text-accent"
          >
            {profile.email}
          </a>
        </div>
      </div>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Email copied" : "Copy email address"}
        className="rounded-md border border-line p-2 text-ink-mute transition-colors hover:border-accent/50 hover:text-accent"
      >
        {copied ? (
          <IconCheck className="h-4 w-4 text-accent" />
        ) : (
          <IconCopy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

function ContactRow({ icon, label, value, href, external }) {
  const content = (
    <div className="flex items-center gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
        {icon}
      </span>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-wider text-ink-mute">
          {label}
        </p>
        <p className="text-sm font-medium text-ink">{value}</p>
      </div>
    </div>
  );
  const cls =
    "flex items-center justify-between rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/40";
  if (!href) {
    return <div className={cls}>{content}</div>;
  }
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cls}
    >
      {content}
      {external && (
        <IconExternal className="h-4 w-4 shrink-0 text-ink-mute transition-colors group-hover:text-accent" />
      )}
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 sm:mb-16">
            <p className="font-mono text-sm text-accent">
              <span className="text-ink-mute">07.</span> contact
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Get in touch
            </h2>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-line-strong via-line to-transparent" />
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-10 max-w-2xl">
            <p className="leading-relaxed text-ink-dim">
              Open to security research collaborations, bug bounty discussions,
              and responsible disclosure follow-ups. This is a static site, so
              there is no form here — reach out directly through any of the
              channels below.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal>
            <EmailCopy />
          </Reveal>
          <Reveal delay={70}>
            <ContactRow
              icon={<IconPhone className="h-4.5 w-4.5" />}
              label="Phone"
              value={profile.phone}
              href={`tel:+20${profile.phone.slice(1)}`}
            />
          </Reveal>
          <Reveal delay={140}>
            <div className="group">
              <ContactRow
                icon={<IconGitHub className="h-4.5 w-4.5" />}
                label="GitHub"
                value={profile.socials.githubHandle}
                href={profile.socials.github}
                external
              />
            </div>
          </Reveal>
          <Reveal delay={210}>
            <div className="group">
              <ContactRow
                icon={<IconHackerOne className="h-4 w-4" />}
                label="HackerOne"
                value={profile.socials.hackeroneHandle}
                href={profile.socials.hackerone}
                external
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="mt-8 flex items-center gap-2 font-mono text-xs text-ink-mute">
            <IconPin className="h-3.5 w-3.5 text-accent" />
            {profile.location}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
