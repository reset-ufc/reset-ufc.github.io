import { api } from "../lib/axios";

export interface User {
	id: string;
	email: string;
	createdAt: string | null;
	updatedAt: string | null;
}

export interface UsersResponse {
	data: User[];
	meta: {
		total: number;
		page: number;
		limit: number;
		totalPages: number;
	};
}

export async function getUsers(page: number = 1, limit: number = 10) {
	const response = await api.get<UsersResponse>("/users", {
		params: {
			page,
			limit,
		},
	});

	return response.data;
}

export async function getUserById(id: string): Promise<User> {
	const response = await api.get<User>(`/users/${id}`);
	return response.data;
}
