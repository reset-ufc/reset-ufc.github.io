export function VisualIdentityPage() {
  return (
    <main>
      <div>
        <img src="/public/visual.png" alt="logos" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 py-10 lg:py-20 text-white bg-[#ed6327] px-4 lg:px-8">
        <p className="font-medium text-4xl sm:text-5xl lg:text-6xl text-center lg:text-left mb-6 lg:mb-0">
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
            As cores verde e azul evocam tanto tecnologia quanti tranquilidade.
            A tipografia moderna reforça a confiabilidade em remeter a uma
            empresa tecnológica. O logo com um todo visa remeter à integração e
            colaboração em pesquisa de software e dados, com o slogan {"<<"}
            Inovando na Conexão entre Software e dados{">>"} destaca a missão do
            laboratório. Este design posiciona o RESET LAB como uma referência
            em pesquisa e desenvolvimento tecnológico
          </p>
        </div>
      </div>
      <div className="py-10">
        <img src="/public/visual-logo.png" alt="logos" />
      </div>
      <div className="my-16">
        <img src="/public/paleta.png" alt="paleta de cores" />
      </div>
      <div className="my-16 flex items-center justify-center">
        <img src="/public/papel-timbrando.png" alt="paleta de cores" />
      </div>
      <div className="my-16 flex items-center justify-center">
        <img src="/public/cartao.png" alt="paleta de cores" />
      </div>
      <div className="my-16 flex items-center justify-center">
        <img src="/public/timbrando.png" alt="paleta de cores" />
      </div>
      <div className="my-16 flex items-center justify-center">
        <img src="/public/email.png" alt="paleta de cores" />
      </div>
      <div className="my-16 flex items-center justify-center">
        <img src="/public/slide.png" alt="paleta de cores" />
      </div>
      <div className="my-16 flex items-center justify-center">
        <img src="/public/post.png" alt="paleta de cores" />
      </div>
    </main>
  );
}
