"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Section } from "./Section";

export function CareerSection() {
  return (
    <Section title="Career">
      <div className="font-sans">
        {portfolioData.careers?.map((career, index) => (
          <div key={index} className="pb-8 last:pb-0">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0 space-y-4">
                <div className="flex items-center gap-3">
                  {career.companyLogoUrl && (
                    <Image
                      src={career.companyLogoUrl}
                      alt={`${career.company} logo`}
                      width={36}
                      height={36}
                      className="h-9 w-9 shrink-0 object-contain"
                    />
                  )}
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] break-keep">
                      {career.company}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[var(--text-secondary)]">
                      {career.position}
                    </p>
                  </div>
                </div>
                {career.description && (
                  <p className="max-w-4xl text-sm leading-6 text-[var(--text-secondary)] break-keep">
                    {career.description}
                  </p>
                )}
                {career.principles && (
                  <div className="max-w-4xl border-l-2 border-[var(--border)] pl-4">
                    {career.principles.map((principle) => (
                      <p
                        key={principle}
                        className="text-sm leading-6 text-[var(--text-secondary)] break-keep"
                      >
                        {principle}
                      </p>
                    ))}
                  </div>
                )}
                {career.highlights && (
                  <div className="grid gap-x-8 gap-y-5 pt-1 lg:grid-cols-2">
                    {career.highlights.map((highlight) => (
                      <div
                        key={highlight.title}
                        className="break-inside-avoid border-t border-[var(--border)] pt-4"
                      >
                        <p className="text-sm font-semibold text-[var(--text-primary)] break-keep">
                          {highlight.title}
                        </p>
                        {highlight.summary && (
                          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)] break-keep">
                            {highlight.summary}
                          </p>
                        )}
                        {highlight.items && (
                          <ul className="mt-3 space-y-2">
                            {highlight.items.map((item) => (
                              <li
                                key={item}
                                className="flex gap-2 text-sm leading-6 text-[var(--text-secondary)] break-keep"
                              >
                                <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[var(--text-secondary)] opacity-60" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-sm text-[var(--text-secondary)] font-mono whitespace-nowrap md:text-right">
                {career.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
} 
