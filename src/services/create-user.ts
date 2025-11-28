import { api } from "../lib/axios";

export type CreateUserRequest = {
	email: string;
	password: string;
};

export async function createUser(payload: CreateUserRequest) {
	const response = await api.post("/users", payload);
	return response.data;
}
