import { TeamMemberProps } from "../../types";

const teamMembers: TeamMemberProps[] = [
  {
    name: "Dr. Hitalo",
    lastName: "Nascimento",
    role: "Professor",
    github: "https://github.com/hitalolee",
    email: "hitalo.nascimento@ufc.br",
    img: "src/assets/hitalo-nascimento.jpeg",
    description: `Hitalo Nascimento é Professor Adjunto da Universidade Federal do Ceará (UFC), onde atua como docente no Curso de Ciência de Dados do Campus de Itapajé. Foi Pesquisador de Pós-doutorado no grupo de Pesquisa em Telecomunicações Sem fio (GTEL) - UFC, atuando no projeto: Controle de Rádio Enlace e Alocação de Recursos para New Radio. Possui Doutorado em Engenharia de Teleinformática pela UFC e Mestrado em Ciência da Computação pela Universidade Estadual do Ceará (UECE) na qual foi bolsista da Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (Capes) e Pesquisador do Laboratório de Otimização e Gestão Industrial (Login). É Analista de Sistemas e Estatístico por formação, tendo atuado como Arquiteto de Software e Cientista de Dados na Secretaria do Planejamento e Gestão (SEPLAG) do Estado do Ceará. Foi Professor colaborador no Programa de Pós-graduação em Ciência da Computação da UECE (Mestrado e Doutorado) em 2020 e Professor pesquisador na mesma Universidade (Curso de Computação - UAB/UECE) de 2013 a 2018, tendo atuado ainda como Professor Titular do Centro Universitário da Grande Fortaleza de 2014 a 2022 e Professor da Estácio do Ceará em 2021 e 2022. Atuou como pesquisador do CNPq na modalidade SET-E (Programa Especial - Rhae-Inovação. Vigência: 01/01/2015 a 31/05/2015, período no qual projetou o Motor de Inteligência Computacional do sistema para tomada de decisão estratégica e operacional em ambiente hospitalar). Seus interesses atuais de pesquisa incluem: Inteligência Artificial Geral, Estatística e Probabilidade Aplicada, Ciência de Dados, Sistemas de Navegação/Posicionamento e Serviços baseados em Localização, Modelos de Propagação de Rádio para ambientes (indoor e outdoor) e Adaptação de Link.`,
    contact: {
      email: "hitalo.nascimento@ufc.br",
      github: "https://github.com/hitalolee",
      latter: "http://lattes.cnpq.br/1394533601368499",
    },
    researchKeywords: [
      "Artificial General Intelligence",
      "Statistics and Applied Probability",
      "Navigation/Positioning systems and Location-based services",
      "Radio propagation models for indoor and outdoor environments",
    ],
    publishedPapers: [
      "AI-driven Diagnostics in Healthcare",
      "Machine Learning Algorithms for Personalized Medicine",
      "Healthcare Systems Optimization with AI",
    ],
  },
  {
    name: "Dr. João",
    lastName: "Corrêa",
    role: "Professor",
    github: "https://jhenriquecorrea.github.io/",
    email: "joaocorrea@ufc.br",
    img: "https://jhenriquecorrea.github.io/images/avatar.jpg",
    description: `Possui graduação em Redes de Computadores pelo Instituto Federal de Educação, Ciência e Tecnologia da Paraíba (2015), mestrado em Informática pela Universidade Federal da Paraíba (2017) e doutorado em Ciência da Computação pela Universidade Federal do Espírito Santo (2021). Atualmente é professor da Universidade Federal do Ceará. Foi pesquisador de GTs da RNP entre os anos de 2014 até 2019, com foco em Segurança da Informação e Computação em Nuvem. Foi sócio-fundador da Startup VixPhy, empresa de tecnologia voltada a oferta de serviços de Computação em Nuvem e SD-WAN.
Atualmente colabora em pesquisa com diversas universidades brasileiras, por meio do projeto SFI2 (Fatiamento de Infraestruturas de Internet do Futuro) e também com universidades estrangeiras como a UniTO e PoliTO, em Turim-Itália.
Seus principais interesses de pesquisa são: Redes de Computadores, com ênfase em Segurança de Redes de Computadores, Computação em Nuvem, Redes Definidas por Software, Network Function Virtualization, Gerência de Redes e Aprendizado de Máquina`,
    contact: {
      email: "joaocorrea@ufc.br",
      github: "https://jhenriquecorrea.github.io/",
      latter: "http://lattes.cnpq.br/6143528226807891",
    },
    researchKeywords: [
      "Artificial General Intelligence",
      "Statistics and Applied Probability",
      "Network Security",
      "Cloud Computing",
    ],
    publishedPapers: [
      "Computer Networks",
      "Network Softwarization (SDN and NFV)",
      "Healthcare Systems Optimization with AI",
    ],
  },
  {
    name: "Dr. Maria",
    lastName: "Oliveira",
    role: "Professor",
    github: "mariaoliveira",
    email: "maria.oliveira@university.edu",
    img: "https://randomuser.me/api/portraits/women/20.jpg",
    description: `Dr. Maria Oliveira specializes in data science and big data analytics. She leads multiple projects on 
          large-scale data processing and privacy-preserving machine learning techniques.`,
    contact: {
      email: "maria.oliveira@university.edu",
      github: "mariaoliveira",
    },
    researchKeywords: [
      "Big Data Analytics",
      "Data Science",
      "Privacy-Preserving Machine Learning",
    ],
    publishedPapers: [
      "Large-Scale Data Processing in Cloud Environments",
      "Privacy-Preserving Machine Learning Models",
      "Data Science Applications in E-commerce",
    ],
  },
  {
    name: "Dr. Carlos",
    lastName: "Ferreira",
    role: "Professor",
    github: "carlosferreira",
    email: "carlos.ferreira@university.edu",
    img: "https://randomuser.me/api/portraits/men/30.jpg",
    description: `Dr. Carlos Ferreira is a professor of Software Engineering and specializes in software testing, 
          quality assurance, and continuous integration processes.`,
    contact: {
      email: "carlos.ferreira@university.edu",
      github: "carlosferreira",
    },
    researchKeywords: [
      "Software Testing",
      "Quality Assurance",
      "Continuous Integration",
    ],
    publishedPapers: [
      "Automated Software Testing for Scalable Systems",
      "Quality Assurance in Distributed Software Development",
      "Continuous Integration Best Practices",
    ],
  },
  {
    name: "Arthur Willame",
    role: "Graduando",
    github: "ArthurWillameBr",
    email: "arthurwillame@alu.ufc.br",
    img: "https://avatars.githubusercontent.com/u/163607700?s=400&u=69706577a9f80667be93ac4a3a01691f71aeba16&v=4",
    description: `Estou no quarto período, cursando Análise e Desenvolvimento de Sistemas na Universidade Federal do Ceará, sendo participante do projeto ENGENDADOS - Escola de Inovação e Cocriação em Engenharia de Software e Ciência de Dados, e bolsista remunerado do INOVANDO UFC, que visa o desenvolvimento de um assistente virtual (chatbot) usando IA, para melhorar a comunicação e informação sobre editais da UFC.`,
    contact: {
      email: "arthurwillame@alu.ufc.br",
      github: "https://github.com/ArthurWillameBr",
    },
    researchKeywords: ["Web Development", "AI"],
    publishedPapers: [
      "Improving Chatbot Conversational Skills Through User Interaction",
      "AI Solutions for Accessibility in Smart Cities",
      "Deep Learning in Natural Language Processing",
    ],
  },
  {
    name: "José Eric",
    role: "Graduando",
    github: "EricmesquiBR",
    email: "ericmesquita2480@alu.ufc.br",
    img: "src/assets/eric-mesquita.png",
    description: `Engenharia de Software; Mineração de Dados.
Já atuei em projetos como:
- Modernização de Sistemas Legados: Suporte (Semi-)Automatizado e Práticas de Desenvolvimento
- Clusters Econômicos de Inovação - Baixa divulgação e operacionalização para compra e locação de imóveis - Litoral Oeste do Ceará
- Construção de um bot não-intrusivo para monitorar traços de incivilidade de desenvolvedores em conversações de pull requests.`,
    contact: {
      email: " ericmesquita2480@alu.ufc.br",
      github: "https://github.com/EricmesquiBR",
      latter: "http://lattes.cnpq.br/2056732237823314",
    },
    researchKeywords: [
      "Data Science",
      "LLM's",
      "IA Generativas",
      "Data Analytics",
    ],
    publishedPapers: [
      "Energy-Efficient Distributed Systems",
      "Sustainability in Software Engineering",
      "Optimizing Server Power Consumption",
      "Data Visualization",
    ],
  },
  {
    name: "Silas Eufrásio",
    role: "Graduando",
    github: "uSilas",
    email: "silaseufrasio@alu.ufc.br",
    img: "src/assets/silas-eufracio.jpeg",
    description: `Eu pesquiso sobre IA's generativas, data science. Já participei de estágios pelo curso profissionalizante Técnico em Informática, pela escola EEEP Adriano Nobre, e atualmente participo do projeto PeaceMaker (PIBIT) relacionado a utilização de LLM's para uso no github.`,
    contact: {
      email: "silaseufrasio@alu.ufc.br",
      github: "https://github.com/uSilas",
      latter: "https://lattes.cnpq.br/7757716381339683",
    },
    researchKeywords: ["Web dev", "Scraping", "Python"],
    publishedPapers: [
      "Optimizing Neural Networks in Cloud Infrastructures",
      "Distributed Cloud Systems for AI Applications",
      "Scalable AI Solutions for Big Data",
    ],
  },
  {
    name: "Nelson Felipe",
    role: "Graduando",
    github: "NelsonFelipe",
    email: "nelsonfelipe@alu.ufc.br",
    img: "src/assets/nelson-felipe.jpg",
    description: `Realizo trabalhos relacionados com desenvolvimento, uso bastante Python e tecnologias relacionadas com desenvolvimento web, HTML, CSS e JavaScript.`,
    contact: {
      email: "nelsonfelipe@alu.ufc.br",
      github: "https://github.com/NelsonFelipe",
      latter: "https://lattes.cnpq.br/8091914993613858",
    },
    researchKeywords: ["Web dev", "Scraping", "Python"],
    publishedPapers: [
      "Safety Protocols in Real-Time Automotive Systems",
      "Architecting High-Performance Aerospace Software",
      "Real-Time Data Processing in IoT Systems",
    ],
  },
];

export default teamMembers;
