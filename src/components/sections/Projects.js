import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Projects() {
  const categories = new Set(projects.map((project) => project.category).filter(Boolean));
  const platforms = new Set(
    projects.flatMap((project) =>
      project.tags.filter((tag) =>
        ["Node.js", "Express", "Laravel", "Symfony", "PHP", "Django", "React"].includes(tag)
      )
    )
  );
  const previewCount = projects.filter((project) => project.image).length;
  const documentedRepos = projects.filter((project) => project.sourceUrl || project.repoNote).length;
  const domainHighlights = [...categories].slice(0, 4);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimateOnScroll>
          <SectionHeading
            title="Software Systems & Engineering Work"
            subtitle="Production-focused software systems designed with scalability, structured logic, and security-first principles."
          />
        </AnimateOnScroll>

        {/* Intro positioning paragraph */}
        <AnimateOnScroll animation="animate-fade-in-up" delay={100}>
          <div className="max-w-3xl mb-12 text-foreground-secondary text-base md:text-lg leading-relaxed">
            Each project below represents a system-level implementation — 
            not just interface development. These systems emphasize structured 
            software logic, authentication-driven workflows, API integrity, 
            database modeling, and scalable architectural decisions built 
            for real-world operational environments.
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-in-up" delay={110}>
          <div className="mb-10 flex flex-wrap gap-3">
            {domainHighlights.map((domain) => (
              <span
                key={domain}
                className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground-secondary backdrop-blur-md"
              >
                {domain}
              </span>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <AnimateOnScroll animation="animate-fade-in-up" delay={120}>
            <div className="rounded-[1.5rem] border border-border bg-surface/50 p-5 backdrop-blur-md">
              <div className="text-3xl font-bold text-accent">{projects.length}</div>
              <div className="mt-1 text-sm text-foreground-secondary">
                software systems documented
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="animate-fade-in-up" delay={220}>
            <div className="rounded-[1.5rem] border border-border bg-surface/50 p-5 backdrop-blur-md">
              <div className="text-3xl font-bold text-accent">{previewCount}</div>
              <div className="mt-1 text-sm text-foreground-secondary">
                interface previews available
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="animate-fade-in-up" delay={320}>
            <div className="rounded-[1.5rem] border border-border bg-surface/50 p-5 backdrop-blur-md">
              <div className="text-3xl font-bold text-accent">{documentedRepos}</div>
              <div className="mt-1 text-sm text-foreground-secondary">
                repos and private builds represented
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="animate-fade-in-up" delay={360}>
          <div className="mb-12 rounded-[1.75rem] border border-border bg-surface/35 p-5 backdrop-blur-md">
            <div className="text-[11px] font-mono uppercase tracking-[0.24em] text-accent">
              Platform Coverage
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {[...platforms].map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-accent/15 bg-accent/8 px-4 py-2 text-sm text-foreground-secondary"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimateOnScroll
              key={project.title}
              animation="animate-fade-in-up"
              delay={index * 100}
            >
              <ProjectCard {...project} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Closing authority statement */}
        <AnimateOnScroll animation="animate-fade-in-up" delay={300}>
          <div className="mt-16 max-w-3xl text-sm md:text-base text-foreground-muted leading-relaxed">
            My focus across all systems is consistency in architecture, 
            clean separation of concerns, secure API design, role-based 
            access control implementation, and maintainable software structures 
            capable of scaling without compromising performance or integrity.
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
