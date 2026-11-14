import { useEffect, useState } from "react";
import { nav, profile } from "../data/portfolio";
import { IconClose, IconGitHub, IconHackerOne, IconMenu } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const link = (item) => `#${item.id}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-base/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-semibold text-ink transition-colors hover:text-accent"
        >
          <span className="text-accent">&gt;_</span> {profile.firstName}
          <span className="text-ink-mute">.security</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={link(item)}
                className={`rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${
                  active === item.id
                    ? "text-accent"
                    : "text-ink-dim hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-ink-mute transition-colors hover:text-ink"
          >
            <IconGitHub className="h-[18px] w-[18px]" />
          </a>
          <a
            href={profile.socials.hackerone}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="HackerOne profile"
            className="text-ink-mute transition-colors hover:text-ink"
          >
            <IconHackerOne className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="rounded-md border border-line-strong bg-surface px-3.5 py-1.5 font-mono text-xs text-accent transition-colors hover:border-accent/50 hover:bg-surface-2"
          >
            hire_me()
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-md p-2 text-ink-dim transition-colors hover:bg-surface hover:text-ink lg:hidden"
        >
          {open ? (
            <IconClose className="h-5 w-5" />
          ) : (
            <IconMenu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-base/95 backdrop-blur-md lg:hidden">
          <ul className="space-y-1 px-5 py-4">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={link(item)}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 font-mono text-sm transition-colors ${
                    active === item.id
                      ? "bg-surface text-accent"
                      : "text-ink-dim hover:bg-surface hover:text-ink"
                  }`}
                >
                  <span className="text-ink-mute">/</span> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
