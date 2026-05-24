import { cn } from "@/lib/utils";

export default function SectionHeading({ title, subtitle, className }) {
  return (
    <div className={cn("mb-16 text-center", className)}>
      <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-accent/15 bg-accent/8 px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
          Section Focus
        </span>
      </div>
      <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mb-5 h-1 w-24 rounded-full bg-linear-to-r from-transparent via-accent to-transparent" />
      {subtitle && (
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-foreground-secondary md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
