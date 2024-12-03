import { useState } from "react";
import { Projects } from "../../components/Projects";

export function ProjectPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [periodFilter, setPeriodFilter] = useState("all");
  const [fundingFilter, setFundingFilter] = useState("all");
  const [keywordFilter, setKeywordFilter] = useState("all");

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 p-8 pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Projetos</h1>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Buscar projetos..."
            className="flex-grow p-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 border border-gray-300 rounded-md"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Todos os status</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Concluído">Concluído</option>
          </select>
          <select
            className="p-2 border border-gray-300 rounded-md"
            value={periodFilter}
            onChange={(e) => setPeriodFilter(e.target.value)}
          >
            <option value="all">Todos os períodos</option>
            <option value="2024/2025">2024/2025</option>
          </select>
          <select
            className="p-2 border border-gray-300 rounded-md"
            value={fundingFilter}
            onChange={(e) => setFundingFilter(e.target.value)}
          >
            <option value="all">Todas as financiadoras</option>
            <option value="PIBITI">PIBITI</option>
            <option value="PIBIC">PIBIC</option>
          </select>
          <select
            className="p-2 border border-gray-300 rounded-md"
            value={keywordFilter}
            onChange={(e) => setKeywordFilter(e.target.value)}
          >
            <option value="all">Todas as palavras-chave</option>
            <option value="incivilidade">Incivilidade</option>
            <option value="bot">Bot</option>
            <option value="NLP">NLP</option>
            <option value="LLMs">LLMs</option>
            <option value="GitHub">GitHub</option>
            <option value="segurança">Segurança</option>
            <option value="automação">Automação</option>
            <option value="CI">CI</option>
            <option value="ML">ML</option>
          </select>
        </div>
        <Projects
          searchTerm={searchTerm}
          statusFilter={statusFilter}
          periodFilter={periodFilter}
          fundingFilter={fundingFilter}
          keywordFilter={keywordFilter}
        />
      </div>
    </div>
  );
}
