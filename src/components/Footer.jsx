import { profile } from "../data/portfolio";
import { IconGitHub, IconHackerOne, IconMail } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <div>
          <p className="font-mono text-sm text-ink">
            <span className="text-accent">&gt;_</span> {profile.name}
          </p>
          <p className="mt-1 text-xs text-ink-mute">
            Security Researcher — Web · API · Android
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send email"
            className="text-ink-mute transition-colors hover:text-accent"
          >
            <IconMail className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-ink-mute transition-colors hover:text-accent"
          >
            <IconGitHub className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.hackerone}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="HackerOne profile"
            className="text-ink-mute transition-colors hover:text-accent"
          >
            <IconHackerOne className="h-4 w-4" />
          </a>
        </div>
        <p className="font-mono text-[11px] text-ink-mute">
          © {new Date().getFullYear()} {profile.name}. Built responsibly.
        </p>
      </div>
    </footer>
  );
}
