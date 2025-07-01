"use client";

import { portfolioData } from "@/data/portfolio";
import { Section } from "./Section";

export function AwardsSection() {
  return (
    <Section title="Awards & Activities">
      <div>
        {portfolioData.awards.map((award, index) => (
          <div key={index} className="relative py-3 group">
            <div className="bg-[var(--bg-secondary)] p-6 rounded-[12px] border border-[var(--border)] flex flex-col md:flex-row md:items-start md:justify-between gap-4 transition-transform duration-300">
              <div className="flex flex-col gap-1">
                <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)] break-keep">
                  {award.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] whitespace-pre-line break-keep">
                  {award.description}
                </p>
                {award.details && (
                  <p className="text-sm text-[var(--text-secondary)] break-keep">
                    {award.details}
                  </p>
                )}
              </div>

              <p className="text-xs md:text-sm text-[var(--text-secondary)] font-mono whitespace-nowrap md:text-right">
                {award.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
} 