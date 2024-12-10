interface ArticlesDataProps {
  title: string;
  description: string;
  category: string;
  journalName: string;
  year: number;
  authors: string[];
  keywords?: string[];
  url: string;
}

export const articlesData: ArticlesDataProps[] = [
  {
    title:
      "Towards Effective Gamification of Existing Systems: Method and Experience Report.",
    description:
      "Relato de experiência na gamificação de sistemas existentes, destacando os desafios e apresentando o método Gamify4Fun para auxiliar desenvolvedores.",
    category: "Engenharia de Software",
    journalName: "Springer Nature",
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
      "24th IEEE International Conference on Source Code Analysis and Manipulation",
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
      "Este estudo investiga o processo de refatoração, ressaltando os benefícios e desafios envolvidos. Explora a falta de pesquisas sobre o impacto de operações triviais e não triviais, e propõe o uso de modelos de aprendizagem supervisionada para detectar e corrigir refatorações de forma automatizada.",
    category: "Engenharia de Software",
    journalName: "BibBase",
    year: 2024,
    authors: ["Anderson Uchôa", "Carla Bezerra", "Darwin Pinheiro"],
    url: "https://bibbase.org/network/publication/pinheiro-bezerra-ucha-ontheeffectivenessoftrivialrefactoringsinpredictingnontrivialrefactorings-2024",
  },
];
