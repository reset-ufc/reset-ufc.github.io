import { Download } from "lucide-react";

export function VisualIdentityPage() {
  const downloadItems = [
    { name: "Paleta de Cores", filename: "paleta.png" },
    {
      name: "Manual de Uso ",
      filename: "resetlab-manual-de-uso.pdf",
    },
    {
      name: "Logo e Símbolo com Fundo Transparente",
      filename: "logo-e-simbolo-com-fundo-transparente.zip",
    },
  ];

  return (
    <main>
      <div>
        <img
          src="/identidade_visual.png"
          alt="Identidade visual logo"
          className="w-full"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 py-6 lg:py-20 text-white bg-[#ed6327] px-4 lg:px-8">
        <p className="font-medium text-3xl lg:text-6xl text-center lg:text-left mt-2 md:mt-0">
          Conceito <br /> da marca
        </p>
        <div className="w-full h-[2px] lg:w-[2px] lg:h-[200px] bg-white rounded-full self-center mx-0 lg:mx-8" />
        <div className="flex flex-col gap-3 w-full lg:w-[440px] text-sm sm:text-base">
          <p className="font-light">
            O logo RESET LAB combina inovação e modernidade com elementos
            tecnológicos. A inicial "R" é formada pela junção do símbolo de
            programação "maior que" {"(>)"} e uma barra virada a 90°,
            simbolizando a ligação com a tecnologia e a ciência de dados{" "}
          </p>
          <p className="font-light">
            As cores verde e azul evocam tanto tecnologia quanto tranquilidade.
            A tipografia moderna reforça a confiabilidade em remeter a uma
            empresa tecnológica. O logo como um todo visa remeter à integração e
            colaboração em pesquisa de software e dados, com o slogan {"<<"}
            Inovando na Conexão entre Software e dados{">>"} destaca a missão do
            laboratório. Este design posiciona o RESET LAB como uma referência
            em pesquisa e desenvolvimento tecnológico
          </p>
        </div>
      </div>
      <div className="py-16 px-4 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10">Downloads</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {downloadItems.map((item) => (
            <a
              key={item.filename}
              href={`/${item.filename}`}
              download={item.filename}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Download className="w-10 h-10 text-[#ed6327] mb-4" />
              <span className="text-gray-800 font-medium text-center">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
