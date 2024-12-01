import Collection from "../../components/Collection";
import { CarouselSection } from "../../components/CarouselSection";
import { StatsSection } from "../../components/StatsSection";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import ResearchArea from "../../components/ResearchArea";
import { Helmet } from "react-helmet-async";
import { SponsorshipsSection } from "../../components/SponsorshipsSection";
import { CollaborativeResearch } from "../../components/CollaborativeResearch";
import FeaturedProjects from "../../components/FeaturedProjects";

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
      <Helmet title="home" />
      <Collection />
      <div>
        <div className="flex flex-col bg-gradient-to-b from-[#270B79] via-[#3711a6] to-indigo-800">
          <CollaborativeResearch />
          <ResearchArea />
        </div>
        <div className="bg-gradient-to-t from-[#270B79] via-[#3711a6] to-indigo-800 py-6 md:py-8">
          <div className="mt-4 sm:mt-12">
            <CarouselSection />
          </div>
        </div>
        <div className="animate-fade-right animate-once animate-alternate">
          <div className="bg-gradient-to-t to-[#270B79] via-[#3711a6] from-indigo-800 py-4 md:py-10">
            <FeaturedProjects />
            <StatsSection />
          </div>
          <div className="flex flex-col text-center px-4 sm:px-5 py-12 sm:py-16 md:py-24">
            <SponsorshipsSection />
          </div>
        </div>
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
          onClick={handleScrollBottom}
        >
          <span className="block w-6 h-6 border-2 bg-inherit border-white rounded-full animate-bounce"></span>
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
