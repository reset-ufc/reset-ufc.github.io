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
