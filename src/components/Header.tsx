import { useNavigate } from "react-router-dom";
import reset_image from '/public/logo.png'
import { useState } from "react";
import { Menu } from "lucide-react";

const links = [
  {
    label: "Início",
    path: ""
  },
  {
    label: "Membros",
    path: "members"
  },
  {
    label: "Notícias",
    path: "news"
  },
  {
    label: "Serviços",
    path: "",
    dropdown: [
      { label: "Tools", path: "tools" },
    ]
  },
  {
    label: "Contato",
    path: "",
    dropdown: [
      { label: "Email", path: "contact/email" },
      { label: "Phone", path: "contact/phone" }
    ]
  }
];


export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-xl bg-[#270B79]">
      <header className="flex flex-wrap px-4 lg:px-16 justify-between items-center p-4">
        <div className="flex items-center">
          <img
            src={reset_image}
            alt="Logo Reset Lab"
            onClick={() => navigate("/")}
            className="w-[180px] lg:w-[240px] cursor-pointer"
          />
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
         <Menu />
        </button>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex w-full lg:w-auto mt-4 lg:mt-0 lg:space-x-8 text-white`}>
          {links.map((link, index) => (
            <div key={index} className="relative group mb-2 lg:mb-0">
              <a
                onClick={() => {
                  navigate(`${link.path}`);
                  setIsMenuOpen(false);
                }}
                className="transition flex items-center cursor-pointer font-Lufga-ExtraBold hover:text-[#ec642a] py-2 lg:py-0"
              >
                {link.label}
              </a>
              {link.dropdown && (
                <div className="lg:absolute left-0 w-full lg:w-[200px] hidden group-hover:block bg-white text-gray-800 rounded-lg p-2 lg:p-5 shadow-lg">
                  {link.dropdown.map((item, index) => (
                    <a
                      key={index}
                      onClick={() => {
                        navigate(`${item.path}`);
                        setIsMenuOpen(false);
                      }}
                      className="relative bg-white block font-Lufga-Regular hover:font-Lufga-ExtraBold py-1 text-gray-500 hover:text-black transition"
                    >
                      <span className="pl-5 bg-white cursor-pointer">{item.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </header>
    </div>
  );
}
