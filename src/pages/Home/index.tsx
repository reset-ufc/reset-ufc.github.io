import Collection from "../../components/Collection";
import CarouselSection from "../../components/CarouselSection";
import Portifolio from "../../components/portifolio";

export default function Home() {
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-28 relative w-full h-screen">
      <Collection />
      
      <div className="animate-fade-right animate-once animate-alternate">
        <h1 className="text-white flex justify-center text-4xl font-bold">Artigos</h1>
        <CarouselSection />
      </div>
      <div className="animate-fade-right animate-once animate-alternate">
        <h1 className="text-white flex justify-center text-4xl font-bold">Portifólio</h1>
        <h2 className="text-white flex justify-center text-lg font-semibold">Dê uma olhada em alguns dos nossos projetos</h2>
        <Portifolio />
      </div>
      <div
        className="absolute bottom-[100px] left-1/2 transform animate-bounce -translate-x-1/2 cursor-pointer"
        onClick={handleScroll}
      >
        <span className="block w-6 h-6 border-2 border-white rounded-full"></span>
      </div>

      {/* Próxima seção */}
      <div id="next-section" className="flex items-center justify-center">
        {/* Adicione o conteúdo da próxima seção aqui */}
      </div>
    </div>
  );
}
