import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { teacherTeamData } from "./teacher-data";
import { teamData } from "./team-data";
import { Helmet } from "react-helmet-async";
import { TeamMember } from "./teamMember";

export function TeamInterface() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTeamData = useMemo(() => {
    return teamData.filter((member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen pt-28 lg:pt-32 pb-20 bg-gradient-to-b from-[#270B79] to-[#1a0752]">
      <Helmet title="Membros" />

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Professores
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {teacherTeamData.length > 0 ? (
            teacherTeamData.map((professor, index) => (
              <Link
                to={`/members/${professor.name}`}
                key={index}
                className="block"
              >
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                  <img
                    src={professor.img}
                    alt={professor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xl font-medium">{professor.name}</p>
                    <p className="text-2xl font-bold">{professor.lastName}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-white col-span-full">
              No professors found.
            </p>
          )}
        </div>

        <div className="text-white">
          <h1 className="text-4xl font-bold mb-6 text-center">Time</h1>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative w-full max-w-2xl mx-auto">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Busque por nome"
                className="w-full py-3 px-6 pl-12 pr-4 rounded-full bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-[#ec642a] transition-shadow duration-300 ease-in-out"
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                size={20}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredTeamData.length > 0 ? (
              filteredTeamData.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))
            ) : (
              <p className="text-center text-white col-span-full">
                Nenhum membro encontrado.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
