"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 py-8">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col md:flex-row gap-8 items-start justify-between fade-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline gap-4 border-b border-current pb-2">
            <h1 className="text-[42px] leading-[48px] font-bold">{portfolioData.name}</h1>
            <span className="text-h2 font-light">{portfolioData.title}</span>
          </div>
          <p className="text-body-lg text-[var(--text-secondary)] mt-2 mb-2">{portfolioData.subtitle}</p>
          <div className="flex flex-col gap-1 text-body-sm">
            <span className="info-item">
              Email: <a href={`mailto:${portfolioData.contact.email}`} className="font-medium">{portfolioData.contact.email}</a>
            </span>
            <span className="info-item">
              Phone: <a href={`tel:${portfolioData.contact.phone}`} className="font-medium">{portfolioData.contact.phone}</a>
            </span>
            <span className="info-item">
              GitHub: <a href={`https://${portfolioData.contact.github}`} target="_blank" rel="noopener noreferrer" className="font-medium">{portfolioData.contact.github}</a>
            </span>
            <span className="info-item">
              LinkedIn: <a href={`https://${portfolioData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="font-medium">{portfolioData.contact.linkedin}</a>
            </span>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
          {portfolioData.profileImageUrl ? (
            <Image
              src={portfolioData.profileImageUrl}
              alt="프로필 이미지"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full border-2 border-[var(--border)] bg-[var(--bg-secondary)] flex items-center justify-center">
              <span className="text-[var(--text-secondary)] text-body-sm">프로필 이미지</span>
            </div>
          )}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="fade-in"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="section-title">About</h2>
        <p className="text-body-lg mt-2 whitespace-pre-line">
          {portfolioData.about}
        </p>
      </motion.section>

      {/* Projects Section - List Format */}
      <motion.section
        className="fade-in"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="section-title">Projects</h2>
        <div className="mt-8 space-y-8">
          {portfolioData.projects.map((project) => (
            <div 
              key={project.id}
              className={`flex flex-col gap-6 p-6 border ${
                project.isActive ? 'border-l-2 border-l-[var(--primary-blue)]' : ''
              } border-[var(--border)] bg-[var(--bg-secondary)]`}
            >
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-h3 font-semibold">{project.title}</h3>
                  <span className={`text-caption ${
                    project.isActive ? 'text-[var(--primary-blue)]' : 'text-[var(--text-secondary)]'
                  }`}>
                    {project.period}
                  </span>
                </div>
                <p className="text-body mb-3 whitespace-pre-line">{project.description}</p>
                <div className="mb-3">
                  <div className="text-body-sm font-medium mb-1">주요 기여:</div>
                  <ul className="text-body-sm text-[var(--text-secondary)] list-disc list-inside space-y-1">
                    {project.contributions.map((contribution, index) => (
                      <li key={index}>{contribution}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.websiteUrl && (
                    <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-body-sm">Web-site</a>
                  )}
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-body-sm">Code</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        className="fade-in"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="section-title">Tech Stack</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.techStack.map((category, index) => (
            <div key={index}>
              <div className="font-semibold mb-2">{category.category}</div>
              <div className="border-b border-[var(--border)] mb-2" />
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="fade-in"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="section-title">Education</h2>
        <div className="mt-6 space-y-6">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="p-4 border border-[var(--border)] bg-[var(--bg-secondary)]">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-h3 font-semibold">{edu.school}</h3>
                  <span className="text-caption text-[var(--text-secondary)]">{edu.period}</span>
                </div>
                <p className="text-body-sm text-[var(--text-secondary)] mb-1">{edu.major}</p>
                {edu.gpa && <p className="text-body-sm">학점: {edu.gpa}</p>}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Awards & Activities Section */}
      <motion.section
        className="fade-in"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="section-title">Awards & Activities</h2>
        <div className="mt-6 space-y-4">
          {portfolioData.awards.map((award, index) => (
            <div key={index} className="flex items-start gap-4 p-4 border border-[var(--border)] bg-[var(--bg-secondary)]">
              <div className="w-16 h-16 flex-shrink-0 border border-[var(--border)] bg-[var(--bg-primary)] flex items-center justify-center">
                <span className="text-[var(--text-secondary)] text-caption">{award.icon || '🏆'}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-h3 font-semibold">{award.title}</h3>
                  <span className="text-caption text-[var(--text-secondary)]">{award.period}</span>
                </div>
                <p className="text-body-sm text-[var(--text-secondary)] whitespace-pre-line">{award.description}</p>
                {award.details && <p className="text-body-sm">{award.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        className="fade-in"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="section-title">Certifications</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioData.certifications.map((cert, index) => (
            <div key={index} className="p-4 border border-[var(--border)] bg-[var(--bg-secondary)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 border border-[var(--border)] bg-[var(--bg-primary)] flex items-center justify-center">
                  <span className="text-[var(--text-secondary)] text-caption">{cert.icon || '📜'}</span>
                </div>
                <div>
                  <h3 className="text-h3 font-semibold">{cert.title}</h3>
                  <p className="text-caption text-[var(--text-secondary)]">{cert.date}</p>
                </div>
              </div>
              <p className="text-body-sm text-[var(--text-secondary)]">{cert.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
