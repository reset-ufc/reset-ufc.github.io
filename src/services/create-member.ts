import { api } from "../lib/axios";

// Tipos que permitem tanto objetos/arrays quanto strings JSON
type ContactObject = {
	email: string;
	github: string;
	lattes?: string;
	phone?: string;
	[key: string]: string | undefined;
};

export type createMembersRequest = {
	name: string;
	lastName?: string;
	role: string;
	github: string;
	email: string;
	img?: string;
	description: string;
	contact: ContactObject | string; // Pode ser objeto ou string JSON
	researchKeywords: string[] | string; // Pode ser array ou string JSON
	publishedPapers: string[] | string; // Pode ser array ou string JSON
	projectIds?: string[] | string; // Pode ser array ou string JSON (opcional)
	memberType?: "PROFESSOR" | "STUDENT" | "COLLABORATOR"; // Opcional, padrão: STUDENT
	coordinatorType?: "NONE" | "COORDINATOR" | "VICE_COORDINATOR"; // Opcional, padrão: NONE
};

export async function createMember(payload: createMembersRequest) {
	const response = await api.post("/members", payload);
	return response.data;
}
