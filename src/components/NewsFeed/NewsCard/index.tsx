import { NewsCardProps } from "../../../types";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ news }: NewsCardProps) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/news/${encodeURIComponent(news.title)}`); 
  };

  return (
    <div className="">
      <div
      onClick={handleReadMore}
      className="relative group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-2xl flex flex-col h-full"
    >
      <div className="h-72 w-full">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="text-gray-500 text-sm font-semibold uppercase mb-1">
          {news.category}
        </span>
        <h2 className="text-lg font-bold text-gray-900 leading-tight mb-2">
          {news.title}
        </h2>
        <span className="text-gray-500 text-sm">{news.date}</span>
      </div>

      {/* Data em destaque */}
      <div className="absolute top-0 right-0 bg-black text-white text-xs px-3 py-1">
        {news.date}
      </div>
    </div>
    </div>
  );
};

export default NewsCard;
