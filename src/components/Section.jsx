import useReveal from "../hooks/useReveal";

export function Reveal({ children, delay = 0, className = "" }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Section({ id, index, title, kicker, children }) {
  return (
    <section id={id} className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 sm:mb-16">
            <p className="font-mono text-sm text-accent">
              <span className="text-ink-mute">{index}.</span> {kicker}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {title}
            </h2>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-line-strong via-line to-transparent" />
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
