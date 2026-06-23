import { motion } from "framer-motion";
import {
  education,
  languages,
  projects,
  sections,
  socialLinks
} from "../../data/portfolio";
import { flattenOpenableFiles, fileTree } from "../../data/fileTree";
import type { FileKind } from "../../data/fileTree";
import { AboutSection } from "../content/AboutSection";
import { ContactSection } from "../content/ContactSection";
import { ExperienceSection } from "../content/ExperienceSection";
import { SkillsSection } from "../content/SkillsSection";
import { AnimatedBackground } from "../ui/AnimatedBackground";
import { FadeIn } from "../ui/FadeIn";

type EditorPaneProps = {
  path: string;
};

function ProjectIndex({ onOpenProject }: { onOpenProject?: (slug: string) => void }) {
  return (
    <div className="relative min-h-full">
      <AnimatedBackground />
      <article className="relative z-10 mx-auto max-w-4xl px-10 py-8">
        <FadeIn>
          <h1 className="mb-2 text-[28px] font-normal text-cursor-text">Projekt</h1>
          <p className="mb-8 text-[14px] text-cursor-textMuted">
            Placeholders som kan bytas ut i <span className="font-mono">src/data/portfolio.ts</span>.
          </p>
        </FadeIn>
        <div className="space-y-6">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="overflow-hidden rounded-xl border border-cursor-border bg-cursor-panel/60 backdrop-blur-sm"
              >
                <div className="grid items-center gap-4 p-5 md:grid-cols-[1fr_200px]">
                  <div>
                    <p className="font-medium text-cursor-text">{project.title}</p>
                    <p className="mt-1 text-xs text-cursor-textMuted">{project.period}</p>
                    <p className="mt-2 text-sm text-cursor-text">{project.summary}</p>
                    {onOpenProject && (
                      <button
                        type="button"
                        onClick={() => onOpenProject(project.slug)}
                        className="mt-3 text-sm text-cursor-accent hover:underline"
                      >
                        Öppna projekt
                      </button>
                    )}
                  </div>
                  <img src={project.image} alt={project.title} className="rounded-lg border border-cursor-border" />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </article>
    </div>
  );
}

function ProjectView({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return (
      <article className="mx-auto max-w-4xl px-10 py-8">
        <h1 className="text-[28px] font-normal">Projekt saknas</h1>
        <p className="mt-4 text-[14px]">Kontrollera projektets slug i datafilen.</p>
      </article>
    );
  }

  return (
    <div className="relative min-h-full">
      <AnimatedBackground />
      <article className="relative z-10 mx-auto max-w-4xl px-10 py-8">
        <FadeIn>
          <div className="overflow-hidden rounded-xl border border-cursor-border">
            <img src={project.image} alt={project.title} className="w-full object-cover" style={{ maxHeight: 280 }} />
          </div>
          <h1 className="mt-6 text-[28px] font-normal">{project.title}</h1>
          <p className="mt-2 text-sm text-cursor-textMuted">{project.period}</p>
          <p className="mt-5 text-[14px] leading-7">{project.summary}</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <section className="mt-6">
            <h2 className="text-lg font-semibold text-cursor-warning">Utmaning</h2>
            <p className="mt-2 text-[14px] leading-7">{project.challenge}</p>
          </section>
        </FadeIn>

        <FadeIn delay={0.15}>
          <section className="mt-6">
            <h2 className="text-lg font-semibold text-cursor-success">Lösning</h2>
            <p className="mt-2 text-[14px] leading-7">{project.solution}</p>
          </section>
        </FadeIn>

        <FadeIn delay={0.2}>
          <section className="mt-6">
            <h2 className="text-lg font-semibold text-cursor-accent">Teknik</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="rounded border border-cursor-border px-2 py-1 text-xs">
                  {item}
                </span>
              ))}
            </div>
          </section>
        </FadeIn>

        {project.links.length > 0 && (
          <FadeIn delay={0.25}>
            <section className="mt-6">
              <h2 className="text-lg font-semibold text-cursor-accent">Länkar</h2>
              <div className="mt-2 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded border border-cursor-border px-3 py-1 text-sm text-cursor-accent hover:border-cursor-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </section>
          </FadeIn>
        )}
      </article>
    </div>
  );
}

