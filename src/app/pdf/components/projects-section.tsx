"use client";

import { portfolioData } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";
import { Github, Link as LinkIcon } from "lucide-react";

function StaticProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-[var(--bg-secondary)] rounded-2xl overflow-hidden border border-[var(--border)]">
      <div className="h-80 relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8">
          <h3 className="text-4xl font-bold text-white tracking-tighter">
            {project.title}
          </h3>
          <p className="text-lg text-gray-200 mt-2">
            {project.tagline}
          </p>
          <p className="text-base text-gray-300 mt-1 font-mono">
            기간: {project.period}
          </p>
        </div>
      </div>
      
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-base text-[var(--text-secondary)] mb-8 whitespace-pre-line break-keep text-balance leading-relaxed">{project.description}</p>
            
            <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Key Contributions</h4>
            <ul className="text-base text-[var(--text-secondary)] list-disc list-inside space-y-3 mb-8">
              {project.contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>

            {project.retrospective && (
              <div className="mt-8 pt-4 border-t border-[var(--border)]">
                <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                  Retrospective
                </h4>
                <blockquote className="border-l-4 border-[var(--primary-blue)] pl-6 py-4">
                  <p className="text-base text-[var(--text-primary)] leading-relaxed whitespace-pre-line">{project.retrospective}</p>
                </blockquote>
              </div>
            )}
          </div>
          
          <div className="border-l border-[var(--border)] pl-8">
            <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1.5 text-sm rounded-full bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-secondary)] font-medium">
                  {tech}
                </span>
              ))}
            </div>
            
            {project.links && project.links.length > 0 && (
              <>
                <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Links</h4>
                <div className="flex flex-col gap-4">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-base text-[var(--text-primary)] font-medium"
                    >
                      {link.label.toLowerCase().includes("github") || link.label.toLowerCase().includes("code") ? (
                        <Github size={18} />
                      ) : (
                        <LinkIcon size={18} />
                      )}{" "}
                      {link.label}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section>
      <h2 className="text-4xl font-bold tracking-tight mb-10">Projects</h2>
      <div className="space-y-12">
        {portfolioData.projects.map((project) => (
          <StaticProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}