import HeroSection from "@/src/components/sections/HeroSection";
import { AboutSection } from "@/src/components/sections/AboutSection";
import SkillsSection from "@/src/components/sections/SkillsSection";
import { ProjectsSection } from "@/src/components/sections/ProjectsSection";
import { ContactSection } from "@/src/components/sections/ContactSection";
import { Footer } from "@/src/components/layout/Footer";
import EducationSection from "@/src/components/sections/EducationSection";
import ExperienceSection from "@/src/components/sections/ExperienceSection";
import Navbar from "@/src/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </>
  );
}