function EducationView() {
  return (
    <div className="relative min-h-full">
      <AnimatedBackground />
      <article className="relative z-10 mx-auto max-w-4xl px-10 py-8">
        <FadeIn>
          <h1 className="mb-8 text-[28px] font-normal">Utbildning</h1>
        </FadeIn>
        <div className="space-y-4">
          {education.map((entry, i) => (
            <FadeIn key={entry.degree} delay={i * 0.08}>
              <div className="rounded-lg border border-cursor-border bg-cursor-panel/60 p-5 transition hover:border-cursor-accent/30">
                <h2 className="text-base font-medium text-cursor-accent">{entry.degree}</h2>
                <p className="mt-1 text-sm text-cursor-textMuted">{entry.school}</p>
                <p className="mt-1 text-xs text-cursor-textMuted">{entry.period}</p>
                {entry.details.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {entry.details.map((d) => (
                      <li key={d} className="text-[14px] text-cursor-text">
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </article>
    </div>
  );
}

function LanguagesView() {
  return (
    <div className="relative min-h-full">
      <AnimatedBackground />
      <article className="relative z-10 mx-auto max-w-4xl px-10 py-8">
        <FadeIn>
          <h1 className="mb-8 text-[28px] font-normal">Språk</h1>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2">
          {languages.map((lang, i) => (
            <FadeIn key={lang.name} delay={i * 0.1}>
              <div className="rounded-lg border border-cursor-border bg-cursor-panel/60 p-5">
                <p className="text-lg text-cursor-text">{lang.name}</p>
                <p className="mt-1 text-sm text-cursor-accent">{lang.level}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </article>
    </div>
  );
}

function findFileMeta(route: string): { label: string; kind: FileKind } | null {
  const match = flattenOpenableFiles(fileTree).find((file) => file.route === route);
  if (!match) {
    return null;
  }
  return { label: match.label, kind: "md" };
}

export function getTabMeta(route: string): { label: string; kind: FileKind } {
  const meta = findFileMeta(route);
  if (meta) {
    return meta;
  }
  return { label: "untitled", kind: "generic" };
}

export function EditorPane({ path }: EditorPaneProps) {
  if (path === "/projects") {
    return <ProjectIndex />;
  }

  if (path.startsWith("/projects/")) {
    const slug = path.replace("/projects/", "");
    return <ProjectView slug={slug} />;
  }

  if (path === "/about") {
    return (
      <div className="scroll-thin min-h-full">
        <AboutSection />
      </div>
    );
  }

  if (path === "/experience") {
    return (
      <div className="scroll-thin min-h-full">
        <ExperienceSection />
      </div>
    );
  }

  if (path === "/skills") {
    return (
      <div className="scroll-thin min-h-full">
        <SkillsSection />
      </div>
    );
  }

  if (path === "/education") {
    return <EducationView />;
  }

  if (path === "/languages") {
    return <LanguagesView />;
  }

  if (path === "/contact") {
    return (
      <div className="scroll-thin min-h-full">
        <ContactSection />
      </div>
    );
  }

  const section = sections.find((item) => item.route === path);
  if (section) {
    return (
      <article className="mx-auto max-w-4xl px-10 py-8">
        <h1 className="mb-4 text-[28px] font-normal text-cursor-text">{section.label.replace(".md", "")}</h1>
        <div className="space-y-4 text-[14px] leading-7 text-cursor-text">
          {section.content.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        {path === "/about" && (
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="rounded border border-cursor-border px-3 py-1 text-sm text-cursor-accent hover:border-cursor-accent"
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </article>
    );
  }

  return (
    <article className="mx-auto max-w-4xl px-10 py-8">
      <h1 className="text-[28px] font-normal">Inte hittad</h1>
      <p className="mt-4 text-[14px]">Sidan kunde inte hittas.</p>
    </article>
  );
}
