interface ProjectDataProps {
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

export const ProjectsData: ProjectDataProps[] = [
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
    keywords: [
      "editais",
      "assistente virtual",
      "NLP",
      "LLMs",
      "acessibilidade",
    ],
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
  {
    slug: "aprendendo-variabilidade-de-software-a-partir-da-evolução-do-software",
    name: "Aprendendo Variabilidade de Software a partir da Evolução do Software",
    description:
      "Investigação da automação de segurança na integração contínua de sistemas baseados em aprendizado de máquina.",
    summary:
      "Estudo sobre a integração de ferramentas de segurança em processos de CI para mitigar vulnerabilidades em sistemas de aprendizado de máquina.",
    period: "2024/2025",
    status: "Em andamento",
    funding: "CAPES/COFECUB",
    nature: "Pesquisa",
    keywords: [
      "Variabilidade",
      "Aprendizado de máquina",
      "Recomendação",
      "Avaliação empírica",
    ],
    link: "/projects/aprendendo-variabilidade-de-software-a-partir-da-evolução-do-software",
  },
  {
    slug: "manutenção-inteligente-de-sistemas-de-software",
    name: "AMAINTAIN - Manutenção Inteligente de Sistemas de Software",
    description:
      "utilizar técnicas de Inteligência Artificial para ajudar profissionais na manutenção de software. Serão aplicadas técnicas de mineração de dados, processamento de linguagem natural e algoritmos de otimização para melhorar atividades como a correção de bugs, melhoria de código e gerência de dívida técnica.",
    summary:
      "Estudo sobre a integração de ferramentas de segurança em processos de CI para mitigar vulnerabilidades em sistemas de aprendizado de máquina.",
    period: "2024/2025",
    status: "Em andamento",
    funding: "CNPq/MCTI",
    nature: "Pesquisa",
    keywords: [
      "Engenharia de Software",
      "Manutenção de Software",
      "Inteligência Artificial",
      "Mineração de Dados",
    ],
    link: "/projects/manutenção-inteligente-de-sistemas-de-software",
  },
  {
    slug: "modernização-de-sistemas-legados",
    name: "Modernização de Sistemas Legados: Suporte (Semi-)Automatizado e Práticas de Desenvolvimento",
    description:
      "Modernizar softwares legados essenciais no Ceará, utilizando boas práticas de desenvolvimento, novas tecnologias como microsserviços e Big Data, além de técnicas de refatoração e revisão de artefatos. O objetivo é manter a competitividade das organizações e evitar a descontinuação dos softwares, melhorando a qualidade e a estrutura do código legado.",
    summary:
      "Estudo sobre a integração de ferramentas de segurança em processos de CI para mitigar vulnerabilidades em sistemas de aprendizado de máquina.",
    period: "2023/2024",
    status: "Concluído",
    funding: "FUNCAP-BPI",
    nature: "Pesquisa",
    keywords: [
      "Software Legado",
      "Refatoração",
      "Microsserviços",
      "Modernização",
    ],
    link: "/projects/modernização-de-sistemas-legados",
  },
  {
    slug: "modernização-assistida-de-softwares-legados-para-adoção-de-tecnologias-disruptivas",
    name: "Modernização Assistida de Softwares Legados para Adoção de Tecnologias Disruptivas",
    description:
      "O projeto MAssiSo, focado no Rio de Janeiro, visa modernizar softwares legados essenciais utilizando tecnologias disruptivas como microsserviços e Blockchain. Propõe desenvolver um sistema recomendador para auxiliar na refatoração de código legado, investigando técnicas de otimização e recomendações para melhorar a qualidade do software.",
    summary:
      "Estudo sobre a integração de ferramentas de segurança em processos de CI para mitigar vulnerabilidades em sistemas de aprendizado de máquina.",
    period: "2019/2025",
    status: "Concluído",
    funding: "FAPERJ",
    nature: "Pesquisa",
    keywords: [
      "Software Legado",
      "Refatoração",
      "Tecnologias Disruptivas",
      "Sistema Recomendador",
    ],
    link: "/projects/modernização-assistida-de-softwares-legados-para-adoção-de-tecnologias-disruptivas",
  },
];
