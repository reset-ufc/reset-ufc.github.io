"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Database, BarChart, Server, Brain } from "lucide-react";

interface ResearchCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ResearchCard = ({ title, description, icon }: ResearchCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-[#270B79] text-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center mb-4">
        <motion.div
          className="text-4xl mb-2"
          animate={{ color: isHovered ? "#FFA500" : "#FFFFFF" }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.div>
        <h2 className="font-Lufga-Regular text-2xl text-center bg-inherit">
          {title}
        </h2>
      </div>
      <motion.p
        className="text-white bg-inherit text-sm leading-relaxed text-center"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0.8 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default function ResearchArea() {
  const researchAreas = [
    {
      title: "Data Science",
      description:
        "Campo interdisciplinar que usa métodos, processos, algoritmos e estatística para extrair conhecimento e insights de dados estruturado e não estruturados.",
      icon: <Database />,
    },
    {
      title: "Analytics",
      description:
        "Ramo da visualização de dados focada na construção de ferramentas que aumentam a capacidade analítica humana por meio do uso de interfaces interativas.",
      icon: <BarChart />,
    },
    {
      title: "Big Data",
      description:
        "Área de conhecimento que estuda como tratar conjuntos de dados grandes, heterogêneos e variados para descobrir padrões e informações relevantes.",
      icon: <Server />,
    },
    {
      title: "Machine Learning",
      description:
        "Subconjunto da inteligência artificial que permite o treinamento de máquinas para aprender com dados sem serem programadas explicitamente.",
      icon: <Brain />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 bg-inherit">
      <motion.h2
        className="flex justify-center text-3xl lg:text-4xl text-center font-Lufga-ExtraBold bg-inherit text-[#270B79] pb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore nossas áreas de pesquisa
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 bg-inherit lg:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {researchAreas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ResearchCard
              title={area.title}
              description={area.description}
              icon={area.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
