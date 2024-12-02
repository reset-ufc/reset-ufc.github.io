import { useState, useEffect } from "react";
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

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#270B79] to-[#1E0A5C]">
      <div className="flex flex-col lg:flex-row items-center justify-center h-full px-4 mt-8  md:mt-32 lg:py-0 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col mt-20 justify-center text-white text-center lg:text-left lg:w-1/2 space-y-6 mb-12 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-Lufga-ExtraBold leading-tight">
            Inovando na Conexão entre Software e Dados
          </h1>
          <p className="text-xl lg:text-2xl font-Lufga-Regular">
            Somos um laboratório de pesquisa e desenvolvimento da Universidade
            Federal do Ceará, Campus Itapajé
          </p>
          <div className="pt-4">
            <CustomButton
              onClick={handleScroll}
              className="text-lg px-8 py-3 w-full rounded-full transition-transform hover:scale-105"
            >
              Descubra Nossa Missão
            </CustomButton>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center items-center">
          <div
            className={`logo-container relative ${
              animationFinished ? "merged" : ""
            }`}
          >
            <img
              src={vectorLeft}
              className="logo-part left-part w-32 md:w-48 lg:w-64 absolute top-0 left-0 transition-all duration-1000"
              alt="Símbolo de Inovação - Parte Esquerda"
              style={{
                transform: animationFinished
                  ? "translateX(25%)"
                  : "translateX(0)",
              }}
            />
            <img
              src={vectorRight}
              className="logo-part right-part w-32 md:w-48 lg:w-64 absolute top-0 right-0 transition-all duration-1000"
              alt="Símbolo de Inovação - Parte Direita"
              style={{
                transform: animationFinished
                  ? "translateX(-25%)"
                  : "translateX(0)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
