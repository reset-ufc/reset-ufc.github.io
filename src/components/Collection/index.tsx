import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomButton from "../CustomButton";
import "./index.css";
import vectorLeft from "/public/vetor branco.png";
import vectorRight from "/public/Vetor Laranja.png";

export default function Collection() {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationFinished(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const nextSection = document.getElementById("collaborative-research");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#270B79] to-[#1E0A5C]">
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center h-full px-4 mt-8 md:mt-32 lg:py-0 lg:px-16 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col mt-20 justify-center text-white text-center lg:text-left lg:w-1/2 space-y-6 mb-12 lg:mb-0"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl lg:text-6xl font-Lufga-ExtraBold leading-tight"
            variants={itemVariants}
          >
            Inovando na Conexão entre Software e Dados
          </motion.h1>
          <motion.p
            className="text-xl lg:text-2xl font-Lufga-Regular"
            variants={itemVariants}
          >
            Somos um laboratório de pesquisa e desenvolvimento da Universidade
            Federal do Ceará, Campus Itapajé
          </motion.p>
          <motion.div className="pt-4" variants={itemVariants}>
            <CustomButton
              onClick={handleScroll}
              className="text-lg px-8 py-3 w-full rounded-full transition-transform hover:scale-105"
            >
              Descubra Nossa Missão
            </CustomButton>
          </motion.div>
        </motion.div>

        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="logo-container relative">
            <motion.img
              src={vectorLeft}
              className="logo-part left-part w-32 md:w-48 lg:w-64 absolute top-0 left-0"
              alt="Símbolo de Inovação - Parte Esquerda"
              initial={{ x: "-50%" }}
              animate={{ x: animationFinished ? "0%" : "-50%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.img
              src={vectorRight}
              className="logo-part right-part w-32 md:w-48 lg:w-64 absolute top-0 right-0"
              alt="Símbolo de Inovação - Parte Direita"
              initial={{ x: "50%" }}
              animate={{ x: animationFinished ? "0%" : "50%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
