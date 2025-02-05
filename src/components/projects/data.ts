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
    slug: "meninas-cientistas",
    name: "Meninas Cientistas: protagonismo feminino por meio da ciência",
    description:
      "O campus Jardins de Anita visa além da formação de bons profissionais na área da tecnologia da informação direcionados para o mercado de trabalho, busca também através projeto Meninas Cientistas: protagonismo feminino por meio da ciência estimular cada vez mais as discentes ingressas e egressas dos cursos de Análise e Desenvolvimento de Sistemas, Segurança da Informação e Ciência de Dados a adquirir gosto pela carreira científica bem como incentivar meninas que estudam nas escolas de ensino médio da cidade de Itapajé a tomarem gosto pela matemática e pela ciência em geral, assumindo um papel de protagonismo em sua realidade e na sociedade.",
    summary:
      "Estudo sobre a integração de ferramentas de segurança em processos de CI para mitigar vulnerabilidades em sistemas de aprendizado de máquina.",
    period: "2024/atual",
    status: "Em andamento",
    funding: "NaN",
    nature: "Extensão",
    keywords: ["Protagonismo", "Tecnologia", "Ciência"],
    link: "/projects/meninas-cientistas",
  },
  {
    slug: "ciencia-de-dados-esports",
    name: "Ciência de Dados e eSports: como a análise estatística contribui com os Jogos Eletrônicos",
    description:
      "Há muito tempo os fundamentos da Matemática, Teoria dos Jogos e Análise de Dados são aplicados a estudos sobre diversos aspectos dos jogos esportivos. Nesse contexto, recentemente os fundamentos dessas áreas de conhecimento têm sido aplicados a processos de análise de dados no universo dos eSports (ou Esportes Eletrônicos), gerando grande influência em processos de tomadas de decisão em jogos dessa natureza.Neste cenário, a análises de dados e a descoberta de padrões por meio da aplicação da Inteligência Artificial (IA) e Machine Learning que podem auxiliar a análise de desempenho pessoal que destaca pontos fortes e fracos de jogadores com o objetivo de ajudá-los a impulsionar suas performances nos jogos. No entanto, a dinâmica dos jogos eletrônicos e a arquitetura desses ambientes gamificados se diferenciam entre si, assim como os incentivos e objetivos dos participantes. Para esses casos, diferentes métodos da Ciência de Dados pode ser aplicados para auxiliar a criação de estratégias aproximativas que gerem o menor erro possível. À vista disso, este projeto tem como objetivo propor um curso de formação sobre Estatística aplicada a eSports para a comunidade acadêmica e para alunos de escolas de Ensino Médio do município de Itapajé-CE de forma a instruí-los a formular estratégias adaptativas e evolutivas em tempo real para jogos eletrônicos competitivos que se passem dentro de um ambiente complexo e com muitas possibilidades, como por exemplo o jogo League of Legends. Adicionalmente, é proposto para este projeto uma contribuição para a cidade Itapajé que consiste na participação de estudantes do Ensino Médio no estudo sobre estatística descritiva, teoria da probabilidade e inferência estatística na atividade de análise de dados aplicada ao segmento de eSports, para compreenderem a importância da Ciência de Dados. Ao final, os participantes poderão compartilhar as experiências adquiridas em suas respectivas instituições..",
    summary:
      "O projeto busca propor um curso de formação sobre Estatística aplicada a eSports para a comunidade acadêmica e alunos de Ensino Médio, com o objetivo de formular estratégias adaptativas e evolutivas em tempo real para jogos eletrônicos competitivos.",
    period: "2023/atual",
    status: "Em andamento",
    funding: "NaN",
    nature: "Extensão",
    keywords: [
      "Ciência de Dados",
      "eSports",
      "Inteligência Artificial",
      "Machine Learning",
    ],
    link: "/projects/ciencia-de-dados-esports",
  },
  {
    slug: "monitoria-integrada-estatistica-ciencia-de-dados",
    name: "Monitoria Integrada de Estatística para Ciência de Dados",
    description:
      "A Estatística proporciona os meios e as ferramentas para encontrar estrutura em dados, e assim fornecer insights sobre as informações mais profundas ali escondidas para um cientista de dados. As disciplinas de Probabilidade e Estatística, Inferência Estatística e Análise de Regressão I, constituem uma parte da formação estatística de um cientista de dados. São disciplinas que combinam conhecimentos teóricos e práticos, aplicados à base de dados reais oriundas de várias áreas do mercado de trabalho com a utilização de uma linguagem de programação, R ou Python, promovendo integração entre os conceitos de Estatística e Computação para de Ciência de Dados, como pode ser visto em [1], [2] e [3]. Portanto, é de fundamental importância oferecer aos discentes o apoio de monitores, que possuem o conhecimento teórico e que tenham experiência em linguagens de programação como Python e R. A monitoria dará suporte durante o ano de 2023, em pelo menos 3 turmas por semestre, visto que a disciplina de Probabilidade e Estatística é ofertada em mais de um curso no mesmo semestre, além disso, os monitores atenderão turmas de diferentes semestres do Curso de Ciência de Dados, totalizando, aproximadamente, 90 alunos. Por fim, destaca-se a importância desse projeto de monitoria para minimizar a evasão nos cursos, uma vez que esse é um tema central na Universidade.",
    summary:
      "A monitoria integrada de Estatística para Ciência de Dados oferece suporte aos alunos nas disciplinas de Probabilidade e Estatística, Inferência Estatística e Análise de Regressão I, utilizando linguagens de programação como Python e R, com o objetivo de minimizar a evasão e promover a integração entre conceitos estatísticos e computacionais.",
    period: "2023/Atual",
    status: "Em andamento",
    funding: "NaN",
    nature: "Ensino",
    keywords: [
      "Estatística",
      "Ciência de Dados",
      "Probabilidade",
      "Inferência Estatística",
      "Análise de Regressão",
      "Python",
      "R",
    ],
    link: "/projects/monitoria-integrada-estatistica-ciencia-de-dados",
  },
  {
    slug: "detecção-identificação-ataques-negacao-serviço-intrusão-ambiente-nuvem",
    name: "Detecção e Identificação de ataques de negação de serviço e de intrusão em ambiente de nuvem utilizando algoritmos de aprendizado de máquina",
    description:
      "Este projeto de pesquisa visa detectar e identificar ataques de negação de serviço e de intrusão em ambiente de nuvem com auxílio de algoritmos de aprendizado de máquina. A proposta é utilizar dados oferecidos por serviços de telemetria dos ambientes de nuvem. Ou seja, os algoritmos de aprendizado de máquina podem ser utilizados nos datasets coletados do serviço de telemetria nativa da infraestrutura da nuvem para realizar a detecção e identificação desses ataques. Esses datasets contêm informações da máquina virtual e/ou de contêineres, vítima hospedada no ambiente de nuvem.",
    summary:
      "Detecção e Identificação de ataques de negação de serviço e de intrusão em ambiente de nuvem utilizando algoritmos de aprendizado de máquina e dados de telemetria nativa.",
    period: "2022 - Atual",
    status: "Em andamento",
    funding: "NaN",
    nature: "Pesquisa",
    keywords: [
      "Detecção de ataques",
      "Identificação de intrusão",
      "Ambiente de nuvem",
      "Aprendizado de máquina",
      "Telemetria",
      "Segurança da informação",
    ],
    link: "/projects/detecção-identificação-ataques-negacao-serviço-intrusão-ambiente-nuvem",
  },
  {
    slug: "um-portal-de-estatística-e-ciência-de-dados",
    name: "Um Portal de Estatística e Ciência de Dados",
    description:
      "Este projeto tem como objetivo desenvolver uma aplicação WEB chamada de Portal de Estatística e Ciência de Dados que servirá como fonte de pesquisa para docentes e discentes da Universidade Federal do Ceará (UFC), assim como para a comunidade externa à UFC, tais como indústrias, comércio e educação básica, de forma a contribuir com o processo de compartilhamento de conhecimento com a sociedade. Adicionalmente, é proposto para este projeto uma contribuição para a cidade Itapajé que consiste na participação de estudantes do Ensino Médio que acompanharão e serão familiarizados com as tecnologias empregadas na construção do portal, bem como conceitos básicos sobre Estatística e Ciência de Dados. Tal participação ajudará na análise sobre quais ações impulsionam a busca de conteúdos práticos e teóricos referentes à Estatística e Ciência de Dados, bem como quais fatores são inibidores ou são facilitadores do processo de disseminação desses conhecimentos. Espera-se como resultados da pesquisa o desenvolvimento um Portal de Estatística e Ciência de Dados que disponibilizará conteúdos práticos e teóricos referentes à estatística descritiva, teoria da probabilidade e inferência estatística.",
    summary:
      "Este projeto visa desenvolver um Portal de Estatística e Ciência de Dados que servirá como fonte de pesquisa para a UFC e a comunidade externa, incluindo estudantes do Ensino Médio, facilitando a disseminação de conhecimento em Estatística e Ciência de Dados.",
    period: "2023/atual",
    status: "Em andamento",
    funding: "NaN",
    nature: "Extensão",
    keywords: ["Estatística", "Ciência de Dados", "Educação"],
    link: "/projects/um-portal-de-estatística-e-ciência-de-dados",
  },
  {
    slug: "empreendedorismo-e-inclusao-digital-itapaje",
    name: "Empreendedorismo e Inclusão Digital: Uma ação de inserção da economia itapajeense nas redes sociais",
    description:
      "A cidade de Itapajé, situada na região Litoral Oeste do Estado do Ceará, possui um comércio local movimentado, mas com uma abrangência limitada aos moradores locais. A propaganda, necessária para o desenvolvimento de qualquer empreendimento, é normalmente realizada por carros/motos de som ou pelo boca-a-boca. Inserir propagandas em rádios locais ou outdoors requer um nível de investimento que normalmente esses comércios não dispõem. Este projeto de extensão visa auxiliar os empreendedores a ingressarem na atividade digital, com treinamento e elaboração de uma ação contínua voltada ao marketing digital.",
    summary:
      "Projeto de extensão que visa auxiliar os empreendedores de Itapajé a ingressarem na atividade digital, com treinamento e elaboração de uma ação contínua voltada ao marketing digital.",
    period: "2022/atual",
    status: "Em andamento",
    funding: "NaN",
    nature: "Extensão",
    keywords: ["Empreendedorismo", "Inclusão Digital", "Marketing Digital"],
    link: "/projects/empreendedorismo-e-inclusao-digital-itapaje",
  },
  {
    slug: "analise-da-difusao-e-transporte-de-neutrons-em-reatores-nucleares",
    name: "Análise da difusão e transporte de neutrons em reatores nucleares usando a estatística não-extensiva",
    description:
      "A solução para a função fluxo de neutrons em reatores nucleares é amplamente descrita e utilizada na engenharia nuclear. Nesse sentido, o desenvolvimento de novas versões alternativas para modelar e controlar o fluxo de neutrons se torna uma alternativa útil e em muitos casos, dependendo do tipo de reator, relevante. Este projeto de pesquisa visa investigar o comportamento da função fluxo de neutrons em reatores nucleares usando as mecânicas estatística de Tsallis e Kaniadakis observado seus ganhos e perdas em relação ao espectro já conhecido na energia nuclear.",
    summary:
      "Projeto de pesquisa que visa investigar o comportamento da função fluxo de neutrons em reatores nucleares usando as mecânicas estatística de Tsallis e Kaniadakis.",
    period: "2022/atual",
    status: "Em andamento",
    funding: "NaN",
    nature: "Pesquisa",
    keywords: [
      "Difusão de neutrons",
      "Transporte de neutrons",
      "Reatores nucleares",
      "Estatística não-extensiva",
    ],
    link: "/projects/analise-da-difusao-e-transporte-de-neutrons-em-reatores-nucleares",
  },
  {
    slug: "analise-global-da-funcao-wq-de-lambert-tsallis",
    name: "Análise Global da função Wq de Lambert-Tsallis e suas aplicações",
    description:
      "A função Wq de Lambert-Tsallis é uma generalização direta da função W de Lambert usando a q-exponencial de Tsallis. Essa função tem se mostrado útil para encontrar soluções analíticas e numéricas em sistemas físicos onde as variáveis dependente e independente se relacionam por alguma lei de potência. Também é utilizada para descrever o funcional Disentropia, uma função que em muitos sentidos, é dual a entropia. Este projeto de pesquisa tem por finalidade investigar globalmente a função de Lambert-Tsallis introduzida por Ramos afim de estender o conhecimento sobre a mesma.",
    summary:
      "Projeto de pesquisa que visa investigar globalmente a função de Lambert-Tsallis introduzida por Ramos para estender o conhecimento sobre a mesma.",
    period: "2022/atual",
    status: "Em andamento",
    funding: "NaN",
    nature: "Pesquisa",
    keywords: [
      "Função Wq de Lambert-Tsallis",
      "q-exponencial de Tsallis",
      "Disentropia",
      "Entropia",
    ],
    link: "/projects/analise-global-da-funcao-wq-de-lambert-tsallis",
  },
  {
    slug: "analise-global-da-funcao-wq-de-lambert-tsallis",
    name: "Análise Global da função Wq de Lambert-Tsallis e suas aplicações",
    description:
      "A função Wq de Lambert-Tsallis é uma generalização direta da função W de Lambert usando a q-exponencial de Tsallis. Essa função tem se mostrado útil para encontrar soluções analíticas e numéricas em sistemas físicos onde as variáveis dependente e independente se relacionam por alguma lei de potência. Também é utilizada para descrever o funcional Disentropia, uma função que em muitos sentidos, é dual a entropia. Este projeto de pesquisa tem por finalidade investigar globalmente a função de Lambert-Tsallis introduzida por Ramos afim de estender o conhecimento sobre a mesma.",
    summary:
      "Projeto de pesquisa que visa investigar globalmente a função de Lambert-Tsallis introduzida por Ramos para estender o conhecimento sobre a mesma.",
    period: "2022/atual",
    status: "Em andamento",
    funding: "NaN",
    nature: "Pesquisa",
    keywords: [
      "Função Wq de Lambert-Tsallis",
      "q-exponencial de Tsallis",
      "Disentropia",
      "Entropia",
    ],
    link: "/projects/analise-global-da-funcao-wq-de-lambert-tsallis",
  },
  {
    slug: "dedilhando-sonhos-integracao-campus-jardins-anita-itapaje",
    name: "Dedilhando sonhos: uma abordagem musical como integração do campus Jardins de Anita e a cidade de Itapajé",
    description:
      "Considerando o fato do Campus Jardins de Anita ser o campus mais recente do interior da Universidade Federal do Ceará, e de possuir até o momento apenas cursos de graduação com temática em tecnologia, é relatado pelo corpo discente em geral que há uma carência rotineira de atividades e políticas voltadas para fins musicais, teatrais, de desenho e outras manifestações artísticas da expressão humana, bem como ações com essas características que promovam extensão e identificação com a cidade da unidade acadêmica. Nesse sentido, este projeto tem como justificativa promover a disseminação e ambientação musical e artística entre os discentes, docentes e servidores da UFC do campus de Itapajé por meio de apresentações, rodas de músicas de estilos e naturezas diversas e parcerias com grupos musicais pertencentes a cidade de Itapajé-CE.",
    summary:
      "Projeto de extensão que visa promover a disseminação e ambientação musical e artística entre os discentes, docentes e servidores do campus Jardins de Anita e a cidade de Itapajé por meio de apresentações e parcerias com grupos musicais locais.",
    period: "2023/2023",
    status: "Concluído",
    funding: "NaN",
    nature: "Extensão",
    keywords: [
      "Musical",
      "Integração",
      "Extensão",
      "Campus Jardins de Anita",
      "Itapajé",
    ],
    link: "/projects/dedilhando-sonhos-integracao-campus-jardins-anita-itapaje",
  },
  {
    slug: "monitoria-integrada-de-matematica-aplicada-a-computacao",
    name: "Monitoria Integrada de Matemática Aplicada à Computação",
    description:
      "As disciplinas de Matemática Computacional, Métodos Numéricos e Otimização Contínua objetivam familiarizar o aluno com a lógica matemática acerca da implementação das variadas linguagens computacionais, bem como a compreensão da teoria matemática através da visualização. Essa familiarização depende diretamente dos conhecimentos das linguagens Python, Matlab, e do software estatístico R, bem como o conhecimento base em função de uma e várias variáveis. A monitoria atenderá de 2023.1 e 2023.2 pelo menos para uma turma do curso de Segurança da Informação (1 semestre-Matemática Computacional) e duas turmas do Curso de Ciência de Dados (3 semestre-Otimização Contínua; 4 semestre-Métodos Numéricos) no campus da UFC em Itapajé-CE englobando as ementas das disciplinas citadas de forma teórica e prática. Cada turma tem no mínimo 30 alunos matriculados totalizando 90 alunos. Essas disciplinas são pré-requisitos para diferentes disciplinas no curso tecnológico de Ciência de Dados e Segurança da Informação. Nesse sentido, é de fundamental importância que existam monitores que conheçam e dominem a teoria a ser aplicada usando essas diferentes linguagens de programação.",
    summary:
      "Projeto de monitoria que visa fornecer suporte teórico e prático nas disciplinas de Matemática Computacional, Métodos Numéricos e Otimização Contínua utilizando linguagens de programação como Python, Matlab e o software estatístico R.",
    period: "2023/Atual",
    status: "Em andamento",
    funding: "NaN",
    nature: "Ensino",
    keywords: [
      "Matemática Computacional",
      "Métodos Numéricos",
      "Otimização Contínua",
      "Python",
      "Matlab",
      "R",
    ],
    link: "/projects/monitoria-integrada-de-matematica-aplicada-a-computacao",
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
