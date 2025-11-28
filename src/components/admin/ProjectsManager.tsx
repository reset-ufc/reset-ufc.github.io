/** biome-ignore-all lint/a11y/noLabelWithoutControl: <explanation> */
/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */

import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import FormInput from "../ui/formInput";
import FormTextArea from "../ui/formTextArea";

interface Project {
	id: string;
	title: string | null;
	description: string | null;
	link: string | null;
	img: string | null;
	slug: string | null;
	coordinatorId: string | null;
	coordinator?: Member;
	keywords: string[];
	funder: string | null;
	periodStart: string | null;
	periodEnd: string | null;
	memberIds: string[];
	isFeatured?: boolean;
	createdAt: string;
	updatedAt: string;
}

interface Member {
	id: string;
	name: string;
}

export default function ProjectsManager() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [members, setMembers] = useState<Member[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isCoordinatorDropdownOpen, setIsCoordinatorDropdownOpen] =
		useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [coordinatorSearchTerm, setCoordinatorSearchTerm] = useState("");
	const [newProject, setNewProject] = useState({
		title: "",
		description: "",
		img: "",
		link: "",
		slug: "",
		coordinatorId: "",
		keywords: [] as string[],
		funder: "",
		periodStart: "",
		periodEnd: "",
		memberIds: [] as string[],
	});
	const [editingProject, setEditingProject] = useState<Project | null>(null);

	useEffect(() => {
		fetchProjects();
		fetchMembers();
	}, []);

	// Fechar dropdowns ao clicar fora
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (
				!target.closest('[data-dropdown="members"]') &&
				!target.closest('[data-dropdown="coordinator"]')
			) {
				setIsDropdownOpen(false);
				setIsCoordinatorDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const fetchProjects = async () => {
		setIsLoading(true);
		try {
			const response = await api.get("/projects");
			setProjects(response.data.data);
		} catch (error) {
			console.error("Erro ao carregar projetos:", error);
			setProjects([]);
		} finally {
			setIsLoading(false);
		}
	};

	const fetchMembers = async () => {
		try {
			// Buscar todos os membros com um limite alto
			const response = await api.get("/members", {
				params: {
					page: 1,
					limit: 1000, // Limite alto para buscar todos os membros
				},
			});
			// A API retorna { data: Member[], total, page, limit, totalPages }
			setMembers(Array.isArray(response.data?.data) ? response.data.data : []);
		} catch (error) {
			console.error("Erro ao carregar membros:", error);
			setMembers([]);
		}
	};

	const handleMemberChange = (memberId: string) => {
		setNewProject((prev) => ({
			...prev,
			memberIds: prev.memberIds.includes(memberId)
				? prev.memberIds.filter((id) => id !== memberId)
				: [...prev.memberIds, memberId],
		}));
	};

	const handleCoordinatorChange = (memberId: string) => {
		setNewProject((prev) => ({
			...prev,
			coordinatorId: prev.coordinatorId === memberId ? "" : memberId,
		}));
		setIsCoordinatorDropdownOpen(false);
	};

	const handleKeywordAdd = (keyword: string) => {
		if (keyword.trim() && !newProject.keywords.includes(keyword.trim())) {
			setNewProject((prev) => ({
				...prev,
				keywords: [...prev.keywords, keyword.trim()],
			}));
		}
	};

	const handleKeywordRemove = (index: number) => {
		setNewProject((prev) => ({
			...prev,
			keywords: prev.keywords.filter((_, i) => i !== index),
		}));
	};

	const filteredMembers = members.filter(
		(member) =>
			member.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
			!newProject.memberIds.includes(member.id),
	);

	const filteredCoordinators = members.filter((member) =>
		member.name.toLowerCase().includes(coordinatorSearchTerm.toLowerCase()),
	);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const formData = new FormData();
			formData.append("title", newProject.title);
			formData.append("description", newProject.description);
			formData.append("link", newProject.link);
			formData.append("slug", newProject.slug);
			formData.append("coordinatorId", newProject.coordinatorId);
			formData.append("keywords", JSON.stringify(newProject.keywords));
			formData.append("funder", newProject.funder);
			formData.append("periodStart", newProject.periodStart);
			formData.append("periodEnd", newProject.periodEnd);
			formData.append("memberIds", JSON.stringify(newProject.memberIds));
			if (newProject.img) {
				formData.append("img", newProject.img);
			}

			if (editingProject) {
				await api.patch(`/projects/${editingProject.id}`, formData);
			} else {
				await api.post("/projects", formData);
			}
			await fetchProjects();
			setNewProject({
				title: "",
				description: "",
				img: "",
				link: "",
				slug: "",
				coordinatorId: "",
				keywords: [],
				funder: "",
				periodStart: "",
				periodEnd: "",
				memberIds: [],
			});
			setEditingProject(null);
		} catch (error) {
			console.error("Erro ao salvar projeto:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleEdit = (project: Project) => {
		setEditingProject(project);
		setNewProject({
			title: project.title || "",
			description: project.description || "",
			img: project.img || "",
			link: project.link || "",
			slug: project.slug || "",
			coordinatorId: project.coordinatorId || "",
			keywords: project.keywords,
			funder: project.funder || "",
			periodStart: project.periodStart || "",
			periodEnd: project.periodEnd || "",
			memberIds: project.memberIds,
		});
	};

	const handleDelete = async (id: string) => {
		if (window.confirm("Tem certeza que deseja excluir este projeto?")) {
			setIsLoading(true);
			try {
				await api.delete(`/projects/${id}`);
				await fetchProjects();
			} catch (error) {
				console.error("Erro ao excluir projeto:", error);
			} finally {
				setIsLoading(false);
			}
		}
	};

	const handleToggleFeatured = async (id: string, currentFeatured: boolean) => {
		setIsLoading(true);
		try {
			await api.patch(`/projects/${id}`, { isFeatured: !currentFeatured });
			await fetchProjects();
		} catch (error) {
			console.error("Erro ao atualizar destaque do projeto:", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="p-6">
			<h2 className="text-2xl font-bold mb-6">Gerenciar Projetos</h2>

			<form
				onSubmit={handleSubmit}
				className="mb-8 bg-white p-6 rounded-lg shadow"
			>
				<h3 className="text-lg font-semibold mb-4">
					{editingProject ? "Editar Projeto" : "Adicionar Novo Projeto"}
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<FormInput
						label="Título"
						value={newProject.title}
						onChange={(value) => setNewProject({ ...newProject, title: value })}
					/>
					<FormInput
						label="Slug"
						value={newProject.slug}
						onChange={(value) => setNewProject({ ...newProject, slug: value })}
						required
					/>
					<FormTextArea
						label="Descrição"
						value={newProject.description}
						onChange={(value) =>
							setNewProject({ ...newProject, description: value })
						}
					/>
					<FormInput
						label="Link"
						type="url"
						value={newProject.link}
						onChange={(value) => setNewProject({ ...newProject, link: value })}
					/>
					<FormInput
						label="URL da Imagem"
						type="url"
						value={newProject.img}
						onChange={(value) => setNewProject({ ...newProject, img: value })}
						placeholder="https://exemplo.com/imagem.jpg"
					/>

					{/* Coordenador do Projeto */}
					<div className="md:col-span-2">
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Coordenador do Projeto
						</label>
						<div className="relative" data-dropdown="coordinator">
							<div
								className="flex items-center p-4 border border-gray-300 rounded-lg bg-white hover:border-indigo-300 transition-colors cursor-pointer"
								onClick={() =>
									setIsCoordinatorDropdownOpen(!isCoordinatorDropdownOpen)
								}
							>
								{newProject.coordinatorId ? (
									<div className="flex items-center gap-3 w-full">
										<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
											<span className="text-sm font-medium text-indigo-600">
												{members
													.find((m) => m.id === newProject.coordinatorId)
													?.name.charAt(0)
													.toUpperCase()}
											</span>
										</div>
										<div className="flex flex-col flex-1">
											<span className="text-sm font-medium text-gray-900">
												{
													members.find((m) => m.id === newProject.coordinatorId)
														?.name
												}
											</span>
											<span className="text-xs text-gray-500">
												Coordenador do projeto
											</span>
										</div>
										<button
											type="button"
											onClick={(e) => {
												e.stopPropagation();
												setNewProject((prev) => ({
													...prev,
													coordinatorId: "",
												}));
											}}
											className="p-1 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50 transition-colors"
										>
											<svg
												className="w-4 h-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
									</div>
								) : (
									<div className="flex items-center justify-center w-full h-12 text-gray-400">
										<svg
											className="w-5 h-5 mr-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
											/>
										</svg>
										<span className="text-sm">
											Selecionar coordenador do projeto
										</span>
									</div>
								)}
							</div>
							{isCoordinatorDropdownOpen && (
								<div className="mt-2">
									<div className="relative">
										<div className="flex items-center">
											<input
												type="text"
												placeholder="Buscar coordenador..."
												value={coordinatorSearchTerm}
												onChange={(e) =>
													setCoordinatorSearchTerm(e.target.value)
												}
												className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
												onFocus={() => setIsCoordinatorDropdownOpen(true)}
											/>
											<button
												type="button"
												onClick={() => setIsCoordinatorDropdownOpen(false)}
												className="absolute right-2 text-gray-400 hover:text-gray-600"
											>
												<svg
													className="w-5 h-5"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
											</button>
										</div>
										<div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
											{filteredCoordinators.length === 0 ? (
												<div className="px-4 py-2 text-sm text-gray-500">
													Nenhum membro encontrado
												</div>
											) : (
												filteredCoordinators.map((member) => (
													<div
														key={member.id}
														className="px-4 py-2 hover:bg-indigo-50 cursor-pointer flex items-center gap-2 transition-colors"
														onClick={() => {
															handleCoordinatorChange(member.id);
															setCoordinatorSearchTerm("");
														}}
													>
														<div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
															<span className="text-xs text-indigo-600">
																{member.name.charAt(0).toUpperCase()}
															</span>
														</div>
														<span className="text-sm text-gray-700">
															{member.name}
														</span>
													</div>
												))
											)}
										</div>
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Membros do Projeto */}
					<div className="md:col-span-2">
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Membros do Projeto
						</label>
						<div className="relative" data-dropdown="members">
							<div
								className="flex flex-wrap gap-3 p-4 min-h-[120px] border border-gray-300 rounded-lg bg-white hover:border-indigo-300 transition-colors cursor-pointer"
								onClick={() => setIsDropdownOpen(true)}
							>
								{newProject.memberIds.length === 0 ? (
									<div className="flex flex-col items-center justify-center w-full h-20 text-gray-400">
										<svg
											className="w-8 h-8 mb-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M12 4v16m8-8H4"
											/>
										</svg>
										<span className="text-sm">
											Clique para adicionar membros ao projeto
										</span>
									</div>
								) : (
									<div className="w-full">
										<div className="flex items-center justify-between mb-2">
											<span className="text-sm font-medium text-gray-700">
												{newProject.memberIds.length}{" "}
												{newProject.memberIds.length === 1
													? "membro"
													: "membros"}{" "}
												selecionado
												{newProject.memberIds.length === 1 ? "" : "s"}
											</span>
											<button
												type="button"
												onClick={(e) => {
													e.stopPropagation();
													setNewProject((prev) => ({ ...prev, memberIds: [] }));
												}}
												className="text-sm text-gray-500 hover:text-red-600 transition-colors"
											>
												Limpar todos
											</button>
										</div>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
											{newProject.memberIds.map((memberId) => {
												const member = members.find((m) => m.id === memberId);
												return member ? (
													<div
														key={member.id}
														className="group flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-all"
													>
														<div className="flex items-center gap-3">
															<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
																<span className="text-sm font-medium text-indigo-600">
																	{member.name.charAt(0).toUpperCase()}
																</span>
															</div>
															<div className="flex flex-col">
																<span className="text-sm font-medium text-gray-900">
																	{member.name}
																</span>
																<span className="text-xs text-gray-500">
																	Membro do projeto
																</span>
															</div>
														</div>
														<button
															type="button"
															onClick={(e) => {
																e.stopPropagation();
																handleMemberChange(member.id);
															}}
															className="p-1 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50 transition-colors"
														>
															<svg
																className="w-4 h-4"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth="2"
																	d="M6 18L18 6M6 6l12 12"
																/>
															</svg>
														</button>
													</div>
												) : null;
											})}
										</div>
									</div>
								)}
							</div>
							{isDropdownOpen && (
								<div className="mt-2">
									<div className="relative">
										<div className="flex items-center">
											<input
												type="text"
												placeholder="Buscar membros..."
												value={searchTerm}
												onChange={(e) => setSearchTerm(e.target.value)}
												className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
												onFocus={() => setIsDropdownOpen(true)}
											/>
											<button
												type="button"
												onClick={() => setIsDropdownOpen(false)}
												className="absolute right-2 text-gray-400 hover:text-gray-600"
											>
												<svg
													className="w-5 h-5"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
											</button>
										</div>
										<div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
											{filteredMembers.length === 0 ? (
												<div className="px-4 py-2 text-sm text-gray-500">
													Nenhum membro encontrado
												</div>
											) : (
												filteredMembers.map((member) => (
													<div
														key={member.id}
														className="px-4 py-2 hover:bg-indigo-50 cursor-pointer flex items-center gap-2 transition-colors"
														onClick={() => {
															handleMemberChange(member.id);
															setSearchTerm("");
														}}
													>
														<div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
															<span className="text-xs text-indigo-600">
																{member.name.charAt(0).toUpperCase()}
															</span>
														</div>
														<span className="text-sm text-gray-700">
															{member.name}
														</span>
													</div>
												))
											)}
										</div>
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Palavras-chave */}
					<div className="md:col-span-2">
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Palavras-chave
						</label>
						<div className="space-y-3">
							<div className="flex gap-2">
								<input
									type="text"
									placeholder="Adicionar palavra-chave..."
									className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
									onKeyPress={(e) => {
										if (e.key === "Enter") {
											e.preventDefault();
											const input = e.target as HTMLInputElement;
											handleKeywordAdd(input.value);
											input.value = "";
										}
									}}
								/>
								<button
									type="button"
									onClick={(e) => {
										const input = e.currentTarget
											.previousElementSibling as HTMLInputElement;
										handleKeywordAdd(input.value);
										input.value = "";
									}}
									className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
								>
									Adicionar
								</button>
							</div>
							{newProject.keywords.length > 0 && (
								<div className="flex flex-wrap gap-2">
									{newProject.keywords.map((keyword, index) => (
										<span
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={index}
											className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800"
										>
											{keyword}
											<button
												type="button"
												onClick={() => handleKeywordRemove(index)}
												className="ml-2 text-indigo-600 hover:text-indigo-800"
											>
												<svg
													className="w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
											</button>
										</span>
									))}
								</div>
							)}
						</div>
					</div>

					{/* Financiador */}
					<FormInput
						label="Financiador"
						value={newProject.funder}
						onChange={(value) =>
							setNewProject({ ...newProject, funder: value })
						}
						placeholder="Ex: PIBIC, PIBITI, FUNCAP"
					/>

					{/* Período do Projeto */}
					<div className="md:col-span-2">
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Período do Projeto
						</label>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-xs font-medium text-gray-600 mb-1">
									Data de Início
								</label>
								<input
									type="date"
									value={newProject.periodStart}
									onChange={(e) =>
										setNewProject({
											...newProject,
											periodStart: e.target.value,
										})
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
								/>
							</div>
							<div>
								<label className="block text-xs font-medium text-gray-600 mb-1">
									Data de Fim (opcional)
								</label>
								<input
									type="date"
									value={newProject.periodEnd}
									onChange={(e) =>
										setNewProject({ ...newProject, periodEnd: e.target.value })
									}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-4">
					<button
						type="submit"
						className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						{editingProject ? "Atualizar" : "Adicionar"}
					</button>
					{editingProject && (
						<button
							type="button"
							onClick={() => {
								setEditingProject(null);
								setNewProject({
									title: "",
									description: "",
									img: "",
									link: "",
									slug: "",
									coordinatorId: "",
									keywords: [],
									funder: "",
									periodStart: "",
									periodEnd: "",
									memberIds: [],
								});
							}}
							className="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Cancelar
						</button>
					)}
				</div>
			</form>

			<div
				className={`bg-white shadow rounded-lg transition-all duration-300 ${isLoading ? "opacity-50 blur-sm" : ""}`}
			>
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Projeto
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Coordenador
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Financiador
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Período
							</th>
							<th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
								Destaque
							</th>
							<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
								Ações
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{projects.map((project) => (
							<tr key={project.id}>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="flex items-center">
										<div className="h-10 w-10 flex-shrink-0">
											<img
												className="h-10 w-10 rounded-full object-cover"
												src={
													project.img || "https://i.imgur.com/placeholder.jpg"
												}
												alt={project.title || "Projeto sem título"}
												onError={(e) => {
													const target = e.target as HTMLImageElement;
													target.src = "https://i.imgur.com/placeholder.jpg";
												}}
											/>
										</div>
										<div className="ml-4 flex-1">
											<div className="flex items-center gap-2">
												<div className="text-sm font-medium text-gray-900">
													{project.title || "Sem título"}
												</div>
												{project.isFeatured && (
													<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
														Destaque
													</span>
												)}
											</div>
											<div className="text-sm text-gray-500">
												{project.slug}
											</div>
											{project.keywords && project.keywords.length > 0 && (
												<div className="flex flex-wrap gap-1 mt-1">
													{project.keywords
														.slice(0, 3)
														.map((keyword, index) => (
															<span
																// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																key={index}
																className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-indigo-100 text-indigo-800"
															>
																{keyword}
															</span>
														))}
													{project.keywords.length > 3 && (
														<span className="text-xs text-gray-500">
															+{project.keywords.length - 3} mais
														</span>
													)}
												</div>
											)}
										</div>
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									{project.coordinator ? (
										<div className="flex items-center">
											<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
												<span className="text-sm font-medium text-indigo-600">
													{project.coordinator.name.charAt(0).toUpperCase()}
												</span>
											</div>
											<div className="ml-3">
												<div className="text-sm font-medium text-gray-900">
													{project.coordinator.name}
												</div>
												<div className="text-sm text-gray-500">Coordenador</div>
											</div>
										</div>
									) : (
										<span className="text-gray-500">Não definido</span>
									)}
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-gray-900">
										{project.funder || "Não informado"}
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-gray-900">
										{project.periodStart ? (
											<>
												{new Date(project.periodStart).toLocaleDateString(
													"pt-BR",
												)}
												{project.periodEnd && (
													<>
														{" "}
														-{" "}
														{new Date(project.periodEnd).toLocaleDateString(
															"pt-BR",
														)}
													</>
												)}
												{!project.periodEnd && (
													<span className="text-xs text-green-600 ml-1">
														(Em andamento)
													</span>
												)}
											</>
										) : (
											"Não informado"
										)}
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-center">
									<button
										type="button"
										onClick={() =>
											handleToggleFeatured(
												project.id,
												project.isFeatured || false,
											)
										}
										className={`inline-flex items-center justify-center p-2 rounded-full transition-colors ${
											project.isFeatured
												? "text-yellow-500 hover:text-yellow-600 bg-yellow-50"
												: "text-gray-400 hover:text-yellow-500 hover:bg-yellow-50"
										}`}
										title={
											project.isFeatured
												? "Remover do destaque"
												: "Marcar como destaque"
										}
									>
										<Star
											className={`w-5 h-5 ${
												project.isFeatured ? "fill-current" : ""
											}`}
										/>
									</button>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<button
										type="button"
										onClick={() => handleEdit(project)}
										className="text-indigo-600 hover:text-indigo-900 mr-4"
									>
										Editar
									</button>
									<button
										type="button"
										onClick={() => handleDelete(project.id)}
										className="text-red-600 hover:text-red-900"
									>
										Excluir
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
