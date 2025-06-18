import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import axios from 'axios';

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  slug: string;
  members: Member[];
}

interface Member {
  id: string;
  name: string;
  role: string;
}

interface PortfolioProps {
  searchTerm?: string;
}

export function Projects({
  searchTerm = "",
}: PortfolioProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 6;

  // Buscar projetos da API
  const fetchProjects = async (page = 1) => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: itemsPerPage.toString(),
      });

      // Adicionar filtro de busca se aplicável
      if (searchTerm) params.append('search', searchTerm);

      const response = await axios.get(`http://localhost:3000/projects?${params}`);
      setProjects(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Erro ao carregar projetos:', error);
      setProjects([]);
      setTotalPages(1);
    } finally {
      setIsLoading(false);
    }
  };

  // Buscar projetos quando filtros mudarem
  useEffect(() => {
    setCurrentPage(1); // Reset para primeira página quando filtros mudarem
    fetchProjects(1);
  }, [searchTerm]);

  // Buscar projetos quando página mudar
  useEffect(() => {
    fetchProjects(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col animate-pulse"
            >
              <div className="p-6 flex flex-col flex-grow">
                {/* Skeleton para título */}
                <div className="h-6 bg-gray-200 rounded mb-4 w-3/4"></div>
                
                {/* Skeleton para descrição */}
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
                
                {/* Skeleton para membros */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-gray-200 rounded mr-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {[...Array(3)].map((_, idx) => (
                      <div
                        key={idx}
                        className="h-6 bg-gray-200 rounded-full w-16"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Skeleton para botão */}
              <div className="mt-auto p-6">
                <div className="h-12 bg-gray-200 rounded-xl w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {projects.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">
          Nenhum projeto encontrado.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-gray-800 text-xl font-bold mb-4 line-clamp-2">
                    {project.title || 'Título não informado'}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-4">
                    {project.description || 'Descrição não informada'}
                  </p>
                  
                  {/* Membros do projeto */}
                  {project.members && project.members.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Users className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm font-medium text-gray-700">
                          Membros ({project.members.length})
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.members.slice(0, 3).map((member) => (
                          <span
                            key={member.id}
                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                          >
                            {member.name}
                          </span>
                        ))}
                        {project.members.length > 3 && (
                          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                            +{project.members.length - 3} mais
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-auto p-6">
                  {project.link ? (
                    <NavLink
                      to={project.link}
                      className="inline-flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300 group"
                    >
                      Ver Detalhes
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </NavLink>
                  ) : (
                    <div className="inline-flex items-center justify-center w-full bg-gray-300 text-gray-500 font-bold py-3 px-6 rounded-xl cursor-not-allowed">
                      Link não disponível
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Controles de Paginação */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-6 space-x-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 text-white rounded-md ${
                  currentPage === 1
                    ? "bg-gray-300 opacity-50 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600"
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
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                Próxima
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}