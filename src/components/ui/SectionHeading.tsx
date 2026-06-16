import type { LucideIcon } from "lucide-react";
import { FadeIn } from "./FadeIn";

type SectionHeadingProps = {
  icon: LucideIcon;
  title: string;
  subtitle?: React.ReactNode;
};

export function SectionHeading({ icon: Icon, title, subtitle }: SectionHeadingProps) {
  return (
    <FadeIn className="mb-8">
      <div className="mb-3 flex items-center gap-2 text-cursor-accent">
        <Icon size={20} strokeWidth={1.5} />
        <span className="text-sm font-medium uppercase tracking-wider">{title}</span>
      </div>
      {subtitle && <div className="text-2xl font-normal leading-snug text-cursor-text md:text-3xl">{subtitle}</div>}
    </FadeIn>
  );
}
