import { useState } from "react";
import { Publications } from "../../components/Publications";

export function PublicationPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [keywordFilter, setKeywordFilter] = useState("all");

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 p-8 pt-10">
      <div className="max-w-7xl mx-auto w-full ">
        <h1 className="text-5xl font-bold text-[#270B79] text-center mb-8">
          Publicações
        </h1>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Buscar publicações..."
            className="flex-grow p-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 border border-gray-300 rounded-md"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">Todas as categorias</option>
            <option value="Engenharia de Software">
              Engenharia de Software
            </option>
            <option value="Outra Categoria">Outra Categoria</option>
          </select>
          <select
            className="p-2 border border-gray-300 rounded-md"
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
          >
            <option value="all">Todos os anos</option>
            <option value="2024">2024</option>
          </select>
          <select
            className="p-2 border border-gray-300 rounded-md"
            value={keywordFilter}
            onChange={(e) => setKeywordFilter(e.target.value)}
          >
            <option value="all">Todas as palavras-chave</option>
            <option value="Refactoring">Refactoring</option>
            <option value="Code Smells">Code Smells</option>
            <option value="NLP">NLP</option>
          </select>
        </div>
        <Publications
          searchTerm={searchTerm}
          categoryFilter={categoryFilter}
          yearFilter={yearFilter}
          keywordFilter={keywordFilter}
        />
      </div>
    </div>
  );
}
