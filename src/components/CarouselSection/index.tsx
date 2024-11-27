import { useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function CarouselSection() {
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

  const data = [
    {
      title: "Exploração de Big Data em Ambientes Corporativos",
      description:
        "Análise das estratégias para implementar e gerenciar big data em empresas, focando na otimização de processos e tomada de decisão.",
      category: "Big Data",
      location: "São Paulo, Brasil",
      year: 2023,
      authors: ["Dr. Ana Silva", "Prof. João Santos", "Eng. Maria Oliveira"],
    },
    {
      title: "Inovações em Machine Learning para o Setor de Saúde",
      description:
        "Estudo das aplicações de machine learning na saúde, incluindo diagnósticos, predições e melhorias nos cuidados aos pacientes.",
      category: "Machine Learning",
      location: "Rio de Janeiro, Brasil",
      year: 2023,
      authors: ["Prof. Carlos Mendes", "Dra. Luciana Ferreira"],
    },
    {
      title: "Engenharia de Software: Práticas Modernas e Desafios",
      description:
        "Discussão sobre as técnicas e metodologias modernas na engenharia de software, bem como os desafios enfrentados pelos desenvolvedores.",
      category: "Engenharia de Software",
      location: "Porto Alegre, Brasil",
      year: 2023,
      authors: [
        "Dra. Mariana Costa",
        "Eng. Pedro Almeida",
        "Prof. Ricardo Souza",
      ],
    },
    {
      title: "(Re)design de Aplicações Web para Melhoria de UX",
      description:
        "Caso de estudo sobre a reestruturação de aplicações web para melhorar a experiência do usuário e aumentar a eficiência do sistema.",
      category: "Inovação",
      location: "Belo Horizonte, Brasil",
      year: 2023,
      authors: ["Eng. Rafael Oliveira", "Designer Julia Campos"],
    },
  ];

  return (
    <div className="p-6 md:p-10 lg:p-14 mx-auto max-w-7xl rounded-md">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
        Artigos em Destaque
      </h1>
      <p className="text-white text-center text-base sm:text-lg font-Lufga-Regular mb-2 px-4">
        Confira os artigos mais recentes e relevantes de nossa equipe
      </p>
      <div className="relative">
        <Slider ref={setSliderRef} {...settings}>
          {data.map((item, index) => (
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
                  <p className="text-sm text-gray-600 mb-4">
                    Autores: {item.authors.join(", ")}
                  </p>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <button className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300">
                    Leia mais
                  </button>
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
