import { useNavigate } from "react-router-dom";
import reset_image from '/public/logo.png'

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

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-xl bg-[#270B79]">
      <header className="flex px-16 justify-between items-center p-4">
        <div>
          <img
            src={reset_image}
            alt="Logo Reset Lab"
            onClick={() => navigate("/")}
            className="w-[240px] cursor-pointer"
          />
        </div>
        <nav className="flex h-[60px] space-x-8 text-white">
        {links.map((link, index) => (
            <div key={index} className="relative group h-full">
              <a
                onClick={() => navigate(`${link.path}`)} 
                className="transition h-full flex items-center cursor-pointer font-Lufga-ExtraBold hover:text-[#ec642a]"
              >
                {link.label}
              </a>
              {link.dropdown && (
                <div className="absolute left-0 w-[200px] hidden group-hover:block bg-white text-gray-800 rounded-lg p-5 shadow-lg">
                  {link.dropdown.map((item, index) => (
                    <a
                      key={index}
                      onClick={() => navigate(`${item.path}`)}
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
