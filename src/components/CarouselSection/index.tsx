import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default value for larger screens
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      title:
        "Execuções Fiscais – Cartas e Mandados de Citação Tribunal de Justiça do Ceará",
    },
    {
      title:
        "Jornada de Inovação – Direito e Linguagem no Setor Público – Edição INMETRO",
    },
    {
      title:
        "Jornada De Inovação – Direito E Linguagem No Setor Público – Edição Sobral",
    },
    {
      title:
        "(Re)design de Serviço Público – Filas de Cirurgias Eletivas do Estado do Ceará",
    },
  ];

  return (
    <div className="bg-[#270B79] p-4 sm:p-6 md:p-8 mx-4 sm:mx-8 md:mx-16 lg:mx-28 animate-fade-left animate-once animate-alternate">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="p-2 sm:p-4 cursor-pointer">
            <div
              className={`bg-gray-200 rounded-md hover:bg-[#ec642a] hover:text-white transition p-6 sm:p-8 md:p-10 lg:p-12 text-black font-Lufga-ExtraBold h-36 sm:h-44 md:h-52 lg:h-60 flex items-center justify-center`}
            >
              <p
                className={`transition-transform ease-in-out hover:-translate-y-1 hover:scale-105 text-center text-sm sm:text-base md:text-lg lg:text-xl max-h-full flex-wrap break-words overflow-hidden text-ellipsis`}
              >
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-white rounded-full`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-white rounded-full`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
