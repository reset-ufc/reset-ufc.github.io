import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function Portfolio() {
  const projects = [
    {
      name: "Project 1",
      description: "Description of Project 1",
      image: "https://i.pinimg.com/736x/2b/74/7b/2b747b71b782a8833f2b3ad9b0e37cd1.jpg",
      link: "https://example1.com",
    },
    {
      name: "Project 2",
      description: "Description of Project 2",
      image: "https://i.pinimg.com/564x/3c/c2/6c/3cc26c0140c2f0dc70d8aa48416c41dc.jpg",
      link: "https://example2.com",
    },
    {
      name: "Project 3",
      description: "Description of Project 3",
      image: "https://i.pinimg.com/564x/fa/4f/cf/fa4fcfd2db636f98eb0f2b5aecce0c28.jpg",
      link: "https://example3.com",
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <section className="py-10" style={{ backgroundColor: '#270B79' }}>
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3} 
          navigation
          pagination={{ clickable: true }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative border-8 border-black shadow-xl bg-cover bg-center"
                style={{
                  backgroundImage: `url(${project.image})`,
                  height: '300px',
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h1 className="text-white text-xl uppercase group-hover:text-orange-500">
                    {project.name}
                  </h1>
                  <p className="text-white opacity-80">{project.description}</p>
                  <a
                    href={project.link}
                    className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-full"
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
  );
}
