interface FeaturedProjectsProps {
  slug: string;
  name: string;
  description: string;
  summary: string;
  period: string;
  status: string;
  funding: string;
  nature: string;
  keywords: string[];
  link: string;
}

export const FeaturedProjectsData: FeaturedProjectsProps[] = [
  {
    slug: "peacemaker-bot",
    name: "The PeacemakerBot",
    description:
      "Bot não-intrusivo para monitorar incivilidade em pull requests",
    summary:
      "Desenvolvimento de um bot automatizado para identificar e moderar comportamentos incivilizados em conversações de pull requests em projetos de software aberto.",
    period: "2024/2025",
    status: "Em andamento",
    funding: "PIBITI",
    nature: "Pesquisa",
    keywords: ["incivilidade", "bot", "NLP", "LLMs", "GitHub"],
    link: "/projects/peacemaker-bot",
  },
  {
    slug: "freire-assistente-virtual",
    name: "FREIRE - Assistente Virtual",
    description:
      "Assistente virtual para facilitar o acesso a informações sobre editais e oportunidades internas na UFC, utilizando técnicas de NLP e LLMs.",
    summary:
      "Desenvolvimento de um assistente virtual chamado FREIRE, voltado para estudantes, docentes e técnicos administrativos da UFC. O objetivo é mitigar dificuldades no acesso e compreensão de editais, oferecendo uma solução robusta e contextualizada.",
    period: "2024",
    status: "Em andamento",
    funding: "PIBI/UFC",
    nature: "Desenvolvimento",
    keywords: ["editais", "assistente virtual", "LLMs", "acessibilidade"],
    link: "/projects/freire-assistente-virtual",
  },
  {
    slug: "security-automation-ci",
    name: "Segurança Automatizada em CI para ML",
    description:
      "Investigação da automação de segurança na integração contínua de sistemas baseados em aprendizado de máquina.",
    summary:
      "Estudo sobre a integração de ferramentas de segurança em processos de CI para mitigar vulnerabilidades em sistemas de aprendizado de máquina.",
    period: "2024/2025",
    status: "Em andamento",
    funding: "PIBIC",
    nature: "Pesquisa",
    keywords: ["segurança", "automação", "CI", "ML"],
    link: "/projects/security-automation-ci",
  },
];
