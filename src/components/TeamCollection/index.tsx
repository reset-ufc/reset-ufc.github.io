import React, { useState } from "react";
import { Search, Github, Mail } from "lucide-react";
import { GoPerson } from "react-icons/go";

interface TeamMemberProps {
  name: string;
  role: string;
  email: string;
  github: string;
  img?: string;
}

const teamMembers: TeamMemberProps[] = [
  {
    name: "Antônio Cruz",
    role: "Alumni (PhD)",
    github: "Antonio880",
    email: "antoniocruz@gmail.com",
  },
  {
    name: "Bianca Trinkenreich",
    role: "Alumni (PhD)",
    github: "biancatrink",
    email: "bianca_trinkh@nau.edu",
  },
  {
    name: "Caio Vieira",
    role: "Visitor PhD Student",
    github: "guriosam",
    email: "ciao.barbosa-vieira-da-silva@nau.edu",
  },
  {
    name: "Daniel Coutinho",
    role: "Visitor",
    github: "danieljbc",
    email: "contact@danieljbc.com",
  },
];

export function TeamMember({
  name,
  role,
  email,
  github,
  img,
}: TeamMemberProps) {
  return (
    <div className="bg-gray-300 rounded-lg p-4 flex flex-col items-center shadow-xl ">
      <div className="w-24 h-24 bg-gray-300 rounded-full mb-4">
        {img ? (
          <img src={img} alt={name} className="w-full h-full rounded-full" />
        ) : (
          <GoPerson size={100} className="bg-inherit" color="black" />
        )}
      </div>
      <h3 className="text-lg bg-gray-300 text-black font-semibold ">{name}</h3>
      <p className="text-sm text-gray-600 bg-gray-300 mb-2">{role}</p>
      <button className="bg-teal-800 text-white px-4 py-2 rounded-full text-sm mb-4">
        VIEW MORE
      </button>
      <div className="flex items-center space-x-2 bg-inherit text-black">
        <Github size={20} className="bg-inherit" color="black" />
        <span className="text-sm bg-inherit">
          <u className="bg-inherit">{github}</u>
        </span>
      </div>
      <div className="flex items-center space-x-2 mt-1 text-black bg-inherit">
        <Mail size={20} className="bg-inherit" color="black" />
        {/* Correção no estilo do email */}
        <span className="text-sm bg-inherit break-words max-w-full text-center">{email}</span>
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
    return handleSearch().filter((member) => member.role.includes(selectedRole));
  };

  return (
    <div className="min-h-screen pt-36 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">TEAM</h1>

      <div className="max-w-4xl mx-auto">
        {/* Search Input */}
        <div className="relative flex justify-center mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or email..."
            className="w-2/4 py-2 px-4 pr-10 rounded-full bg-white text-black shadow-md focus:outline-none focus:ring-2 focus:ring-[#ec642a]"
          />
          <Search
            onClick={handleSearch}
            className="absolute right-[240px] top-2.5 bg-white text-gray-500 cursor-pointer"
            size={20}
          />
        </div>

        {/* Filter by Role */}
        <div className="mb-6">
          <h2 className="text-xl mb-2">Filter by role</h2>
          <div className="flex flex-wrap gap-2">
            {["All", "Undergraduate", "Visitor", "PhD Student", "Post-doc", "Alumni"].map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role === "All" ? "" : role)}
                className={`px-4 py-2 rounded-full ${
                  selectedRole === role ? "bg-[#ec642a] font-semibold transition text-white" : "bg-gray-300 text-black font-semibold transition"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {handleFilterByRole().map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamInterface;
