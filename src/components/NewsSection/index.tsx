import NewsCard from "./NewsCard";
import SectionTitle from "../SectionTitle";
import Slider from "react-slick";
import { newsItems } from "../NewsFeed/data";

const NewsList = () => {
  const settingsSlide = {
    dots: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
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

  return (
    <div className="p-6 md:p-10 lg:p-14 mx-auto max-w-7xl rounded-md">
      <SectionTitle
        title="Notícias Reset"
        description="Confira as mais Recentes Notícias do nosso Laboratório de Pesquisa"
      />

      <div className="pt-5 relative px-4">
        <Slider {...settingsSlide}>
          {newsItems.map((news, index) => (
            <div key={index} className="p-6 md:p-4">
              <NewsCard key={index} news={news} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewsList;
