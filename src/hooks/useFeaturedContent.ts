import { useQuery } from "@tanstack/react-query";
import { type Member as ApiMember, getMembers } from "../services/get-members";
import {
	getFeaturedNews,
	getNews,
	getNewsById,
	type News,
	type NewsResponse,
} from "../services/get-news";
import {
	getFeaturedProjects,
	getProjectById,
	getProjectBySlug,
	getProjects,
	type Project,
	type ProjectsResponse,
} from "../services/get-projects";
import {
	filterPublicationsByCategory,
	filterPublicationsByKeywords,
	filterPublicationsByYear,
	getFeaturedPublications,
	getPublicationById,
	getPublications,
	type Publication,
	type PublicationsResponse,
	searchPublications,
} from "../services/get-publications";

// Re-exportar o tipo Member da API para uso no hook
export type Member = ApiMember;

// Re-exportar o tipo Project
export type { Project };

// Re-exportar o tipo News
export type { News };

// Re-exportar o tipo Publication
export type { Publication };

// Hook para publicações em destaque
export function useFeaturedPublications(limit: number = 6) {
	return useQuery<PublicationsResponse>({
		queryKey: ["featured-publications", limit],
		queryFn: () => getFeaturedPublications(1, limit),
	});
}

// Hook para buscar todas as publicações com paginação
export function usePublications(page: number = 1, limit: number = 10) {
	return useQuery<PublicationsResponse>({
		queryKey: ["publications", page, limit],
		queryFn: () => getPublications(page, limit),
	});
}

// Hook para buscar uma publicação específica por ID
export function usePublicationById(id: string) {
	return useQuery<Publication>({
		queryKey: ["publication", id],
		queryFn: () => getPublicationById(id),
		enabled: !!id,
	});
}

// Hook para buscar publicações por termo de pesquisa
export function useSearchPublications(
	query: string,
	page: number = 1,
	limit: number = 10,
) {
	return useQuery<PublicationsResponse>({
		queryKey: ["publications", "search", query, page, limit],
		queryFn: () => searchPublications(query, page, limit),
		enabled: !!query && query.trim().length > 0,
	});
}

// Hook para filtrar publicações por ano
export function useFilterPublicationsByYear(
	year: number | null,
	page: number = 1,
	limit: number = 10,
) {
	return useQuery<PublicationsResponse>({
		queryKey: ["publications", "filter", "year", year, page, limit],
		queryFn: () => {
			if (year === null) {
				throw new Error("Year is required");
			}
			return filterPublicationsByYear(year, page, limit);
		},
		enabled: year !== null && year > 0,
	});
}

// Hook para filtrar publicações por palavras-chave
export function useFilterPublicationsByKeywords(
	keywords: string | null,
	page: number = 1,
	limit: number = 10,
) {
	return useQuery<PublicationsResponse>({
		queryKey: ["publications", "filter", "keywords", keywords, page, limit],
		queryFn: () => {
			if (keywords === null || keywords.trim().length === 0) {
				throw new Error("Keywords are required");
			}
			return filterPublicationsByKeywords(keywords, page, limit);
		},
		enabled: keywords !== null && keywords.trim().length > 0,
	});
}

// Hook para filtrar publicações por categoria
export function useFilterPublicationsByCategory(
	category: string | null,
	page: number = 1,
	limit: number = 10,
) {
	return useQuery<PublicationsResponse>({
		queryKey: ["publications", "filter", "category", category, page, limit],
		queryFn: () => {
			if (category === null || category === "all") {
				throw new Error("Category is required");
			}
			return filterPublicationsByCategory(category, page, limit);
		},
		enabled: category !== null && category !== "all",
	});
}

export function useFeaturedNews(limit: number = 5) {
	return useQuery<NewsResponse>({
		queryKey: ["featured-news", limit],
		queryFn: () => getFeaturedNews(1, limit),
	});
}

// Hook para buscar todas as notícias com paginação
export function useNews(page: number = 1, limit: number = 10) {
	return useQuery<NewsResponse>({
		queryKey: ["news", page, limit],
		queryFn: () => getNews(page, limit),
	});
}

// Hook para buscar uma notícia específica por ID
export function useNewsById(id: string) {
	return useQuery<News>({
		queryKey: ["news", id],
		queryFn: () => getNewsById(id),
		enabled: !!id,
	});
}

// Hook para projetos em destaque
export function useFeaturedProjects(limit: number = 6) {
	return useQuery<ProjectsResponse>({
		queryKey: ["featured-projects", limit],
		queryFn: () => getFeaturedProjects(1, limit),
	});
}

// Hook para buscar todos os projetos com paginação
export function useProjects(page: number = 1, limit: number = 10) {
	return useQuery<ProjectsResponse>({
		queryKey: ["projects", page, limit],
		queryFn: () => getProjects(page, limit),
	});
}

// Hook para buscar um projeto específico por ID
export function useProjectById(id: string) {
	return useQuery<Project>({
		queryKey: ["project", id],
		queryFn: () => getProjectById(id),
		enabled: !!id,
	});
}

// Hook para buscar um projeto específico por slug
export function useProjectBySlug(slug: string) {
	return useQuery<Project | null>({
		queryKey: ["project", "slug", slug],
		queryFn: () => getProjectBySlug(slug),
		enabled: !!slug,
	});
}

// Hook para buscar todos os membros
export function useMembers() {
	return useQuery({
		queryKey: ["members"],
		queryFn: () => getMembers(1, 10),
	});
}
