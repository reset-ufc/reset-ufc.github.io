import { Link } from "react-router-dom";
import { teacherMemberProps } from "../../types";
import { GoPerson } from "react-icons/go";
import { Github, Mail, ExternalLink } from "lucide-react";

export function TeamMember({
  id,
  name,
  role,
  email,
  img,
  contact,
}: teacherMemberProps) {
  // Se não tiver ID, usar nome como fallback (compatibilidade com dados antigos)
  const linkTo = id ? `/members/${id}` : `/members/${name}`;

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 group border border-gray-200">
      <div className="w-32 h-32 bg-gradient-to-br rounded-full mb-6 overflow-hidden ">
        {img ? (
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-full">
            <GoPerson size={64} className="text-gray-400" />
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-[#270B79] mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-4">{role}</p>
      <Link
        to={linkTo}
        className="bg-[#ec642a] hover:bg-[#d45a26] transition-colors text-white px-6 py-2 rounded-full text-sm font-medium mb-6 flex items-center"
      >
        Ver mais
        <ExternalLink size={16} className="ml-2" />
      </Link>
      <div className="flex items-center space-x-4 text-gray-600">
        {contact?.github && (
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#270B79] transition-colors"
          >
            <Github size={24} />
          </a>
        )}
        <a
          href={`mailto:${email}`}
          className="hover:text-[#270B79] transition-colors"
        >
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
}
