import { useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import { articlesData } from "./data";

export function FeaturedArticles() {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
        Artigos em Destaque
      </h1>
      <p className="text-gray-300 text-center text-lg md:text-xl font-light mb-4 max-w-2xl mx-auto">
        Confira os artigos mais recentes e relevantes de nossa equipe
      </p>
      <div className="relative">
        <Slider ref={setSliderRef} {...settings}>
          {articlesData.map((item, index) => (
            <div key={index} className="px-10 p-6 md:px-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-4">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{item.location}</p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-1">
                    <span className="font-semibold">Autores</span>:{" "}
                    {item.authors.join(", ")}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-1">
                    <span className="font-semibold">Palavras chaves:</span>{" "}
                    {item.keywords?.join(", ")}
                  </p>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <NavLink
                    to={item.url}
                    target="_blank"
                    className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300"
                  >
                    Leia mais
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          onClick={() => sliderRef?.slickPrev()}
          className="absolute left-6 md:left-0 top-1/2 -translate-y-1/2 -translate-x-full bg-white p-2 rounded-full shadow-md hover:bg-indigo-100 transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-indigo-600" />
        </button>
        <button
          onClick={() => sliderRef?.slickNext()}
          className="absolute right-6 md:right-0 top-1/2 -translate-y-1/2 translate-x-full bg-white p-2 rounded-full shadow-md hover:bg-indigo-100 transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6 text-indigo-600" />
        </button>
      </div>
    </div>
  );
}
