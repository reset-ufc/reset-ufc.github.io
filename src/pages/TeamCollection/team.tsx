import { useState, useMemo, useEffect } from "react";
import { Search, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { TeamMember } from "./teamMember";
import axios from "axios";

export function TeamInterface() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("professors");
  const [members, setMembers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMembers() {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/members?limit=1000");
        setMembers(response.data.data || response.data || []);
      } catch (error) {
        setMembers([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMembers();
  }, []);

  // Professores
  const professors = useMemo(() =>
    members.filter((m) => m.memberType === "PROFESSOR"),
    [members]
  );

  // Colaboradores e alunos
  const collaborators = useMemo(() =>
    members.filter((m) => m.memberType !== "PROFESSOR"),
    [members]
  );

  // Filtro de busca para colaboradores/alunos
  const filteredCollaborators = useMemo(() => {
    return collaborators.filter((member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, collaborators]);

  return (
    <div className="min-h-screen pt-10 pb-20 bg-slate-50">
      <Helmet title="Membros" />

      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-[#270B79] text-center">
          Nossa Equipe
        </h1>

        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-3 rounded-l-full font-medium transition-colors ${
              activeTab === "professors"
                ? "bg-[#3d1ba6] text-white"
                : "bg-white text-[#270B79]"
            }`}
            onClick={() => setActiveTab("professors")}
          >
            <GraduationCap className="inline-block mr-2" />
            Professores
          </button>
          <button
            className={`px-6 py-3 rounded-r-full font-medium transition-colors ${
              activeTab === "collaborators"
                ? "bg-[#3d1ba6] text-white"
                : "bg-white text-[#270B79]"
            }`}
            onClick={() => setActiveTab("collaborators")}
          >
            <Users className="inline-block mr-2" />
            Colaboradores
          </button>
        </div>

        {activeTab === "professors" && (
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="text-center text-[#270B79]">Carregando...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {professors.length > 0 ? (
                  professors.map((professor, index) => (
                    <Link
                      to={`/members/${professor.name}`}
                      key={professor.id || index}
                      className="block group"
                    >
                      <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                        <img
                          src={professor.img || ""}
                          alt={professor.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute bottom-6 left-6 text-white">
                          <p className="text-2xl font-medium">{professor.name}</p>
                          <p className="text-3xl font-bold">{professor.lastName}</p>
                          {professor.coordinatorType === "COORDINATOR" && (
                            <span className="mt-2 inline-block bg-[#ec642a] text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Coordenador
                            </span>
                          )}
                          {professor.coordinatorType === "VICE_COORDINATOR" && (
                            <span className="mt-2 inline-block bg-[#3d1ba6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Vice-Coordenador
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p>Nenhum professor encontrado.</p>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === "collaborators" && (
          <div className="text-white">
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative w-full max-w-2xl mx-auto">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Busque por nome"
                  className="w-full py-4 px-6 pl-12 pr-4 rounded-full bg-gray-100 text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-[#3d1ba6] transition-shadow duration-300 ease-in-out"
                />
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={24}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {isLoading ? (
                <p className="text-center text-[#270B79] col-span-full">Carregando...</p>
              ) : filteredCollaborators.length > 0 ? (
                filteredCollaborators.map((member, index) => (
                  <TeamMember key={member.id || index} {...member} />
                ))
              ) : (
                <p className="text-center text-[#270B79] col-span-full">
                  Nenhum membro encontrado.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
