"use client";

import { useEffect, useId, useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";
import { Github, Link as LinkIcon, X } from "lucide-react";

function ProjectCard({ project, onSelect }: { project: Project; onSelect: () => void; }) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-label={`${project.title} 프로젝트 상세 보기`}
      className="relative block h-60 w-full appearance-none rounded-[12px] border-0 bg-transparent p-0 text-left overflow-hidden cursor-pointer group"
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>
        <p className="text-sm text-gray-300 mt-1">
          {project.tagline}
        </p>
      </div>
    </motion.button>
  );
}

function ExpandedProjectCard({ project, onDeselect }: { project: Project; onDeselect: () => void; }) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousActiveElement = document.activeElement as HTMLElement | null;
    const previousBodyOverflow = document.body.style.overflow;
    const focusableSelector = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onDeselect();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      previousActiveElement?.focus();
    };
  }, [onDeselect]);

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) onDeselect();
      }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative max-w-5xl w-full max-h-[90vh] bg-[var(--bg-secondary)] rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.98, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 8 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <motion.button 
          ref={closeButtonRef}
          onClick={onDeselect} 
          className="absolute top-4 right-4 text-white/70 hover:text-white z-20 bg-black/30 rounded-full p-2 transition-colors"
          aria-label="Close project details"
        >
          <X size={20} />
        </motion.button>
        
        <div className="max-h-[90vh] overflow-y-auto no-scrollbar">
          <div className="h-96 relative">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="100vw"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
             <div className="absolute bottom-0 left-0 p-8">
              <h3 id={titleId} className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
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
                          className="flex items-center gap-3 text-base text-[var(--text-primary)] hover:text-[var(--primary-blue)] transition-colors font-medium"
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
      </motion.div>
    </div>
  );
}


export function ProjectsSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = selectedId ? portfolioData.projects.find(p => p.id === selectedId) : null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold tracking-tight mb-10">Side Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={() => setSelectedId(project.id)} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ExpandedProjectCard 
            project={selectedProject} 
            onDeselect={() => setSelectedId(null)} 
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}
