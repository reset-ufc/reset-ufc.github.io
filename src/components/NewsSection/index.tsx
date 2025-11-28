import NewsCard from "./NewsCard";
import SectionTitle from "../SectionTitle";
import Slider from "react-slick";
import { useFeaturedNews } from "../../hooks/useFeaturedContent";

const NewsList = () => {
  const { data, isLoading, isError } = useFeaturedNews(5);

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

  if (isLoading) {
    return (
      <div className="p-6 md:p-10 lg:p-14 mx-auto max-w-7xl rounded-md">
        <SectionTitle
          title="Notícias Reset"
          description="Confira as mais Recentes Notícias do nosso Laboratório de Pesquisa"
        />
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  if (isError || !data || data.data.length === 0) {
    return (
      <div className="p-6 md:p-10 lg:p-14 mx-auto max-w-7xl rounded-md">
        <SectionTitle
          title="Notícias Reset"
          description="Confira as mais Recentes Notícias do nosso Laboratório de Pesquisa"
        />
        <div className="flex justify-center items-center py-20">
          <p className="text-white text-lg">
            Nenhuma notícia em destaque disponível no momento.
          </p>
        </div>
      </div>
    );
  }

  const news = data.data;
  const shouldUseSlider = news.length > 4;

  return (
    <div className="p-6 md:p-10 lg:p-14 mx-auto max-w-7xl rounded-md">
      <SectionTitle
        title="Notícias Reset"
        description="Confira as mais Recentes Notícias do nosso Laboratório de Pesquisa"
      />

      {shouldUseSlider ? (
        <div className="pt-5 relative px-4">
          <Slider {...settingsSlide}>
            {news.map((newsItem) => (
              <div key={newsItem.id} className="p-6 md:p-4">
                <NewsCard
                  news={{
                    id: newsItem.id,
                    image: newsItem.img || "https://via.placeholder.com/400x300",
                    title: newsItem.title,
                    date: new Date(newsItem.publishedDate || newsItem.createdAt).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "short",
                    }),
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {news.map((newsItem) => (
            <div key={newsItem.id}>
              <NewsCard
                news={{
                  id: newsItem.id,
                  image: newsItem.img || "https://via.placeholder.com/400x300",
                  title: newsItem.title,
                  date: new Date(newsItem.publishedDate || newsItem.createdAt).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "short",
                  }),
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsList;
