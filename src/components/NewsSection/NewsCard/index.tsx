import { useNavigate } from "react-router-dom";

interface NewsCardProps {
  news: {
    image: string;
    title: string;
    category: string;
    date: string;
  };
}

export default function NewsCard({ news }: NewsCardProps) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/news/${encodeURIComponent(news.title)}`); // Codifica o título para URL
  };

  return (
    <div onClick={() => handleReadMore()} className="relative group rounded-xl cursor-pointer overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      {/* Imagem com hover */}
      <div className="h-60 overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
      </div>

      {/* Conteúdo do card */}
      <div className="p-4 bg-white h-40 flex flex-col justify-between">
        <h2 className="text-lg font-medium text-gray-900 leading-tight">
          {news.title}
        </h2>
        <p className="text-sm text-gray-600">{news.date}</p>
      </div>
    </div>
  );
}
