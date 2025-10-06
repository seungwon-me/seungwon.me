"use client";

import { portfolioData } from "@/data/portfolio";
import { Section } from "./Section";

export function CareerSection() {
  return (
    <Section title="Career">
      <div>
        {portfolioData.careers?.map((career, index) => (
          <div key={index} className="relative py-3 group">
            <div className="bg-[var(--bg-secondary)] p-6 rounded-[12px] border border-[var(--border)] flex flex-col md:flex-row md:items-start md:justify-between gap-4 transition-transform duration-300">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 mb-1">
                  {career.companyLogoUrl && (
                    <img
                      src={career.companyLogoUrl}
                      alt={career.company + ' logo'}
                      className="w-11 h-11 object-contain"
                    />
                  )}
                  <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)] break-keep">
                    {career.company}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  {career.position}
                </p>
                {career.description && (
                  <p className="text-sm text-[var(--text-secondary)] break-keep whitespace-pre-line">
                    {career.description}
                  </p>
                )}
              </div>
              <p className="text-xs md:text-sm text-[var(--text-secondary)] font-mono whitespace-nowrap md:text-right">
                {career.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
} 