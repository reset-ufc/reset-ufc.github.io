const links = [
  {
    label: "Início",
    dropdown: ["Sobre", "Time"]
  },
  {
    label: "RESET",
    dropdown: ["Reset 1", "Reset 2"]
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
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <header className="flex px-16 justify-between items-center p-4">
        <div>
          <img
            src="public/LOGO HORIZONTAL FT 2.png"
            alt=""
            className="w-[240px]"
          />
        </div>
        <nav className="flex h-[60px] space-x-8 text-white">
          {links.map((link, index) => (
            <div key={index} className="relative group h-full">
              <div className="transition h-full flex items-center cursor-pointer font-bold hover:text-[#ec642a]">
                {link.label}
              </div>
              {link.dropdown && (
                <div className="absolute left-0 w-[200px] hidden group-hover:block bg-white text-gray-800 rounded-lg p-5 shadow-lg">
                  {link.dropdown.map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="relative bg-white block py-1 text-gray-500 hover:text-black transition"
                    >
                      <span className="pl-5 bg-white">{item}</span>
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
