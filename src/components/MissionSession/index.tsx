import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import { Shield, Code, Database } from "lucide-react";

export function MissionSession() {
  const [activeTab, setActiveTab] = useState(0);

  const missionPoints = [
    {
      title: "Segurança da Informação",
      description:
        "Desenvolvemos soluções robustas para proteger dados e sistemas contra ameaças cibernéticas.",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Desenvolvimento de Sistemas",
      description:
        "Criamos sistemas inovadores que atendem às necessidades complexas da indústria e academia.",
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Ciência de Dados",
      description:
        "Aplicamos técnicas avançadas de análise de dados para extrair insights valiosos e impulsionar a tomada de decisões.",
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <main id="mission-section" className="mt-24 pb-12 px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Nossa Missão" />
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg mb-8 sm:mb-10 text-center leading-relaxed font-light tracking-wide"
        >
          O <span className="font-bold text-primary-500">ResetLab</span> é um
          laboratório de pesquisa e desenvolvimento dedicado à pesquisa avançada
          em engenharia de software e ciência de dados. Desenvolvemos soluções
          inovadoras e realizamos projetos de pesquisa que visam melhorar a
          segurança da informação, análise e desenvolvimento de sistemas, e
          ciência de dados, promovendo o desenvolvimento acadêmico e industrial.
        </motion.p>

        <div className="mt-8 sm:mt-12">
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
            {missionPoints.map((point, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onClick={() => setActiveTab(index)}
                className={`px-3 sm:px-4 py-2 rounded-full transition-colors duration-300 text-sm sm:text-base font-semibold ${
                  activeTab === index
                    ? "text-white"
                    : "bg-[#ed6327] text-gray-300 hover:bg-[#ed6327]"
                }`}
              >
                {point.title}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              {missionPoints[activeTab].icon}
              <h3 className="text-lg sm:text-xl font-semibold ml-3 sm:ml-4">
                {missionPoints[activeTab].title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300">
              {missionPoints[activeTab].description}
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
