import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axios";
import { type Member as ApiMember, getMembers } from "../services/get-members";

// Tipos baseados na documentação da API
interface Publication {
	id: string;
	title: string;
	description: string;
	category: string;
	journalName: string;
	year: number;
	authors: string[];
	keywords: string[];
	url: string;
	isFeatured: boolean;
	createdAt: string;
	updatedAt: string;
}

interface News {
	id: string;
	title: string;
	content: string;
	img: string;
	keywords: string[];
	publishedDate: string;
	isFeatured: boolean;
	createdAt: string;
	updatedAt: string;
	userId: string;
}

interface Project {
	id: string;
	title: string;
	description: string;
	link: string;
	img: string;
	slug: string;
	coordinatorId: string;
	coordinator?: {
		id: string;
		name: string;
		lastName: string;
	};
	keywords: string[];
	funder: string;
	periodStart: string;
	periodEnd: string;
	isFeatured: boolean;
	createdAt: string;
	updatedAt: string;
	memberIds: string[];
	members?: Array<{
		id: string;
		name: string;
		lastName: string;
		role: string;
	}>;
}

interface PaginatedResponse<T> {
	data: T[];
	total: number;
	page: number;
	limit: number;
	totalPages: number;
}

// Re-exportar o tipo Member da API para uso no hook
export type Member = ApiMember;

// Hook para publicações em destaque
export function useFeaturedPublications(limit: number = 6) {
	return useQuery<PaginatedResponse<Publication>>({
		queryKey: ["featured-publications", limit],
		queryFn: async () => {
			const response = await api.get(
				`/publications/featured?page=1&limit=${limit}`,
			);
			return response.data;
		},
	});
}

export function useFeaturedNews(limit: number = 5) {
	return useQuery<PaginatedResponse<News>>({
		queryKey: ["featured-news", limit],
		queryFn: async () => {
			const response = await api.get(`/news/featured?page=1&limit=${limit}`);
			return response.data;
		},
	});
}

// Hook para projetos em destaque
export function useFeaturedProjects(limit: number = 6) {
	return useQuery<PaginatedResponse<Project>>({
		queryKey: ["featured-projects", limit],
		queryFn: async () => {
			const response = await api.get(
				`/projects/featured?page=1&limit=${limit}`,
			);
			return response.data;
		},
	});
}

// Hook para buscar todos os membros
export function useMembers() {
	return useQuery({
		queryKey: ["members"],
		queryFn: () => getMembers(1, 10),
	});
}
