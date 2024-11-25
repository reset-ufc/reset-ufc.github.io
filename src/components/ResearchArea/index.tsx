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
      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
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
        <h2 className="font-bold text-2xl text-center text-white">{title}</h2>
      </div>
      <motion.p
        className="text-gray-300 text-sm leading-relaxed text-center"
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
    <section className="py-16 md:py-24 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore nossas áreas de pesquisa
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
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
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animation: `float ${
                Math.random() * 10 + 5
              }s infinite ease-in-out`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}
