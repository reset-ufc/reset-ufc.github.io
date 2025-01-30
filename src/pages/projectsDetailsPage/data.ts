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
    slug: "monitoria-de-programação-integrada",
    title: "Monitoria de Programação Integrada",
    description:
      "A monitoria atenderá em 2022.1 e 2022.2 pelo menos seis turmas diferentes de Fundamentos de Programação, Laboratório de Programação, e Introdução a Ciência de Dados abrangendo as linguagens de programação C, Python e R nos três cursos de graduação do campus da UFC em Itapajé. Cada turma tem no mínimo 30 alunos matriculados, totalizando cerca de 180 alunos. Esses disciplinas são pré-requisitos para diferentes disciplinas nos três cursos de graduação. Além disso, tais disciplinas normalmente possuem um alto índice de reprovação, em cursos de computação. Portanto, é importante que existam monitores que conheçam essas linguagens de programação e tenham horário livre, tanto para dar apoio em sala de aula, quanto para encontros semanais junto com os alunos. Tais monitores, com conhecimento de linguagens de programação se tornam necessários como uma estratégia para aumentar o índice de aprovação em disciplinas de programação.",
    status: "Em andamento",
    nature: "Ensino",
    funding: "NaN",
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
        name: "João Luiz dos Santos Filho",
        role: "Integrante",
      },
      {
        name: "Oracio Cruz Melo",
        role: "Integrante",
      },
      {
        name: "Antonio Filipe Sousa Silva",
        role: "Integrante",
      },
      {
        name: "Vitoria Nascimento de Paula",
        role: "Integrante",
      },
      {
        name: "Carlos Gabriel dos Santos Alves",
        role: "Integrante",
      },
      {
        name: "Carlos Alberto de Sales Oliveira",
        role: "Integrante",
      },
    ],
    keywords: [
      "Monitoria",
      "Linguagens de programação",
      "Apoio em sala de aula",
    ],
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
