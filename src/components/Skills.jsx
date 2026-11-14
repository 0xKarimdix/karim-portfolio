import { skillGroups } from "../data/portfolio";
import Section, { Reveal } from "./Section";

export default function Skills() {
  return (
    <Section id="skills" index="02" kicker="capabilities" title="Technical Skills">
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <Reveal
            key={group.title}
            delay={groupIndex * 80}
            className={groupIndex === 0 ? "sm:col-span-2" : ""}
          >
            <div className="h-full rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-strong">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-ink">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-line bg-surface-2 px-3 py-1.5 text-[13px] text-ink-dim transition-colors hover:border-accent/40 hover:text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
