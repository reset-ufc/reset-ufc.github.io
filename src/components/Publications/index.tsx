import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';

interface Publication {
  id: string;
  title: string;
  description: string;
  category: string;
  journalName: string;
  year: number;
  authors: string[];
  keywords: string[];
  url: string;
}

interface PublicationsProps {
  searchTerm?: string;
  categoryFilter?: string;
  yearFilter?: string;
  keywordFilter?: string;
}

export function Publications({
  searchTerm = "",
  categoryFilter = "all",
  yearFilter = "all",
  keywordFilter = "all",
}: PublicationsProps) {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 6;

  // Buscar publicações da API
  const fetchPublications = async (page = 1) => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: itemsPerPage.toString(),
      });

      // Adicionar filtros se aplicáveis
      if (searchTerm) params.append('search', searchTerm);
      if (categoryFilter !== 'all') params.append('category', categoryFilter);
      if (yearFilter !== 'all') params.append('year', yearFilter);
      if (keywordFilter !== 'all') params.append('keyword', keywordFilter);

      const response = await axios.get(`http://localhost:3000/publications?${params}`);
      setPublications(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Erro ao carregar publicações:', error);
      setPublications([]);
      setTotalPages(1);
    } finally {
      setIsLoading(false);
    }
  };

  // Buscar publicações quando filtros mudarem
  useEffect(() => {
    setCurrentPage(1); // Reset para primeira página quando filtros mudarem
    fetchPublications(1);
  }, [searchTerm, categoryFilter, yearFilter, keywordFilter]);

  // Buscar publicações quando página mudar
  useEffect(() => {
    fetchPublications(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-2 text-gray-500">Carregando publicações...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {publications.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">
          Nenhuma publicação encontrada.
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-4">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    {item.journalName}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-1">
                    <span className="font-semibold">Autores</span>:{" "}
                    {item.authors.join(", ")}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-1">
                    <span className="font-semibold">Palavras-chave</span>:{" "}
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
            ))}
          </div>

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
        </div>
      )}
    </div>
  );
}
