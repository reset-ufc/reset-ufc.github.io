import Collection from "../../components/Collection";
import CarouselSection from "../../components/CarouselSection";
import Portfolio from "../../components/portfolio";
import StatsSection from "../../components/StatsSection";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import ResearchArea from "../../components/ResearchArea";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  const handleScrollBottom = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollTop = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight > fullHeight - 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => window.removeEventListener("scroll", handleScrollTop);
  }, []);

  return (
    <>
      <Collection />
      <div id="next-section">
        <div className="flex flex-col bg-white">
        <div className="flex justify-center gap-10 text-center items-center px-5 py-16 bg-slate-100">
           <div className="flex flex-col justify-center items-center">
           <h2 className="text-4xl font-Lufga-ExtraBold bg-inherit text-[#270B79] pb-3">
            Somos um grupo de pesquisa <span className="text-[#ed6327]">colaborativa</span>
            </h2>
            <p className="font-medium text-zinc-500 w-[426px]">
            O ARIES LAB é uma equipe de pesquisa do Instituto de Computação da Universidade Federal da Bahia (UFBA), em conjunto com a Universidade Federal de Lavras (UFLA) e a Universidade Estadual da Bahia (UNEB).
            </p>
           </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                >
                  IMAGENS DAS INSTITUIÇÕES AQUI
                </div>
              ))}
            </div>
          </div>
          <ResearchArea />
        </div>
        <div className="bg-[#270B79] py-24">
          <h1 className="text-white animate-fade-up animate-once animate-alternate flex justify-center text-4xl pt-6 font-Lufga-ExtraBold">
            Artigos
          </h1>
          <CarouselSection />
        </div>
        <div className="animate-fade-right animate-once animate-alternate">
          <div>
            <h1 className="text-white flex justify-center text-4xl font-Lufga-ExtraBold">
              Portfólio
            </h1>
            <h2 className="text-white flex justify-center text-lg font-Lufga-Regular">
              Dê uma olhada em alguns dos nossos projetos
            </h2>
          </div>
          <Portfolio />
          <StatsSection />
          <div className="flex flex-col text-center px-5 py-24">
            <h2 className="text-4xl font-Lufga-ExtraBold bg-inherit text-[#270B79] pb-3">
              Nossos Patrocínios
            </h2>
            <p className="font-medium text-zinc-500">
              Os membros do RESET LAB recebem financiamento da CAPES, FAPESP,
              CNPQ e Tomorrow.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-16 py-10 bg-white shadow-lg rounded-lg"
                >
                  IMAGENS DOS PATROCINADORES AQUI
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="absolute 2xl:top-[860px] top-[560px] bg-transparent left-1/2 transform animate-bounce -translate-x-1/2 cursor-pointer"
          onClick={handleScrollBottom}
        >
          <span className="block w-6 h-6 border-2 bg-inherit border-white rounded-full"></span>
        </div>
      </div>

      {showButton && (
        <motion.button
          className="fixed bottom-10 right-10 bg-[#ed6327] text-white rounded-full p-4 shadow-lg"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaArrowUp
            size={20}
            className="bg-inherit transition ease-in-out hover:-translate-y-2 duration-300"
          />
        </motion.button>
      )}
    </>
  );
}