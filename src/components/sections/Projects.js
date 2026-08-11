"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { cn } from "@/lib/utils";

const projectFilters = [
  { label: "All", value: "all" },
  { label: "Public", value: "public" },
  { label: "Private", value: "private" },
  { label: "Laravel", value: "laravel" },
  { label: "Node", value: "node" },
  { label: "Django", value: "django" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
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
  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const byFilter = projects.filter((project) => {
      if (activeFilter === "all") return true;
      if (activeFilter === "public") return project.sourceUrl;
      if (activeFilter === "private") return !project.sourceUrl;

      return project.tags.some((tag) => tag.toLowerCase().includes(activeFilter));
    });

    if (!normalizedSearch) return byFilter;

    return byFilter.filter((project) =>
      [
        project.title,
        project.category,
        project.status,
        project.role,
        project.description,
        project.focus,
        ...project.tags,
        ...project.highlights,
      ]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(normalizedSearch))
    );
  }, [activeFilter, searchTerm]);
  const hasProjectQuery = activeFilter !== "all" || searchTerm.trim().length > 0;
  const clearProjectQuery = () => {
    setActiveFilter("all");
    setSearchTerm("");
  };

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

        <AnimateOnScroll animation="animate-fade-in-up" delay={390}>
          <div className="mb-8 rounded-[1.5rem] border border-border bg-surface/60 p-4 backdrop-blur-md">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                {projectFilters.map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveFilter(filter.value)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                      activeFilter === filter.value
                        ? "border-accent bg-accent text-white shadow-lg shadow-accent-glow"
                        : "border-border bg-background/70 text-foreground-secondary hover:border-accent/40 hover:text-accent"
                    )}
                    aria-pressed={activeFilter === filter.value}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              <label className="min-w-0 lg:w-72">
                <span className="sr-only">Search projects</span>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="w-full rounded-full border border-border bg-background/80 px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-foreground-muted focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Search systems, stack, scope..."
                />
              </label>
            </div>
            <div className="mt-3 text-sm text-foreground-muted">
              {filteredProjects.length} of {projects.length} systems shown
            </div>
            {hasProjectQuery && (
              <button
                type="button"
                onClick={clearProjectQuery}
                className="mt-3 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-light"
              >
                Clear filters
              </button>
            )}
          </div>
        </AnimateOnScroll>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <AnimateOnScroll
                key={project.title}
                animation="animate-fade-in-up"
                delay={index * 100}
              >
                <ProjectCard {...project} />
              </AnimateOnScroll>
            ))}
          </div>
        ) : (
          <div className="rounded-[1.5rem] border border-border bg-surface/60 p-8 text-center">
            <div className="text-lg font-bold text-foreground">No matching systems</div>
            <p className="mt-2 text-sm text-foreground-muted">
              Try a different filter or search term.
            </p>
            <button
              type="button"
              onClick={clearProjectQuery}
              className="mt-5 rounded-full border border-accent bg-accent px-5 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-light"
            >
              Show all systems
            </button>
          </div>
        )}

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
