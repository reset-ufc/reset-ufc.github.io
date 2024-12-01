import { useState } from "react";
import Projects from "../../components/projects";

export function ProjectPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

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
        </div>
        <Projects searchTerm={searchTerm} statusFilter={statusFilter} />
      </div>
    </div>
  );
}
