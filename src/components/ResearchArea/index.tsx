import { useState } from "react";
import { motion } from "framer-motion";
import { Database, BarChart, ShieldCheck, BotIcon } from "lucide-react";

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
      title: "Software Engineering",
      description:
        "Área que envolve o estudo da manutenção e evolução de sistemas, utilizando mineração de repositórios de software para identificar padrões e otimizar processos.",
      icon: <Database />,
    },
    {
      title: "Big Data Analytics",
      description:
        "Explora técnicas de mineração de dados e recuperação da informação para analisar grandes volumes de dados, identificando padrões e insights relevantes.",
      icon: <BarChart />,
    },
    {
      title: "Software Security",
      description:
        "Focado na proteção de sistemas e aplicações, garantindo segurança contra vulnerabilidades e ataques por meio de práticas e ferramentas robustas.",
      icon: <ShieldCheck />,
    },
    {
      title: "Machine Learning",
      description:
        "Área de conhecimento que permite que máquinas aprendam com dados para realizar tarefas específicas, aplicando modelos matemáticos e estatísticos.",
      icon: <BotIcon />,
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
