import Image from "next/image";
import type { OpenSourcePR, OpenSourceRepo } from "@/types/portfolio";

type OpenSourceContentProps = {
  repos?: OpenSourceRepo[];
  isPdf?: boolean;
};

const getPrTitleClassName = (isPdf: boolean): string => {
  if (isPdf) {
    return "text-lg font-bold !text-[var(--text-secondary)]";
  }

  return "text-lg font-bold !text-[var(--text-secondary)] hover:!text-[var(--text-primary)] transition-colors duration-300";
};

const renderPrTitle = (pr: OpenSourcePR, isPdf: boolean) => {
  const titleClassName = getPrTitleClassName(isPdf);

  if (!pr.url) {
    return <span className={titleClassName}>{pr.title}</span>;
  }

  return (
    <a href={pr.url} target="_blank" rel="noopener noreferrer">
      <span className={titleClassName}>{pr.title}</span>
    </a>
  );
};

export function OpenSourceContent({ repos, isPdf = false }: OpenSourceContentProps) {
  return (
    <div className="space-y-8">
      {repos?.map((repo) => {
        return (
          <div key={repo.repoName} className="">
            <div className="flex items-center gap-3 mb-2">
              {repo.repoLogoUrl &&
                (repo.repoUrl ? (
                  <a href={repo.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={repo.repoLogoUrl}
                      alt={`${repo.repoName} logo`}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded cursor-pointer"
                    />
                  </a>
                ) : (
                  <Image
                    src={repo.repoLogoUrl}
                    alt={`${repo.repoName} logo`}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded"
                  />
                ))}
              {repo.repoUrl ? (
                <a
                  href={repo.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    isPdf
                      ? "text-lg font-bold !text-[var(--text-secondary)]"
                      : "text-lg font-bold !text-[var(--text-secondary)] hover:!text-[var(--text-primary)] transition-colors duration-300"
                  }
                >
                  {repo.repoName}
                </a>
              ) : (
                <span className="text-lg font-bold text-[var(--text-secondary)]">{repo.repoName}</span>
              )}
            </div>
            <div className="space-y-3">
              {repo.prs.map((pr) => (
                <div
                  key={pr.url ?? `${repo.repoName}-${pr.title}-${pr.date}`}
                  className={
                    isPdf
                      ? "bg-[var(--bg-secondary)] p-6 rounded-[12px] border border-[var(--border)] flex flex-col md:flex-row md:items-start md:justify-between gap-4"
                      : "bg-[var(--bg-secondary)] p-6 rounded-[12px] border border-[var(--border)] flex flex-col md:flex-row md:items-start md:justify-between gap-4 transition-transform duration-300"
                  }
                >
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex flex-wrap items-center gap-2 w-full">
                      <h3
                        className={
                          isPdf
                            ? "text-base md:text-lg font-semibold text-[var(--text-primary)] break-keep"
                            : "text-base md:text-lg font-semibold text-[var(--text-primary)] break-keep group-hover:text-[var(--primary-blue)] transition-colors duration-300"
                        }
                      >
                        {renderPrTitle(pr, isPdf)}
                      </h3>
                      <span
                        className={
                          isPdf
                            ? "text-sm text-[var(--text-secondary)] break-keep"
                            : "text-sm text-[var(--text-secondary)] break-keep group-hover:text-[var(--text-primary)] transition-colors duration-300"
                        }
                      >
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
        );
      })}
    </div>
  );
}
