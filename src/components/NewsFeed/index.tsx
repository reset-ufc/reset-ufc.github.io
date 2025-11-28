import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNews } from "../../hooks/useFeaturedContent";
import NewsCard from "./NewsCard";

export default function NewsList() {
	const [page, setPage] = useState(1);
	const limit = 10;
	const { data, isLoading, isError } = useNews(page, limit);

	if (isLoading) {
		return (
			<div className="container mx-auto p-4 py-14">
				<Helmet title="Notícias" />
				<div className="flex justify-center items-center py-20">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
				</div>
			</div>
		);
	}

	if (isError || !data || data.data.length === 0) {
		return (
			<div className="container mx-auto p-4 py-14">
				<Helmet title="Notícias" />
				<div className="flex justify-center items-center py-20">
					<p className="text-gray-600 text-lg">
						Nenhuma notícia disponível no momento.
					</p>
				</div>
			</div>
		);
	}

	const { data: news, totalPages, page: currentPage } = data;

	return (
		<div className="container mx-auto p-4 py-14">
			<Helmet title="Notícias" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
				{news.map((newsItem) => (
					<NewsCard
						key={newsItem.id}
						news={{
							id: newsItem.id,
							image: newsItem.img || "https://via.placeholder.com/400x300",
							title: newsItem.title,
							category: newsItem.keywords.join(", ") || "Notícia",
							date: newsItem.publishedDate
								? new Date(newsItem.publishedDate).toLocaleDateString("pt-BR", {
										day: "2-digit",
										month: "short",
										year: "numeric",
									})
								: new Date(newsItem.createdAt).toLocaleDateString("pt-BR", {
										day: "2-digit",
										month: "short",
										year: "numeric",
									}),
							description: newsItem.content,
						}}
					/>
				))}
			</div>

			{/* Paginação */}
			{totalPages > 1 && (
				<div className="flex justify-center items-center gap-4 mt-8">
					<button
						onClick={() => setPage((prev) => Math.max(1, prev - 1))}
						disabled={currentPage === 1}
						className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
					>
						Anterior
					</button>
					<span className="text-gray-700">
						Página {currentPage} de {totalPages}
					</span>
					<button
						onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
						disabled={currentPage === totalPages}
						className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
					>
						Próxima
					</button>
				</div>
			)}
		</div>
	);
}