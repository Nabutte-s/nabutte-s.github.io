import { ArrowRight, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";
import { AnimatedBackground } from "../ui/AnimatedBackground";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

type ProjectsSectionProps = {
  onOpenProject: (slug: string) => void;
};

export function ProjectsSection({ onOpenProject }: ProjectsSectionProps) {
  return (
    <section className="relative px-8 py-16 md:px-12">
      <AnimatedBackground />
      <div className="relative z-10 mx-auto max-w-4xl">
        <SectionHeading
          icon={FolderGit2}
          title="Mina projekt"
          subtitle={
            <>
              Utvalda <span className="text-cursor-warning">projekt</span> inom säkerhet och utveckling
            </>
          }
        />

        <div className="space-y-6">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="overflow-hidden rounded-xl border border-cursor-border bg-cursor-panel/60 backdrop-blur-sm transition hover:border-cursor-accent/30"
              >
                <div className="grid items-center gap-6 p-6 md:grid-cols-[1fr_280px]">
                  <div>
                    <h3 className="text-lg font-medium text-cursor-text">{project.title}</h3>
                    <p className="mt-2 text-[14px] leading-6 text-cursor-textMuted">{project.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="rounded border border-cursor-border px-2 py-0.5 text-xs text-cursor-textMuted">
                          {t}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenProject(project.slug)}
                      className="mt-4 inline-flex items-center gap-1 text-sm text-cursor-accent hover:underline"
                    >
                      Läs mer
                      <ArrowRight size={14} />
                    </button>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-cursor-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
