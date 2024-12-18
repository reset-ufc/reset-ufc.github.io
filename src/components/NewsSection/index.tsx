import NewsCard from "./NewsCard";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
import Slider from "react-slick";

const NewsList = () => {

  const settingsSlide = {
    dots: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
  const newsData = [
    {
      image: "https://avatars.githubusercontent.com/u/106624745?v=4",
      category: "Acesso Cidadão",
      title: "Simplifica a entrada no sistema Tramita, da Sefaz Ceará",
      date: "24/01/2023",
    },
    {
      image: "https://avatars.githubusercontent.com/u/106624745?v=4",
      category: "Projeto Íris",
      title: "Parceria com Contencioso Administrativo Tributário da Sefaz",
      date: "23/01/2023",
    },
    {
      image: "https://avatars.githubusercontent.com/u/106624745?v=4",
      category: "Edital de Pesquisa",
      title: "Técnicas de Linguagem Simples, Direito Visual e Design Editorial",
      date: "17/01/2023",
    },
  ];

  return (
    <div className="p-6 md:p-10 lg:p-14">
      <SectionTitle
        title="Notícias Reset"
        description="Confira as mais Recentes Notícias do nosso Laboratório de Pesquisa"
      />

      <div className="pt-5">
      <Slider {...settingsSlide}>
        {newsData.map((news, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="px-3 rounded-2xl"
          >
            <NewsCard key={index} news={news} />
          </motion.div>
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewsList;
