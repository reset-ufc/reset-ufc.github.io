import { motion } from "framer-motion";
import {
  Database,
  BarChart,
  ShieldCheck,
  BotIcon,
  Palette,
  Book,
} from "lucide-react";
import SectionTitle from "../SectionTitle";

interface ResearchCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ResearchCard = ({ title, description, icon }: ResearchCardProps) => {
  return (
    <motion.div
      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex flex-col items-center mb-2">
        <div className="text-4xl mb-2">{icon}</div>
        <h2 className="font-bold text-2xl text-center text-white">{title}</h2>
      </div>
      <motion.p className="text-gray-300 text-sm leading-relaxed text-center">
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
        "Área que envolve o estudo da manutenção e evolução de sistemas, utilizando mineração de repositórios de software para identificar padrões e otimizar processos de forma empírica e experimental.",
      icon: <Database />,
    },
    {
      title: "Big Data Analytics",
      description:
        "Explora técnicas avançadas de visualização, mineração de dados e recuperação da informação, analisando grandes volumes de dados para identificar padrões e insights relevantes.",
      icon: <BarChart />,
    },
    {
      title: "Software Security",
      description:
        "Focado na proteção de sistemas e aplicações, garantindo segurança contra vulnerabilidades e ataques por meio de boas práticas de codificação e ferramentas robustas.",
      icon: <ShieldCheck />,
    },
    {
      title: "Machine Learning",
      description:
        "Envolve a utilização de algoritmos de aprendizado de máquina e estatísticos avançados para alcançar resultados otimizados, eficientes e precisos para facilitar a execução de tarefas complexas.",
      icon: <BotIcon />,
    },
    {
      title: "Creative Computing",
      description:
        "Computação para prover a criação e expressão em diversas áreas, como: arte, comunicação e cultura. Há aplicações como jogos e música, com interseções com outras áreas como a educação e marketing",
      icon: <Palette />,
    },
    {
      title: "Software Education",
      description:
        "Focado no ensino e aprendizado de boas práticas de engenharia de software e programação, prepara profissionais para projetar, desenvolver e manter sistemas de software de forma eficiente e colaborativa.",
      icon: <Book />,
    },
  ];

  return (
    <section className="py-16 md:py-16 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title="Explore nossas áreas de Pesquisa" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
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
