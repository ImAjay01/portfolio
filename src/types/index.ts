export interface Skill {
  name: string;
  icon: React.ComponentType;
  description: string;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: React.ComponentType;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}