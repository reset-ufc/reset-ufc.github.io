import { Helmet } from "react-helmet-async";
import NewsCard from "./NewsCard";
import { newsItems } from "./data";
const NewsCardList = () => {
  
  return (
    <div className="bg-[#270B79] pt-24">
      <Helmet title="notícias" />
      <h1 className="text-white flex bg-inherit justify-center text-4xl pt-6 font-Lufga-ExtraBold">
        Notícias
      </h1>
      <div className="flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">
        {newsItems.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default NewsCardList;