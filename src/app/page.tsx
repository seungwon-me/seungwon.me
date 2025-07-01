"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";
import { Section } from "./components/Section";
import { TechStackSection } from "./components/tech-stack-section";
import { EducationSection } from "./components/education-section";
import { AwardsSection } from "./components/awards-section";
import { CertificationsSection } from "./components/certifications-section";

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

      {/* Projects Section */}
      <ProjectsSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Education Section */}
      <EducationSection />

      {/* Awards & Activities Section */}
      <AwardsSection />

      {/* Certifications Section */}
      <CertificationsSection />
    </main>
  );
}
