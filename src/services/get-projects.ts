import { api } from "../lib/axios";

export interface ProjectMember {
	id: string;
	name: string;
	lastName: string;
	role: string;
	email: string;
}

export interface ProjectCoordinator {
	id: string;
	name: string;
	lastName: string;
	role: string;
	email: string;
	github?: string;
}

export interface Project {
	id: string;
	title: string;
	description: string;
	link: string;
	slug: string;
	img: string | null;
	coordinatorId: string | null;
	coordinator: ProjectCoordinator | null;
	keywords: string[];
	funder: string | null;
	periodStart: string | null;
	periodEnd: string | null;
	isFeatured: boolean;
	memberIds: string[];
	members: ProjectMember[];
	createdAt: string;
	updatedAt: string;
}

export interface ProjectsResponse {
	data: Project[];
	total: number;
	page: number;
	limit: number;
	totalPages: number;
}

export async function getProjects(page: number = 1, limit: number = 10) {
	const response = await api.get<ProjectsResponse>("/projects", {
		params: {
			page,
			limit,
		},
	});

	return response.data;
}

export async function getProjectById(id: string): Promise<Project> {
	const response = await api.get<Project>(`/projects/${id}`);
	return response.data;
}

export async function getFeaturedProjects(page: number = 1, limit: number = 10) {
	const response = await api.get<ProjectsResponse>("/projects/featured", {
		params: {
			page,
			limit,
		},
	});

	return response.data;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
	try {
		// Buscar uma quantidade grande de projetos para encontrar o slug
		const response = await api.get<ProjectsResponse>("/projects", {
			params: {
				page: 1,
				limit: 1000, // Buscar muitos projetos para encontrar o slug
			},
		});

		const project = response.data.data.find((p) => p.slug === slug);
		return project || null;
	} catch (error) {
		console.error("Erro ao buscar projeto por slug:", error);
		return null;
	}
}

