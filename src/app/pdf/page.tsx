"use client";
import { portfolioData } from "@/data/portfolio";
import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";
import { Section } from "./components/Section";
import { TechStackSection } from "./components/tech-stack-section";
import { EducationSection } from "./components/education-section";
import { AwardsSection } from "./components/awards-section";
import { CertificationsSection } from "./components/certifications-section";
import { OpenSourceSection } from "./components/open-source-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 py-8">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <Section title="About">
        <p className="text-base md:text-lg text-[var(--text-secondary)] whitespace-pre-line max-w-3xl">
          {portfolioData.about}
        </p>
      </Section>

      {/* Career Section */}
      {/* <CareerSection /> */}

      {/* Projects Section */}
      <ProjectsSection />

      {/* Tech Stack & Open Source Section */}
      <div className="break-before pt-12">
        <TechStackSection />
        <div className="my-12" />
        <OpenSourceSection />
      </div>

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
