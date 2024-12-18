import { useParams } from "react-router-dom";
import { newsItems } from "../NewsFeed/data";

const NewsDetail = () => {
  const { title } = useParams();
  const newsItem = newsItems.find(
    (item) => item.title === decodeURIComponent(title || "")
  );

  if (!newsItem) {
    return <div>Notícia não encontrada.</div>;
  }

  return (
    <div className="bg-gray-100 pt-12 pb-8 min-h-screen">
      <div className="container mx-auto px-4">
        <div className=" flex justify-center items-center flex-col mb-8">
          <p className="text-center text-gray-600 ">
            {new Date(newsItem.date).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}{" "}
            - {newsItem.category}
          </p>
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            {newsItem.title}
          </h1>
        </div>

        <div className="flex justify-center mb-8">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full md:max-w-3xl h-auto rounded shadow-md"
          />
        </div>

        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
          <p className="text-lg leading-relaxed text-gray-800">
            {newsItem.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
