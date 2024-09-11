import Collection from "../../components/Collection";
import CarouselSection from "../../components/CarouselSection";
import Portifolio from "../../components/portifolio";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { TeamMember } from "../../components/TeamCollection";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

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

  const handleSeeAllMembers = () => {
    navigate("/members");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => window.removeEventListener("scroll", handleScrollTop);
  }, []);

  return (
    <div className="pt-20 relative w-full h-screen">
      <Collection />

      <div id="next-section" className="">
        <div className="animate-fade-right animate-once animate-alternate">
          <h1 className="text-white flex justify-center text-4xl font-bold">
            Artigos
          </h1>
          <CarouselSection />
        </div>
        <div className="animate-fade-right animate-once animate-alternate py-8">
          <h1 className="text-white flex justify-center text-4xl font-bold">
            Portifólio
          </h1>
          <h2 className="text-white flex justify-center text-lg font-semibold">
            Dê uma olhada em alguns dos nossos projetos
          </h2>
          <Portifolio />
        </div>
        
        <div
          className="absolute bottom-[50px] left-1/2 transform animate-bounce -translate-x-1/2 cursor-pointer"
          onClick={handleScrollBottom}
        >
          <span className="block w-6 h-6 border-2 border-white rounded-full"></span>
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
