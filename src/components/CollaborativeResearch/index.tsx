import { motion } from "framer-motion";

export function CollaborativeResearch() {
  const institutions = [
    { name: "UFBA", logo: "/ufba-logo.png" },
    { name: "UFLA", logo: "/ufla-logo.png" },
    { name: "UNEB", logo: "/uneb-logo.png" },
  ];

  return (
    <section className="py-16 md:py-24 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-16 items-center">
          <motion.div
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-2xl lg:max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Somos um grupo de pesquisa{" "}
              <span className="text-[#ed6327]">colaborativa</span>
            </h2>
            <p className="text-gray-300 text-sm lg:text-base">
              O ARIES LAB é uma equipe de pesquisa do Instituto de Computação da
              Universidade Federal da Bahia (UFBA), em conjunto com a
              Universidade Federal de Lavras (UFLA) e a Universidade Estadual da
              Bahia (UNEB).
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {institutions.map((institution, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={institution.logo}
                  alt={`${institution.name} logo`}
                  width={120}
                  height={120}
                  className="max-w-full h-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
