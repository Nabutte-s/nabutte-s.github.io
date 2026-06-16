import { profile, projects, sections, socialLinks } from "../../data/portfolio";
import { flattenOpenableFiles, fileTree } from "../../data/fileTree";
import type { FileKind } from "../../data/fileTree";

type EditorPaneProps = {
  path: string;
};

function SectionView({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <article className="mx-auto max-w-4xl px-10 py-8">
      <h1 className="mb-4 text-[28px] font-normal text-cursor-text">{title}</h1>
      <div className="space-y-4 text-[14px] leading-7 text-cursor-text">
        {paragraphs.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}

function ProjectIndex() {
  return (
    <article className="mx-auto max-w-4xl px-10 py-8">
      <h1 className="mb-4 text-[28px] font-normal">Projekt</h1>
      <p className="mb-5 text-[14px] text-cursor-textMuted">
        Placeholders som kan bytas ut i <span className="font-mono">src/data/portfolio.ts</span>.
      </p>
      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.slug} className="rounded border border-cursor-border bg-cursor-panel p-4">
            <p className="font-medium">{project.title}</p>
            <p className="mt-1 text-xs text-cursor-textMuted">{project.period}</p>
            <p className="mt-2 text-sm text-cursor-text">{project.summary}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function ProjectView({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return <SectionView title="Projekt saknas" paragraphs={["Kontrollera projektets slug i datafilen."]} />;
  }

  return (
    <article className="mx-auto max-w-4xl px-10 py-8">
      <h1 className="text-[28px] font-normal">{project.title}</h1>
      <p className="mt-2 text-sm text-cursor-textMuted">{project.period}</p>
      <p className="mt-5 text-[14px] leading-7">{project.summary}</p>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Challenge</h2>
        <p className="mt-2 text-[14px] leading-7">{project.challenge}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Solution</h2>
        <p className="mt-2 text-[14px] leading-7">{project.solution}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Tech</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="rounded border border-cursor-border px-2 py-1 text-xs">
              {item}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}

function ContactLinks() {
  return (
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

  const section = sections.find((item) => item.route === path);
  if (section) {
    return (
      <div>
        <SectionView title={section.label.replace(".md", "")} paragraphs={section.content} />
        {path === "/about" && (
          <article className="mx-auto max-w-4xl px-10 pb-8">
            <h2 className="text-lg font-semibold">Profil</h2>
            <p className="mt-2 text-sm text-cursor-textMuted">
              {profile.name} - {profile.title}
            </p>
            <ContactLinks />
          </article>
        )}
      </div>
    );
  }

  return <SectionView title="Inte hittad" paragraphs={["Sidan kunde inte hittas."]} />;
}
