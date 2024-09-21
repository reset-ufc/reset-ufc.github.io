import React from 'react';

const StatsSection = () => {
  return (
    <section className=" flex flex-col items-center justify-center py-16 bg-[#270B79] text-white">
    {/* Área de animação */}
    <div className="area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    {/* Conteúdo da seção */}
    <h2 className="text-2xl font-bold mb-8 z-10">
      Faça parte de uma equipe de cientistas, inventores e amigos
    </h2>

    <div className=" grid grid-cols-2 gap-8 text-center z-10">
      <div className="bg-white text-black rounded-lg p-6 shadow-lg">
        <div className="text-4xl bg-inherit font-Lufga-ExtraBold text-[#270B79]">100</div>
        <div className="mt-2 bg-inherit font-Lufga-Regular">COLABORADORES</div>
      </div>

      <div className="bg-white text-black rounded-lg p-6 shadow-lg">
        <div className="text-4xl bg-inherit font-Lufga-ExtraBold text-[#270B79]">150</div>
        <div className="mt-2 bg-inherit font-Lufga-Regular">ARTIGOS PUBLICADOS</div>
      </div>

      <div className="bg-white text-black rounded-lg p-6 shadow-lg">
        <div className="text-4xl bg-inherit font-Lufga-ExtraBold text-[#270B79]">15</div>
        <div className="mt-2 bg-inherit font-Lufga-Regular">PRODUTOS</div>
      </div>

      <div className=" bg-white text-black rounded-lg p-6 shadow-lg">
        <div className="text-4xl bg-inherit font-Lufga-ExtraBold text-[#270B79]">22</div>
        <div className="mt-2 bg-inherit font-Lufga-Regular">PARCEIROS</div>
      </div>
    </div>
  </section>
  );
};

export default StatsSection;
