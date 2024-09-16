import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black p-5 flex flex-col justify-between w-full">
      {/* Parte de cima do footer (footerInfo) */}
      <div className="flex bg-inherit justify-around pb-5">
        <div className="flex-1 px-4 bg-inherit">
          <h3 className="mb-2 font-bold bg-inherit">Vamos inovar?</h3>
          <p className='bg-inherit'>iris@irislab.ce.gov.br</p>
        </div>
        <div className="flex-1 px-4 bg-inherit">
        <h3 className="mb-2 font-bold bg-inherit">Endereço</h3>
          <p className='bg-inherit'>Palácio da Abolição</p>
          <p className='bg-inherit'>Rua Silva Paulet, 400 – 2º andar</p>
          <p className='bg-inherit'>Meireles, Fortaleza – CE</p>
          <p className='bg-inherit'>CEP: 60120-020</p>
        </div>
        <div className="flex-1 px-4 bg-inherit">
          <h3 className="mb-2 font-bold bg-inherit">Mapa do site</h3>
          <ul className='bg-inherit'>
            <li className='bg-inherit cursor-pointer'>Sobre</li>
            <li className='bg-inherit cursor-pointer'>Time</li>
            <li className='bg-inherit cursor-pointer'>Produtos e Projetos</li>
            <li className='bg-inherit cursor-pointer'>Programas</li>
            <li className='bg-inherit cursor-pointer'>Publicações</li>
          </ul>
        </div>
        <div className="flex-1 px-4 bg-inherit">
          <h3 className="mb-2 font-bold bg-inherit">Transparência</h3>
          <ul className='bg-inherit'>
            <li className='bg-inherit cursor-pointer'>Ouvidoria</li>
            <li className='bg-inherit cursor-pointer'>Central 155</li>
          </ul>
        </div>
      </div>

      {/* Parte de baixo do footer (footerSocial) */}
      <div className="border-t bg-inherit border-gray-400 pt-3 flex flex-col items-center">
        <div className="mb-3 bg-inherit">
        <FaInstagram className="text-white bg-inherit hover:text-gray-400 cursor-pointer" />
        <FaLinkedinIn className="text-white bg-inherit hover:text-gray-400 cursor-pointer" />
        <FaGithub className="text-white bg-inherit hover:text-gray-400 cursor-pointer" />
        </div>
        <p className="text-sm bg-inherit">Todos os direitos reservados © 2024 ResetLab</p>
      </div>
    </footer>
  );
};

export default Footer;
