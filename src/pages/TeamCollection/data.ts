import { TeamMemberProps } from "../../types";

const teamMembers: TeamMemberProps[] = [
    {
        name: "Dr. João",
        lastName: "Silva",
        role: "Professor",
        github: "joaosilva",
        email: "joao.silva@university.edu",
        img: "https://randomuser.me/api/portraits/men/10.jpg",
        description: `Dr. João Silva is a full professor of Computer Science at the University of Technology. 
          His research focuses on artificial intelligence and machine learning applications in healthcare systems.`,
        contact: {
          email: "joao.silva@university.edu",
          github: "joaosilva"
        },
        researchKeywords: [
          "Artificial Intelligence",
          "Machine Learning",
          "Healthcare Systems"
        ],
        publishedPapers: [
          "AI-driven Diagnostics in Healthcare",
          "Machine Learning Algorithms for Personalized Medicine",
          "Healthcare Systems Optimization with AI"
        ]
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
          github: "mariaoliveira"
        },
        researchKeywords: [
          "Big Data Analytics",
          "Data Science",
          "Privacy-Preserving Machine Learning"
        ],
        publishedPapers: [
          "Large-Scale Data Processing in Cloud Environments",
          "Privacy-Preserving Machine Learning Models",
          "Data Science Applications in E-commerce"
        ]
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
          github: "carlosferreira"
        },
        researchKeywords: [
          "Software Testing",
          "Quality Assurance",
          "Continuous Integration"
        ],
        publishedPapers: [
          "Automated Software Testing for Scalable Systems",
          "Quality Assurance in Distributed Software Development",
          "Continuous Integration Best Practices"
        ]
      },
    {
      name: "Antônio Cruz",
      role: "Alumni (PhD)",
      github: "Antonio880",
      email: "antoniocruz@gmail.com",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      description: `Antônio Cruz has a Ph.D. in Computer Science from the State University of Maringá, 
        and has worked extensively in the field of Human-Computer Interaction and AI-based solutions for accessibility. 
        He is currently a postdoctoral researcher focused on language models and conversational agents.`,
      contact: {
        email: "antoniocruz@gmail.com",
        github: "Antonio880"
      },
      researchKeywords: [
        "Human-Computer Interaction",
        "AI-based Accessibility",
        "Language Models"
      ],
      publishedPapers: [
        "Improving Chatbot Conversational Skills Through User Interaction",
        "AI Solutions for Accessibility in Smart Cities",
        "Deep Learning in Natural Language Processing"
      ]
    },
    {
      name: "Bianca Trinkenreich",
      role: "Alumni (PhD)",
      github: "biancatrink",
      email: "bianca_trinkh@nau.edu",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      description: `Bianca Trinkenreich holds a Ph.D. in Software Engineering and specializes in sustainable 
        software design and development practices. Her work focuses on minimizing energy consumption in large-scale 
        distributed systems.`,
      contact: {
        email: "bianca_trinkh@nau.edu",
        github: "biancatrink"
      },
      researchKeywords: [
        "Sustainable Software",
        "Energy Efficiency",
        "Distributed Systems"
      ],
      publishedPapers: [
        "Energy-Efficient Distributed Systems",
        "Sustainability in Software Engineering",
        "Optimizing Server Power Consumption"
      ]
    },
    {
      name: "Caio Vieira",
      role: "Visitor PhD Student",
      github: "guriosam",
      email: "ciao.barbosa-vieira-da-silva@nau.edu",
      img: "https://randomuser.me/api/portraits/men/85.jpg",
      description: `Caio Vieira is a visiting PhD student researching the intersection of machine learning 
        and cloud computing. His current focus is on optimizing neural network training times using distributed 
        cloud systems.`,
      contact: {
        email: "ciao.barbosa-vieira-da-silva@nau.edu",
        github: "guriosam"
      },
      researchKeywords: [
        "Machine Learning",
        "Cloud Computing",
        "Neural Networks"
      ],
      publishedPapers: [
        "Optimizing Neural Networks in Cloud Infrastructures",
        "Distributed Cloud Systems for AI Applications",
        "Scalable AI Solutions for Big Data"
      ]
    },
    {
      name: "Daniel Coutinho",
      role: "Visitor",
      github: "danieljbc",
      email: "contact@danieljbc.com",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
      description: `Daniel Coutinho is a visitor at NAU, focusing on software architecture for real-time systems. 
        His background in critical systems includes work in the automotive and aerospace industries, with a 
        focus on safety and performance.`,
      contact: {
        email: "contact@danieljbc.com",
        github: "danieljbc"
      },
      researchKeywords: [
        "Real-Time Systems",
        "Software Architecture",
        "Safety-Critical Systems"
      ],
      publishedPapers: [
        "Safety Protocols in Real-Time Automotive Systems",
        "Architecting High-Performance Aerospace Software",
        "Real-Time Data Processing in IoT Systems"
      ]
    }
  ];

  export default teamMembers;