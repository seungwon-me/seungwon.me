"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";
import { Github, Link as LinkIcon, X } from "lucide-react";

function ProjectCard({ project, onSelect }: { project: Project; onSelect: () => void; }) {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={onSelect}
      className="relative h-60 rounded-[12px] overflow-hidden cursor-pointer group"
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <motion.img
        src={project.imageUrl}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
        layoutId={`image-${project.id}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <motion.h3
          layoutId={`title-${project.id}`}
          className="text-2xl font-bold text-white"
        >
          {project.title}
        </motion.h3>
        <motion.p
          layoutId={`tagline-${project.id}`}
          className="text-sm text-gray-300 mt-1"
        >
          {project.tagline}
        </motion.p>
      </div>
    </motion.div>
  );
}

function ExpandedProjectCard({ project, onDeselect }: { project: Project; onDeselect: () => void; }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={onDeselect}>
      <motion.div
        layoutId={`card-${project.id}`}
        className="relative max-w-5xl w-full max-h-[90vh] bg-[var(--bg-secondary)] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      >
        <motion.button 
          onClick={onDeselect} 
          className="absolute top-4 right-4 text-white/70 hover:text-white z-20 bg-black/30 rounded-full p-2 transition-colors"
          aria-label="Close project details"
        >
          <X size={20} />
        </motion.button>
        
        <div className="max-h-[90vh] overflow-y-auto no-scrollbar">
          <div className="h-96 relative">
            <motion.img
              src={project.imageUrl}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-top"
              layoutId={`image-${project.id}`}
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
             <div className="absolute bottom-0 left-0 p-8">
              <motion.h3
                layoutId={`title-${project.id}`}
                className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
              >
                {project.title}
              </motion.h3>
              <motion.p
                layoutId={`tagline-${project.id}`}
                className="text-lg text-gray-200 mt-2"
              >
                {project.tagline}
              </motion.p>
              <motion.p
                className="text-base text-gray-300 mt-1 font-mono"
              >
                기간: {project.period}
              </motion.p>
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
                
                <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Links</h4>
                <div className="flex flex-col gap-4">
                  {project.websiteUrl && (
                    <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-base text-[var(--text-primary)] hover:text-[var(--primary-blue)] transition-colors font-medium">
                      <LinkIcon size={18} /> Website
                    </a>
                  )}
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-base text-[var(--text-primary)] hover:text-[var(--primary-blue)] transition-colors font-medium">
                      <Github size={18} /> Code
                    </a>
                  )}
                </div>
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
      <h2 className="text-4xl font-bold tracking-tight mb-10">Projects</h2>
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