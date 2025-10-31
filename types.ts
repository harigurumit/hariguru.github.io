
export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  link: string;
  doi?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface ProfileData {
  name: string;
  title: string;
  organization: string;
  bio: string[];
  contact: {
    email: string;
    phone?: string;
  };
  socials: {
    github: string;
    linkedin: string;
    googleScholar: string;
  };
  researchInterests: string[];
  publications: Publication[];
  projects: Project[];
}
