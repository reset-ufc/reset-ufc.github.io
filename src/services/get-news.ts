import { api } from "../lib/axios";

export interface NewsUser {
	id: string;
	email: string;
}

export interface News {
	id: string;
	title: string;
	content: string;
	img: string | null;
	keywords: string[];
	publishedDate: string | null;
	isFeatured: boolean;
	userId: string;
	user: NewsUser;
	createdAt: string;
	updatedAt: string;
}

export interface NewsResponse {
	data: News[];
	total: number;
	page: number;
	limit: number;
	totalPages: number;
}

export async function getNews(page: number = 1, limit: number = 10) {
	const response = await api.get<NewsResponse>("/news", {
		params: {
			page,
			limit,
		},
	});

	return response.data;
}

export async function getNewsById(id: string): Promise<News> {
	const response = await api.get<News>(`/news/${id}`);
	return response.data;
}

export async function getFeaturedNews(page: number = 1, limit: number = 10) {
	const response = await api.get<NewsResponse>("/news/featured", {
		params: {
			page,
			limit,
		},
	});

	return response.data;
}

