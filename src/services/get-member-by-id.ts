import { api } from "../lib/axios";
import { type Member } from "./get-members";

export async function getMemberById(id: string): Promise<Member> {
	const response = await api.get<Member>(`/members/${id}`);
	return response.data;
}

