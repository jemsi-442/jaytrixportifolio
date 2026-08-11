"use client";

import { education } from "@/lib/data";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            title="Education & System Mastery"
            subtitle="Academic and self-driven learning that strengthened both technical execution and operational understanding"
          />
        </AnimateOnScroll>

        <div className="mt-12 relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full border-l-2 border-accent/30" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <AnimateOnScroll
                key={`${item.institution}-${index}`}
                animation="animate-fade-in-up"
                delay={index * 150}
              >
                <div className="relative flex gap-6">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-accent mt-1.5" />
                  </div>

                  {/* Education content */}
                  <div className="flex-1 rounded-2xl border border-border bg-surface/50 p-5 md:p-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg md:text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      {item.year && (
                        <span className="inline-flex w-fit rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">
                          {item.year}
                        </span>
                      )}
                    </div>
                    <p className="text-foreground-secondary text-sm md:text-base mt-1.5 font-medium">
                      {item.institution}
                    </p>
                    <p className="text-foreground-secondary text-sm mt-3 leading-relaxed">
                      {item.description}
                    </p>

                    {item.focus?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.focus.map((focus) => (
                          <Badge key={focus} variant="accent">
                            {focus}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
