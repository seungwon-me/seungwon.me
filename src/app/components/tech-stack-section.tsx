"use client";

import { portfolioData } from "@/data/portfolio";
import { Section } from "./Section";

export function TechStackSection() {
  return (
    <Section title="Tech Stack">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.techStack.map((category) => (
          <div
            key={category.category}
            className="bg-[var(--bg-secondary)] rounded-lg overflow-hidden border border-[var(--border)]"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-md bg-[var(--bg-primary)] text-[var(--text-secondary)] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
} 