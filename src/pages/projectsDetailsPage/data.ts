import { ResearchProjectProps } from "../../types";

export const researchProject: ResearchProjectProps[] = [
  {
    slug: "peacemaker-bot",
    title:
      "Construção de um bot não-intrusivo para monitorar traços de incivilidade de desenvolvedores em conversações de pull requests",
    description:
      "PIBITI 2024/2025 (Desenvolvimento Tecnológico e Inovação) - Edital N 06/2024 - Em ambientes de desenvolvimento de software aberto (OSS), como o GitHub, as interações entre os desenvolvedores são essenciais para o progresso dos projetos. Tais interações tendem a ocorrer por meio de conversações em pull requests. No entanto, essas interações podem ser prejudicadas por comportamentos incivilizados, tais como comentários desrespeitosos e ofensivos. Como consequência desses comportamentos, os desenvolvedores podem ser desencorajados a contribuir com o projeto, ou até mesmo resultar em uma piora na qualidade do código. Nesse contexto, ainda não existem muitas soluções automatizadas para lidar com a ocorrência de traços de incivilidade em conversações de pull requests. Portanto, o principal objetivo desse projeto é propor um bot não-intrusivo e automatizado (The PeacemakerBot) capaz de auxiliar desenvolvedores e gerentes de projetos na identificação e moderação de comportamentos incivilizados em conversações de pull requests. A ideia é utilizar técnicas de Natural Language Processing (NLP) e Large Language Models (LLMs) capazes de analisar grandes volumes de texto, compreender padrões linguísticos e detectar expressões que denotam incivilidade como parte da construção do bot. Para alcançar esse objetivo, primeiramente iremos compreender o estado atual da detecção de incivilidade em conversações em OSS. Em seguida, iremos selecionar e analisar tecnologias baseadas em NLP e LLMs, para que assim seja desenvolvido o PeacemakerBot integrado ao GitHub. Finalmente, iremos conduzir estudos experimentais para avaliar a eficácia e os efeitos causados pela moderação nas interações entre desenvolvedores por meio da utilização do PeacemakerBot. Adicionalmente, iremos propor a criação de diretrizes para o uso responsável do bot em conversações de pull requests. Portanto, espera-se que a solução proposta possa ajudar a promover um ambiente mais saudável e colaborativo para os desenvolvedores.",
    status: "Em andamento",
    funding: "PIBITI",
    nature: "Pesquisa",
    studentsInvolved: {
      undergraduate: 5,
      phd: 1,
    },
    members: [
      {
        name: "Anderson Gonçalves Uchôa",
        role: "Coordenador",
      },
      {
        name: "Matheus Feitosa de Oliveira Rabelo",
        role: "Integrante",
      },
      {
        name: "José Eric Mesquita Coelho",
        role: "Integrante",
      },
      {
        name: "Carlos Jefté Bastos de Mesquita Freire",
        role: "Integrante",
      },
      {
        name: "ANTONIO LUCAS MELO DE SOUSA",
        role: "Integrante",
      },
    ],
    keywords: ["incivilidade", "bot", "NLP", "LLMs", "GitHub"],
  },
  {
    slug: "freire-assistente-virtual",
    title:
      "FREIRE - Assistente Virtual para facilitar o acesso a informações de editais na UFC",
    description:
      "PIBI/UFC n 04/2024 - Programa Inovando UFC. Estudantes, docentes e técnicos administrativos da UFC enfrentam dificuldades para acessar informações sobre editais e oportunidades internas. A comunicação dessas informações ocorre por meio de editais em linguagem técnica, redes sociais e sites de pró-reitorias, o que não é eficaz nem acessível, especialmente para estudantes. Editais com oferta de bolsas também passam despercebidos por docentes e TAEs. Este projeto propõe a criação de um assistente virtual chamado FREIRE, utilizando técnicas de NLP e LLMs para analisar grandes volumes de texto e compreender padrões linguísticos. O objetivo é facilitar o acesso a informações de editais de forma robusta e contextualizada, contribuindo para um ambiente mais inclusivo e informado.",
    status: "Em andamento",
    funding: "PIBI/UFC",
    nature: "Desenvolvimento",
    studentsInvolved: {
      undergraduate: 3,
      master: 1,
      phd: 2,
    },
    members: [
      {
        name: "Anderson Gonçalves Uchôa",
        role: "Coordenador",
      },
      {
        name: "Elisângela da Silva Rodrigues",
        role: "Integrante",
      },
      {
        name: "Bruna Thainá Castro Amazonas",
        role: "Integrante",
      },
      {
        name: "Arthur Willame Barroso de Mesquita",
        role: "Integrante",
      },
      {
        name: "Artur de Oliveira da Rocha Franco",
        role: "Integrante",
      },
      {
        name: "Carlos Jefté Bastos de Mesquita Freire",
        role: "Integrante",
      },
      {
        name: "Antonio Cruz Gomes",
        role: "Integrante",
      },
    ],
    keywords: [
      "editais",
      "assistente virtual",
      "NLP",
      "LLMs",
      "acessibilidade",
    ],
  },
  {
    slug: "monitoria-integrada-de-matematica-aplicada-a-computacao",
    title: "Monitoria Integrada de Matemática Aplicada à Computação",
    description:
      "As disciplinas de Matemática Computacional, Métodos Numéricos e Otimização Contínua objetivam familiarizar o aluno com a lógica matemática acerca da implementação das variadas linguagens computacionais, bem como a compreensão da teoria matemática através da visualização. Essa familiarização depende diretamente dos conhecimentos das linguagens Python, Matlab, e do software estatístico R, bem como o conhecimento base em função de uma e várias variáveis. A monitoria atenderá de 2023.1 e 2023.2 pelo menos para uma turma do curso de Segurança da Informação (1 semestre-Matemática Computacional) e duas turmas do Curso de Ciência de Dados (3 semestre-Otimização Contínua; 4 semestre-Métodos Numéricos) no campus da UFC em Itapajé-CE englobando as ementas das disciplinas citadas de forma teórica e prática. Cada turma tem no mínimo 30 alunos matriculados totalizando 90 alunos. Essas disciplinas são pré-requisitos para diferentes disciplinas no curso tecnológico de Ciência de Dados e Segurança da Informação. Nesse sentido, é de fundamental importância que existam monitores que conheçam e dominem a teoria a ser aplicada usando essas diferentes linguagens de programação.",
    status: "Em andamento",
    nature: "Ensino",
    funding: "NaN",
    studentsInvolved: {
      undergraduate: 90,
    },
    members: [
      {
        name: "Jose Leonardo Esteves da Silva",
        role: "Coordenador",
      },
      {
        name: "Francisco Samuel Sales Pinheiro Pinto",
        role: "Integrante",
      },
      {
        name: "Luciana Sousa Martins",
        role: "Integrante",
      },
    ],
    keywords: [
      "Matemática Computacional",
      "Métodos Numéricos",
      "Otimização Contínua",
      "Python",
      "Matlab",
      "R",
    ],
  },
  {
    slug: "security-automation-ci",
    title:
      "Investigando a Automação de Segurança na Integração Contínua de Sistemas Baseados em Aprendizado de Máquina",
    description:
      "PIBIC 2024/2025 - Edital N 01/2024 - Os sistemas baseados em aprendizado de máquina (ML) estão amplamente difundidos, despertando interesse na academia e na indústria. Com a popularização desses sistemas, a prática de integração contínua (CI) tornou-se fundamental para garantir uma entrega rápida e consistente de novas funcionalidades. No entanto, a segurança é frequentemente negligenciada nesse processo, deixando os sistemas vulneráveis a ataques. Para mitigar esses riscos, torna-se essencial integrar atividades de segurança nos processos de CI, permitindo a detecção precoce de vulnerabilidades de segurança. No contexto dos sistemas baseados em ML, estudos anteriores revelam que uma parcela significativa dos projetos integra serviços de CI em seus fluxos de trabalho, com ênfase em testes e construção de software. No entanto, há uma lacuna de conhecimento sobre a adoção de atividades de segurança nesses processos. Portanto, esse projeto tem como objetivo investigar a automação de segurança em sistemas baseados em ML durante o processo de CI. Para isso, serão selecionados sistemas baseados em ML disponíveis no GitHub e que utilizam práticas de CI. Em seguida, serão identificados e minerados arquivos e logs relacionados a serviços de CI como Travis CI, Circle CI e GitHub Actions. Com base em uma análise manual desses arquivos, serão identificadas e caracterizadas ferramentas de segurança, analisando assim a prevalência e distribuição das atividades de segurança em sistemas baseados em ML. Adicionalmente, será aplicado um questionário aos desenvolvedores dos projetos selecionados, visando compreender sua percepção sobre a importância da automação de segurança em sistemas baseados em ML e os desafios enfrentados na implementação dessas práticas. Portanto, espera-se que com a condução desse estudo seja possível fornecer insights valiosos para fortalecer a segurança em sistemas baseados em ML, contribuindo significativamente para a proteção contra ameaças cibernéticas.",
    status: "Em andamento",
    nature: "Pesquisa",
    funding: "PIBIC",
    studentsInvolved: {
      phd: 1,
    },
    members: [
      {
        name: "Anderson Gonçalves Uchôa",
        role: "Coordenador",
      },
    ],
    keywords: ["segurança", "automação", "CI", "ML"],
  },
  {
    slug: "aprendendo-variabilidade-de-software-a-partir-da-evolução-do-software",
    title:
      "Aprendendo Variabilidade de Software a partir da Evolução do Software",
    description:
      "Chamada Programa CAPES/COFECUB Edital No 08/2023 - O projeto propõe uma abordagem para compreender a variabilidade de software por meio de sua análise evolutiva. A variabilidade de software refere-se à capacidade de customização de um sistema de software para atender a diferentes requisitos de uso. No entanto, compreender e gerenciar essa variabilidade é um desafio devido à sua natureza dinâmica e em constante evolução. Portanto, o projeto propõe uma abordagem inovadora baseada em aprendizado de máquina. Através da coleta e análise de dados evolutivos dos sistemas de software, busca-se identificar padrões e tendências que possam ajudar a compreender como a variabilidade se manifesta ao longo do tempo. O projeto envolve a adaptação de algoritmos e métodos existentes na literatura para análise da variabilidade. Nós temos como objetivo construir um sistema de recomendação que fornecerá insights e sugestões para auxiliar os desenvolvedores na tomada de decisões durante a manutenção e evolução do software. Além disso, o projeto inclui uma etapa de avaliação empírica, na qual serão realizados experimentos controlados para coletar dados quantitativos e qualitativos sobre as soluções propostas. Com esses experimentos, busca-se validar a eficácia das abordagens desenvolvidas e obter insights adicionais sobre a variabilidade de software. Outro componente essencial do projeto é a disseminação do conhecimento. O projeto produzirá soluções de código aberto e abordagens inovadoras de alto interesse para a indústria de software brasileira. Promovendo assim a manutenção e fortalecimento da representação brasileira na rede internacional de pesquisa em engenharia de software, e o avanço da ciência e tecnologia.",
    status: "Em andamento",
    nature: "Pesquisa",
    funding: "CAPES/COFECUB",
    studentsInvolved: {
      phd: 8,
    },
    members: [
      {
        name: "Juliana Alves Pereira ",
        role: "Coordenador",
      },
      {
        name: "Anderson Gonçalves Uchôa",
        role: "Integrante",
      },
      {
        name: "Alessandro Garcia",
        role: "Integrante",
      },
      {
        name: "Wesley Klewerton Guez Assunção",
        role: "Integrante",
      },
      {
        name: "Eduardo Sany Laber",
        role: "Integrante",
      },
      {
        name: "Mathieu Acher",
        role: "Integrante",
      },
      {
        name: "Djamel Khelladi ",
        role: "Integrante",
      },
      {
        name: "Paul Temple",
        role: "Integrante",
      },
    ],
    keywords: [
      "Variabilidade",
      "Aprendizado de máquina",
      "Recomendação",
      "Avaliação empírica",
    ],
  },
  {
    slug: "manutenção-inteligente-de-sistemas-de-software",
    title: "AMAINTAIN - Manutenção Inteligente de Sistemas de Software",
    description:
      " Chamada CNPq/MCTI No 10/2023 - Faixa A - Grupos Emergentes - Atualmente, tecnologias digitais são usadas para diversos aspectos da vida de uma pessoa, como entretenimento, trabalho etc. Assim, a indústria de software cresce a cada ano, com uma quantidade cada vez maior de produtos sendo desenvolvidos. Segundo Sommerville, a Engenharia de Software (ES) consiste no uso de abordagens científicas para solucionar problemas de software. Como sub-área da ES, a Manutenção de Software refere-se à atualização de um software após ser entregue aos usuários. Dentre as atividades de manutenção, estão a correção de bugs, melhoria de código, gerência de dívida técnica etc. Segundo Lehman, um software precisa mudar continuamente para permanecer útil. Assim, em média, mais da metade dos recursos de um projeto de software são dedicados à sua manutenção. Ao considerar a atual indústria de software, a quantidade massiva de dados, junto à complexidade dos sistemas, faz com que profissionais tenham dificuldades em realizar manutenção de forma eficiente. Em paralelo, avanços na área de Inteligência Artificial (IA) tem ganhado notoriedade. Técnicas como mineração de dados, processamento de linguagem natural e otimização matemática foram aplicadas com sucesso em diversas áreas do conhecimento. Assim, este projeto busca investigar e utilizar técnicas de IA para auxiliar profissionais em atividades de manutenção de software. A mineração de dados será usada para analisar grandes quantidades de dados de manutenção para reconhecer padrões e identificar melhores práticas. Almeja-se o uso de processamento de linguagem natural para auxiliar em tarefas de escrita e compreensão de texto, como gerência de dívida técnica e revisão de código, por exemplo. Algoritmos de otimização serão aplicados a tarefas de manutenção de caráter combinatório, como modularização de código e priorização de testes, por exemplo. Assim, este projeto irá expandir o conhecimento científico da ES, investigando e propondo novas soluções para manutenção de sistemas de software.",
    status: "Em andamento",
    nature: "Pesquisa",
    funding: "CAPES/COFECUB",
    studentsInvolved: {
      phd: 8,
    },
    members: [
      {
        name: "Matheus Paixao ",
        role: "Coordenador",
      },
      {
        name: "Anderson Gonçalves Uchôa",
        role: "Integrante",
      },
      {
        name: "Paulo Henrique Mendes Maia",
        role: "Integrante",
      },
      {
        name: "Jerffeson Teixeira de Souza",
        role: "Integrante",
      },
      {
        name: "Ismayle de Sousa Santos",
        role: "Integrante",
      },
      {
        name: "Allysson Allex de Paula Araújo",
        role: "Integrante",
      },
      {
        name: "Thiago do Nascimento Ferreira",
        role: "Integrante",
      },
      {
        name: "Chaiyong Ragkhitwetsagul",
        role: "Integrante",
      },
    ],
    keywords: [
      "Engenharia de Software",
      "Manutenção de Software",
      "Inteligência Artificial",
      "Mineração de Dados",
    ],
  },
  {
    slug: "modernização-de-sistemas-legados",
    title:
      "Modernização de Sistemas Legados: Suporte (Semi-)Automatizado e Práticas de Desenvolvimento",
    description:
      "FUNCAP-BPI Edital N 04/2022. O Estado do Ceará é responsável por concentrar uma parcela significativa do desenvolvimento de software abrangendo cerca de 20 da produção nacional. Muitos desses softwares se tornam legados: fornecem funcionalidades essenciais para organizações, porém usam tecnologias comumente defasadas. Há uma grande dificuldade em manter ou mesmo modernizar esses softwares, especialmente devido à degradação estrutural que afeta o código. No entanto, vários desses softwares são importantes demais para serem descartados. Para as organizações manterem-se competitivas nos cenários nacional e internacional, é crucial a modernização de softwares legados e a utilização de boas práticas de desenvolvimento de software. A inclusão de novas tecnologias disruptivas, tais como microsserviços, e Big Data, ajuda a: (i) evitar a descontinuação de softwares legados essenciais, e (ii) oferecer várias outras oportunidades para as organizações. Além disso, a utilização de boas práticas de desenvolvimento, ajuda na modernização de software legados. Para realizar tais modernizações, uma das principais práticas utilizadas é a refatoração e a revisão dos artefatos do software. A refatoração é a principal e mais desafiadora prática, visto que o nível de degradação de código legado requer reestruturações complexas. Neste sentido, o desenvolvedor tem a necessidade de identificar e revisar quais artefatos do software, e.g., código-fonte, que devem passar por refatorações. Estudos relacionados apontam que a utilização de práticas pobres de desenvolvimento podem influenciar negativamente na restruturação e na diminuição do nível de degradação do código legado. Além disso, a degradação de software com variados níveis de maturidade de práticas de desenvolvimento é uma característica inerente da produção de software nacionais, incluindo o Estado do Ceará. Deste modo, o projeto visa: (i) realizar estudos com os sistemas legados da indústria cearense, que estão passando pelo processo de modernização; (ii) investigar práticas desenvolvimento de software que auxiliem na identificação, aplicação e reestruturação do código legado; (iii) propor e desenvolver uma técnica que auxilie no processo de modernização e evolução do código legado; e (iv) avaliar o impacto na qualidade do software após a re-estruturação proposta pelo técnica.",
    status: "Concluído",
    nature: "Pesquisa",
    funding: "FUNCAP-BPI ",
    studentsInvolved: {
      undergraduate: 4,
      phd: 5,
    },
    members: [
      {
        name: "Anderson Gonçalves Uchôa",
        role: "Coordenador",
      },
      {
        name: "Rafael Maiani de Mello",
        role: "Integrante",
      },
      {
        name: "GARCIA, ALESSANDRO",
        role: "Integrante",
      },
      {
        name: "PAIXÃO, MATHEUS",
        role: "Integrante",
      },
      {
        name: "BEZERRA, CARLA",
        role: "Integrante",
      },
      {
        name: "Paulo Henrique Mendes Maia",
        role: "Integrante",
      },
    ],
    keywords: [
      "Engenharia de Software",
      "Manutenção de Software",
      "Inteligência Artificial",
      "Mineração de Dados",
    ],
  },
  {
    slug: "modernização-assistida-de-softwares-legados-para-adoção-de-tecnologias-disruptivas",
    title:
      "Modernização Assistida de Softwares Legados para Adoção de Tecnologias Disruptivas",
    description:
      "A cidade do Rio de Janeiro é responsável por concentrar uma parcela significativa do desenvolvimento de software abrangendo cerca de 40 da produção nacional. Muitos desses softwares se tornam legados: fornecem funcionalidades essenciais para organizações, porém usam tecnologias comumente defasadas. Há uma grande dificuldade em manter ou mesmo modernizar esses softwares, especialmente devido à degradação estrutural que afeta o código. No entanto, vários desses softwares são muito importantes para serem descartados. Para as organizações manterem-se competitivas nos cenários nacional e internacional, é crucial a modernização de softwares legados. A inclusão de novas tecnologias disruptivas, tais como microsserviços e Blockchain, ajuda a: (i) evitar a descontinuação de softwares legados essenciais, e (ii) oferecer várias outras oportunidades para as organizações. Para realizar tais modernizações, refatoração é a principal e mais desafiadora atividade, visto que o nível de degradação de código legado requer reestruturações complexas. O desenvolvedor ainda tem a necessidade de identificar quais refatorações serão mais adequadas para o sistema alvo, o que acaba se tornando uma tarefa dispendiosa e propensa a erros se feita manualmente. Estudos relacionados focam apenas na automatização de refatorações simples. As técnicas para incorporação de tecnologias disruptivas deveriam prover um apoio automatizado para várias etapas de refatorações complexas, considerando o contexto do sistema que está sendo modernizado. Deste modo, o projeto MAssiSo visa: (i) realizar estudos com os sistemas legados da indústria fluminense, que estão passando pelo processo de modernização; (ii) propor e desenvolver um sistema recomendador que auxilie no processo de refatoração de código legado; (iii) investigar técnicas de otimização e recomendações que permitam a identificação, aplicação e reintegração de refatoração em código legado, (iv) avaliar o impacto na qualidade do software após a reestruturação proposta pelo recomendador. MAssiSo tem um grupo de quatro pesquisadores, que possuem diferentes bolsas de produtividade, além de serem referências internacionais nas áreas de Engenharia de Software e Otimização.",
    status: "Concluído",
    nature: "Pesquisa",
    funding: "FAPERJ",
    studentsInvolved: {
      master: 7,
      phd: 6,
    },
    members: [
      {
        name: "Anderson Gonçalves Uchôa",
        role: "Integrante",
      },
      {
        name: "Alessandro Garcia",
        role: "Coordenador",
      },
      {
        name: "Marcos Kalinowski",
        role: "Integrante",
      },
    ],
    keywords: [
      "Software Legado",
      "Refatoração",
      "Tecnologias Disruptivas",
      "Sistema Recomendador",
    ],
  },
  {
    slug: "ReSTaurA",
    title: "ReSTaurA - Refatoramento Sequencial: Teoria e Suporte Automatizado",
    description:
      "A cidade do Rio de Janeiro é responsável por concentrar uma parcela significativa do desenvolvimento de software abrangendo cerca de 40 da produção nacional. Muitos desses softwares se tornam legados: fornecem funcionalidades essenciais para organizações, porém usam tecnologias comumente defasadas. Há uma grande dificuldade em manter ou mesmo modernizar esses softwares, especialmente devido à degradação estrutural que afeta o código. No entanto, vários desses softwares são muito importantes para serem descartados. Para as organizações manterem-se competitivas nos cenários nacional e internacional, é crucial a modernização de softwares legados. A inclusão de novas tecnologias disruptivas, tais como microsserviços e Blockchain, ajuda a: (i) evitar a descontinuação de softwares legados essenciais, e (ii) oferecer várias outras oportunidades para as organizações. Para realizar tais modernizações, refatoração é a principal e mais desafiadora atividade, visto que o nível de degradação de código legado requer reestruturações complexas. O desenvolvedor ainda tem a necessidade de identificar quais refatorações serão mais adequadas para o sistema alvo, o que acaba se tornando uma tarefa dispendiosa e propensa a erros se feita manualmente. Estudos relacionados focam apenas na automatização de refatorações simples. As técnicas para incorporação de tecnologias disruptivas deveriam prover um apoio automatizado para várias etapas de refatorações complexas, considerando o contexto do sistema que está sendo modernizado. Deste modo, o projeto MAssiSo visa: (i) realizar estudos com os sistemas legados da indústria fluminense, que estão passando pelo processo de modernização; (ii) propor e desenvolver um sistema recomendador que auxilie no processo de refatoração de código legado; (iii) investigar técnicas de otimização e recomendações que permitam a identificação, aplicação e reintegração de refatoração em código legado, (iv) avaliar o impacto na qualidade do software após a reestruturação proposta pelo recomendador. MAssiSo tem um grupo de quatro pesquisadores, que possuem diferentes bolsas de produtividade, além de serem referências internacionais nas áreas de Engenharia de Software e Otimização.",
    status: "Em andamento",
    nature: "Pesquisa",
    funding: "CNPq",
    studentsInvolved: {
      master: 6,
      phd: 7,
    },
    members: [
      {
        name: "Anderson Gonçalves Uchôa",
        role: "Integrante",
      },
      {
        name: "Alessandro Garcia",
        role: "Coordenador",
      },
    ],
    keywords: ["Refatorações sequenciais", "Heurísticas", "Qualidade"],
  },
  {
    slug: "HackaTudo",
    title: "HackaTudo! Desmistificando a Criação de Soluções Inovadoras",
    description:
      "O projeto HackaTudo! Desmistificando a Criação de Soluções Inovadoras tem como objetivo principal promover a interação entre o Campus de Itapajé ? Jardins de Anita e sua comunidade local na identificação de problemas enfrentados pela comunidade local e a criação de soluções inovadoras, com base nos conhecimentos teóricos e práticos adquiridos pelos alunos durante os cursos de graduação. Além disso, o projeto também visa estimular a criação de equipes multidisciplinares, com diferentes perfis, para a idealização e criação das soluções.",
    status: "Em andamento",
    nature: "Extensão",
    funding: "NaN",
    studentsInvolved: {
      undergraduate: 5,
      phd: 5,
    },
    members: [
      {
        name: "Anderson Gonçalves Uchôa",
        role: "Integrante",
      },
      {
        name: "Elisângela da Silva Rodrigues",
        role: "Coordenador",
      },
      {
        name: "Alberto Sampaio Lima",
        role: "Integrante",
      },
      {
        name: "Rodrigo Lins Rodrigues",
        role: "Integrante",
      },
      {
        name: "Francisco Gabriel Barreto Gomes",
        role: "Integrante",
      },
      {
        name: "Thais Andrade Castro",
        role: "Integrante",
      },
      {
        name: "Laura de Lima Mendes",
        role: "Integrante",
      },
      {
        name: "Fernanda Roing ",
        role: "Integrante",
      },
      {
        name: "Igor Bruno de Sousa Nascimento",
        role: "Integrante",
      },
      {
        name: "João Luiz dos Santos Filho",
        role: "Integrante",
      },
    ],
    keywords: [
      "Soluções inovadoras",
      "Comunidade local",
      "Interação",
      "Equipes multidisciplinares",
    ],
  },
  {
    slug: "ENGEDADOS",
    title:
      "ENGEDADOS - Núcleo de Estudos e Práticas em Engenharia de Software e Ciência de Dados",
    description:
      "O projeto ENGEDADOS: Núcleo de Estudos e Práticas em Engenharia de Software e Ciência de Dados tem como principal objetivo a disseminação dos conceitos de engenharia de software e ciência de dados, integrados às disciplinas relacionadas a essas áreas, apoiando a familiarização dos alunos com ferramentas e técnicas especializadas. Portanto, acredita-se que com esse projeto de extensão, os participantes (alunos e comunidade externa) se sentirão mais motivados e capacitados para resolverem problemas reais que são enfrentados pela comunidade local e regiões circunvizinhas. Os participantes também serão capazes de disseminar o conhecimento adquirido em engenharia de software e ciência de dados, por meio da proposição de cursos e tutoriais abertos à comunidade local, promovendo a integração da comunidade externa com a universidade.",
    status: "Em andamento",
    nature: "Extensão",
    funding: "NaN",
    studentsInvolved: {
      undergraduate: 3,
      phd: 6,
    },
    members: [
      {
        name: "Anderson Gonçalves Uchôa",
        role: "Coordenador",
      },
      {
        name: "Carla Ilane Moreira Bezerra ",
        role: "Integrante",
      },
      {
        name: "Elisângela da Silva Rodrigues",
        role: "Integrante",
      },
      {
        name: "Alberto Sampaio Lima",
        role: "Integrante",
      },
      {
        name: "Bruna Barreto Mesquita",
        role: "Integrante",
      },
      {
        name: "João Henrique Gonçalves Medeiros Correa",
        role: "Integrante",
      },
      {
        name: "Pedro Jonnathan Matos de Sousa",
        role: "Integrante",
      },
      {
        name: "Rodrigo Lins Rodrigues",
        role: "Integrante",
      },
      {
        name: "Allan Michel Rocha dos Matos",
        role: "Integrante",
      },
    ],
    keywords: [
      "Engenharia de software",
      "Ciência de dados",
      "Ferramentas e técnicas especializadas",
      "Integração da comunidade",
    ],
  },
  {
    slug: "meninas-cientistas",
    title: "Meninas Cientistas: protagonismo feminino por meio da ciência",
    description:
      "O campus Jardins de Anita visa além da formação de bons profissionais na área da tecnologia da informação direcionados para o mercado de trabalho, busca também através projeto Meninas Cientistas: protagonismo feminino por meio da ciência estimular cada vez mais as discentes ingressas e egressas dos cursos de Análise e Desenvolvimento de Sistemas, Segurança da Informação e Ciência de Dados a adquirir gosto pela carreira científica bem como incentivar meninas que estudam nas escolas de ensino médio da cidade de Itapajé a tomarem gosto pela matemática e pela ciência em geral, assumindo um papel de protagonismo em sua realidade e na sociedade.",
    status: "Em andamento",
    nature: "Extensão",
    funding: "NaN",
    studentsInvolved: {
      undergraduate: 4,
      phd: 1,
    },
    members: [
      {
        name: "JOSE LEONARDO ESTEVES DA SILVA",
        role: "Coordenador",
      },
      {
        name: "Elisângela da Silva Rodrigues ",
        role: "Integrante",
      },
      {
        name: "EMILY CAMELO MENDONÇA",
        role: "Integrante",
      },
      {
        name: "GIOVANNA DIAS CASTRO DE OLIVEIRA ",
        role: "Integrante",
      },
      {
        name: "MARILENE SANTOS DUARTE",
        role: "Integrante",
      },
      {
        name: "VICTOR RODRIGUES MORALES",
        role: "Integrante",
      },
    ],
    keywords: ["Protagonismo", "Tecnologia", "Ciência"],
  },
  {
    slug: "ciencia-de-dados-e-esports",
    title:
      "Ciência de Dados e eSports: como a análise estatística contribui com os Jogos Eletrônicos",
    description:
      "Há muito tempo os fundamentos da Matemática, Teoria dos Jogos e Análise de Dados são aplicados a estudos sobre diversos aspectos dos jogos esportivos. Nesse contexto, recentemente os fundamentos dessas áreas de conhecimento têm sido aplicados a processos de análise de dados no universo dos eSports (ou Esportes Eletrônicos), gerando grande influência em processos de tomadas de decisão em jogos dessa natureza. Neste cenário, as análises de dados e a descoberta de padrões por meio da aplicação da Inteligência Artificial (IA) e Machine Learning podem auxiliar a análise de desempenho pessoal, destacando pontos fortes e fracos de jogadores com o objetivo de ajudá-los a impulsionar suas performances nos jogos. No entanto, a dinâmica dos jogos eletrônicos e a arquitetura desses ambientes gamificados se diferenciam entre si, assim como os incentivos e objetivos dos participantes. Para esses casos, diferentes métodos da Ciência de Dados podem ser aplicados para auxiliar a criação de estratégias aproximativas que gerem o menor erro possível. Este projeto tem como objetivo propor um curso de formação sobre Estatística aplicada a eSports para a comunidade acadêmica e para alunos de escolas de Ensino Médio do município de Itapajé-CE, instruindo-os a formular estratégias adaptativas e evolutivas em tempo real para jogos eletrônicos competitivos, como por exemplo o jogo League of Legends. Adicionalmente, é proposto para este projeto uma contribuição para a cidade Itapajé, que consiste na participação de estudantes do Ensino Médio no estudo sobre estatística descritiva, teoria da probabilidade e inferência estatística na atividade de análise de dados aplicada ao segmento de eSports, para compreenderem a importância da Ciência de Dados. Ao final, os participantes poderão compartilhar as experiências adquiridas em suas respectivas instituições.",
    status: "Em andamento",
    nature: "Extensão",
    funding: "NaN",
    studentsInvolved: {
      undergraduate: 4,
      phd: 2,
    },
    members: [
      {
        name: "Elisângela da Silva Rodrigues",
        role: "Coordenador",
      },
      {
        name: "Pedro Coelho Sampaio Filho",
        role: "Integrante",
      },
      {
        name: "MARIA EDINEUDA TEIXEIRA PINTO",
        role: "Integrante",
      },
      {
        name: "HITALO JOSEFERSON BATISTA NASCIMENTO",
        role: "Integrante",
      },
      {
        name: "VICTOR MATHEUS ARAUJO OLIVEIRA",
        role: "Integrante",
      },
      {
        name: "JOAO GABRIEL BASTOS SALES",
        role: "Integrante",
      },
    ],
    keywords: [
      "Estatística",
      "Ciência de Dados",
      "eSports",
      "Machine Learning",
    ],
  },
  {
    slug: "monitoria-integrada-estatistica-ciencia-de-dados",
    title: "Monitoria Integrada de Estatística para Ciência de Dados",
    description:
      "A Estatística proporciona os meios e as ferramentas para encontrar estrutura em dados, e assim fornecer insights sobre as informações mais profundas ali escondidas para um cientista de dados. As disciplinas de Probabilidade e Estatística, Inferência Estatística e Análise de Regressão I, constituem uma parte da formação estatística de um cientista de dados. São disciplinas que combinam conhecimentos teóricos e práticos, aplicados à base de dados reais oriundas de várias áreas do mercado de trabalho com a utilização de uma linguagem de programação, R ou Python, promovendo integração entre os conceitos de Estatística e Computação para de Ciência de Dados, como pode ser visto em [1], [2] e [3]. Portanto, é de fundamental importância oferecer aos discentes o apoio de monitores, que possuem o conhecimento teórico e que tenham experiência em linguagens de programação como Python e R. A monitoria dará suporte durante o ano de 2023, em pelo menos 3 turmas por semestre, visto que a disciplina de Probabilidade e Estatística é ofertada em mais de um curso no mesmo semestre, além disso, os monitores atenderão turmas de diferentes semestres do Curso de Ciência de Dados, totalizando, aproximadamente, 90 alunos. Por fim, destaca-se a importância desse projeto de monitoria para minimizar a evasão nos cursos, uma vez que esse é um tema central na Universidade.",
    status: "Em andamento",
    nature: "Ensino",
    funding: "NaN",
    studentsInvolved: {
      undergraduate: 3,
      phd: 1,
    },
    members: [
      {
        name: "Elisângela da Silva Rodrigues",
        role: "Coordenador",
      },
      {
        name: "Bruna Barreto Mesquita",
        role: "Integrante",
      },
      {
        name: "LARISSA VITORIA VASCONCELOS SOUSA",
        role: "Integrante",
      },
      {
        name: "EMILY CAMELO MENDONÇA",
        role: "Integrante",
      },
      {
        name: "SHELDA DE SOUZA RAMOS",
        role: "Integrante",
      },
    ],
    keywords: [
      "Estatística",
      "Ciência de Dados",
      "Probabilidade",
      "Inferência Estatística",
      "Análise de Regressão",
      "Python",
      "R",
    ],
  },
  {
    slug: "monitoria-integrada-ciencia-de-dados-inteligencia-artificial",
    title: "Monitoria Integrada de Ciência de Dados e Inteligência Artificial",
    description:
      "Disciplinas como Introdução à Ciência de dados; Inteligência artificial; Visualização de dados; Laboratório de Ciência de Dados e Redes Neurais Artificiais, constituem a formação profissional e científica de um cientista de dados. São disciplinas que combinam conhecimentos práticos e teóricos de matemática, ciência da computação e estatística. Assim, é de fundamental importância oferecer aos discentes o apoio de monitores, que possuem habilidades para além da teoria, e que sejam proficientes em linguagens de programação como Python, R, C e C++. Para além disso, este projeto tem o objetivo prover aos monitores a oportunidade para aprimorar os conhecimentos adquiridos em diferentes disciplinas.",
    status: "Em andamento",
    nature: "Ensino",
    funding: "NaN",
    studentsInvolved: {
      undergraduate: 2,
    },
    members: [
      {
        name: "Hitalo Joseferson Batista Nascimento",
        role: "Coordenador",
      },
    ],
    keywords: [
      "Ciência de Dados",
      "Inteligência Artificial",
      "Visualização de Dados",
      "Redes Neurais Artificiais",
    ],
  },
  {
    slug: "infraestrutura-como-mitigacao-autoscaling-ddos-kubernetes",
    title:
      "Infraestrutura como Mitigação: a utilização do Autoscaling como proteção contra ataques de DDoS em ambiente de Kubernetes",
    description:
      "Os ataques de negação de serviço (DoS) e sua forma distribuída (DDoS) são desafios permanentes na Internet, e se tornam um problema ainda mais complexo com a migração dos serviços e aplicações da Internet para infraestruturas de nuvem compartilhadas e centralizadas. Isso se agrava ainda mais quando os ataques de negação de serviço são realizados de forma similar a clientes legítimos, tornando a mitigação por descarte um grande problema, pois se adotada poderá descartar clientes legítimos confundidos como atacantes. Neste contexto, é necessária uma forma de mitigação dos ataques em que não realize o descarte. Atualmente, os serviços e aplicações na Internet estão utilizando um tipo de virtualização leve, chamada contêineres. A gerência e a orquestração de contêineres, em um ambiente de computação em nuvem, é normalmente realizada pela plataforma de nuvem Kubernetes. Entre as diversas funcionalidades dessa plataforma, existe o autoscaling, mecanismo responsável por realizar o dimensionamento automático dos recursos computacionais conforme a demanda de clientes. O autoscaling oferece uma escalabilidade, seja aumentando a quantidade de réplicas dos contêineres ou aumentando os recursos computacionais de um determinado contêiner. A proposta do presente projeto de pesquisa visa utilizar o mecanismo de autoscaling, disponível na infraestrutura de nuvem, para mitigar ataques de DDoS contra serviços instanciados em contêineres em um ambiente de nuvem. Ou seja, a proposta é atribuir uma nova funcionalidade ao mecanismo de autoscaling, realizando uma mitigação dos ataques e oferecendo uma maior disponibilidade aos clientes legítimos.",
    status: "Em andamento",
    nature: "Pesquisa",
    funding: "Universidade Federal do Ceará - Bolsa",
    studentsInvolved: {
      undergraduate: 4,
    },
    members: [
      {
        name: "João Henrique Gonçalves Medeiros Corrêa",
        role: "Coordenador",
      },
    ],
    keywords: [
      "Autoscaling",
      "DDoS",
      "Kubernetes",
      "Contêineres",
      "Mitigação de Ataques",
      "Computação em Nuvem",
    ],
  },
  {
    slug: "detecao-identificacao-ataques-negacao-servico-intrusao-nuvem",
    title:
      "Detecção e Identificação de ataques de negação de serviço e de intrusão em ambiente de nuvem utilizando algoritmos de aprendizado de máquina",
    description:
      "Este projeto de pesquisa visa detectar e identificar ataques de negação de serviço e de intrusão em ambiente de nuvem com auxílio de algoritmos de aprendizado de máquina. A proposta é utilizar dados oferecidos por serviços de telemetria dos ambientes de nuvem. Ou seja, os algoritmos de aprendizado de máquina podem ser utilizados nos datasets coletados do serviço de telemetria nativa da infraestrutura da nuvem para realizar a detecção e identificação desses ataques. Esses datasets contêm informações da máquina virtual e/ou de contêineres, vítima hospedada no ambiente de nuvem.",
    status: "Em andamento",
    nature: "Pesquisa",
    funding: "Universidade Federal do Ceará - Bolsa",
    studentsInvolved: {
      undergraduate: 6,
    },
    members: [
      {
        name: "João Henrique Gonçalves Medeiros Corrêa",
        role: "Coordenador",
      },
      {
        name: "Victor Rodrigues Morales",
        role: "Integrante",
      },
      {
        name: "Thais Adrielle Ferreira Rodrigues",
        role: "Integrante",
      },
    ],
    keywords: [
      "Aprendizado de Máquina",
      "Nuvem",
      "Ataques de Negação de Serviço",
      "Ataques de Intrusão",
      "Telemetria",
      "Máquina Virtual",
      "Contêineres",
    ],
  },
  {
    slug: "portal-de-estatistica-e-ciencia-de-dados",
    title: "Um Portal de Estatística e Ciência de Dados",
    description:
      "Este projeto tem como objetivo desenvolver uma aplicação WEB chamada de Portal de Estatística e Ciência de Dados que servirá como fonte de pesquisa para docentes e discentes da Universidade Federal do Ceará (UFC), assim como para a comunidade externa à UFC, tais como indústrias, comércio e educação básica, de forma a contribuir com o processo de compartilhamento de conhecimento com a sociedade. Adicionalmente, é proposto para este projeto uma contribuição para a cidade Itapajé que consiste na participação de estudantes do Ensino Médio que acompanharão e serão familiarizados com as tecnologias empregadas na construção do portal, bem como conceitos básicos sobre Estatística e Ciência de Dados. Tal participação ajudará na análise sobre quais ações impulsionam a busca de conteúdos práticos e teóricos referentes à Estatística e Ciência de Dados, bem como quais fatores são inibidores ou são facilitadores do processo de disseminação desses conhecimentos. Espera-se como resultados da pesquisa o desenvolvimento um Portal de Estatística e Ciência de Dados que disponibilizará conteúdos práticos e teóricos referentes à estatística descritiva, teoria da probabilidade e inferência estatística.",
    status: "Em andamento",
    nature: "Extensão",
    funding: "NaN",
    studentsInvolved: {
      undergraduate: 7,
      phd: 0,
    },
    members: [
      {
        name: "Elisângela da Silva Rodrigues",
        role: "Coordenador",
      },
      {
        name: "Laura de Lima Mendes",
        role: "Integrante",
      },
      {
        name: "MARIA BIANCA SOUSA COSTA",
        role: "Integrante",
      },
      {
        name: "Maria Vanessa Sousa Mesquita",
        role: "Integrante",
      },
      {
        name: "HITALO JOSEFERSON BATISTA NASCIMENTO",
        role: "Integrante",
      },
      {
        name: "MARIA EDINEUDA TEIXEIRA PINTO",
        role: "Integrante",
      },
      {
        name: "JOSE LEONARDO ESTEVES DA SILVA",
        role: "Integrante",
      },
      {
        name: "LUCIANA SOUSA MARTINS",
        role: "Integrante",
      },
      {
        name: "TIAGO DE ANDRADE CASTRO",
        role: "Integrante",
      },
      {
        name: "THAYS FERREIRA UCHOA ALBUQUERQUE",
        role: "Integrante",
      },
    ],
    keywords: ["Estatística", "Ciência de Dados", "Tecnologia Educacional"],
  },
  {
    slug: "empreendedorismo-e-inclusao-digital-itapaje",
    title:
      "Empreendedorismo e Inclusão Digital: Uma ação de inserção da economia itapajeense nas redes sociais",
    description:
      "A cidade de Itapajé, situada na região Litoral Oeste do Estado do Ceará, assim como diversas cidades brasileiras, existe um comércio/serviço local bastante movimentado, mas com uma abrangência limitada aos moradores da localidade, restringindo inclusive aos habitantes do bairro em que o comércio/serviço está inserido. A propaganda, elemento necessário para o desenvolvimento de qualquer empreendimento, são normalmente realizadas por carros/motos de som ou pelo popular 'boca-a-boca', a segunda opção, em muitos casos, a única utilizada. Inserir propagandas em rádios locais ou em outdoors requisitam um nível de investimento que normalmente esses comércios e serviços não dispõem. Por outro lado, com o advento das redes sociais, surgem espaços de compartilhamento e podem ser utilizados para a divulgação de produtos e serviços. Apesar da inserção individual nas redes sociais, o mesmo não acontece nos comércios e empresas constituídas na cidade de Itapajé. Há ainda muita dificuldade para obter informação disponível em redes sociais e na Internet de modo geral acerca dos produtos e serviços oferecidos pelos empreendedores locais. Assim, para estimular o empreendedorismo e o crescimento dos comércios e serviços da cidade de Itapajé, este projeto de extensão visa auxiliar os empreendedores ingressarem na atividade digital, com treinamento e elaboração de uma ação contínua voltada ao marketing digital.",
    status: "Em andamento",
    nature: "Extensão",
    funding: "NaN",
    studentsInvolved: {
      undergraduate: 3,
      phd: 1,
    },
    members: [
      {
        name: "João Henrique Gonçalves Medeiros Corrêa",
        role: "Coordenador",
      },
    ],
    keywords: [
      "Empreendedorismo",
      "Inclusão Digital",
      "Marketing Digital",
      "Redes Sociais",
    ],
  },
  {
    slug: "analise-da-difusao-e-transporte-de-neutrons-em-reatores-nucleares",
    title:
      "Análise da difusão e transporte de neutrons em reatores nucleares usando a estatística não-extensiva",
    description:
      "A solução para a função fluxo de neutrons em reatores nucleares é amplamente descrita e utilizada na engenharia nuclear. Nesse sentido, o desenvolvimento de novas versões alternativas para modelar e controlar o fluxo de neutrons se torna uma alternativa útil e em muitos casos, dependendo do tipo de reator, relevante. Este projeto de pesquisa visa investigar o comportamento da função fluxo de neutrons em reatores nucleares usando as mecânicas estatística de Tsallis e Kaniadakis observado seus ganhos e perdas em relação ao espectro já conhecido na energia nuclear.",
    status: "Em andamento",
    nature: "Pesquisa",
    funding: "NaN",
    studentsInvolved: {
      phd: 2,
    },
    members: [
      {
        name: "Jose Leonardo Esteves da Silva",
        role: "Coordenador",
      },
      {
        name: "Julio Cesar Lombaldo Fernandes",
        role: "Integrante",
      },
    ],
    keywords: [
      "Difusão de neutrons",
      "Transporte de neutrons",
      "Reatores nucleares",
      "Estatística não-extensiva",
      "Mecânica de Tsallis",
      "Mecânica de Kaniadakis",
    ],
  },
  {
    slug: "analise-global-da-funcao-wq-de-lambert-tsallis",
    title: "Análise Global da função Wq de Lambert-Tsallis e suas aplicações",
    description:
      "A função Wq de Lambert-Tsallis é uma generalização direta da função W de Lambert usando a q-exponencial de Tsallis. Essa função tem se mostrado útil para encontrar soluções analíticas e numéricas em sistemas físicos onde as variáveis dependente e independente se relacionam por alguma lei de potência. Também é utilizada para descrever o funcional Disentropia, uma função que em muitos sentidos, é dual a entropia. Este projeto de pesquisa tem por finalidade investigar globalmente a função de Lambert-Tsallis introduzida por Ramos afim de estender o conhecimento sobre a mesma.",
    status: "Em andamento",
    nature: "Pesquisa",
    funding: "NaN",
    studentsInvolved: {
      phd: 2,
    },
    members: [
      {
        name: "Jose Leonardo Esteves da Silva",
        role: "Coordenador",
      },
      {
        name: "Rubens Viana Ramos",
        role: "Integrante",
      },
      {
        name: "Kléber Zuza Nobrega",
        role: "Integrante",
      },
    ],
    keywords: [
      "Função Wq de Lambert-Tsallis",
      "q-exponencial de Tsallis",
      "Disentropia",
      "Entropia",
    ],
  },
  {
    slug: "dedilhando-sonhos-integracao-campus-jardins-anita-itapaje",
    title:
      "Dedilhando sonhos: uma abordagem musical como integração do campus Jardins de Anita e a cidade de Itapajé",
    description:
      "Considerando o fato do Campus Jardins de Anita ser o campus mais recente do interior da Universidade Federal do Ceará, e de possuir até o momento apenas cursos de graduação com temática em tecnologia, é relatado pelo corpo discente em geral que há uma carência rotineira de atividades e políticas voltadas para fins musicais, teatrais, de desenho e outras manifestações artísticas da expressão humana, bem como ações com essas características que promovam extensão e identificação com a cidade da unidade acadêmica. Nesse sentido, este projeto tem como justificativa promover a disseminação e ambientação musical e artística entre os discentes, docentes e servidores da UFC do campus de Itapajé por meio de apresentações, rodas de músicas de estilos e naturezas diversas e parcerias com grupos musicais pertencentes a cidade de Itapajé-CE.",
    status: "Concluído",
    nature: "Extensão",
    funding: "NaN",
    studentsInvolved: {
      undergraduate: 90,
    },
    members: [
      {
        name: "Jose Leonardo Esteves da Silva",
        role: "Coordenador",
      },
      {
        name: "Emily Camelo Mendonça",
        role: "Integrante",
      },
    ],
    keywords: ["Música", "Arte", "Extensão"],
  },

  {
    slug: "clusters-econômicos-de-inovação",
    title:
      "Clusters Econômicos de Inovação - Indústria da Moda e Calçadista - Litoral Oeste",
    description:
      "SEDET-ADECE-FUNCAP. Esse projeto faz parte de um projeto maior, denominado ?ECOSSISTEMA DE INOVAÇÃO E O DESENVOLVIMENTO ECONÔMICO DO ESTADO DO CEARÁ? que está dentro do programa Cientista-Chefe na área de Inovação. Objetivo Geral: Fomentar o desenvolvimento de soluções inovadoras endereçadas a problemas que afetam a produtividade, a competitividade, a geração de renda e a atração de talentos em setores priorizados em cada Região de Planejamento do Estado. Objetivos Específicos: ? Selecionar Pesquisadores regionais que possam atuar nos Clusters Econômicos de Inovação distribuídos pelas macrorregiões do Estado; ? Promover a transferência de conhecimento entre os ICTs (Instituições de Ciência e Tecnologia) do Estado e os seus setores produtivos; ? Promover a construção empreendedora de soluções tecnológicas inovadoras que beneficiam setores produtivos do estado; ? Realizar pesquisa de análise da evolução dos negócios inovadores e sua relação com setores produtivos tradicionais do Estado e o impacto no ecossistema de inovação; ? Promover a realização de projetos que possam contribuir com o desenvolvimento desses programas e seu impacto sobre a CT&I.",
    status: "Em andamento",
    nature: "Desenvolvimento",
    funding: "SEDET-ADECE-FUNCAP",
    studentsInvolved: {
      undergraduate: 6,
      phd: 1,
    },
    members: [
      {
        name: "Anderson Gonçalves Uchôa",
        role: "Coordenador",
      },
      {
        name: "Pâmela Gonçalves Uchôa ",
        role: "Integrante",
      },
      {
        name: "João Davi Oliveira Barbosa",
        role: "Integrante",
      },
      {
        name: "Maria Vanessa Sousa Mesquita",
        role: "Integrante",
      },
      {
        name: "Cauã de Sousa Brandão",
        role: "Integrante",
      },
      {
        name: "José Davi Araújo Gomes ",
        role: "Integrante",
      },
      {
        name: "Matheus Feitosa de Oliveira Rabelo",
        role: "Integrante",
      },
      {
        name: "Tiago Andrade Castro",
        role: "Integrante",
      },
    ],
    keywords: [
      "Ecossistema de inovação",
      "Produtividade",
      "Transferência de conhecimento",
      "Soluções tecnológicas",
    ],
  },
];
