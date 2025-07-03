export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export type Project = {
  id: string;
  title: string;
  tagline: string;
  period: string;
  description: string;
  contributions: string[];
  retrospective?: string;
  technologies: string[];
  imageUrl: string;
  codeUrl?: string;
  websiteUrl?: string;
  isActive?: boolean;
};

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

export type OpenSourcePR = {
  title: string;
  date: string;
  description: string;
  url?: string;
};

export type OpenSourceRepo = {
  repoName: string;
  repoLogoUrl?: string;
  repoUrl?: string;
  prs: OpenSourcePR[];
};

export interface Career {
  company: string;
  position: string;
  period: string;
  description?: string;
  companyLogoUrl?: string;
}

export type PortfolioData = {
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
  openSourceContributions?: OpenSourceRepo[];
  careers?: Career[];
}; 