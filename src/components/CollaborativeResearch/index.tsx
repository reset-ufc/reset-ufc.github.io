import { motion } from "framer-motion";

export function CollaborativeResearch() {
  const institutions = [
    { name: "PUC-RIO", src: "/puc-rio-logo.png" },
    {
      name: "USP",
      src: "/usp-logo.png",
      description: "Universidade de São Paulo",
    },
    { name: "UECE", src: "/uece-logo.png" },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-16">
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
              O RESET LAB é um grupo de pesquisa colaborativa que trabalha de
              forma interdisciplinar com diversas instituições e laboratórios de
              pesquisa.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-lg lg:max-w-xl mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {institutions.map((institution, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative flex-shrink-0 w-20 h-20 flex items-center justify-center">
                  <img
                    src={institution.src}
                    alt={institution.name}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                {institution.description && (
                  <p className="text-black mt-2 text-xs sm:text-sm text-center leading-tight">
                    {institution.description}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
