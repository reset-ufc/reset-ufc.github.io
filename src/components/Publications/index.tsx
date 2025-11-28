import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
	usePublications,
	useSearchPublications,
	useFilterPublicationsByYear,
	useFilterPublicationsByKeywords,
	useFilterPublicationsByCategory,
} from "../../hooks/useFeaturedContent";

interface PublicationsProps {
	searchTerm?: string;
	categoryFilter?: string;
	yearFilter?: string;
	keywordFilter?: string;
}

export function Publications({
	searchTerm = "",
	categoryFilter = "all",
	yearFilter = "all",
	keywordFilter = "all",
}: PublicationsProps) {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;

	// Reset page quando filtros mudarem
	useEffect(() => {
		setCurrentPage(1);
	}, [searchTerm, categoryFilter, yearFilter, keywordFilter]);

	// Determinar qual hook usar baseado nos filtros
	const hasSearch = searchTerm.trim().length > 0;
	const hasYearFilter = yearFilter !== "all";
	const hasKeywordFilter = keywordFilter !== "all";
	const hasCategoryFilter = categoryFilter !== "all";

	// Prioridade: busca > filtros específicos > lista geral
	const searchQuery = useSearchPublications(
		hasSearch ? searchTerm : "",
		currentPage,
		itemsPerPage,
	);

	const yearQuery = useFilterPublicationsByYear(
		hasYearFilter ? Number(yearFilter) : null,
		currentPage,
		itemsPerPage,
	);

	const keywordQuery = useFilterPublicationsByKeywords(
		hasKeywordFilter ? keywordFilter : null,
		currentPage,
		itemsPerPage,
	);

	const categoryQuery = useFilterPublicationsByCategory(
		hasCategoryFilter ? categoryFilter : null,
		currentPage,
		itemsPerPage,
	);

	const generalQuery = usePublications(currentPage, itemsPerPage);

	// Selecionar a query apropriada
	let activeQuery;
	if (hasSearch) {
		activeQuery = searchQuery;
	} else if (hasYearFilter) {
		activeQuery = yearQuery;
	} else if (hasKeywordFilter) {
		activeQuery = keywordQuery;
	} else if (hasCategoryFilter) {
		activeQuery = categoryQuery;
	} else {
		activeQuery = generalQuery;
	}

	const { data, isLoading, isError } = activeQuery;

	const handleNextPage = () => {
		if (data && currentPage < data.totalPages) {
			setCurrentPage((prev) => prev + 1);
		}
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage((prev) => prev - 1);
		}
	};

	if (isLoading) {
		return (
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-center items-center py-20">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
				</div>
			</div>
		);
	}

	if (isError || !data || data.data.length === 0) {
		return (
			<div className="max-w-7xl mx-auto">
				<p className="text-center text-gray-500 mt-8">
					Nenhuma publicação encontrada.
				</p>
			</div>
		);
	}

	const { data: publications, totalPages, page } = data;

	return (
		<div className="max-w-7xl mx-auto">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{publications.map((item) => (
					<div
						key={item.id}
						className="bg-white rounded-lg shadow-lg overflow-hidden"
					>
						<div className="p-6">
							<span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-4">
								{item.category}
							</span>
							<h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
								{item.title}
							</h3>
							<p className="text-sm text-gray-600 mb-1">
								{item.journalName}
							</p>
							<p className="text-sm text-gray-600 mb-4 line-clamp-1">
								<span className="font-semibold">Autores</span>:{" "}
								{item.authors.join(", ")}
							</p>
							{item.keywords && item.keywords.length > 0 && (
								<p className="text-sm text-gray-600 mb-4 line-clamp-1">
									<span className="font-semibold">Palavras-chave</span>:{" "}
									{item.keywords.join(", ")}
								</p>
							)}
							<p className="text-gray-700 mb-4 line-clamp-3">
								{item.description}
							</p>
							<NavLink
								to={item.url}
								target="_blank"
								className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300"
							>
								Leia mais
							</NavLink>
						</div>
					</div>
				))}
			</div>

			{totalPages > 1 && (
				<div className="flex justify-center items-center mt-6 space-x-4">
					<button
						onClick={handlePreviousPage}
						disabled={currentPage === 1}
						className={`px-4 py-2 text-white rounded-md ${
							currentPage === 1
								? "bg-gray-300 opacity-50 cursor-not-allowed"
								: "bg-orange-500"
						}`}
					>
						Anterior
					</button>
					<span className="text-gray-700">
						Página {currentPage} de {totalPages}
					</span>
					<button
						onClick={handleNextPage}
						disabled={currentPage === totalPages}
						className={`px-4 py-2 text-white rounded-md ${
							currentPage === totalPages
								? "bg-gray-300 opacity-50 cursor-not-allowed"
								: "bg-orange-500"
						}`}
					>
						Próxima
					</button>
				</div>
			)}
		</div>
	);
}