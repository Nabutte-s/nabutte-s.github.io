import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { profile, socialLinks } from "../../data/portfolio";
import { AnimatedBackground } from "../ui/AnimatedBackground";
import { RotatingRoles } from "../ui/RotatingRoles";

type HeroSectionProps = {
  onOpenContact: () => void;
};

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-8 py-16 text-center">
      <AnimatedBackground />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl"
      >
        <h1 className="text-4xl font-normal tracking-tight text-cursor-text md:text-5xl">
          {profile.name}
          <motion.span
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            className="ml-2 inline-block origin-[70%_70%]"
          >
            👋
          </motion.span>
        </h1>

        <p className="mt-4 flex flex-wrap items-center justify-center gap-1 text-sm text-cursor-textMuted md:text-base">
          <span className="inline-flex items-center gap-1.5">
            {profile.status}
            <span className="inline-block h-2 w-2 rounded-full bg-cursor-success animate-pulse" />
          </span>
          <span>/</span>
          <RotatingRoles roles={profile.roles} />
        </p>

        <p className="mx-auto mt-6 max-w-lg text-[14px] leading-7 text-cursor-textMuted">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cursor-border px-4 py-2 text-sm text-cursor-text transition hover:border-cursor-accent hover:text-cursor-accent"
            >
              {link.label === "GitHub" && <Github size={16} />}
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 rounded-full bg-cursor-text px-5 py-2 text-sm font-medium text-cursor-bg transition hover:bg-white"
          >
            Kontakta mig
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 text-cursor-textMuted"
      >
        <span className="text-xs tracking-widest">▼ ▼ ▼</span>
      </motion.div>
    </section>
  );
}
