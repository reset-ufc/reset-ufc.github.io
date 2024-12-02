import { motion } from "framer-motion";
import { institutionsData } from "./data";

export function CollaborativeResearch() {
  return (
    <section
      id="collaborative-research"
      className="py-12 md:py-16 lg:py-24 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:items-start gap-6 lg:gap-10">
          <motion.div
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-md lg:max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Somos um grupo de pesquisa{" "}
              <span className="text-[#ed6327]">colaborativa</span>
            </h2>
            <p className="text-gray-300 text-sm lg:text-base">
              O RESET LAB é um grupo de pesquisa colaborativa da Universidade
              Federal (UFC) do ceará que trabalha de forma interdisciplinar com
              diversas instituições e laboratórios de pesquisa.
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-1 space-x-3 w-full max-w-lg lg:max-w-xl mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {institutionsData.map((institution, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-28 h-w-28 flex flex-col items-center justify-center">
                  <img
                    src={institution.src}
                    alt={institution.name}
                    className="object-contain max-w-full max-h-full"
                  />
                  {institution.description && (
                    <p className="text-black mt-2 text-xs sm:text-sm text-center leading-none">
                      {institution.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
