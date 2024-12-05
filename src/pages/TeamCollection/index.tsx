import { useState } from "react";
import { Search, Github, Mail } from "lucide-react";
import { GoPerson } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import { TeamMemberProps } from "../../types";
import teamMembers from "./data";
import { Helmet } from "react-helmet-async";

export function TeamMember({
  name,
  role,
  email,
  github,
  img,
  contact,
}: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
      <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 overflow-hidden">
        {img ? (
          <img src={img} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <GoPerson size={60} className="text-gray-400" />
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-4">{role}</p>
      <Link
        to={`/members/${name}`}
        className="bg-[#ec642a] hover:bg-[#d45a26] transition-colors text-white px-6 py-2 rounded-full text-sm font-medium mb-4"
      >
        Ver mais
      </Link>
      <div className="flex items-center space-x-2 text-gray-700 mb-2">
        <Github size={18} />
        <NavLink
          to={contact.github}
          target="_blank"
          className="text-sm hover:underline"
        >
          {github}
        </NavLink>
      </div>
      <div className="flex items-center space-x-2 text-gray-700">
        <Mail size={18} />
        <span className="text-sm break-all text-center">{email}</span>
      </div>
    </div>
  );
}

export function TeamInterface() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const handleSearch = () => {
    const lowercasedSearch = searchTerm.toLowerCase();
    return teamMembers.filter(
      (member) =>
        member.name.toLowerCase().includes(lowercasedSearch) ||
        member.email.toLowerCase().includes(lowercasedSearch)
    );
  };

  const handleFilterByRole = () => {
    if (!selectedRole) return handleSearch();
    return handleSearch().filter((member) =>
      member.role.includes(selectedRole)
    );
  };

  const professors = handleFilterByRole().filter((member) =>
    member.role.toLowerCase().includes("professor")
  );

  const teamWithoutProfessors = handleFilterByRole().filter(
    (member) => !member.role.toLowerCase().includes("professor")
  );

  return (
    <div className="min-h-screen pt-28 lg:pt-32 pb-20 bg-gradient-to-b from-[#270B79] to-[#1a0752]">
      <Helmet title="Membros" />

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Professores
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {professors.length > 0 ? (
            professors.map((professor, index) => (
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

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Filtro por papel
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["Todos", "Graduando"].map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role === "Todos" ? "" : role)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedRole === (role === "Todos" ? "" : role)
                      ? "bg-[#ec642a] text-white font-semibold"
                      : "bg-white text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamWithoutProfessors.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamInterface;
