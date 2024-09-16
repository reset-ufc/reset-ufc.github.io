interface ResearchCardProps {
  title: string;
  description: string;
}

const ResearchCard = ({ title, description }: ResearchCardProps) => (
  <div className="bg-[#270B79] text-white p-6 rounded-lg shadow-lg">
      <h2 className="font-Lufga-Regular text-xl mb-2 bg-inherit flex justify-center">{title}</h2>
      <p className="text-white bg-inherit">{description}</p>
  </div>
);

export default function ResearchArea() {
  const researchAreas = [
      {
          title: "Data Science",
          description: "Campo interdisciplinar que usa métodos, processos, algoritmos e estatística para extrair conhecimento e insights de dados estruturado e não estruturados."
      },
      {
          title: "Analytics",
          description: "Ramo da visualização de dados focada na construção de ferramentas que aumentam a capacidade analítica humana por meio do uso de interfaces interativas."
      },
      {
          title: "Big Data",
          description: "Área de conhecimento que estuda como tratar conjuntos de dados grandes, heterogêneos e variados para descobrir padrões e informações relevantes."
      },
      {
          title: "Machine Learning",
          description: "Subconjunto da inteligência artificial que permite o treinamento de máquinas para aprender com dados sem serem programadas explicitamente."
      }
  ];

  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-inherit">
          <h2 className="flex justify-center text-4xl font-Lufga-ExtraBold bg-inherit text-[#270B79] pb-5">Explore nossas áreas de pesquisa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 bg-inherit lg:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                  <ResearchCard key={index} title={area.title} description={area.description} />
              ))}
          </div>
      </div>
  );
}
