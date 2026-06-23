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

        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {[
                { id: "name", label: "Namn", type: "text" },
                { id: "email", label: "E-post", type: "email" },
                { id: "company", label: "Företag", type: "text" }
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="mb-1 block text-sm text-cursor-textMuted">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    required
                    className="w-full rounded-md border border-cursor-border bg-cursor-panel px-3 py-2 text-sm text-cursor-text outline-none transition focus:border-cursor-accent"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-cursor-textMuted">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-md border border-cursor-border bg-cursor-panel px-3 py-2 text-sm text-cursor-text outline-none transition focus:border-cursor-accent"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-cursor-accent px-6 py-2 text-sm font-medium text-white transition hover:bg-cursor-accent/80"
              >
                Skicka
              </button>
            </form>
          </FadeIn>

          <FadeIn delay={0.1}>
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
