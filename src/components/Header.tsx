import { useNavigate } from "react-router-dom";
import reset_image from '/public/logo.png'

const links = [
  {
    label: "Início",
    path: "",
    dropdown: [
      { label: "Sobre", path: "about" },
      { label: "Time", path: "team" }
    ]
  },
  {
    label: "Membros",
    path: "members",
    dropdown: []
  },
  {
    label: "Services",
    path: "",
    dropdown: [
      { label: "Web Development", path: "web-development" },
      { label: "App Development", path: "app-development" }
    ]
  },
  {
    label: "Contact",
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
        <div >
          <img
            src={reset_image}
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
                className="transition h-full flex items-center cursor-pointer font-Lufga-ExtraBold hover:text-[#ec642a]"
              >
                {link.label}
              </a>
              {link.dropdown && (
                <div className="absolute left-0 w-[200px] hidden group-hover:block bg-white text-gray-800 rounded-lg p-5 shadow-lg">
                  {link.dropdown.map((item, idx) => (
                    <a
                      key={idx}
                      onClick={() => navigate("/" + item.path)}
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
