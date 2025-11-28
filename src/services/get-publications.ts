import { api } from "../lib/axios";

export interface Publication {
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

export interface PublicationsResponse {
	data: Publication[];
	total: number;
	page: number;
	limit: number;
	totalPages: number;
}

export async function getPublications(page: number = 1, limit: number = 10) {
	const response = await api.get<PublicationsResponse>("/publications", {
		params: {
			page,
			limit,
		},
	});

	return response.data;
}

export async function getPublicationById(id: string): Promise<Publication> {
	const response = await api.get<Publication>(`/publications/${id}`);
	return response.data;
}

export async function getFeaturedPublications(
	page: number = 1,
	limit: number = 10,
) {
	const response = await api.get<PublicationsResponse>(
		"/publications/featured",
		{
			params: {
				page,
				limit,
			},
		},
	);

	return response.data;
}

export async function searchPublications(
	query: string,
	page: number = 1,
	limit: number = 10,
) {
	const response = await api.get<PublicationsResponse>(
		"/publications/search",
		{
			params: {
				query,
				page,
				limit,
			},
		},
	);

	return response.data;
}

export async function filterPublicationsByYear(
	year: number,
	page: number = 1,
	limit: number = 10,
) {
	const response = await api.get<PublicationsResponse>(
		"/publications/filter-by-year",
		{
			params: {
				year,
				page,
				limit,
			},
		},
	);

	return response.data;
}

export async function filterPublicationsByKeywords(
	keywords: string,
	page: number = 1,
	limit: number = 10,
) {
	const response = await api.get<PublicationsResponse>(
		"/publications/filter-by-keywords",
		{
			params: {
				keywords,
				page,
				limit,
			},
		},
	);

	return response.data;
}

export async function filterPublicationsByCategory(
	category: string,
	page: number = 1,
	limit: number = 10,
) {
	const response = await api.get<PublicationsResponse>(
		"/publications/filter-by-category",
		{
			params: {
				category,
				page,
				limit,
			},
		},
	);

	return response.data;
}



