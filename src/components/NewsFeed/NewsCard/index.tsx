import { Calendar } from "lucide-react";
import { NewsCardProps } from "../../../types";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ category, title, date, imageUrl }: NewsCardProps) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/news/${encodeURIComponent(title)}`); // Codifica o título para URL
  };

  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img className="w-full object-cover" src={imageUrl} alt={title} />
        <span className="absolute top-2 left-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
          {category.toUpperCase()}
        </span>
        <span className="absolute bottom-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
          {new Date(date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "short"
          })}
        </span>
      </div>
      <div className="px-4 py-4">
        <div className="font-bold text-lg mb-2 ">{title}</div>
        <p className="text-gray-600 text-sm flex items-center">
          <Calendar className="mr-2" size={16} />
          {date}
        </p>
      </div>
      <div className="px-4 pb-4">
        <button onClick={handleReadMore} className="bg-secondary hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition-colors">
          Read About
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
