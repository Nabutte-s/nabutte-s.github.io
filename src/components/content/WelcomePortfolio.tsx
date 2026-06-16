import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";

type WelcomePortfolioProps = {
  onOpenFile: (route: string) => void;
};

export function WelcomePortfolio({ onOpenFile }: WelcomePortfolioProps) {
  return (
    <div className="scroll-thin relative min-h-full bg-cursor-bg">
      <HeroSection onOpenContact={() => onOpenFile("/contact")} />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection onOpenProject={(slug) => onOpenFile(`/projects/${slug}`)} />
      <ContactSection />
    </div>
  );
}
