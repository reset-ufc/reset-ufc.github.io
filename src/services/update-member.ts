import { api } from "../lib/axios";

export type updateMembersRequest = {
	name: string;
	lastName?: string;
	role: string;
	github: string;
	email: string;
	img: string;
	description: string;
	contact: string;
	researchKeywords: string;
	publishedPapers: string;
	projectIds: string;
	memberType: "PROFESSOR" | "STUDENT" | "COLLABORATOR";
	coordinatorType: "NONE" | "COORDINATOR" | "VICE_COORDINATOR";
};

export async function updateMember(id: string, payload: updateMembersRequest) {
	const response = await api.patch(`/members/${id}`, payload);
	return response.data;
}
