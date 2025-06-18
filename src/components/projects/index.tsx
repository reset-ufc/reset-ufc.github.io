import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Briefcase, Calendar, DollarSign, Tag } from "lucide-react";
import axios from "axios";

interface Project {
  id: string;
  title: string | null;
  description: string | null;
  link: string | null;
  img: string | null;
  imgurDeleteHash: string | null;
  slug: string;
  memberIds: string[];
  members: Array<{
    id: string;
    name: string;
    role: string;
    github: string;
    email: string;
    img: string;
    description: string;
    contact: {
      email: string;
      github: string;
      latter: string;
    };
    researchKeywords: string[];
    publishedPapers: string[];
    projectIds: string[];
    createdAt: string;
    updatedAt: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  data: Project[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface PortfolioProps {
  searchTerm?: string;
  statusFilter?: string;
  periodFilter?: string;
  fundingFilter?: string;
  keywordFilter?: string;
}

function ProjectDetail({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-gray-500">{icon}</div>
      <div>
        <span className="text-sm text-gray-500">{label}:</span>
        <span className="text-sm font-medium text-gray-700 ml-1">{value}</span>
      </div>
    </div>
  );
}

export function Projects({
  searchTerm = "",
  statusFilter = "all",
  periodFilter = "all",
  fundingFilter = "all",
  keywordFilter = "all",
}: PortfolioProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<ApiResponse>('http://localhost:3000/projects');
        setProjects(response.data.data);
      } catch (error) {
        console.error('Erro ao carregar projetos:', error);
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      (project.title?.toLowerCase().includes(search) || false) ||
      (project.description?.toLowerCase().includes(search) || false);
    const matchesStatus = statusFilter === "all";
    const matchesPeriod = periodFilter === "all";
    const matchesFunding = fundingFilter === "all";
    const matchesKeywords = keywordFilter === "all";
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {currentProjects.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">
          Nenhum projeto encontrado.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col"
              >
                {project.img && (
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title || 'Imagem do projeto'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-gray-800 text-xl font-bold mb-4 line-clamp-2">
                    {project.title || 'Sem título'}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {project.description || 'Sem descrição'}
                  </p>
                  <div className="mb-6 space-y-3">
                    <ProjectDetail
                      icon={<Briefcase className="w-5 h-5" />}
                      label="Membros"
                      value={`${project.members.length} membro${project.members.length !== 1 ? 's' : ''}`}
                    />
                    <ProjectDetail
                      icon={<Calendar className="w-5 h-5" />}
                      label="Criado em"
                      value={new Date(project.createdAt).toLocaleDateString('pt-BR')}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.members.map((member) => (
                      <span
                        key={member.id}
                        className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {member.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto p-6">
                  <NavLink
                    to={project.link || '#'}
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
          <div className="flex items-center justify-center gap-4 mt-8">
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
