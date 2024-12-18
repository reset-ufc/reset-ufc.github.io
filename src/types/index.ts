export interface teacherMemberProps {
  isCoordinator?: boolean;
  isViceCoordinator?: boolean;
  name: string;
  lastName?: string;
  role: string;
  description: string;
  researchKeywords: string[];
  publishedPapers: string[];
  contact: { email: string; github: string; latter?: string };
  email: string;
  github: string;
  img?: string;
}

export interface teamMemberProps {
  name: string;
  role: string;
  email: string;
  github: string;
  img?: string;
  description: string;
  contact: { email: string; github: string; latter?: string };
  researchKeywords: string[];
  publishedPapers: string[];
}

export interface ToolProps {
  id: number;
  name: string;
  description: string;
  image: string;
  highlight?: boolean;
}

export interface NewsCardProps {
  news: {
    image: string;
    title: string;
    category: string;
    date: string;
    description?: string;
  };
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
