import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { ArrowRight, Calendar, Briefcase, Tag, DollarSign } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { FeaturedProjectsData } from "./data";

export default function FeaturedProjects() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
        Projetos em Destaque
      </h1>
      <p className="text-gray-300 text-center text-lg md:text-xl font-light mb-4 max-w-2xl mx-auto">
        Explore nossos projetos de pesquisa inovadores e descubra o futuro da
        tecnologia.
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
        className={twMerge("mySwiper", "!pb-16")}
      >
        {FeaturedProjectsData.map((project, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 flex flex-col h-[500px]">
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-gray-800 text-2xl font-bold mb-4 line-clamp-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-6 space-y-3">
                  <ProjectDetail
                    icon={<Briefcase className="w-5 h-5" />}
                    label="Natureza"
                    value={project.nature}
                  />
                  <ProjectDetail
                    icon={<Calendar className="w-5 h-5" />}
                    label="Período"
                    value={project.period}
                  />
                  <ProjectDetail
                    icon={<Tag className="w-5 h-5" />}
                    label="Status"
                    value={project.status}
                  />
                  <ProjectDetail
                    icon={<DollarSign className="w-5 h-5" />}
                    label="Financiadora"
                    value={project.funding}
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto p-6">
                <NavLink
                  to={project.link}
                  className="inline-flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300 group"
                >
                  Ver Detalhes
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

interface ProjectDetailProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function ProjectDetail({ icon, label, value }: ProjectDetailProps) {
  return (
    <div className="flex items-center text-gray-700">
      {icon}
      <span className="ml-2 font-semibold">{label}:</span>
      <span className="ml-1">{value}</span>
    </div>
  );
}
