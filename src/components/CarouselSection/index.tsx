import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const data = [
    {
      title:
        "Execuções Fiscais – Cartas e Mandados de Citação Tribunal de Justiça do Ceará",
      color: "bg-gray-300",
      hover: "bg-[#ec642a]"
    },
    {
      title:
        "Jornada de Inovação – Direito e Linguagem no Setor Público – Edição INMETRO",
      color: "bg-[#ec642a]",
      hover: "bg-gray-300"
    },
    {
      title:
        "Jornada De Inovação – Direito E Linguagem No Setor Público – Edição Sobral",
      color: "bg-gray-300",
      hover: "bg-[#ec642a]"
    },
    {
      title:
        "(Re)design de Serviço Público – Filas de Cirurgias Eletivas do Estado do Ceará",
      color: "bg-[#ec642a]",
      hover: "bg-gray-300"
    }
  ];

  return (
    <div className="bg-[#270B79] h-[200px] p-8 mx-28 ">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={index}
            className="p-4 cursor-pointer "
          >
            <div className={`${item.color} transition p-8 hover:${item.hover}  text-black font-bold  h-32`}>
              <p className={`bg-inherit transition-transform  ease-in-out hover:-translate-y-1 hover:scale-70`}>{item.title}</p>
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
