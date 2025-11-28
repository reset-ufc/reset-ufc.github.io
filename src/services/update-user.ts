import { api } from "../lib/axios";

export type UpdateUserRequest = {
	email?: string;
	password?: string;
};

export async function updateUser(id: string, payload: UpdateUserRequest) {
	const response = await api.patch(`/users/${id}`, payload);
	return response.data;
}
