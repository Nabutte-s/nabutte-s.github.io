import { Mail } from "lucide-react";
import { profile, socialLinks } from "../../data/portfolio";
import { AnimatedBackground } from "../ui/AnimatedBackground";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

export function ContactSection() {
  return (
    <section className="relative px-8 py-16 md:px-12">
      <AnimatedBackground />
      <div className="relative z-10 mx-auto max-w-4xl">
        <SectionHeading icon={Mail} title="Kontakt" subtitle="Hör av dig så kan vi jobba tillsammans" />

        <div className="max-w-xl">
          <FadeIn>
            <div className="rounded-lg border border-cursor-border bg-cursor-panel/60 p-6">
              <p className="text-sm text-cursor-textMuted">Direktkontakt</p>
              <p className="mt-3 text-cursor-text">{profile.name}</p>
              <p className="mt-1 text-sm text-cursor-textMuted">{profile.title}</p>
              <div className="mt-4 space-y-2 text-sm">
                <p>
                  <span className="text-cursor-textMuted">Ort: </span>
                  {profile.location}
                </p>
                <p>
                  <span className="text-cursor-textMuted">Telefon: </span>
                  {profile.phone}
                </p>
                <p>
                  <span className="text-cursor-textMuted">E-post: </span>
                  <a href={`mailto:${profile.email}`} className="text-cursor-accent hover:underline">
                    {profile.email}
                  </a>
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-cursor-border px-3 py-1 text-sm text-cursor-accent hover:border-cursor-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
