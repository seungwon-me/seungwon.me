import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";
import { TechStackSection } from "./components/tech-stack-section";
import { EducationSection } from "./components/education-section";
import { AwardsSection } from "./components/awards-section";
import { CertificationsSection } from "./components/certifications-section";
import { OpenSourceSection } from "./components/open-source-section";
import { CareerSection } from "./components/career-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 py-8">
      {/* Hero Section */}
      <HeroSection />

      {/* Career Section */}
      <CareerSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Tech Stack & Open Source Section */}
      <div className="break-before pt-12">
        <TechStackSection />
        <div className="my-12" />
        {/* Certifications Section */}
        <CertificationsSection />
      </div>

      <OpenSourceSection />

      {/* Education Section */}
      <EducationSection />

      {/* Awards & Activities Section */}
      <AwardsSection />

      <footer className="text-center text-sm text-[var(--text-secondary)] py-8">
        <p>No Silver Bullet in Software Engineering.</p>
      </footer>
    </main>
  );
}
