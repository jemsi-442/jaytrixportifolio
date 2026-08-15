import { experience } from "@/lib/data";

const cardStyles = [
  { accent: "#073a85", tint: "rgba(7, 58, 133, 0.08)" },
  { accent: "#222a34", tint: "rgba(34, 42, 52, 0.08)" },
  { accent: "#0b55bd", tint: "rgba(11, 85, 189, 0.08)" },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="absolute inset-0 hero-grid opacity-[0.08]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-mono uppercase tracking-widest text-accent">
            Professional Software Journey
          </p>
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            My Software Engineering Path,
            <br />
            <span className="text-accent">
              from workflow understanding to scalable system design
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-foreground-secondary md:text-base">
            I work across architecture, application logic, access control, and database structure
            with a focus on software that remains stable, explainable, and production-ready.
          </p>
        </div>

        <div className="relative mt-14 md:mt-18">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:block lg:left-1/2" />

          <div className="space-y-8 md:space-y-10">
            {experience.map((item, i) => {
              const style = cardStyles[i % cardStyles.length];
              const isRight = i % 2 === 1;

              return (
                <article
                  key={`${item.year}-${item.title}`}
                  className={`relative grid gap-5 md:grid-cols-2 md:gap-10 ${
                    isRight ? "md:[&>*:first-child]:col-start-2" : ""
                  }`}
                >
                  <div
                    className="absolute left-4 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background md:block lg:left-1/2"
                    style={{ backgroundColor: style.accent }}
                  />

                  <div
                    className="rounded-2xl border border-border bg-surface/70 p-5 shadow-lg shadow-black/5 md:p-6"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${style.tint}, transparent 46%)`,
                    }}
                  >
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span
                        className="rounded-full border px-3 py-1 text-xs font-mono font-bold"
                        style={{
                          color: style.accent,
                          borderColor: `${style.accent}40`,
                          backgroundColor: `${style.accent}10`,
                        }}
                      >
                        Step 0{i + 1} of 0{experience.length}
                      </span>
                      <span className="text-sm font-semibold text-foreground-secondary">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground md:text-2xl">
                      {item.title}
                    </h3>
                    <p
                      className="mt-2 text-sm font-semibold md:text-base"
                      style={{ color: style.accent }}
                    >
                      {item.company}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                      {item.description}
                    </p>

                    {item.role && (
                      <div
                        className="mt-5 rounded-xl border px-4 py-3 text-sm leading-relaxed text-foreground-secondary"
                        style={{
                          borderColor: `${style.accent}25`,
                          backgroundColor: `${style.accent}08`,
                        }}
                      >
                        <span
                          className="mb-1.5 block text-[11px] font-mono uppercase tracking-[0.2em]"
                          style={{ color: style.accent }}
                        >
                          Role Focus
                        </span>
                        {item.role}
                      </div>
                    )}

                    {item.deliverables?.length > 0 && (
                      <div className="mt-6">
                        <div
                          className="mb-3 text-[11px] font-mono uppercase tracking-[0.2em]"
                          style={{ color: style.accent }}
                        >
                          What I Usually Own
                        </div>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {item.deliverables.map((deliverable) => (
                            <div
                              key={deliverable}
                              className="rounded-xl border border-border bg-background/55 px-3 py-2.5 text-sm text-foreground-secondary"
                            >
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.principles?.length > 0 && (
                      <div className="mt-6">
                        <div
                          className="mb-3 text-[11px] font-mono uppercase tracking-[0.2em]"
                          style={{ color: style.accent }}
                        >
                          Practice Pillars
                        </div>
                        <div className="grid gap-2">
                          {item.principles.map((principle) => (
                            <div
                              key={principle}
                              className="rounded-xl border border-border bg-background/55 px-3 py-2.5 text-sm text-foreground-secondary"
                            >
                              {principle}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border px-3 py-1.5 text-xs font-medium sm:text-sm"
                          style={{
                            color: style.accent,
                            borderColor: `${style.accent}30`,
                            backgroundColor: `${style.accent}08`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
