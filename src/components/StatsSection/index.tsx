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
    <section className="flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 bg-[#270B79] min-h-screen text-white relative overflow-hidden">
    {/* Área de animação */}
    <div className="area absolute inset-0">
      <ul className="circles">
        {Array.from({length: 10}).map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>

    {/* Conteúdo da seção */}
    <div className="container mx-auto px-4 z-10">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">
        Faça parte de uma equipe de cientistas, inventores e amigos
      </h2>
      <div className="flex flex-col items-center justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-center">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg p-4 sm:p-6 shadow-lg flex flex-col items-center"
            >
              <item.icon className="text-[#270B79] size-6 sm:size-8 mb-2 sm:mb-4" />
              <div className="text-2xl sm:text-3xl md:text-4xl bg-inherit font-Lufga-ExtraBold text-[#270B79]">
                {item.number}
              </div>
              <div className="mt-1 sm:mt-2 bg-inherit font-Lufga-Regular text-sm sm:text-base">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default StatsSection;