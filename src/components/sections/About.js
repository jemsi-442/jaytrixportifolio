import Image from "next/image";
import { profile, stats } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <AnimateOnScroll>
          <SectionHeading
            title="Engineering Philosophy"
            subtitle="Systems over shortcuts. Real workflow understanding over surface-level implementation."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Profile Image */}
          <AnimateOnScroll animation="animate-slide-in-left">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-4 bg-linear-to-r from-accent/10 to-accent/5 rounded-2xl blur-xl" />
              <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden border border-border bg-surface shadow-2xl shadow-black/20">
                <Image
                  src={profile.profileImage}
                  alt={`${profile.name} - Software Engineer`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 384px, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
            </div>
          </AnimateOnScroll>

          {/* Right - Authority Text */}
          <div>
            <AnimateOnScroll animation="animate-slide-in-right">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-accent/15 bg-accent/8 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  How I Build
                </span>
              </div>
              <div className="space-y-6 mb-8">
                {profile.about.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-foreground-secondary leading-relaxed text-base md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-fade-in-up" delay={120}>
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {profile.workingStyle.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-background/50 p-5"
                  >
                    <div className="text-sm font-semibold text-foreground">
                      {item.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Stats - Repositioned as Engineering Indicators */}
            <AnimateOnScroll animation="animate-fade-in-up" delay={200}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-surface/60 border border-border hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-foreground-muted">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </div>
    </section>
  );
}
