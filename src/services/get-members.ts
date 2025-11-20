import { api } from "../lib/axios";

export interface Member {
	id: string;
	name: string;
	lastName?: string;
	role: string;
	github: string;
	email: string;
	img: string;
	imgurDeleteHash?: string;
	description: string;
	contact: {
		email?: string;
		github?: string;
		phone?: string;
		lattes?: string;
		[key: string]: string | undefined; // Permite campos personalizados
	};
	researchKeywords: string[];
	publishedPapers: string[];
	projectIds: string[];
	memberType?: "PROFESSOR" | "STUDENT" | "COLLABORATOR";
	isCoordinator?: boolean; // Mantido para compatibilidade com dados antigos
	isViceCoordinator?: boolean; // Mantido para compatibilidade com dados antigos
	coordinatorType?: "NONE" | "COORDINATOR" | "VICE_COORDINATOR";
	createdAt?: string;
	updatedAt?: string;
}

export interface MembersResponse {
	data: Member[];
	total: number;
	page: number;
	limit: number;
	totalPages: number;
}

export async function getMembers(page: number = 1, limit: number = 10) {
	const response = await api.get<MembersResponse>("/members", {
		params: {
			page,
			limit,
		},
	});

	// Retornar a resposta como está (a API já retorna no formato correto)
	return response.data;
}
