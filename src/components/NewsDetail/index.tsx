import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useNewsById } from "../../hooks/useFeaturedContent";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: newsItem, isLoading, isError } = useNewsById(id || "");

  if (isLoading) {
    return (
      <div className="bg-gray-100 pt-12 pb-8 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !newsItem) {
    return (
      <div className="bg-gray-100 pt-12 pb-8 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center py-20">
            <p className="text-gray-600 text-lg">Notícia não encontrada.</p>
          </div>
        </div>
      </div>
    );
  }

  const publishedDate = newsItem.publishedDate || newsItem.createdAt;
  const formattedDate = new Date(publishedDate).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-gray-100 pt-12 pb-8 min-h-screen">
      <Helmet title={newsItem.title} />
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center flex-col mb-8">
          <p className="text-center text-gray-600">
            {formattedDate} - {newsItem.keywords.join(", ") || "Notícia"}
          </p>
          <h1 className="text-4xl font-bold text-gray-900 text-center mt-2">
            {newsItem.title}
          </h1>
        </div>

        {newsItem.img && (
          <div className="flex justify-center mb-8">
            <img
              src={newsItem.img}
              alt={newsItem.title}
              className="md:max-w-3xl h-96 object-contain rounded shadow-md"
            />
          </div>
        )}

        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-wrap">
              {newsItem.content}
            </p>
          </div>

          {newsItem.keywords.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Palavras-chave:
              </p>
              <div className="flex flex-wrap gap-2">
                {newsItem.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
