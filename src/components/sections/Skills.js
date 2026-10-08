import Image from "next/image";
import { technologyStacks } from "@/lib/technology-stacks";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

function TechnologyList({ tools }) {
  return (
    <ul className="grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-4">
      {tools.map((tool) => (
        <li key={tool.name} className="flex min-w-0 flex-col items-center text-center">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-border bg-white">
            <Image src={tool.icon} alt="" width={38} height={38} unoptimized className="h-[38px] w-[38px] object-contain" />
          </span>
          <span className="mt-2 max-w-full break-words text-sm font-semibold leading-snug text-foreground">{tool.name}</span>
          {tool.note && <span className="mt-1 text-xs leading-relaxed text-foreground-muted">{tool.note}</span>}
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-background-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <p className="mb-3 text-center text-sm font-semibold text-accent">Technology stacks</p>
          <SectionHeading title="Tools behind the solutions" subtitle="My work spans software, mobile, infrastructure and cybersecurity. Some technologies shown are planned in project specifications; the stack is confirmed for each delivery." />
        </AnimateOnScroll>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          {technologyStacks.map((category) => (
            <div key={category.title} className="min-w-0 rounded-lg border border-border bg-surface p-5 shadow-sm sm:p-6">
              <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              <p className="mb-6 mt-2 text-sm leading-relaxed text-foreground-secondary">{category.summary}</p>
              <TechnologyList tools={category.tools} />
              {category.otherTools && (
                <div className="mt-8">
                  <h4 className="mb-4 text-sm font-semibold text-foreground">Other assessment tools</h4>
                  <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {category.otherTools.map((tool) => (
                      <div key={tool.name}>
                        <dt className="text-sm font-medium text-foreground">{tool.name}</dt>
                        <dd className="mt-1 text-xs leading-relaxed text-foreground-secondary">{tool.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
              {category.resources && (
                <div className="mt-8">
                  <h4 className="mb-4 text-sm font-semibold text-foreground">Distribution & guidance</h4>
                  <TechnologyList tools={category.resources} />
                </div>
              )}
              {category.support && (
                <div className="mt-8 border-t border-border pt-5">
                  <h4 className="text-sm font-semibold text-foreground">{category.supportTitle}</h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground-secondary marker:text-accent">
                    {category.support.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-foreground-muted">
          Security tools are selected according to the written scope of an authorized assessment.
          Kali Linux is a distribution that contains security tools; OWASP Top 10 provides web security guidance.
        </p>
      </div>
    </section>
  );
}
