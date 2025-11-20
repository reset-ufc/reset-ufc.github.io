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
		latter?: string;
	};
	researchKeywords: string[];
	publishedPapers: string[];
	projectIds: string[];
	memberType?: "PROFESSOR" | "STUDENT" | "COLLABORATOR";
	isCoordinator?: boolean;
	isViceCoordinator?: boolean;
	coordinatorType?: "NONE" | "COORDINATOR" | "VICE_COORDINATOR";
}

export interface MembersResponse {
	data: Member[];
	totalPages: number;
}

export async function getMembers(
	page: number,
	limit: number,
	search: string,
	memberType: string,
) {
	const response = await api.get<Member[] | MembersResponse>("/members", {
		params: {
			page,
			limit,
			search,
			memberType,
		},
	});

	console.log("resposta.data", response.data);

	// Se a resposta for um array diretamente, normalizar para o formato esperado
	if (Array.isArray(response.data)) {
		return {
			data: response.data,
			totalPages: 1, // Se não houver paginação na resposta, assumir 1 página
		};
	}

	// Caso contrário, retornar a resposta como está
	return response.data as MembersResponse;
}
