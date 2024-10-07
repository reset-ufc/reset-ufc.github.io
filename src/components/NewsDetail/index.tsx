import { useParams } from "react-router-dom";
import { newsItems } from "../NewsSection/data";
const NewsDetail = () => {
    const { title } = useParams();
    const newsItem = newsItems.find(item => item.title === decodeURIComponent(title));
  
    if (!newsItem) {
      return <div>Notícia não encontrada.</div>;
    }
  
    return (
      <div className="bg-[#270B79] pt-24 min-h-screen text-white">
        <div className="flex justify-center items-center">
          <div className="max-w-4xl bg-white text-black rounded shadow-lg p-8 m-8">
            <img src={newsItem.imageUrl} alt={newsItem.title} className="w-full h-auto mb-6 rounded" />
            <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
            <p className="text-gray-600 text-sm mb-4">{new Date(newsItem.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</p>
            <p className="text-lg leading-relaxed">{newsItem.description}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewsDetail;