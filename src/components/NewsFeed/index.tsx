import { useState, useEffect } from "react";
import axios from 'axios';
import NewsCard from "./NewsCard";
import { Helmet } from "react-helmet-async";

interface News {
  id: string;
  title: string;
  content: string;
  img: string;
  createdAt: string;
  updatedAt: string;
}

export default function NewsList() {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 6;

  // Buscar notícias da API
  const fetchNews = async (page = 1) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/news?page=${page}&limit=${itemsPerPage}`);
      setNews(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Erro ao carregar notícias:', error);
      setNews([]);
      setTotalPages(1);
    } finally {
      setIsLoading(false);
    }
  };

  // Buscar notícias quando página mudar
  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // Função para formatar data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: 'numeric', 
      month: 'short' 
    });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 py-14 text-center">
        <Helmet title="Notícias" />
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-2 text-gray-500">Carregando notícias...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 py-14">
      <Helmet title="Notícias" />
      
      {news.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">
          Nenhuma notícia encontrada.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.map((newsItem) => (
              <NewsCard 
                key={newsItem.id} 
                news={{
                  image: newsItem.img,
                  title: newsItem.title,
                  category: "Notícias", // Pode ser adaptado se tiver categoria no backend
                  date: formatDate(newsItem.createdAt),
                  description: newsItem.content
                }} 
              />
            ))}
          </div>

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 space-x-4">
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