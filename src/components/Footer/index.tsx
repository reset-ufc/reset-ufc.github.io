import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const Footer = () => {
  // const navigate = useNavigate();

  return (
    <footer className="bg-neutral-800 text-white p-4 sm:p-5 flex flex-col justify-between w-full">
      {/* Parte de cima do footer (footerInfo) */}
      <div className="flex flex-col sm:flex-row bg-inherit justify-around pb-5 space-y-6 sm:space-y-0">
        <div className="flex-1 px-2 sm:px-4 bg-inherit">
          <h3 className="mb-2 font-bold bg-inherit text-lg">Vamos inovar?</h3>
          <p className="bg-inherit">resetlabufc@gmail.com</p>
        </div>
        <div className="flex-1 px-2 sm:px-4 bg-inherit">
          <h3 className="mb-2 font-bold bg-inherit text-lg">Endereço</h3>
          <p className="bg-inherit">
            Universidade Federal do Ceará, Campus de Itapajé. <br />
            Campus Jardim de Anita. Rua Francisco José de Oliveira, s/n, Centro
          </p>
          <p className="bg-inherit">Itapajé-CE</p>
          <p className="bg-inherit">CEP: 62600-000</p>
        </div>
        {/* <div className="flex-1 px-2 sm:px-4 bg-inherit">
          <h3 className="mb-2 font-bold bg-inherit text-lg">Mapa do site</h3>
          <ul className="bg-inherit space-y-1">
            <li className="bg-inherit cursor-pointer hover:text-gray-300">
              Sobre
            </li>
            <li
              className="bg-inherit cursor-pointer hover:text-gray-300"
              onClick={() => navigate("/members")}
            >
              Time
            </li>
            <li className="bg-inherit cursor-pointer hover:text-gray-300">
              Produtos e Projetos
            </li>
            <li className="bg-inherit cursor-pointer hover:text-gray-300">
              Programas
            </li>
            <li className="bg-inherit cursor-pointer hover:text-gray-300">
              Publicações
            </li>
          </ul>
        </div> */}
      </div>

      {/* Parte de baixo do footer (footerSocial) */}
      <div className="flex flex-col items-center mt-6 sm:mt-3">
        <div className="flex items-center justify-center flex-wrap text-sm bg-inherit">
          <p className="bg-inherit mr-2">Todos os direitos reservados</p>
          <div className="flex bg-inherit space-x-2">
            <FaInstagram
              className="bg-inherit hover:text-gray-400 transition-colors cursor-pointer text-xl"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/resetlab.ufc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                  "_blank"
                );
              }}
            />
            <FaLinkedinIn className="bg-inherit hover:text-gray-400 cursor-pointer transition-colors text-xl" />
            <FaGithub
              className="bg-inherit hover:text-gray-400 cursor-pointer text-xl"
              onClick={() =>
                window.open("https://github.com/reset-ufc", "_blank")
              }
            />
          </div>
          <p className="bg-inherit ml-2">© 2024 ResetLab</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
