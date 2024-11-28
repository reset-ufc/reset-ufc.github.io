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
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
};

  return (
    <div className="relative flex flex-col lg:flex-row justify-center min-h-screen items-center animate-fade animate-once animate-alternate bg-[#270B79] p-4 lg:p-0">

    <div className="bg-transparent flex flex-col lg:flex-row justify-evenly w-full h-full items-center z-10 gap-8 lg:gap-0">
      <div className="bg-inherit flex flex-col justify-center text-white text-center lg:text-left">
        <h1 className="bg-inherit flex flex-col lg:flex-row text-5xl lg:text-8xl font-Lufga-ExtraBold">
          Reset
          <span className="bg-inherit font-Lufga-Regular">Lab</span>
        </h1>
        <p className="bg-inherit text-2xl lg:text-4xl w-full lg:w-[350px] font-semibold my-4 lg:my-7">
          Inovando na Conexão entre Software e Dados.
        </p>
        <CustomButton children="Venha nos Conhecer" onClick={handleScroll} />
      </div>

      <div className="bg-inherit relative  lg:mt-0">
        <div className={`logo-container ${animationFinished ? "merged" : ""}`}>
          <img
            src={vectorLeft}
            className="logo-part left-part w-16 md:w-24 lg:w-auto"
            alt="Left Vector"
          />
          <img
            src={vectorRight}
            className="logo-part right-part w-16 md:w-24 lg:w-auto"
            alt="Right Vector"
          />
        </div>
      </div>
    </div>
  </div>
  );
}
