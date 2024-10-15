import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-neutral-800 text-white p-5 flex pt-14 flex-col justify-between w-full">
      {/* Parte de cima do footer (footerInfo) */}
      <div className="flex bg-inherit justify-around pb-5">
        <div className="flex-1 px-4 bg-inherit">
          <h3 className="mb-2 font-bold bg-inherit">Vamos inovar?</h3>
          <p className="bg-inherit">resetlabufc@gmail.com</p>
        </div>
        <div className="flex-1 px-4 bg-inherit">
          <h3 className="mb-2 font-bold bg-inherit">Endereço</h3>
          <p className="bg-inherit">Palácio da Abolição</p>
          <p className="bg-inherit">Rua Silva Paulet, 400 – 2º andar</p>
          <p className="bg-inherit">Meireles, Fortaleza – CE</p>
          <p className="bg-inherit">CEP: 60120-020</p>
        </div>
        <div className="flex-1 px-4 bg-inherit">
          <h3 className="mb-2 font-bold bg-inherit">Mapa do site</h3>
          <ul className="bg-inherit">
            <li className="bg-inherit cursor-pointer">Sobre</li>
            <li
              className="bg-inherit cursor-pointer"
              onClick={() => navigate("/members")}
            >
              Time
            </li>
            <li className="bg-inherit cursor-pointer">Produtos e Projetos</li>
            <li className="bg-inherit cursor-pointer">Programas</li>
            <li className="bg-inherit cursor-pointer">Publicações</li>
          </ul>
        </div>
        <div className="flex-1 px-4 bg-inherit">
          <h3 className="mb-2 font-bold bg-inherit">Transparência</h3>
          <ul className="bg-inherit">
            <li className="bg-inherit cursor-pointer">Ouvidoria</li>
            <li className="bg-inherit cursor-pointer">Central 155</li>
          </ul>
        </div>
      </div>

      {/* Parte de baixo do footer (footerSocial) */}
      <div className="flex flex-col items-center">
        <p className="text-sm bg-inherit flex mt-3">
          Todos os direitos reservados{" "}
          <div className="flex bg-inherit ">
            <FaInstagram
              className=" bg-inherit hover:text-gray-400 transition-colors cursor-pointer ml-1"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/resetlab.ufc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                  "_blank"
                );
              }}
            />
            <FaLinkedinIn className=" bg-inherit hover:text-gray-400 cursor-pointer transition-colors mx-1" />
            <FaGithub
              className=" bg-inherit hover:text-gray-400 cursor-pointer mr-1"
              onClick={() =>
                window.open("https://github.com/reset-ufc", "_blank")
              }
            />{" "}
          </div>{" "}
          © 2024 ResetLab
        </p>
      </div>
    </footer>
  );
};

export default Footer;
