import { certificates, courses } from "../data/portfolio";
import Section, { Reveal } from "./Section";
import { IconAward, IconCheck } from "./Icons";

function StatusBadge({ status }) {
  const inProgress = status === "In Progress";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
        inProgress
          ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
          : "border-accent/30 bg-accent-deep text-accent"
      }`}
    >
      {inProgress ? (
        <>
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          {status}
        </>
      ) : (
        <>
          <IconCheck className="h-3 w-3" />
          {status}
        </>
      )}
    </span>
  );
}

export default function Certifications() {
  return (
    <Section
      id="certifications"
      index="05"
      kicker="credentials"
      title="Certifications & Training"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <Reveal>
            <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-mute">
              <IconAward className="h-4 w-4 text-accent" />
              Certificates
            </h3>
          </Reveal>
          <div className="space-y-4">
            {certificates.map((cert, index) => (
              <Reveal key={cert.name} delay={index * 80}>
                <div className="flex items-center justify-between rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-strong">
                  <div>
                    <h4 className="font-semibold text-ink">{cert.name}</h4>
                    <p className="mt-0.5 font-mono text-xs text-ink-mute">
                      {cert.issuer}
                    </p>
                  </div>
                  <StatusBadge status={cert.status} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-mute">
              <IconCheck className="h-4 w-4 text-accent" />
              Courses & Training
            </h3>
          </Reveal>
          <div className="space-y-4">
            {courses.map((course, index) => (
              <Reveal key={course.name} delay={index * 60}>
                <div className="flex items-center justify-between rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-strong">
                  <div>
                    <h4 className="font-semibold text-ink">{course.name}</h4>
                    {course.issuer && (
                      <p className="mt-0.5 font-mono text-xs text-ink-mute">
                        {course.issuer}
                      </p>
                    )}
                  </div>
                  <StatusBadge status={course.status} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
