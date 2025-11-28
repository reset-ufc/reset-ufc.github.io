import { api } from "../lib/axios";

export async function deleteUser(id: string) {
	const response = await api.delete(`/users/${id}`);
	return response.data;
}
