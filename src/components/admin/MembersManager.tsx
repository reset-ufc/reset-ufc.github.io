import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createMember } from "../../services/create-member";
import { deleteMember } from "../../services/delete-member";
import { getMembers, type Member } from "../../services/get-members";
import {
	updateMember,
	type updateMembersRequest,
} from "../../services/update-member";
import FormInput from "../ui/formInput";
import FormSelect from "../ui/formSelect";
import FormTextArea from "../ui/formTextArea";
import TagList from "../ui/tagList";

const ROLE_OPTIONS = [
	{ value: "graduando", label: "Graduando" },
	{ value: "graduado", label: "Graduado" },
	{ value: "mestrando", label: "Mestrando" },
	{ value: "mestre", label: "Mestre" },
	{ value: "doutorando", label: "Doutorando" },
	{ value: "doutor", label: "Doutor" },
	{ value: "alumni", label: "Alumni" },
	{ value: "professor", label: "Professor" },
];

const MEMBER_TYPE_OPTIONS = [
	{ value: "PROFESSOR", label: "Professor" },
	{ value: "STUDENT", label: "Aluno" },
	{ value: "COLLABORATOR", label: "Colaborador" },
];

// Schema Zod para validação
const memberSchema = z.object({
	name: z.string().min(1, "Nome é obrigatório"),
	lastName: z.string().optional(),
	role: z.string().min(1, "Cargo é obrigatório"),
	github: z.string().min(1, "GitHub é obrigatório"),
	email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
	img: z
		.string()
		.refine((val) => val === "" || z.string().url().safeParse(val).success, {
			message: "URL inválida",
		}),
	description: z.string().min(1, "Descrição é obrigatória"),
	contact: z.object({
		lattes: z
			.string()
			.refine((val) => val === "" || z.string().url().safeParse(val).success, {
				message: "URL do Lattes inválida",
			}),
	}),
	researchKeywords: z.array(z.string()),
	publishedPapers: z.array(z.string()),
	projectIds: z.array(z.string()),
	memberType: z.enum(["PROFESSOR", "STUDENT", "COLLABORATOR"]),
	coordinatorType: z.enum(["none", "coordinator", "vice-coordinator"]),
});

type MemberFormData = z.infer<typeof memberSchema>;

