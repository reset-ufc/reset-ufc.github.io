import { Link } from "react-router-dom";
import { teacherMemberProps } from "../../types";
import { GoPerson } from "react-icons/go";
import { Github, Mail } from "lucide-react";

export function TeamMember({
  name,
  role,
  email,
  github,
  img,
  contact,
}: teacherMemberProps) {
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
        <Link
          to={contact.github}
          target="_blank"
          className="text-sm hover:underline"
        >
          {github}
        </Link>
      </div>
      <div className="flex items-center space-x-2 text-gray-700">
        <Mail size={18} />
        <span className="text-sm break-all text-center">{email}</span>
      </div>
    </div>
  );
}
