import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Briefcase, Calendar, DollarSign, Tag } from "lucide-react";
import { ProjectsData } from "./data";

interface PortfolioProps {
  searchTerm?: string;
  statusFilter?: string;
  periodFilter?: string;
  fundingFilter?: string;
  keywordFilter?: string;
}

export function Projects({
  searchTerm = "",
  statusFilter = "all",
  periodFilter = "all",
  fundingFilter = "all",
  keywordFilter = "all",
}: PortfolioProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {currentProjects.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">
          Nenhum projeto encontrado.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-gray-800 text-xl font-bold mb-4 line-clamp-2">
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
            ))}
          </div>

          {/* Controles de Paginação */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-white rounded-md ${
                currentPage === 1
                  ? "bg-gray-300 opacity-50 cursor-not-allowed"
                  : "bg-orange-500"
              }`}
            >
              Anterior
            </button>
            <span className="text-gray-700">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-white rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-300 opacity-50 cursor-not-allowed"
                  : "bg-orange-500"
              }`}
            >
              Próxima
            </button>
          </div>
        </>
      )}
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