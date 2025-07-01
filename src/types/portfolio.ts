export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface Project {
  id: string;
  title: string;
  tagline?: string;
  period: string;
  description: string;
  contributions: string[];
  technologies: string[];
  websiteUrl?: string;
  codeUrl?: string;
  imageUrl?: string;
  isActive?: boolean;
}

export interface TechStack {
  category: string;
  technologies: string[];
}

export interface Education {
  school: string;
  period: string;
  major: string;
  gpa?: string;
}

export interface Award {
  title: string;
  period: string;
  description: string;
  details?: string;
  icon?: string;
}

export interface Certification {
  title: string;
  date: string;
  description: string;
  icon?: string;
}

export interface PortfolioLink {
  label: string;
  url: string;
}

export interface PortfolioFile {
  label: string;
  fileUrl: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  about: string;
  contact: ContactInfo;
  profileImageUrl?: string;
  projects: Project[];
  techStack: TechStack[];
  education: Education[];
  awards: Award[];
  certifications: Certification[];
  portfolioLinks?: PortfolioLink[];
  portfolioFiles?: PortfolioFile[];
} 