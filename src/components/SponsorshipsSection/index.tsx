import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { titleAnimateProps } from "../../constants/animate";

export function SponsorshipsSection() {
  const sponsors = [
    { src: "/CNPQ.png", alt: "CNPq logo" },
    { src: "/funcap.jpg", alt: "FUNCAP logo" },
    { src: "/cidacs.jpg", alt: "CIDACS logo" },
    { src: "/fapesp.webp", alt: "FAPESP logo" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="px-4">
      <motion.div
        {...titleAnimateProps}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#270B79] pb-3 text-center">
          Nossos Patrocínios
        </h1>
        <p className="font-medium text-black max-w-2xl mx-auto text-center mb-8">
          Os membros do <span className="font-bold">ResetLab</span> recebem
          financiamento da CNPq, FUNCAP, CIDACS e FAPESP
        </p>
      </motion.div>
      <div className="container mx-auto">
        <Slider {...sliderSettings}>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="px-2 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 flex items-center justify-center w-full h-40">
                <img
                  src={sponsor.src}
                  alt={sponsor.alt}
                  className="object-contain h-32 w-32"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
