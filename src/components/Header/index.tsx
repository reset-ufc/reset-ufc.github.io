import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Ícones de menu e fechar
import reset_image from "/public/logo.png";

const links = [
  {
    label: "Início",
    path: "home",
  },
  {
    label: "Membros",
    path: "members",
  },
  {
    label: "Projetos",
    path: "projects",
  },
  {
    label: "Publicações",
    path: "publications",
  },
  {
    label: "identidade visual",
    path: "Visual-Identity",
  },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Função para abrir/fechar o menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 shadow-lg bg-[#270B79]"
      style={{ height: "var(--header-height)" }}
    >
      <header className="flex justify-between items-center px-4 md:px-16 h-full">
        <div>
          <img
            src={reset_image}
            alt="Reset Lab Logo"
            onClick={() => navigate("/")}
            className="w-[180px] md:w-[240px] cursor-pointer"
          />
        </div>

        <button onClick={toggleMenu} className="pr-6 md:hidden">
          {isOpen ? (
            <X size={24} color="white" />
          ) : (
            <Menu size={24} color="white" />
          )}
        </button>

        <nav className="hidden md:flex h-full space-x-8 text-white">
          {links.map((link, index) => (
            <a
              key={index}
              onClick={() => navigate("/" + link.path)}
              className={`transition h-full flex items-center cursor-pointer font-Lufga-ExtraBold ${
                location.pathname === "/" + link.path ? "text-[#ec642a]" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {isOpen && (
        <div className="fixed top-[var(--header-height)] left-0 w-full h-[calc(100vh-var(--header-height))] bg-[#270B79] text-white z-50 md:hidden flex flex-col">
          <ul className="flex flex-col items-center space-y-6 px-4 py-8">
            {links.map((link, index) => (
              <li
                key={index}
                className="w-full border-b border-white py-2 text-lg font-bold text-center cursor-pointer"
                onClick={() => {
                  navigate("/" + link.path);
                  toggleMenu();
                }}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
