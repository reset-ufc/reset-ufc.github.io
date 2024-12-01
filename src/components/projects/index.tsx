import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface PortfolioProps {
  searchTerm?: string;
  statusFilter?: string;
}

export default function Projects({ searchTerm, statusFilter }: PortfolioProps) {
  const researchProjects = [
    {
      id: "peacemaker-bot",
      name: "The PeacemakerBot",
      description:
        "Bot não-intrusivo para monitorar incivilidade em pull requests",
      summary:
        "Desenvolvimento de um bot automatizado para identificar e moderar comportamentos incivilizados em conversações de pull requests em projetos de software aberto.",
      period: "2024/2025",
      status: "Em andamento",
      link: "/projects/peacemaker-bot",
    },
    {
      id: "security-automation-ci",
      name: "Segurança Automatizada em CI para ML",
      description:
        "Investigação da automação de segurança na integração contínua de sistemas baseados em aprendizado de máquina.",
      summary:
        "Estudo sobre a integração de ferramentas de segurança em processos de CI para mitigar vulnerabilidades em sistemas de aprendizado de máquina.",
      period: "2024/2025",
      status: "Em andamento",
      link: "/projects/security-automation-ci",
    },
  ];

  const filteredProjects = researchProjects.filter((project) => {
    const search = searchTerm?.toLowerCase() || "";
    const matchesSearch =
      project.name.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search);
    const matchesStatus =
      statusFilter === "all" || project.status === statusFilter;
    return matchesSearch && matchesStatus;
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
          {filteredProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-[400px]">
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-black text-xl font-semibold mb-2 line-clamp-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm mb-1">
                      Período: {project.period}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Status: {project.status}
                    </p>
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
