export interface TeamMemberProps {
  name: string;
  lastName?: string;
  role: string;
  description: string;
  researchKeywords: string[];
  publishedPapers: string[];
  contact: { email: string; github: string };
  email: string;
  github: string;
  img?: string;
}

export interface ToolProps {
  id: number;
  name: string;
  description: string;
  image: string;
  highlight?: boolean;
}

export interface NewsCardProps {
  category: string;
  title: string;
  date: string;
  imageUrl: string;
}

interface ProjectMember {
  name: string;
  role: string;
}

interface StudentsInvolved {
  undergraduate?: number;
  phd?: number;
  master?: number;
}

export interface ResearchProjectProps {
  slug: string;
  title: string;
  description: string;
  funding: string;
  status: string;
  nature: string;
  studentsInvolved: StudentsInvolved;
  members: ProjectMember[];
  keywords: string[];
}