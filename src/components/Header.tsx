import { useNavigate } from "react-router-dom";

const links = [
  {
    label: "Início",
    dropdown: ["Sobre", "Time"]
  },
  {
    label: "Membros",
    path: "members"
  },
  {
    label: "Services",
    dropdown: ["Web Development", "App Development"]
  },
  {
    label: "Contact"
  }
];

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-lg bg-[#270B79]">
      <header className="flex px-16 justify-between items-center p-4">
        <div >
          <img
            src="public/logo.png"
            alt=""
            onClick={() => navigate("/")}
            className="w-[240px] cursor-pointer"
          />
        </div>
        <nav className="flex h-[60px] space-x-8 text-white">
        {links.map((link, index) => (
            <div key={index} className="relative group h-full">
              <a
                onClick={() => navigate("/" + link.path)} 
                className="transition h-full flex items-center cursor-pointer font-bold hover:text-[#ec642a]"
              >
                {link.label}
              </a>
              {link.dropdown && (
                <div className="absolute left-0 w-[200px] hidden group-hover:block bg-white text-gray-800 rounded-lg p-5 shadow-lg">
                  {link.dropdown.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.path} 
                      className="relative bg-white block py-1 text-gray-500 hover:text-black transition"
                    >
                      <span className="pl-5 bg-white cursor-pointer">{item}</span>
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
