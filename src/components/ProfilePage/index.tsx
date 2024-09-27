import { Search, Github, Mail } from "lucide-react";
import teamMembers from "../../pages/TeamCollection/data";

import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const { name } = useParams(); // Pegue o nome do colaborador da URL
  const member = teamMembers.find(member => member.name === name); // Ache o membro correspondente

  if (!member) return <div>Member not found!</div>;

  return (
    <div className="bg-gray-100 pt-20">
      <div className="relative bg-[#270B79] text-white py-12">
        <div className="container mx-auto flex justify-center">
          <div className="flex flex-col items-center text-center">
            <img
              src={member.img}
              alt={member.name}
              className="rounded-full w-40 h-40 mb-6 shadow-lg"
            />
            <h1 className="text-4xl font-bold">{member.name}</h1>
            <p className="text-lg text-red-300 font-semibold">{member.role}</p>
          </div>
        </div>
      </div>

      <div className="container bg-white mx-auto mt-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-xl font-Lufga-Regular bg-inherit text-gray-700 mb-4">
            DESCRIPTION
          </h2>
          <p className="text-gray-600 mb-6 bg-inherit">
            {member.description}
          </p>

          {/* Contato */}
          <h3 className="text-lg font-Lufga-Regular bg-inherit text-gray-700 mb-2">
            CONTACT ME
          </h3>
          <div className="flex items-center bg-inherit space-x-2 mb-2">
            <Mail size={20} className="bg-inherit" />
            <span className="text-gray-600 bg-inherit">{member.contact.email}</span>
          </div>
          <div className="flex items-center space-x-2 bg-inherit">
            <Github size={20} className="bg-inherit" />
            <span className="text-gray-600 bg-inherit">{member.contact.github}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg mx-[185px] p-5 mt-10"> 
        <div className="container mx-auto my-8 bg-white">
          <h2 className="text-2xl font-semibold text-gray-700 bg-inherit mb-4 text-center">
            RESEARCH KEYWORDS
          </h2>
          <div className="flex justify-center space-x-4 bg-inherit">
            {member.researchKeywords.map((keyword, index) => (
              <div
                key={index}
                className="bg-[#ec642a] text-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2"
              >
                <Search size={20} className="bg-inherit" />
                <span className="bg-inherit">{keyword}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto mt-8 mb-6 bg-white my-20 ">
          <h2 className="text-2xl font-semibold text-gray-700 bg-inherit mb-4 text-center">
            PUBLISHED PAPERS
          </h2>
          <div className="flex justify-center space-x-4 bg-white">
            {member.publishedPapers.map((paper, index) => (
              <button key={index} className="px-4 py-2 bg-gray-300 text-black rounded-full shadow-md">
                {paper}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
}