export default function MembersManager() {
	const queryClient = useQueryClient();
	const [searchTerm, setSearchTerm] = useState("");
	const [memberTypeFilter, setMemberTypeFilter] = useState("all");
	const [currentPage, setCurrentPage] = useState(1);
	const [limit] = useState(10);
	const [editingMember, setEditingMember] = useState<Member | null>(null);

	// Resetar página quando filtros mudarem
	useEffect(() => {
		setCurrentPage(1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Buscar membros com useQuery
	const { data: membersData, isLoading } = useQuery({
		queryKey: ["members", currentPage, limit],
		queryFn: () => getMembers(currentPage, limit),
	});

	// Aplicar filtros localmente nos dados retornados
	const filteredMembers = useMemo(() => {
		if (!membersData?.data) return [];
		
		let filtered = membersData.data;

		// Filtrar por tipo de membro
		if (memberTypeFilter !== "all") {
			filtered = filtered.filter(
				(member) => member.memberType === memberTypeFilter
			);
		}

		// Filtrar por termo de busca
		if (searchTerm) {
			const searchLower = searchTerm.toLowerCase();
			filtered = filtered.filter(
				(member) =>
					member.name.toLowerCase().includes(searchLower) ||
					member.lastName?.toLowerCase().includes(searchLower) ||
					member.email.toLowerCase().includes(searchLower) ||
					member.role.toLowerCase().includes(searchLower)
			);
		}

		return filtered;
	}, [membersData?.data, memberTypeFilter, searchTerm]);

	console.log(membersData);

	// Extrair dados da resposta normalizada

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
		watch,
	} = useForm<MemberFormData>({
		resolver: zodResolver(memberSchema),
		defaultValues: {
			name: "",
			lastName: "",
			role: "",
			github: "",
			email: "",
			img: "",
			description: "",
			contact: {
				lattes: "",
			},
			researchKeywords: [],
			publishedPapers: [],
			projectIds: [],
			memberType: "STUDENT",
			coordinatorType: "none",
		},
	});

	const watchedResearchKeywords = watch("researchKeywords");
	const watchedPublishedPapers = watch("publishedPapers");
	const watchedCoordinatorType = watch("coordinatorType");

	// Mutation para criar membro
	const { mutateAsync: createMemberMutation, isPending: isCreatingMember } =
		useMutation({
			mutationFn: createMember,
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: ["members"] });
				resetForm();
			},
			onError: (error) => {
				console.error("Erro ao criar membro:", error);
			},
		});

	// Mutation para atualizar membro
	const { mutateAsync: updateMemberMutation, isPending: isUpdatingMember } =
		useMutation({
			mutationFn: ({
				id,
				payload,
			}: {
				id: string;
				payload: updateMembersRequest;
			}) => updateMember(id, payload),
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: ["members"] });
				resetForm();
			},
			onError: (error) => {
				console.error("Erro ao atualizar membro:", error);
			},
		});

	// Mutation para deletar membro
	const { mutateAsync: deleteMemberMutation } = useMutation({
		mutationFn: deleteMember,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["members"] });
		},
		onError: (error) => {
			console.error("Erro ao excluir membro:", error);
		},
	});

	const resetForm = () => {
		reset({
			name: "",
			lastName: "",
			role: "",
			github: "",
			email: "",
			img: "",
			description: "",
			contact: {
				lattes: "",
			},
			researchKeywords: [],
			publishedPapers: [],
			projectIds: [],
			memberType: "STUDENT",
			coordinatorType: "none",
		});
		setEditingMember(null);
	};

	// const handleNextPage = () => {
	// 	if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
	// };

	// const handlePreviousPage = () => {
	// 	if (currentPage > 1) setCurrentPage((prev) => prev - 1);
	// };

	const onSubmit = async (data: MemberFormData) => {
		// Converter coordinatorType para o formato esperado pelo backend
		const coordinatorTypeMap: Record<
			"none" | "coordinator" | "vice-coordinator",
			"NONE" | "COORDINATOR" | "VICE_COORDINATOR"
		> = {
			none: "NONE",
			coordinator: "COORDINATOR",
			"vice-coordinator": "VICE_COORDINATOR",
		};

		const payload: updateMembersRequest = {
			name: data.name,
			lastName: data.lastName || undefined,
			role: data.role,
			github: data.github,
			email: data.email,
			img: data.img || "",
			description: data.description,
			contact: JSON.stringify({
				email: data.email,
				github: data.github,
				lattes: data.contact.lattes || "",
			}),
			researchKeywords: JSON.stringify(data.researchKeywords),
			publishedPapers: JSON.stringify(data.publishedPapers),
			projectIds: JSON.stringify(data.projectIds),
			memberType: data.memberType,
			coordinatorType: coordinatorTypeMap[data.coordinatorType] || "NONE",
		};

		if (editingMember) {
			updateMemberMutation({ id: editingMember.id, payload });
		} else {
			createMemberMutation(payload);
		}
	};

	const handleEdit = (member: Member) => {
		setEditingMember(member);
		const coordinatorType = convertBackendCoordinatorType(member);
		reset({
			name: member.name,
			lastName: member.lastName || "",
			role: member.role,
			github: member.contact.github || member.github,
			email: member.contact.email || member.email,
			img: member.img || "",
			description: member.description,
			contact: {
				lattes: member.contact?.lattes || "",
			},
			researchKeywords: member.researchKeywords,
			publishedPapers: member.publishedPapers,
			projectIds: member.projectIds,
			memberType: member.memberType || "STUDENT",
			coordinatorType,
		});
	};

	// Função auxiliar para converter o coordinatorType do backend
	const convertBackendCoordinatorType = (
		member: Member,
	): "none" | "coordinator" | "vice-coordinator" => {
		// Se o backend já tem o novo campo coordinatorType
		if ("coordinatorType" in member && member.coordinatorType) {
			switch (member.coordinatorType) {
				case "COORDINATOR":
					return "coordinator";
				case "VICE_COORDINATOR":
					return "vice-coordinator";
				default:
					return "none";
			}
		}

		// Fallback para campos antigos
		if (member.isCoordinator) {
			return "coordinator";
		}
		if (member.isViceCoordinator) {
			return "vice-coordinator";
		}

		return "none";
	};

	const handleDelete = (id: string) => {
		if (window.confirm("Tem certeza que deseja excluir este membro?")) {
			deleteMemberMutation(id);
		}
	};

	return (
		<div className="p-6">
			<h2 className="text-2xl font-bold mb-6">Gerenciar Membros</h2>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mb-8 bg-white p-6 rounded-lg shadow"
			>
				<h3 className="text-lg font-semibold mb-4">
					{editingMember ? "Editar Membro" : "Adicionar Novo Membro"}
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<FormInput
							label="Nome"
							value={watch("name")}
							onChange={(value) => setValue("name", value)}
							required
						/>
						{errors.name && (
							<p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
						)}
					</div>
					<div>
						<FormInput
							label="Sobrenome"
							value={watch("lastName") || ""}
							onChange={(value) => setValue("lastName", value)}
						/>
						{errors.lastName && (
							<p className="mt-1 text-sm text-red-600">
								{errors.lastName.message}
							</p>
						)}
					</div>
					<div>
						<FormSelect
							label="Cargo"
							value={watch("role")}
							onChange={(value) => setValue("role", value)}
							options={ROLE_OPTIONS}
							required
						/>
						{errors.role && (
							<p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
						)}
					</div>
					<div>
						<FormSelect
							label="Tipo de Membro"
							value={watch("memberType")}
							onChange={(value) =>
								setValue(
									"memberType",
									value as "PROFESSOR" | "STUDENT" | "COLLABORATOR",
								)
							}
							options={MEMBER_TYPE_OPTIONS}
							required
						/>
						{errors.memberType && (
							<p className="mt-1 text-sm text-red-600">
								{errors.memberType.message}
							</p>
						)}
					</div>

					{/* Seção de Liderança */}
					<div className="md:col-span-2">
						<div className="bg-gray-50 p-4 rounded-lg">
							<h4 className="text-md font-semibold text-gray-800 mb-3">
								Posições de Liderança
							</h4>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div className="flex items-center p-3 bg-white rounded-md border border-gray-200">
									<input
										{...register("coordinatorType")}
										type="radio"
										id="none"
										value="none"
										checked={watchedCoordinatorType === "none"}
										onChange={(e) =>
											setValue(
												"coordinatorType",
												e.target.value as
													| "none"
													| "coordinator"
													| "vice-coordinator",
											)
										}
										className="h-4 w-4 checked:bg-indigo-600 border-gray-300 rounded"
									/>
									<label
										htmlFor="none"
										className="ml-3 block text-sm font-medium text-gray-700"
									>
										<span className="block">Nenhum</span>
										<span className="text-xs text-gray-500">
											Sem posição de liderança
										</span>
									</label>
								</div>

								<div className="flex items-center p-3 bg-white rounded-md border border-gray-200">
									<input
										{...register("coordinatorType")}
										type="radio"
										id="coordinator"
										value="coordinator"
										checked={watchedCoordinatorType === "coordinator"}
										onChange={(e) =>
											setValue(
												"coordinatorType",
												e.target.value as
													| "none"
													| "coordinator"
													| "vice-coordinator",
											)
										}
										className="h-4 w-4 checked:bg-indigo-600 border-gray-300 rounded"
									/>
									<label
										htmlFor="coordinator"
										className="ml-3 block text-sm font-medium text-gray-700"
									>
										<span className="block">Coordenador</span>
										<span className="text-xs text-gray-500">
											Coordenador do laboratório
										</span>
									</label>
								</div>

								<div className="flex items-center p-3 bg-white rounded-md border border-gray-200">
									<input
										{...register("coordinatorType")}
										type="radio"
										id="vice-coordinator"
										value="vice-coordinator"
										checked={watchedCoordinatorType === "vice-coordinator"}
										onChange={(e) =>
											setValue(
												"coordinatorType",
												e.target.value as
													| "none"
													| "coordinator"
													| "vice-coordinator",
											)
										}
										className="h-4 w-4 checked:bg-indigo-600 border-gray-300 rounded"
									/>
									<label
										htmlFor="vice-coordinator"
										className="ml-3 block text-sm font-medium text-gray-700"
									>
										<span className="block">Vice-Coordenador</span>
										<span className="text-xs text-gray-500">
											Vice-coordenador do laboratório
										</span>
									</label>
								</div>
							</div>
							{errors.coordinatorType && (
								<p className="mt-2 text-sm text-red-600">
									{errors.coordinatorType.message}
								</p>
							)}
						</div>
					</div>

					<div>
						<FormInput
							label="GitHub"
							value={watch("github")}
							onChange={(value) => setValue("github", value)}
							required
						/>
						{errors.github && (
							<p className="mt-1 text-sm text-red-600">
								{errors.github.message}
							</p>
						)}
					</div>
					<div>
						<FormInput
							label="Email"
							type="email"
							value={watch("email")}
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
							label="URL da Imagem"
							value={watch("img") || ""}
							onChange={(value) => setValue("img", value)}
							placeholder="https://exemplo.com/imagem.jpg"
						/>
						{errors.img && (
							<p className="mt-1 text-sm text-red-600">{errors.img.message}</p>
						)}
					</div>

					<div className="md:col-span-2">
						<FormTextArea
							label="Descrição"
							value={watch("description")}
							onChange={(value) => setValue("description", value)}
							required
						/>
						{errors.description && (
							<p className="mt-1 text-sm text-red-600">
								{errors.description.message}
							</p>
						)}
					</div>

					<div>
						<FormInput
							label="Lattes"
							value={watch("contact.lattes") || ""}
							onChange={(value) => setValue("contact.lattes", value)}
							placeholder="URL do Lattes"
						/>
						{errors.contact?.lattes && (
							<p className="mt-1 text-sm text-red-600">
								{errors.contact.lattes.message}
							</p>
						)}
					</div>

					<TagList
						title="Palavras-chave de Pesquisa"
						items={watchedResearchKeywords}
						onAdd={(keyword) =>
							setValue("researchKeywords", [
								...watchedResearchKeywords,
								keyword,
							])
						}
						onRemove={(index) =>
							setValue(
								"researchKeywords",
								watchedResearchKeywords.filter((_, i) => i !== index),
							)
						}
						placeholder="Adicionar palavra-chave"
					/>

					<TagList
						title="Artigos Publicados"
						items={watchedPublishedPapers}
						onAdd={(paper) =>
							setValue("publishedPapers", [...watchedPublishedPapers, paper])
						}
						onRemove={(index) =>
							setValue(
								"publishedPapers",
								watchedPublishedPapers.filter((_, i) => i !== index),
							)
						}
						placeholder="Adicionar artigo"
					/>
				</div>
				<div className="mt-4">
					<button
						type="submit"
						disabled={isCreatingMember || isUpdatingMember}
						className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isCreatingMember || isUpdatingMember
							? "Salvando..."
							: editingMember
								? "Atualizar Membro"
								: "Adicionar Membro"}
					</button>
					{editingMember && (
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
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<FormInput
						label="Pesquisar membros"
						value={searchTerm}
						onChange={setSearchTerm}
						placeholder="Digite nome, email ou cargo..."
					/>
					<FormSelect
						label="Filtrar por tipo"
						value={memberTypeFilter}
						onChange={setMemberTypeFilter}
						options={[
							{ value: "all", label: "Todos os tipos" },
							...MEMBER_TYPE_OPTIONS,
						]}
					/>
				</div>
			</div>

			{/* Tabela de Membros */}
			<div
				className={`bg-white shadow rounded-lg transition-all duration-300 ${isLoading ? "opacity-50 blur-sm" : ""}`}
			>
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Nome
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Cargo
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Tipo
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Email
							</th>
							<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
								Ações
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{filteredMembers && filteredMembers.length > 0 ? (
							filteredMembers.map((member) => (
								<tr key={member.id}>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<div className="h-10 w-10 flex-shrink-0">
												<img
													className="h-10 w-10 rounded-full object-cover"
													src={
														member.img || "https://i.imgur.com/placeholder.jpg"
													}
													alt={member.name}
													onError={(e) => {
														const target = e.target as HTMLImageElement;
														target.src = "https://i.imgur.com/placeholder.jpg";
													}}
												/>
											</div>
											<div className="ml-4">
												<div className="text-sm font-medium text-gray-900">
													{member.name} {member.lastName || ""}
												</div>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm text-gray-900">{member.role}</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<span
											className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
												member.memberType === "PROFESSOR"
													? "bg-blue-100 text-blue-800"
													: member.memberType === "STUDENT"
														? "bg-green-100 text-green-800"
														: "bg-purple-100 text-purple-800"
											}`}
										>
											{member.memberType === "PROFESSOR"
												? "Professor"
												: member.memberType === "STUDENT"
													? "Aluno"
													: "Colaborador"}
										</span>
									</td>

									<td className="px-6 py-4 whitespace-nowrap">
										<a
											href={`mailto:${member.contact?.email || member.email}`}
											className="text-sm text-gray-900 hover:text-indigo-600"
										>
											{member.contact?.email || member.email}
										</a>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
										<button
											type="button"
											onClick={() => handleEdit(member)}
											className="text-indigo-600 hover:text-indigo-900 mr-4"
										>
											Editar
										</button>
										<button
											type="button"
											onClick={() => handleDelete(member.id)}
											className="text-red-600 hover:text-red-900"
										>
											Excluir
										</button>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan={6} className="px-6 py-4 text-center text-gray-500">
									{isLoading ? "Carregando..." : "Nenhum membro encontrado"}
								</td>
							</tr>
						)}
					</tbody>
				</table>
				{/* 
				{totalPages > 1 && (
					<div className="flex justify-center items-center py-4 space-x-4 border-t border-gray-200">
						<button
							type="button"
							onClick={handlePreviousPage}
							disabled={currentPage === 1}
							className={`px-4 py-2 text-white rounded-md ${
								currentPage === 1
									? "bg-gray-300 opacity-50 cursor-not-allowed"
									: "bg-indigo-600 hover:bg-indigo-700"
							}`}
						>
							Anterior
						</button>
						<span className="text-gray-700">
							Página {currentPage} de {totalPages}
						</span>
						<button
							type="button"
							onClick={handleNextPage}
							disabled={currentPage === totalPages}
							className={`px-4 py-2 text-white rounded-md ${
								currentPage === totalPages
									? "bg-gray-300 opacity-50 cursor-not-allowed"
									: "bg-indigo-600 hover:bg-indigo-700"
							}`}
						>
							Próxima
						</button>
					</div>
				)} */}
			</div>
		</div>
	);
}
