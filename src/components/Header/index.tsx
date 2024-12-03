import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"; // Ícones de menu, fechar e setas
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
    label: "Notícias",
    path: "news",
  },
  {
    label: "Services",
    path: "",
    dropdown: [{ label: "Tools", path: "tools" }],
  },
  {
    label: "Contact",
    path: "",
    dropdown: [
      { label: "Email", path: "contact/email" },
      { label: "Phone", path: "contact/phone" },
    ],
  },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);

  // Função para abrir/fechar o menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Função para abrir/fechar dropdowns no menu lateral
  const toggleDropdown = (index: number) => {
    if (openDropdowns.includes(index)) {
      setOpenDropdowns(openDropdowns.filter((i) => i !== index)); // Fechar
    } else {
      setOpenDropdowns([...openDropdowns, index]); // Abrir
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-xl bg-[#270B79]">
      <header className="flex justify-between items-center px-4 md:px-16 py-4">
        <div>
          <img
            src={reset_image}
            alt=""
            onClick={() => navigate("/")}
            className="w-[180px] md:w-[240px] cursor-pointer"
          />
        </div>

        {/* Ícone de sanduíche para telas menores */}
        <button onClick={toggleMenu} className="pr-6 md:hidden">
          {isOpen ? (
            <X size={24} color="white" />
          ) : (
            <Menu size={24} color="white" />
          )}
        </button>

        {/* Navbar para telas grandes */}
        <nav className="hidden md:flex h-[60px] space-x-8 text-white">
          {links.map((link, index) => (
            <div key={index} className="relative group h-full">
              <a
                onClick={() => navigate("/" + link.path)}
                className={`transition h-full flex items-center cursor-pointer font-Lufga-ExtraBold ${
                  location.pathname === "/" + link.path ? "text-[#ec642a]" : ""
                }`}
              >
                {link.label}
              </a>
              {link.dropdown && (
                <div className="absolute left-0 w-[200px] hidden group-hover:block bg-white text-gray-800 rounded-lg p-5 shadow-lg">
                  {link.dropdown.map((item, idx) => (
                    <a
                      key={idx}
                      onClick={() => navigate("/" + item.path)}
                      className={`relative bg-white block font-Lufga-Regular hover:font-Lufga-ExtraBold py-1 ${
                        location.pathname === "/" + item.path
                          ? "text-black font-Lufga-ExtraBold"
                          : "text-gray-500 hover:text-black"
                      }`}
                    >
                      <span className="pl-5 bg-white cursor-pointer">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </header>

      {/* Menu lateral responsivo para telas menores */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#270B79] text-white z-50 md:hidden flex flex-col">
          <button onClick={toggleMenu} className="self-end p-4">
            <X size={24} color="white" />
          </button>

          <ul className="flex flex-col items-center space-y-6 px-4 py-8">
            {links.map((link, index) => (
              <div key={index} className="w-full border-b border-white">
                <div
                  onClick={() => {
                    if (link.dropdown) {
                      toggleDropdown(index);
                    } else {
                      navigate("/" + link.path);
                      toggleMenu(); // Fecha o menu ao navegar
                    }
                  }}
                  className={`flex justify-between items-center w-full cursor-pointer py-2 text-lg font-bold ${
                    location.pathname === "/" + link.path
                      ? "text-[#ec642a]"
                      : ""
                  }`}
                >
                  {link.label}
                  {link.dropdown &&
                    (openDropdowns.includes(index) ? (
                      <ChevronUp size={20} color="white" />
                    ) : (
                      <ChevronDown size={20} color="white" />
                    ))}
                </div>

                {/* Dropdown do menu lateral */}
                {link.dropdown && openDropdowns.includes(index) && (
                  <ul className="pl-4 mt-2">
                    {link.dropdown.map((item, idx) => (
                      <li key={idx} className="py-2">
                        <a
                          onClick={() => {
                            navigate("/" + item.path);
                            toggleMenu(); // Fecha o menu ao clicar no item
                          }}
                          className={`text-md cursor-pointer block ${
                            location.pathname === "/" + item.path
                              ? "text-[#ec642a]"
                              : "text-white"
                          }`}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
