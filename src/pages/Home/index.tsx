import Collection from "../../components/Collection";
import CarouselSection from "../../components/CarouselSection";
import Portifolio from "../../components/portifolio";
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
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => window.removeEventListener("scroll", handleScrollTop);
  }, []);

  return (
    <div className="relative w-full">
      <Collection />

      <div id="next-section" className="">
        <div  className="bg-white py-16">
          <ResearchArea />
        </div>
        <div className="bg-[#270B79]">
          <h1 className="text-white animate-fade-up animate-once animate-alternate flex justify-center text-4xl pt-6 font-Lufga-ExtraBold">
            Artigos
          </h1>
          <CarouselSection />
        </div>
        <div className="animate-fade-right animate-once animate-alternate py-8">
          <h1 className="text-white flex justify-center text-4xl font-Lufga-ExtraBold">
            Portifólio
          </h1>
          <h2 className="text-white flex justify-center text-lg font-Lufga-Regular">
            Dê uma olhada em alguns dos nossos projetos
          </h2>
          <Portifolio />
          <StatsSection />
        </div>

        <div
          className="absolute top-[860px] bg-transparent left-1/2 transform animate-bounce -translate-x-1/2 cursor-pointer"
          onClick={handleScrollBottom}
        >
          <span className="block w-6 h-6 border-2 bg-inherit border-white rounded-full"></span>
        </div>
      </div>

      {showButton && (
        <motion.button
          className="fixed bottom-10 right-10 bg-[#ec642a] text-white rounded-full p-4 shadow-lg"
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
    </div>
  );
}
