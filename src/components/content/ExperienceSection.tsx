import { Briefcase } from "lucide-react";
import { experience } from "../../data/portfolio";
import { AnimatedBackground } from "../ui/AnimatedBackground";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section className="relative px-8 py-16 md:px-12">
      <AnimatedBackground />
      <div className="relative z-10 mx-auto max-w-4xl">
        <SectionHeading
          icon={Briefcase}
          title="Arbetslivserfarenhet"
          subtitle={
            <>
              Erfarenhet inom <span className="text-cursor-warning">teknik</span> och{" "}
              <span className="text-cursor-accent">sakerhet</span>
            </>
          }
        />

        <div className="space-y-8">
          {experience.map((entry, i) => (
            <FadeIn key={entry.company} delay={i * 0.1}>
              <div className="grid gap-4 md:grid-cols-[140px_1fr]">
                <p className="text-sm text-cursor-textMuted">{entry.period}</p>
                <div className="rounded-lg border border-cursor-border bg-cursor-panel/60 p-5 backdrop-blur-sm transition hover:border-cursor-accent/30">
                  <h3 className="text-base font-medium text-cursor-warning">
                    {entry.company} | {entry.role}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2 text-[14px] leading-6 text-cursor-text">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cursor-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
