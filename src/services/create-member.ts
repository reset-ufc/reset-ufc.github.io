import { api } from "../lib/axios";

type createMembersRequest = {
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

export async function createMember(payload: createMembersRequest) {
	const response = await api.post("/members", payload);
	return response.data;
}
