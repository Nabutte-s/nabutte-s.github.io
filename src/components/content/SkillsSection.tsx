import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { skillCategories } from "../../data/portfolio";
import { AnimatedBackground } from "../ui/AnimatedBackground";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

export function SkillsSection() {
  const [active, setActive] = useState(skillCategories[0]?.id ?? "security");
  const category = skillCategories.find((cat) => cat.id === active) ?? skillCategories[0];

  return (
    <section className="relative px-8 py-16 md:px-12">
      <AnimatedBackground />
      <div className="relative z-10 mx-auto max-w-4xl">
        <SectionHeading
          icon={Code2}
          title="Kompetenser"
          subtitle={
            <>
              Färdigheter inom <span className="text-cursor-accent">säkerhet</span>,{" "}
              <span className="text-cursor-success">utveckling</span> och{" "}
              <span className="text-cursor-warning">test</span>
            </>
          }
        />

        <div className="flex flex-col gap-8 md:flex-row">
          <FadeIn className="shrink-0">
            <div className="flex flex-row flex-wrap gap-2 md:flex-col md:rounded-lg md:border md:border-cursor-border md:bg-cursor-panel/60 md:p-3">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActive(cat.id)}
                  className={`rounded-md px-4 py-2 text-sm transition ${
                    active === cat.id
                      ? "bg-cursor-selection text-white"
                      : "text-cursor-textMuted hover:bg-cursor-hover hover:text-cursor-text"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="flex-1">
            <h3 className="mb-6 text-lg text-cursor-text">{category.label}</h3>
            <div className="flex flex-wrap gap-6">
              {category.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-xl border border-cursor-border bg-cursor-panel text-lg font-bold transition hover:scale-105 hover:border-cursor-accent/50"
                    style={{ color: item.color }}
                  >
                    {item.abbr}
                  </div>
                  <span className="text-xs text-cursor-accent">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
