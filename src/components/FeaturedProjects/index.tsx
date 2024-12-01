import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { FeaturedProjectsData } from "./data";

export default function FeaturedProjects() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
        Projetos em Destaque
      </h1>
      <p className="text-white text-center text-base sm:text-lg font-Lufga-Regular mb-8 px-4">
        Conheça nossos projetos de pesquisa em andamento.
      </p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={twMerge("mySwiper", "!pb-12")}
      >
        {FeaturedProjectsData.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-[440px]">
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-black text-xl font-semibold mb-2 line-clamp-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold">Natureza:</span>{" "}
                      {project.nature}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold">Período:</span>{" "}
                      {project.period}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold">Status:</span>{" "}
                      {project.status}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold">Financiadora:</span>{" "}
                      {project.funding}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold">Palavras chaves:</span>{" "}
                      {project.keywords.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-auto p-6">
                <NavLink
                  to={project.link}
                  className="inline-flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                >
                  Ver Detalhes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
