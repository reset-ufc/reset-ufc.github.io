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
    <div className="relative flex justify-center h-screen items-center animate-fade animate-once animate-alternate bg-[#270B79] ">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="bg-transparent flex justify-evenly w-full h-full items-center z-10">
        <div className="bg-inherit flex flex-col justify-center text-white">
          <h1 className="bg-inherit flex text-8xl font-Lufga-ExtraBold">
            Reset
            <h1 className="bg-inherit font-Lufga-Regular">Lab</h1>
          </h1>
          <p className="bg-inherit text-4xl w-[350px] font-semibold my-7">
            Inovando na Conexão entre Software e Dados.
          </p>
          <CustomButton children="Venha nos Conhecer" onClick={handleScroll} />
        </div>

        <div className="bg-inherit relative">
          <div className={`logo-container ${animationFinished ? "merged" : ""}`}>
            {/* Vetor da esquerda */}
            <img
              src={vectorLeft}
              className="logo-part left-part"
              alt="Left Vector"
            />
            {/* Vetor da direita */}
            <img
              src={vectorRight}
              className="logo-part right-part"
              alt="Right Vector"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
