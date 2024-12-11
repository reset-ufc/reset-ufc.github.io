import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { institutionsData } from "./data";
import { titleAnimateProps } from "../../constants/animate";

export function CollaborativeResearch() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 text-white relative overflow-hidden">
      <div className="container mx-auto px-5 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          <motion.div
            className="lg:w-1/2 text-center"
            {...titleAnimateProps}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Nos Fazemos Pesquisa{" "}
              <span className="text-[#ed6327]">Colaborativa</span> e {""}
              <span className="text-[#ed6327]">Interdisciplinar</span>
            </h2>
            <p className="text-gray-300 text-sm lg:text-base mb-6">
              O <span className="font-bold">ResetLab</span> é um laboratório de
              Somos um laboratório de pesquisa e desenvolvimento dedicado à
              inovação e ao trabalho em equipe. No ResetLab, atuamos de forma
              colaborativa e interdisciplinar, estabelecendo parcerias com
              diversas instituições e laboratórios de pesquisa para criar
              soluções e compartilhar conhecimentos.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full mt-6"
          >
            <Slider {...sliderSettings}>
              {institutionsData.map((institution, index) => (
                <motion.div key={index} className="px-2">
                  <div className="flex flex-col items-center justify-center bg-white rounded-xl p-4 shadow-lg h-40">
                    <div className="relative w-28 h-28 flex flex-col items-center justify-center">
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
                  </div>
                </motion.div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
