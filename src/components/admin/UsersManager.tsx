import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { type CreateUserRequest, createUser } from "../../services/create-user";
import { deleteUser } from "../../services/delete-user";
import { getUsers, type User } from "../../services/get-users";
import { type UpdateUserRequest, updateUser } from "../../services/update-user";
import FormInput from "../ui/formInput";

// Schema Zod para validação
const userSchema = z.object({
	email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
	password: z
		.string()
		.min(6, "Senha deve ter no mínimo 6 caracteres")
		.optional(),
});

type UserFormData = z.infer<typeof userSchema>;

export default function UsersManager() {
	const queryClient = useQueryClient();
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [limit] = useState(10);
	const [editingUser, setEditingUser] = useState<User | null>(null);

	// Resetar página quando filtros mudarem
	useEffect(() => {
		setCurrentPage(1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Buscar usuários com useQuery
	const { data: usersData, isLoading } = useQuery({
		queryKey: ["users", currentPage, limit],
		queryFn: () => getUsers(currentPage, limit),
	});

	console.log("Users", usersData);

	// Aplicar filtros localmente nos dados retornados
	const filteredUsers = useMemo(() => {
		if (!usersData?.data) return [];

		let filtered = usersData.data;

		// Filtrar por termo de busca
		if (searchTerm) {
			const searchLower = searchTerm.toLowerCase();
			filtered = filtered.filter((user) =>
				user.email.toLowerCase().includes(searchLower),
			);
		}

		return filtered;
	}, [usersData?.data, searchTerm]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
		watch,
	} = useForm<UserFormData>({
		resolver: zodResolver(userSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const watchedEmail = watch("email");

	// Mutation para criar usuário
	const { mutateAsync: createUserMutation, isPending: isCreatingUser } =
		useMutation({
			mutationFn: createUser,
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: ["users"] });
				resetForm();
			},
			onError: (error) => {
				console.error("Erro ao criar usuário:", error);
			},
		});

	// Mutation para atualizar usuário
	const { mutateAsync: updateUserMutation, isPending: isUpdatingUser } =
		useMutation({
			mutationFn: ({
				id,
				payload,
			}: {
				id: string;
				payload: UpdateUserRequest;
			}) => updateUser(id, payload),
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: ["users"] });
				resetForm();
			},
			onError: (error) => {
				console.error("Erro ao atualizar usuário:", error);
			},
		});

	// Mutation para deletar usuário
	const { mutateAsync: deleteUserMutation } = useMutation({
		mutationFn: deleteUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
		},
		onError: (error) => {
			console.error("Erro ao excluir usuário:", error);
		},
	});

	const resetForm = () => {
		reset({
			email: "",
			password: "",
		});
		setEditingUser(null);
	};

	const onSubmit = async (data: UserFormData) => {
		if (editingUser) {
			const payload: UpdateUserRequest = {
				email: data.email,
			};
			// Só incluir senha se foi preenchida
			if (data.password && data.password.length > 0) {
				payload.password = data.password;
			}
			updateUserMutation({ id: editingUser.id, payload });
		} else {
			const payload: CreateUserRequest = {
				email: data.email,
				password: data.password || "",
			};
			createUserMutation(payload);
		}
	};

	const handleEdit = (user: User) => {
		setEditingUser(user);
		reset({
			email: user.email,
			password: "",
		});
	};

	const handleDelete = (id: string) => {
		if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
			deleteUserMutation(id);
		}
	};

	// Função auxiliar para formatar datas de forma segura
	const formatDate = (dateString: string | undefined | null): string => {
		if (!dateString) return "-";
		try {
			const date = new Date(dateString);
			if (Number.isNaN(date.getTime())) return "-";
			return date.toLocaleDateString("pt-BR", {
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
				hour: "2-digit",
				minute: "2-digit",
			});
		} catch {
			return "-";
		}
	};

	return (
		<div className="p-6">
			<h2 className="text-2xl font-bold mb-6">Gerenciar Administradores</h2>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mb-8 bg-white p-6 rounded-lg shadow"
			>
				<h3 className="text-lg font-semibold mb-4">
					{editingUser
						? "Editar Administrador"
						: "Adicionar Novo Administrador"}
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<FormInput
							label="Email"
							type="email"
							value={watchedEmail}
							onChange={(value) => setValue("email", value)}
							required
						/>
						{errors.email && (
							<p className="mt-1 text-sm text-red-600">
								{errors.email.message}
							</p>
						)}
					</div>
					<div>
						<FormInput
							label={
								editingUser
									? "Nova Senha (deixe em branco para manter)"
									: "Senha"
							}
							type="password"
							value={watch("password") || ""}
							onChange={(value) => setValue("password", value)}
							required={!editingUser}
						/>
						{errors.password && (
							<p className="mt-1 text-sm text-red-600">
								{errors.password.message}
							</p>
						)}
					</div>
				</div>
				<div className="mt-4 flex justify-end">
					<button
						type="submit"
						disabled={isCreatingUser || isUpdatingUser}
						className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isCreatingUser || isUpdatingUser
							? "Salvando..."
							: editingUser
								? "Atualizar Administrador"
								: "Criar Administrador"}
					</button>
					{editingUser && (
						<button
							type="button"
							onClick={resetForm}
							className="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Cancelar
						</button>
					)}
				</div>
			</form>

			{/* Filtros e Pesquisa */}
			<div className="mb-6 bg-white p-4 rounded-lg shadow">
				<FormInput
					label="Pesquisar usuários"
					value={searchTerm}
					onChange={setSearchTerm}
					placeholder="Digite o email..."
				/>
			</div>

			{/* Tabela de Usuários */}
			<div
				className={`bg-white shadow rounded-lg transition-all duration-300 ${isLoading ? "opacity-50 blur-sm" : ""}`}
			>
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Email
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Criado em
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Atualizado em
							</th>
							<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
								Ações
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{filteredUsers && filteredUsers.length > 0 ? (
							filteredUsers.map((user) => (
								<tr key={user.id}>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm font-medium text-gray-900">
											{user.email}
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm text-gray-900">
											{formatDate(user.createdAt)}
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm text-gray-900">
											{formatDate(user.updatedAt)}
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
										<button
											type="button"
											onClick={() => handleEdit(user)}
											className="text-indigo-600 hover:text-indigo-900 mr-4"
										>
											Editar
										</button>
										<button
											type="button"
											onClick={() => handleDelete(user.id)}
											className="text-red-600 hover:text-red-900"
										>
											Excluir
										</button>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan={4} className="px-6 py-4 text-center text-gray-500">
									{isLoading ? "Carregando..." : "Nenhum usuário encontrado"}
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
