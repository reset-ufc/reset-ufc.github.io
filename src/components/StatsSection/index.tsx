import { Users, FileText, Box, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { titleAnimateProps } from "../../constants/animate";

const statsData = [
  { number: 100, text: "COLABORADORES", icon: Users },
  { number: 150, text: "ARTIGOS PUBLICADOS", icon: FileText },
  { number: 15, text: "PRODUTOS", icon: Box },
  { number: 22, text: "PARCEIROS", icon: Briefcase },
];

export const StatsSection = () => {
  return (
    <section
      id="stats-section"
      className="py-16 md:py-24  text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          {...titleAnimateProps}
          className="text-3xl md:text-4xl font-bold mb-12 text-center leading-tight"
        >
          Faça parte de uma equipe de{" "}
          <span className="text-[#ed6327]">cientistas</span>,{" "}
          <span className="text-[#ed6327]">inventores</span> e{" "}
          <span className="text-[#ed6327]">amigos</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center mb-4">
                <item.icon className="text-yellow-400 w-12 h-12" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-center mb-2">
                {item.number}
              </div>
              <div className="text-sm md:text-base text-center text-gray-300 font-medium">
                {item.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        {[...Array(60)].map((_, index) => (
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
};
