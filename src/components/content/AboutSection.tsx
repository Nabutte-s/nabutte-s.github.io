import { User } from "lucide-react";
import { education, languages, profile } from "../../data/portfolio";
import { AnimatedBackground } from "../ui/AnimatedBackground";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="relative px-8 py-16 md:px-12">
      <AnimatedBackground />
      <div className="relative z-10 mx-auto max-w-4xl">
        <SectionHeading
          icon={User}
          title="Om mig"
          subtitle={
            <>
              Jag ar <span className="text-cursor-success">specialiserad</span> pa{" "}
              <span className="text-cursor-accent">saker utveckling</span> och{" "}
              <span className="text-cursor-warning">kvalitetssakrad testning</span>
            </>
          }
        />

        <div className="grid items-start gap-8 md:grid-cols-[1fr_auto]">
          <FadeIn delay={0.1}>
            <p className="text-[14px] leading-7 text-cursor-text">{profile.intro}</p>
            <p className="mt-4 text-[14px] leading-7 text-cursor-textMuted">
              Jag ar engagerad och ser fram emot nya utmaningar dar sakerhet och utveckling mots.
            </p>

            <div className="mt-8">
              <h4 className="mb-3 text-sm font-medium text-cursor-accent">| Sprak</h4>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-baseline gap-2 text-sm">
                    <span className="text-cursor-text">{lang.name}</span>
                    <span className="text-cursor-textMuted">-</span>
                    <span className="text-cursor-textMuted">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cursor-accent/40 to-cursor-success/40 blur-sm" />
              <img
                src={profile.avatar}
                alt={profile.name}
                className="relative h-40 w-40 rounded-full border-2 border-cursor-border object-cover md:h-48 md:w-48"
              />
            </div>
            <div className="text-center">
              <p className="font-medium text-cursor-text">{profile.name}</p>
              <p className="text-sm text-cursor-textMuted">{profile.title}</p>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {education.slice(0, 2).map((entry, i) => (
            <FadeIn key={entry.degree} delay={0.1 * i}>
              <div className="rounded-lg border border-cursor-border bg-cursor-panel/80 p-5 backdrop-blur-sm transition hover:border-cursor-accent/40">
                <h3 className="text-base font-medium text-cursor-accent">{entry.degree}</h3>
                <p className="mt-1 text-sm text-cursor-textMuted">{entry.school}</p>
                <p className="mt-1 text-xs text-cursor-textMuted">{entry.period}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
