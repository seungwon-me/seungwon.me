"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const iconProps = {
  size: 16,
  className: "text-[var(--text-secondary)]",
};

const contactInfo = [
  {
    Icon: Mail,
    href: `mailto:${portfolioData.contact.email}`,
    text: portfolioData.contact.email,
  },
  {
    Icon: Phone,
    href: `tel:${portfolioData.contact.phone}`,
    text: portfolioData.contact.phone,
  },
  {
    Icon: Github,
    href: `https://${portfolioData.contact.github}`,
    text: portfolioData.contact.github,
  },
  {
    Icon: Linkedin,
    href: `https://${portfolioData.contact.linkedin}`,
    text: portfolioData.contact.linkedin,
  },
];

export function HeroSection() {
  return (
    <motion.section
      className="flex flex-col-reverse md:flex-row gap-12 items-start justify-between fade-in"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{portfolioData.name}</h1>
          <h2 className="text-xl md:text-2xl font-light text-[var(--text-secondary)]">{portfolioData.title}</h2>
        </div>
        <p className="text-[15px] md:text-[17px] text-[var(--text-primary)] max-w-xl whitespace-pre-line">{portfolioData.subtitle}</p>

        <div className="flex flex-col gap-3 text-sm mt-4">
          {contactInfo.map(({ Icon, href, text }) => (
            <a
              key={text}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <Icon {...iconProps} />
              <span className="font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">
                {text}
              </span>
            </a>
          ))}
        </div>
      </div>
      
      <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
        {portfolioData.profileImageUrl ? (
          <Image
            src={portfolioData.profileImageUrl}
            alt="Profile Image"
            fill
            className="object-cover rounded-full"
            priority
          />
        ) : (
          <div className="w-full h-full border-2 border-dashed border-[var(--border)] bg-[var(--bg-secondary)] rounded-full flex items-center justify-center">
            <span className="text-[var(--text-secondary)] text-xs">Profile Image</span>
          </div>
        )}
      </div>
    </motion.section>
  );
}