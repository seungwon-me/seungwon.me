import { HeroSection } from "./components/hero-section";
import { CareerSection } from "./components/career-section";
import { AwardsSection } from "./components/awards-section";
import { CertificationsSection } from "./components/certifications-section";
import { EducationSection } from "./components/education-section";
import { OpenSourceSection } from "./components/open-source-section";
import { ProjectsSection } from "./components/projects-section";
import { TechStackSection } from "./components/tech-stack-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 py-8">
      {/* Hero Section */}
      <HeroSection />

      {/* Career Section */}
      <CareerSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Open Source Section */}
      <OpenSourceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Awards & Activities Section */}
      <AwardsSection />

      {/* Education Section */}
      <EducationSection />

      {/* Certifications Section */}
      <CertificationsSection />

      <footer className="text-center text-sm text-[var(--text-secondary)] py-8">
        <p>No Silver Bullet in Software Engineering.</p>
      </footer>
    </main>
  );
}
