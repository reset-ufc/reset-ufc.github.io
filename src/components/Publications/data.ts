interface PublicationsDataProps {
  title: string;
  description: string;
  category: string;
  journalName: string;
  year: number;
  authors: string[];
  keywords?: string[];
  url: string;
}

export const publicationsData: PublicationsDataProps[] = [
  {
    title:
      "Towards Effective Gamification of Existing Systems: Method and Experience Report",
    description:
      "Relato de experiência na gamificação de sistemas existentes, destacando os desafios e apresentando o método Gamify4Fun para auxiliar desenvolvedores.",
    category: "Engenharia de Software",
    journalName: "Software Quality Journal",
    year: 2024,
    authors: [
      "Anderson Uchôa",
      "Rafael de Mello",
      "Jairo Souza",
      "Leopoldo Teixeira",
      "Baldoino Fonseca",
      "Alessandro Garcia",
    ],
    keywords: [
      "Software gamification",
      "Development method",
      "Experience report",
      "Interview-based",
    ],
    url: "https://link.springer.com/article/10.1007/s11219-024-09696-y",
  },
  {
    title: "Probabilistic analysis of an M/G/1 queue",
    description:
      "Este artigo realiza uma análise empírica para identificar a distribuição de probabilidade mais adequada para modelar o tempo de serviço de uma Unidade Central de Processamento típica. Os experimentos indicam que o tempo de serviço é melhor caracterizado por uma distribuição Erlang denotada por Erl7 (0.12).",
    category: "Queueing Theory",
    journalName: "Observatorio de la economia latinoamericana",
    year: 2024,
    authors: [
      "Hitalo Nascimento",
      "Maria Nascimento",
      "Douglas Nascimento",
      "Handrezza Cozzolino",
    ],
    keywords: [
      "Queueing Theory",
      "Erlang Distribution",
      "M/G/1 Model",
      "Probabilistic Analysis",
    ],
    url: "https://ojs.observatoriolatinoamericano.com/ojs/index.php/olel/article/view/7136",
  },
  {
    title:
      "Enhancing Recommendations of Composite Refactorings based on the Practice",
    description:
      "Este artigo discute a qualidade do design de software, abordando a identificação e remoção de code smells através de refatorações compostas. Ele destaca os desafios na aplicação dessas refatorações e a eficácia limitada em eliminar completamente os code smells.",
    category: "Engenharia de Software",
    journalName:
      "24th IEEE International Conference on Source Code Analysis and Manipulation (SCAM)",
    year: 2024,
    authors: [
      "Anderson Uchôa",
      "Ana Carla Bibiano",
      "Daniel Coutinho",
      "Wesley K. G. Assunção",
      "Alessandro Garcia",
      "Rafael de Mello",
      "Thelma E. Colanzi",
      "Daniel Tenório",
      "Audrey Vasconcelos",
      "Baldoino Fonseca",
      "Márcio Ribeiro",
    ],
    keywords: [
      "Refactoring",
      "Code Smells",
      "Composite Refactorings",
      "Recommendation Systems",
    ],
    url: "https://bibbase.org/network/publication/bibiano-coutinho-ucha-assuno-garcia-demello-colanzi-tenrio-etal-enhancingrecommendationsofcompositerefactoringsbasedonthepractice-2024",
  },
  {
    title:
      "On the Effectiveness of Trivial Refactorings in Predicting Non-trivial Refactorings",
    description:
      "O estudo investiga como operações triviais de refatoração podem prever operações não triviais, usando aprendizado supervisionado.",
    category: "Engenharia de Software",
    journalName: "Journal of Software Engineering Research and Development",
    year: 2024,
    authors: ["Darwin Pinheiro", "Anderson Uchôa", "Carla Bezerra"],
    keywords: ["Refactoring", "Machine Learning", "Software Quality"],
    url: "https://journals-sol.sbc.org.br/index.php/jserd/article/view/3324",
  },
  {
    title: "Recommendations for Developers Identifying Code Smells",
    description:
      "Os resultados deste trabalho oferecem uma visão abrangente da tarefa e descobertas emergentes, como as principais crenças, valores e ideias dos desenvolvedores sobre a identificação de code smells. Com base nesses resultados, apresentamos recomendações práticas para os desenvolvedores a fim de otimizar os esforços na identificação de code smells.",
    category: "Engenharia de Software",
    journalName: "IEEE Software",
    year: 2023,
    authors: [
      "Rafael de Mello",
      "Roberto Oliveira",
      "Anderson Uchôa",
      "Willian Oizumi",
      "Baldoino Fonseca",
      "Fernanda de Mello",
    ],
    keywords: ["Code Smells", "Refactoring", "Software Quality"],
    url: "https://ieeexplore.ieee.org/document/9904005",
  },
  {
    title:
      "What Factors Affect the Build Failures Correction Time? A Multi-Project Study",
    description:
      "Este estudo analisa fatores que influenciam o tempo de correção, como atividade do desenvolvedor, características do projeto e complexidade da compilação. Dados de 18 projetos revelam que desenvolvedores mais experientes corrigem falhas mais rápido e falhas no início do projeto são resolvidas mais rapidamente.",
    category: "Engenharia de Software",
    journalName:
      "17th Brazilian Symposium on Software Components, Architectures, and Reuse (SBCARS)",
    year: 2023,
    keywords: [
      "empirical",
      "continuous integration",
      "build failures",
      "association rules",
    ],
    authors: [
      "Gustavo Ivens",
      "Carla Bezerra",
      "Anderson Uchôa",
      "Ivan Machado",
    ],
    url: "https://bibbase.org/network/publication/ivens-bezerra-ucha-machado-whatfactorsaffectthebuildfailurescorrectiontimeamultiprojectstudy-2023",
  },
  {
    title:
      "CIRef: A Tool for Visualizing the Historical Data of Software Refactorings in Java Projects",
    description:
      "CIRef é uma ferramenta para visualizar dados históricos de refatorações em projetos Java. A ferramenta oferece diversas visualizações, como rankings personalizados de tipos de refatoração, duelos entre desenvolvedores e uma linha do tempo das refatorações realizadas. Para validar a aceitação e utilidade do CIRef, um estudo com oito desenvolvedores foi conduzido usando o Modelo de Aceitação de Tecnologia (TAM). Os resultados mostram que 75% dos participantes concordaram em usar a ferramenta no futuro e a acharam fácil de usar.",
    category: "Engenharia de Software",
    journalName:
      "17th Brazilian Symposium on Software Components, Architectures, and Reuse (SBCARS)",
    year: 2023,
    keywords: ["Software visualization", "Refactoring", "Java projects"],
    authors: [
      "Marcos Silva",
      "Maykon Nunes",
      "Carla Bezerra",
      "Anderson Uchôa",
      "Mairieli Wessel",
    ],
    url: "https://bibbase.org/network/publication/silva-nunes-bezerra-ucha-wessel-cirefatoolforvisualizingthehistoricaldataofsoftwarerefactoringsinjavaprojects-2023",
  },
  {
    title:
      "Beyond the Code: Investigating the Effects of Pull Request Conversations on Design Decay",
    description:
      "CIRef é uma ferramenta para visualizar dados históricos de refatorações em projetos Java. A ferramenta oferece diversas visualizações, como rankings personalizados de tipos de refatoração, duelos entre desenvolvedores e uma linha do tempo das refatorações realizadas. Para validar a aceitação e utilidade do CIRef, um estudo com oito desenvolvedores foi conduzido usando o Modelo de Aceitação de Tecnologia (TAM). Os resultados mostram que 75% dos participantes concordaram em usar a ferramenta no futuro e a acharam fácil de usar.",
    category: "Engenharia de Software",
    journalName:
      "17th ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)",
    year: 2023,
    keywords: [
      "Design decay",
      "Pull request conversations",
      "Social metrics",
      "Gender diversity",
    ],
    authors: [
      "Caio Barbosa",
      "Daniel Coutinho",
      "Wesley K. G",
      "Anderson Uchôa",
      "Anderson Oliveira",
      "Alessandro Garcia",
      "Baldoino Fonseca",
      "Matheus Feitosa de Oliveira Rabelo",
      "José Eric Mesquita Coelho",
      "Eryka Carvalho da Silva",
      "Paulo Henrique Santos Marques",
    ],
    url: "https://bibbase.org/network/publication/barbosa-ucha-coutinho-assuno-oliveira-garcia-fonseca-deoliveirarabelo-etal-beyondthecodeinvestigatingtheeffectsofpullrequestconversationsondesigndecay-2023",
  },
  {
    title:
      "Beyond the Code: Investigating the Effects of Pull Request Conversations on Design Decay",
    description:
      "O desenvolvimento de código é colaborativo e suportado por plataformas como GitHub e GitLab, que promovem a comunicação entre desenvolvedores. As conversas nas pull requests são influenciadas por aspectos sociais como dinâmica de comunicação, conteúdo das discussões e dinâmica organizacional, afetando a qualidade do software. Estudos prévios indicam que esses aspectos impactam a qualidade do software, mas ainda é desconhecido o quanto eles influenciam a deterioração do design. Assim, é necessário investigar como esses aspectos contribuem para evitar, reduzir ou acelerar a deterioração do design",
    category: "Engenharia de Software",
    journalName:
      "17th ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)",
    year: 2023,
    keywords: [
      "Design decay",
      "Pull request conversations",
      "Social metrics",
      "Gender diversity",
    ],
    authors: [
      "Caio Barbosa",
      "Daniel Coutinho",
      "Wesley K. G",
      "Anderson Uchôa",
      "Anderson Oliveira",
      "Alessandro Garcia",
      "Baldoino Fonseca",
      "Matheus Feitosa de Oliveira Rabelo",
      "José Eric Mesquita Coelho",
      "Eryka Carvalho da Silva",
      "Paulo Henrique Santos Marques",
    ],
    url: "https://bibbase.org/network/publication/barbosa-ucha-coutinho-assuno-oliveira-garcia-fonseca-deoliveirarabelo-etal-beyondthecodeinvestigatingtheeffectsofpullrequestconversationsondesigndecay-2023",
  },
  {
    title:
      "Don't Forget the Exception! Considering Robustness Changes to Identify Design Problems",
    description:
      "As linguagens de programação modernas, como Java, utilizam mecanismos de tratamento de exceções para garantir a robustez dos sistemas de software. No entanto, a qualidade do código de exceção é frequentemente negligenciada pelos desenvolvedores. Mudanças indiscriminadas de robustez (por exemplo, a adição de blocos catch vazios) podem indicar decisões de design que impactam negativamente a qualidade interna dos sistemas. Vários estudos focam na correlação de code smells de manutenibilidade com problemas de design, mas essas análises podem não ser suficientes por si só, pois os desenvolvedores necessitam de mais contexto para identificar problemas em certos cenários. Este trabalho propõe aprimorar a identificação de problemas de design rastreando mudanças de robustez pobres combinadas com code smells de manutenibilidade",
    category: "Engenharia de Software",
    journalName:
      "20th International Conference on Mining Software Repositories (MSR)",
    year: 2023,
    keywords: [
      "empirical study",
      "design problems",
      "robustness",
      "exception handling",
      "code smells",
    ],
    authors: [
      "Anderson Oliveira",
      "Joao Correia",
      "Leonardo Sousa",
      "Anderson Uchôa",
      "Wesley K. G. Assunção",
      "Daniel Coutinho",
      "Alessandro Garcia",
      "Willian Oizumi",
      "Caio Barbosa",
      "Juliana Alves Pereira",
    ],
    url: "https://ieeexplore.ieee.org/document/10174045",
  },
  {
    title:
      "Composite refactoring: Representations, characteristics and effects on software projects",
    description:
      "A refatoração de código é uma transformação que visa melhorar a qualidade do software. Uma refatoração composta é definida por duas ou mais refatorações inter-relacionadas, frequentemente aplicadas pelos desenvolvedores. Cada composta precisa ser representada de alguma forma e possui suas próprias características (por exemplo, escopo de código) e efeitos na qualidade do software. No entanto, esses elementos básicos raramente são estudados sistematicamente, o que dificulta o desenvolvimento de ferramentas automatizadas de suporte à refatoração composta. Como resultado, existem visões controversas na literatura sobre os elementos básicos das refatorações compostas.",
    category: "Engenharia de Software",
    journalName: "Information and Software Technology",
    year: 2023,
    keywords: [
      "Code refactoring",
      "Composite refactoring",
      "Software quality",
      "code smells",
    ],
    authors: [
      "Ana Carla Bibiano",
      "Daniel Tenório",
      "Thelma E. Colanzi",
      "Anderson Uchôa",
      "Wesley K. G. Assunção",
      "Silvia Regina Vergilio",
      "Alessandro Garcia",
    ],
    url: "https://www.sciencedirect.com/science/article/pii/S0950584922002439?via%3Dihub",
  },
  {
    title:
      "Negative effects of gamification in education software: Systematic mapping and practitioner perceptions",
    description:
      "Embora a maioria das pesquisas mostre efeitos positivos da gamificação, o foco em seus efeitos adversos é consideravelmente menor e é necessário um maior entendimento desses efeitos. Objetivo: fornecer uma visão abrangente sobre pesquisas que relatam efeitos negativos dos elementos de design de jogos e fornecer insights sobre a conscientização dos desenvolvedores sobre esses efeitos e como eles podem ser considerados na prática. Método: realizamos um estudo de mapeamento sistemático dos efeitos negativos dos elementos de design de jogos em sistemas de educação/aprendizagem.",
    category: "Engenharia de Software",
    journalName: "Information and Software Technology",
    year: 2023,
    keywords: [
      "Gamification",
      "Negative effects",
      "Education systems",
      "Game design elements",
    ],
    authors: [
      "Anderson Uchôa",
      "Alessandro Garcia",
      "Marcos Kalinowski",
      "Bruno Feijó",
    ],
    url: "https://www.sciencedirect.com/science/article/pii/S0950584922002518?via%3Dihub",
  },
  {
    title:
      "How do Trivial Refactorings Affect Classification Prediction Models?",
    description:
      "Refatoração é definida como uma transformação que altera a estrutura interna do código-fonte sem mudar o comportamento externo. Manter o comportamento externo significa que, após aplicar a atividade de refatoração, o software deve produzir o mesmo resultado que antes da atividade. A atividade de refatoração pode trazer vários benefícios, tais como: remoção de código com baixa qualidade estrutural, evitar ou reduzir a dívida técnica, melhorar a manutenibilidade do código, reutilização ou legibilidade. Dessa forma, os benefícios se estendem aos atributos de qualidade internos e externos. A literatura sobre refatoração de software sugere a realização de estudos que invistam em soluções automatizadas para detectar e corrigir refatorações.",
    category: "Engenharia de Software",
    journalName:
      "16th Brazilian Symposium on Software Components, Architectures, and Reuse (SBCARS)",
    year: 2022,
    keywords: [
      "Code refactoring",
      "Machine learning",
      "Code metrics",
      "Trivial refactorings",
    ],
    authors: ["Darwin Pinheiro", "Carla Bezerra", "Anderson Uchôa"],
    url: "https://dl.acm.org/doi/10.1145/3559712.3559720",
  },
  {
    title: "TEl-IoT: A Template for Eliciting IoT Software System Requirements",
    description:
      "A Internet das Coisas (IoT) é uma rede de objetos físicos e sistemas conectados através de protocolos de comunicação mútuos. Os sistemas IoT possuem características específicas como autoconfiguração, mudanças dinâmicas, heterogeneidade de dispositivos e software. Objetivo: Como os sistemas IoT incorporam diversos componentes de software, hardware, comunicação e outras características, construir documentos de requisitos para esses sistemas torna-se um desafio para a Engenharia de Requisitos (RE). Assim, este artigo apresenta o TEl-IoT, um template para auxiliar desenvolvedores durante as atividades de elicitação de requisitos para sistemas IoT. Método: Realizamos três estudos baseados em evidências. Primeiro, realizamos uma revisão da literatura com o objetivo de identificar artefatos que suportam a elicitação e especificação de requisitos para sistemas IoT. Segundo, com base na revisão da literatura, propusemos a versão inicial do TEl-IoT. Por fim, realizamos dois estudos empíricos para avaliar o TEl-IoT: (i) estudo de viabilidade com a indústria sobre a primeira versão do TEl-IoT e (ii) um estudo observacional para entender como os estudantes aplicam o TEl-IoT em um projeto de IoT. Resultados: Nossos resultados mostraram que o TEl-IoT é viável e seu uso reduz o tempo gasto na elicitação de requisitos em comparação com a maneira ad-hoc. Além disso, nossos resultados qualitativos também sugeriram que o uso do TEl-IoT facilita a elicitação de requisitos para sistemas IoT. Conclusão: Esperamos que nosso template guie a elicitação de requisitos para sistemas IoT na prática. Nossos resultados mostraram que o TEl-IoT pode apoiar desenvolvedores e contribuir para o conhecimento sobre RE aplicável no contexto de IoT.",
    category: "Engenharia de Software",
    journalName: "XVIII Brazilian Symposium on Information Systems (SBSI)",
    year: 2022,
    keywords: [
      "Internet of Things (IoT)",
      "Requirements Engineering (RE)",
      "TEl-IoT template",
      "Requirements elicitation",
    ],
    authors: [
      "Sabrina R. de Souza",
      "Bruno P. de Souza ",
      "Anderson Uchôa",
      "Daniella de O. Costa",
    ],
    url: "https://dl.acm.org/doi/10.1145/3535511.3535538",
  },
  {
    title:
      "On the Influential Interactive Factors on Degrees of Design Decay: A Multi-Project Study",
    description:
      "A Internet das Coisas (IoT) é uma rede de objetos físicos e sistemas conectados através de protocolos de comunicação mútuos. Os sistemas IoT possuem características específicas como autoconfiguração, mudanças dinâmicas, heterogeneidade de dispositivos e software. Objetivo: Como os sistemas IoT incorporam diversos componentes de software, hardware, comunicação e outras características, construir documentos de requisitos para esses sistemas torna-se um desafio para a Engenharia de Requisitos (RE). Assim, este artigo apresenta o TEl-IoT, um template para auxiliar desenvolvedores durante as atividades de elicitação de requisitos para sistemas IoT. Método: Realizamos três estudos baseados em evidências. Primeiro, realizamos uma revisão da literatura com o objetivo de identificar artefatos que suportam a elicitação e especificação de requisitos para sistemas IoT. Segundo, com base na revisão da literatura, propusemos a versão inicial do TEl-IoT. Por fim, realizamos dois estudos empíricos para avaliar o TEl-IoT: (i) estudo de viabilidade com a indústria sobre a primeira versão do TEl-IoT e (ii) um estudo observacional para entender como os estudantes aplicam o TEl-IoT em um projeto de IoT. Resultados: Nossos resultados mostraram que o TEl-IoT é viável e seu uso reduz o tempo gasto na elicitação de requisitos em comparação com a maneira ad-hoc. Além disso, nossos resultados qualitativos também sugeriram que o uso do TEl-IoT facilita a elicitação de requisitos para sistemas IoT. Conclusão: Esperamos que nosso template guie a elicitação de requisitos para sistemas IoT na prática. Nossos resultados mostraram que o TEl-IoT pode apoiar desenvolvedores e contribuir para o conhecimento sobre RE aplicável no contexto de IoT.",
    category: "Engenharia de Software",
    journalName:
      "29th IEEE International Conference on Software Analysis, Evolution and Reengineering (SANER))",
    year: 2022,
    keywords: [
      "Internet of Things (IoT)",
      "Requirements Engineering (RE)",
      "TEl-IoT template",
      "Requirements elicitation",
    ],
    authors: [
      "Daniel Coutinho",
      "Caio Barbosa",
      "Anderson Uchôa",
      "Vinícius Soares",
      "Alessandro Garcia",
      "Marcelo Schots",
      "Juliana Alves Pereira",
      "Wesley K. G. Assunção",
    ],
    url: "https://ieeexplore.ieee.org/document/9825877",
  },
  {
    title:
      "Do Critical Components Smell Bad? An Empirical Study with Component-based Software Product Lines",
    description:
      "Linhas de Produtos de Software baseadas em Componentes (SPL) consistem em um conjunto de produtos de software que compartilham componentes comuns. Para uma composição adequada de produtos SPL, cada componente deve seguir três princípios: encapsular uma única funcionalidade, restringir o acesso a dados e ser substituível. No entanto, sabe-se que os desenvolvedores frequentemente introduzem estruturas anômalas, ou seja, code smells, durante a implementação dos componentes. Esses code smells podem violar um ou mais princípios dos componentes e dificultar a composição dos produtos SPL. Portanto, os desenvolvedores devem identificar code smells em SPLs baseadas em componentes, especialmente aqueles que afetam componentes altamente interconectados, que são chamados de componentes críticos. No entanto, há evidências limitadas de quão propensos a code smells esses componentes críticos tendem a ser em SPLs baseadas em componentes",
    category: "Engenharia de Software",
    journalName:
      "15th Brazilian Symposium on Software Components, Architectures, and Reuse (SBCARS)",
    year: 2022,
    keywords: [
      "Component-based software product line (SPL)",
      "Critical components",
      "Code smells",
      "Software quality",
    ],
    authors: ["Anderson Uchôa", "Wesley K.G. Assunção", "Alessandro Garcia"],
    url: "https://dl.acm.org/doi/10.1145/3483899.3483907",
  },
  {
    title:
      "How do Code Smell Co-occurrences Removal Impact Internal Quality Attributes? A Developers' Perspective",
    description:
      "Os code smells são estruturas de código inadequadas que podem prejudicar a qualidade e a evolução do software. No entanto, estudos anteriores mostraram que apenas ocorrências individuais de code smells podem não ser suficientes para avaliar o impacto real que esses smells podem trazer aos sistemas. Nesse contexto, as co-ocorrências de code smells, ou seja, ocorrências de mais de um code smell na mesma classe ou método, podem ser melhores indicadores de problemas de design para a qualidade do software. Apesar de sua importância como indicador de problemas de design, sabemos pouco sobre o impacto da remoção das co-ocorrências de smells por meio da refatoração de software nos atributos de qualidade interna, como acoplamento, coesão, complexidade e herança. É ainda menos claro qual é a perspectiva dos desenvolvedores sobre a remoção das co-ocorrências. Nosso objetivo é abordar essa lacuna por meio de um estudo qualitativo com 14 desenvolvedores.",
    category: "Engenharia de Software",
    journalName: "35th Brazilian Symposium on Software Engineering (SBES)",
    year: 2022,
    keywords: [
      "Code smells",
      "Poor code structures",
      "Software quality",
      "Evolution",
    ],
    authors: [
      "Anderson Uchôa",
      "Júlio Martins",
      "Carla Bezerra",
      "Alessandro Garcia",
    ],
    url: "https://dl.acm.org/doi/10.1145/3474624.3474642",
  },
  {
    title:
      "Unveiling Multiple Facets of Design Degradation in Modern Code Review",
    description:
      "O design de software é uma preocupação chave na revisão de código, através da qual os desenvolvedores discutem e melhoram ativamente cada alteração no código. No entanto, a revisão de código é predominantemente uma tarefa cooperativa influenciada por aspectos técnicos e sociais. Consequentemente, esses aspectos podem desempenhar um papel importante em como o design de software se degrada, bem como contribuir para acelerar ou reverter a degradação durante o processo de revisão de cada alteração de código. No entanto, há pouco entendimento sobre como esses aspectos sociais e técnicos se relacionam com a redução ou o aumento da degradação do design à medida que o projeto evolui. Consequentemente, o escasso conhecimento sobre esse tópico ajuda pouco a orientar os desenvolvedores durante as revisões de código voltadas para o design. Nosso objetivo nesta pesquisa de Doutorado é triplo: (1) caracterizar o impacto da revisão de código e suas práticas na degradação do design ao longo do tempo; (2) entender a contribuição dos aspectos técnicos e sociais para a degradação do design; e (3) propor uma estrutura conceitual para apoiar a tomada de decisão de design durante a revisão de código. Nossos resultados preliminares mostram que a maioria das revisões de código teve pouco ou nenhum impacto na degradação do design, e que os aspectos técnicos e sociais contribuem para distinguir e prever mudanças que impactam o design.",
    category: "Engenharia de Software",
    journalName:
      "29th ACM Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE 2021)",
    year: 2021,
    keywords: [
      "Code review",
      "Design degradation",
      "Technical aspects",
      "Social aspects",
    ],
    authors: ["Anderson Uchôa"],
    url: "https://dl.acm.org/doi/10.1145/3468264.3473099",
  },
  {
    title:
      "Predicting Design Impactful Changes in Modern Code Review: A Large-Scale Empirical Study",
    description:
      "As empresas adotaram a revisão moderna de código como uma técnica chave para monitorar e melhorar continuamente a qualidade das mudanças de software. Uma das principais motivações para isso é a detecção precoce de mudanças impactantes no design, para evitar que as mudanças que degradam o design prevaleçam após cada revisão de código. Embora os sintomas de degradação do design frequentemente levem à rejeição das mudanças, as práticas da revisão moderna de código, por si só, não são suficientes para evitar ou mitigar a degradação do design. O design do software se degrada sempre que um ou mais sintomas de decisões estruturais inadequadas, geralmente representados por smells, acabam sendo introduzidos por uma mudança. A degradação do design pode estar relacionada a aspectos técnicos e sociais em revisões colaborativas de código. Infelizmente, não há estudos que investiguem se os stakeholders da revisão de código, como revisores, poderiam se beneficiar de abordagens para distinguir e prever mudanças impactantes no design com aspectos técnicos e/ou sociais. Analisando 57.498 mudanças de código revisadas de sete sistemas de código aberto, relatamos uma investigação sobre a previsão de mudanças impactantes no design na revisão moderna de código. Avaliamos o uso de seis algoritmos de ML para prever mudanças impactantes no design. Também extraímos e avaliamos 41 diferentes características baseadas em aspectos sociais e técnicos.",
    category: "Engenharia de Software",
    journalName:
      "29th ACM Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE 2021)",
    year: 2021,
    keywords: ["design changes", "code review", "machine learning"],
    authors: [
      "Anderson Uchôa",
      "Barbosa, Caio",
      "Coutinho, Daniel",
      "Oizumi, Willian",
      "K. G. Assunção, Wesley",
      "Regina Vergilio, Silvia",
      "Alves Pereira, Juliana",
      "Oliveira, Anderson",
      "Garcia, Alessandro",
    ],
    url: "https://ieeexplore.ieee.org/document/9463137",
  },
];
