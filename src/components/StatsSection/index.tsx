// import DevImage from "../../../public/dev-image.png";
import { Users, FileText, Box, Briefcase } from "lucide-react"; // Importando os ícones

const statsData = [
  { number: 100, text: "COLABORADORES", icon: Users },
  { number: 150, text: "ARTIGOS PUBLICADOS", icon: FileText },
  { number: 15, text: "PRODUTOS", icon: Box },
  { number: 22, text: "PARCEIROS", icon: Briefcase },
];

const StatsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-[#270B79] h-full text-white">
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
      <div className="flex items-center justify-between">
        {/* <img src={DevImage} alt="Uma pessoa desenvolvendo" /> */}
        <div className="grid grid-cols-2 gap-8 text-center z-10">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg p-6 shadow-lg flex flex-col items-center"
            >
              {/* Ícone */}
              <item.icon className="text-[#270B79] size-8 mb-4" />
              <div className="text-4xl bg-inherit font-Lufga-ExtraBold text-[#270B79]">
                {item.number}
              </div>
              <div className="mt-2 bg-inherit font-Lufga-Regular">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;