"use client";

import { portfolioData } from "@/data/portfolio";
import { Section } from "./Section";

export function EducationSection() {
  return (
    <Section title="Education">
      <div className="flex flex-col relative ml-4 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-[var(--border)]">
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="relative pl-6 py-8 group">
            {/* 타임라인 노드 */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 -ml-[6px] w-3 h-3 rounded-full bg-[var(--border)] border border-[var(--border)]" />

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