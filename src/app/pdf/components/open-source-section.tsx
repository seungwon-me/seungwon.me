import { portfolioData } from "@/data/portfolio";
import { Section } from "./Section";

export function OpenSourceSection() {
  return (
    <Section title="Open Source Contributions">
      <div className="space-y-8">
        {portfolioData.openSourceContributions?.map((repo, idx) => (
          <div key={idx} className="">
            <div className="flex items-center gap-3 mb-2">
              {repo.repoLogoUrl && (
                <a
                  href={repo.repoUrl ? repo.repoUrl.split("/").slice(0, 4).join("/") : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={repo.repoLogoUrl} alt={repo.repoName + ' logo'} className="w-8 h-8 rounded cursor-pointer" />
                </a>
              )}
              {repo.repoUrl ? (
                <a href={repo.repoUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-bold !text-[var(--text-secondary)] hover:!text-[var(--text-primary)] transition-colors duration-300">
                  {repo.repoName}
                </a>
              ) : (
                <span className="text-lg font-bold text-[var(--text-secondary)]">{repo.repoName}</span>
              )}
            </div>
            <div className="space-y-3">
              {repo.prs.map((pr, prIdx) => (
                <div key={prIdx} className="bg-[var(--bg-secondary)] p-6 rounded-[12px] border border-[var(--border)] flex flex-col md:flex-row md:items-start md:justify-between gap-4 transition-transform duration-300">
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex flex-wrap items-center gap-2 w-full">
                      <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)] break-keep group-hover:text-[var(--primary-blue)] transition-colors duration-300">
                      <a 
  href={pr.url} 
  target="_blank" 
  rel="noopener noreferrer" 
>
  <span className="text-lg font-bold !text-[var(--text-secondary)] hover:!text-[var(--text-primary)] transition-colors duration-300">{pr.title}</span>
</a>
                      </h3>
                      <span className="text-sm text-[var(--text-secondary)] break-keep group-hover:text-[var(--text-primary)] transition-colors duration-300">
                        {pr.description}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-[var(--text-secondary)] font-mono whitespace-nowrap md:text-right">
                    {pr.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
} 