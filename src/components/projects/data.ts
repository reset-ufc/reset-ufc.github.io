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
    slug: "HackaTudo",
    name: "HackaTudo! Desmistificando a Criação de Soluções Inovadoras",
    description:
      "O projeto HackaTudo! Desmistificando a Criação de Soluções Inovadoras tem como objetivo principal promover a interação entre o Campus de Itapajé ? Jardins de Anita e sua comunidade local na identificação de problemas enfrentados pela comunidade local e a criação de soluções inovadoras, com base nos conhecimentos teóricos e práticos adquiridos pelos alunos durante os cursos de graduação. Além disso, o projeto também visa estimular a criação de equipes multidisciplinares, com diferentes perfis, para a idealização e criação das soluções.",
    summary:
      "Estudo sobre a integração de ferramentas de segurança em processos de CI para mitigar vulnerabilidades em sistemas de aprendizado de máquina.",
    period: "2022/Atual",
    status: "Em andamento",
    funding: "NaN",
    nature: "Extensão",
    keywords: [
      "Soluções inovadoras",
      "Comunidade local",
      "Interação",
      "Equipes multidisciplinares",
    ],
    link: "/projects/HackaTudo",
  },
  {
    slug: "ENGEDADOS",
    name: "Núcleo de Estudos e Práticas em Engenharia de Software e Ciência de Dados",
    description:
      "O projeto ENGEDADOS: Núcleo de Estudos e Práticas em Engenharia de Software e Ciência de Dados tem como principal objetivo a disseminação dos conceitos de engenharia de software e ciência de dados, integrados às disciplinas relacionadas a essas áreas, apoiando a familiarização dos alunos com ferramentas e técnicas especializadas. Portanto, acredita-se que com esse projeto de extensão, os participantes (alunos e comunidade externa) se sentirão mais motivados e capacitados para resolverem problemas reais que são enfrentados pela comunidade local e regiões circunvizinhas. Os participantes também serão capazes de disseminar o conhecimento adquirido em engenharia de software e ciência de dados, por meio da proposição de cursos e tutoriais abertos à comunidade local, promovendo a integração da comunidade externa com a universidade.",
    summary:
      "Estudo sobre a integração de ferramentas de segurança em processos de CI para mitigar vulnerabilidades em sistemas de aprendizado de máquina.",
    period: "2022/Atual",
    status: "Em andamento",
    funding: "NaN",
    nature: "Extensão",
    keywords: [
      "Engenharia de software",
      "Ciência de dados",
      "Ferramentas e técnicas especializadas",
      "Integração da comunidade",
    ],
    link: "/projects/ENGEDADOS",
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
    slug: "monitoria-de-programação-integrada",
    name: "Monitoria de Programação Integrada",
    description:
      "A monitoria atenderá em 2022.1 e 2022.2 pelo menos seis turmas diferentes de Fundamentos de Programação, Laboratório de Programação, e Introdução a Ciência de Dados abrangendo as linguagens de programação C, Python e R nos três cursos de graduação do campus da UFC em Itapajé. Cada turma tem no mínimo 30 alunos matriculados, totalizando cerca de 180 alunos. Esses disciplinas são pré-requisitos para diferentes disciplinas nos três cursos de graduação. Além disso, tais disciplinas normalmente possuem um alto índice de reprovação, em cursos de computação. Portanto, é importante que existam monitores que conheçam essas linguagens de programação e tenham horário livre, tanto para dar apoio em sala de aula, quanto para encontros semanais junto com os alunos. Tais monitores, com conhecimento de linguagens de programação se tornam necessários como uma estratégia para aumentar o índice de aprovação em disciplinas de programação.",
    summary:
      "Estudo sobre a integração de ferramentas de segurança em processos de CI para mitigar vulnerabilidades em sistemas de aprendizado de máquina.",
    period: "2022/Atual",
    status: "Em andamento",
    funding: "NaN",
    nature: "Ensino",
    keywords: [
      "Monitoria",
      "Linguagens de programação",
      "Apoio em sala de aula",
    ],
    link: "/projects/manutenção-inteligente-de-sistemas-de-software",
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
    slug: "clusters-econômicos-de-inovação",
    name: "Clusters Econômicos de Inovação - Indústria da Moda e Calçadista - Litoral Oeste",
    description:
      "SEDET-ADECE-FUNCAP. Esse projeto faz parte de um projeto maior, denominado ?ECOSSISTEMA DE INOVAÇÃO E O DESENVOLVIMENTO ECONÔMICO DO ESTADO DO CEARÁ? que está dentro do programa Cientista-Chefe na área de Inovação. Objetivo Geral: Fomentar o desenvolvimento de soluções inovadoras endereçadas a problemas que afetam a produtividade, a competitividade, a geração de renda e a atração de talentos em setores priorizados em cada Região de Planejamento do Estado. Objetivos Específicos: ? Selecionar Pesquisadores regionais que possam atuar nos Clusters Econômicos de Inovação distribuídos pelas macrorregiões do Estado; ? Promover a transferência de conhecimento entre os ICTs (Instituições de Ciência e Tecnologia) do Estado e os seus setores produtivos; ? Promover a construção empreendedora de soluções tecnológicas inovadoras que beneficiam setores produtivos do estado; ? Realizar pesquisa de análise da evolução dos negócios inovadores e sua relação com setores produtivos tradicionais do Estado e o impacto no ecossistema de inovação; ? Promover a realização de projetos que possam contribuir com o desenvolvimento desses programas e seu impacto sobre a CT&I.",
    summary:
      "Estudo sobre a integração de ferramentas de segurança em processos de CI para mitigar vulnerabilidades em sistemas de aprendizado de máquina.",
    period: "2022/2022",
    status: "Concluído",
    funding: "SEDET-ADECE-FUNCAP",
    nature: "Desenvolvimento",
    keywords: [
      "Ecossistema de inovação",
      "Produtividade",
      "Transferência de conhecimento",
      "Soluções tecnológicas",
    ],
    link: "/projects/clusters-econômicos-de-inovação",
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
];
