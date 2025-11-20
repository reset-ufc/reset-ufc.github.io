import { api } from "../lib/axios";

// Tipos que permitem tanto objetos/arrays quanto strings JSON
type ContactObject = {
	email?: string;
	github?: string;
	lattes?: string;
	phone?: string;
	[key: string]: string | undefined;
};

// Todos os campos são opcionais para atualização parcial
export type updateMembersRequest = {
	name?: string;
	lastName?: string;
	role?: string;
	github?: string;
	email?: string;
	img?: string;
	description?: string;
	contact?: ContactObject | string; // Pode ser objeto ou string JSON
	researchKeywords?: string[] | string; // Pode ser array ou string JSON
	publishedPapers?: string[] | string; // Pode ser array ou string JSON
	projectIds?: string[] | string; // Pode ser array ou string JSON
	memberType?: "PROFESSOR" | "STUDENT" | "COLLABORATOR";
	coordinatorType?: "NONE" | "COORDINATOR" | "VICE_COORDINATOR";
};

export async function updateMember(id: string, payload: updateMembersRequest) {
	const response = await api.patch(`/members/${id}`, payload);
	return response.data;
}
