import NewsCard from "./NewsCard";
import { newsItems } from "./data";
import { Helmet } from "react-helmet-async";

export default function NewsList() {
  
  return (
    <div className="container mx-auto p-4 py-14">
      <Helmet title="Notícias" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsItems.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </div>
  );
}