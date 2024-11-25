import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function Portfolio() {
  const projects = [
    {
      name: "Freire Assistant",
      description: "Assistente Virtual sobre Editais da UFC.",
      image: "freire_web_page.png",
      link: "https://example1.com",
    },
    {
      name: "Freire Assistant",
      description: "Assistente Virtual sobre Editais da UFC.",
      image: "freire_web_page.png",
      link: "https://example1.com",
    },
  ];

  return (
    <div>
      <h1 className="text-white text-center text-3xl sm:text-4xl font-Lufga-ExtraBold px-4">
        Portfólio
      </h1>
      <h2 className="text-white text-center text-base sm:text-lg font-Lufga-Regular mt-2 px-4">
        Dê uma olhada em alguns dos nossos projetos
      </h2>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="bg-inherit">
                <div
                  className="relative rounded-xl shadow-xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    height: "300px",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex flex-col justify-end p-8 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h1 className="text-white text-xl uppercase group-hover:text-orange-500">
                      {project.name}
                    </h1>
                    <p className="text-white opacity-80">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      className="mt-4 inline-block bg-[#ec642a] text-white px-4 py-2 rounded-full"
                    >
                      Conhecer Projeto
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
