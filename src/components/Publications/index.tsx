import { useState } from "react";
import { NavLink } from "react-router-dom";
import { publicationsData } from "./data";

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredArticles = publicationsData.filter((article) => {
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      article.title.toLowerCase().includes(search) ||
      article.description.toLowerCase().includes(search) ||
      article.authors.join(" ").toLowerCase().includes(search);
    const matchesCategory =
      categoryFilter === "all" || article.category === categoryFilter;
    const matchesYear =
      yearFilter === "all" || article.year === Number(yearFilter);
    const matchesKeywords =
      keywordFilter === "all" || article.keywords?.includes(keywordFilter);
    return matchesSearch && matchesCategory && matchesYear && matchesKeywords;
  });

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = filteredArticles.slice(
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
    <div className="max-w-7xl mx-auto">
      {currentArticles.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">
          Nenhuma publicação encontrada.
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentArticles.map((item, index) => (
              <div
                key={index}
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
              className={`px-4 py-2 bg-gray-300 text-gray-700 rounded-md ${
                currentPage === 1 && "opacity-50 cursor-not-allowed"
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
              className={`px-4 py-2 bg-gray-300 text-gray-700 rounded-md ${
                currentPage === totalPages && "opacity-50 cursor-not-allowed"
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
