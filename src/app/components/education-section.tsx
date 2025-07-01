"use client";

import { portfolioData } from "@/data/portfolio";
import { Section } from "./Section";

export function EducationSection() {
  return (
    <Section title="Education">
      <div>
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="relative py-3 group">
            <div className="bg-[var(--bg-secondary)] p-6 rounded-md border border-[var(--border)] flex flex-col md:flex-row md:items-start md:justify-between gap-4 transition-transform duration-300">
              <div className="flex flex-col gap-1">
                <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)] break-keep">
                  {edu.school}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {edu.major}
                </p>
                {edu.gpa && (
                  <p className="text-sm text-[var(--text-secondary)]">GPA: {edu.gpa}</p>
                )}
              </div>

              <p className="text-xs md:text-sm text-[var(--text-secondary)] font-mono whitespace-nowrap md:text-right">
                {edu.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
} 