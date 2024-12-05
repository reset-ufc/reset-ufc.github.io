import { Github, Mail, FileText } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import teamMembers from "../../pages/TeamCollection/data";

export default function ProfilePage() {
  const { name } = useParams();
  const member = teamMembers.find((member) => member.name === name);

  if (!member) return <div className="text-center p-8">Member not found!</div>;

  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <div className="bg-[#270B79] text-white py-12 rounded-xl shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src={member.img}
              alt={member.name}
              className="rounded-full w-40 h-40 border-4 border-white shadow-xl"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">{member.name}</h1>
              <p className="text-xl text-red-300 font-semibold mb-4">
                {member.role}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Mail size={20} className="mr-2" />
                  <span>{member.contact.email}</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Github size={20} className="mr-2" />
                  <NavLink to={member.contact.github} target="_blank">
                    {member.contact.github}
                  </NavLink>
                </div>
                {member.contact.latter && (
                  <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                    <>
                      <FileText size={20} className="mr-2" />
                      <NavLink to={member.contact.latter} target="_blank">
                        {member.contact.latter}
                      </NavLink>
                    </>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Descrição</h2>
          <p className="text-gray-600">{member.description}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Research Keywords
          </h2>
          <div className="flex flex-wrap gap-3">
            {member.researchKeywords.map((keyword, index) => (
              <div
                key={index}
                className="bg-[#ec642a] text-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2 transition-transform hover:scale-105"
              >
                <span>{keyword}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Artigos Publicados
          </h2>
          <div className="flex flex-wrap gap-3">
            {member.publishedPapers.map((paper, index) => (
              <div
                key={index}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md transition-colors hover:bg-gray-300"
              >
                {paper}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
