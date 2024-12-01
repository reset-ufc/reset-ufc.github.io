import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { ProjectsData } from "./data";

interface PortfolioProps {
  searchTerm?: string;
  statusFilter?: string;
  periodFilter?: string;
  fundingFilter?: string;
  keywordFilter?: string;
}

export default function Projects({
  searchTerm = "",
  statusFilter = "all",
  periodFilter = "all",
  fundingFilter = "all",
  keywordFilter = "all",
}: PortfolioProps) {
  // Filtragem dos projetos
  const filteredProjects = ProjectsData.filter((project) => {
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      project.name.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search);
    const matchesStatus =
      statusFilter === "all" || project.status === statusFilter;
    const matchesPeriod =
      periodFilter === "all" || project.period === periodFilter;
    const matchesFunding =
      fundingFilter === "all" || project.funding === fundingFilter;
    const matchesKeywords =
      keywordFilter === "all" || project.keywords.includes(keywordFilter);
    return (
      matchesSearch &&
      matchesStatus &&
      matchesPeriod &&
      matchesFunding &&
      matchesKeywords
    );
  });

  return (
    <div className="max-w-7xl mx-auto">
      {filteredProjects.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">
          Nenhum projeto encontrado.
        </p>
      ) : (
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
          {filteredProjects.map((project) => (
            <SwiperSlide key={project.slug}>
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
      )}
    </div>
  );
}
