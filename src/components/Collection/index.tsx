import { motion } from "framer-motion";
import CustomButton from "../CustomButton";
import "./index.css";
import vectorLeft from "/public/vetor branco.png";
import vectorRight from "/public/Vetor Laranja.png";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export function Collection() {
  const [isLoaded, setIsLoaded] = useState(false);

  const images = [vectorLeft, vectorRight];

  useEffect(() => {
    let loadedImages = 0;

    const imageLoaded = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setIsLoaded(true);
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = imageLoaded;
      img.onerror = imageLoaded;
    });
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#270B79]">
        <div className="text-center">
          <Loader2 className="animate-spin text-indigo-500 w-16 h-16 mx-auto" />
        </div>
      </div>
    );
  }
  const handleScroll = () => {
    const nextSection = document.getElementById("mission-section");
    if (nextSection) {
      const offset = -190;
      const top =
        nextSection.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
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

  

  const logoVariants = {
    hidden: (direction: "left" | "right") => {
      if (direction === "left") {
        return {
          x: "-100vw",
          opacity: 0,
          rotate: -20,
        };
      } else {
        return {
          x: "100vw",
          opacity: 0,
          rotate: 20,
        };
      }
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 2.5,
        ease: [0.6, 0.01, -0.05, 0.95],
        opacity: { duration: 1.5 },
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#270B79] to-[#1E0A5C]">
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center h-full px-4 mb-10 md:pt-6 md:mb-10 md:px-16 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col mb-4 mt-8 md:mt-16 justify-center text-white text-center lg:text-left lg:w-1/2 lg:mb-0"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl lg:text-6xl mb-2 font-Lufga-ExtraBold leading-tight"
            variants={itemVariants}
          >
            Inovando na Conexão entre Software e Dados
          </motion.h1>
          <motion.p
            className="text-xl mb-6 lg:text-2xl"
            variants={itemVariants}
          >
            Somos um Laboratório de P&D em
            <span className="font-bold"> Ciência do Software</span> e{" "}
            <span className="font-bold">Integração de Dados</span> da
            Universidade Federal do Ceará, Campus Itapajé
          </motion.p>
          <motion.div variants={itemVariants}>
            <CustomButton
              onClick={handleScroll}
              className="text-lg px-8 py-3 w-full rounded-full transition-transform hover:scale-105"
            >
              Descubra Nossa Missão
            </CustomButton>
          </motion.div>
        </motion.div>

        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="relative h-56 w-56 md:w-full">
            <motion.img
              src={vectorLeft}
              className="w-80 absolute left-3 top-5 md:left-[40%] md:top-1 transform -translate-x-1/2"
              alt="Símbolo de Inovação - Parte Esquerda"
              variants={logoVariants}
              custom="left"
              initial="hidden"
              animate="visible"
            />
            <motion.img
              src={vectorRight}
              className="w-80 absolute left-3 top-5 md:left-[40%] md:top-1 transform -translate-x-1/2"
              alt="Símbolo de Inovação - Parte Direita"
              variants={logoVariants}
              custom="right"
              initial="hidden"
              animate="visible"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
