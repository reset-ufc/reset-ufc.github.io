import { api } from "../lib/axios";

export async function deleteMember(id: string) {
	const response = await api.delete(`/members/${id}`);
	return response.data;
}
