import { GraduationCap, Search, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { type Member, useMembers } from "../../hooks/useFeaturedContent";
import { TeamMember } from "./teamMember";

export function TeamInterface() {
	const [searchTerm, setSearchTerm] = useState("");
	const [activeTab, setActiveTab] = useState("professors");
	const { data: membersData, isLoading, isError } = useMembers();

	console.log("Membros", membersData);

	// Filtrar e organizar membros por tipo
	const { professors, collaborators } = useMemo(() => {
		const members = membersData?.data || [];
		if (!members || !Array.isArray(members)) {
			return { professors: [], collaborators: [] };
		}

		const profs: Member[] = [];
		const collabs: Member[] = [];

		members.forEach((member) => {
			if (member.memberType === "PROFESSOR") {
				profs.push(member);
			} else if (
				member.memberType === "COLLABORATOR" ||
				member.memberType === "STUDENT"
			) {
				collabs.push(member);
			}
		});

		// Ordenar professores: coordenador primeiro, depois vice-coordenador, depois os demais
		profs.sort((a, b) => {
			if (a.coordinatorType === "COORDINATOR") return -1;
			if (b.coordinatorType === "COORDINATOR") return 1;
			if (a.coordinatorType === "VICE_COORDINATOR") return -1;
			if (b.coordinatorType === "VICE_COORDINATOR") return 1;
			return 0;
		});

		return { professors: profs, collaborators: collabs };
	}, [membersData]);

	const filteredCollaborators = useMemo(() => {
		return collaborators.filter((member) =>
			`${member.name} ${member.lastName || ""}`
				.toLowerCase()
				.includes(searchTerm.toLowerCase()),
		);
	}, [collaborators, searchTerm]);

	// Função para converter Member da API para o formato esperado pelo TeamMember
	const convertMemberToTeamMember = (member: Member) => {
		const fullName = member.lastName
			? `${member.name} ${member.lastName}`
			: member.name;

		const githubUrl = member.github || member.contact?.github || "";
		// Garantir que o github seja uma URL válida se existir
		const github =
			githubUrl && !githubUrl.startsWith("http")
				? `https://github.com/${githubUrl}`
				: githubUrl;

		return {
			id: member.id,
			name: fullName,
			role: member.role,
			email: member.email,
			github: github,
			img: member.img,
			description: member.description || "",
			researchKeywords: member.researchKeywords || [],
			publishedPapers: member.publishedPapers || [],
			contact: {
				email: member.email,
				github: github,
				latter: member.contact?.lattes || "", // Mantido 'latter' para compatibilidade com TeamMember
			},
		};
	};

	if (isLoading) {
		return (
			<div className="min-h-screen pt-10 pb-20 bg-slate-50">
				<Helmet title="Membros" />
				<div className="container mx-auto px-4">
					<h1 className="text-5xl font-bold mb-12 text-[#270B79] text-center">
						Nossa Equipe
					</h1>
					<div className="flex justify-center items-center py-20">
						<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#270B79]"></div>
					</div>
				</div>
			</div>
		);
	}

	if (isError || !membersData?.data) {
		return (
			<div className="min-h-screen pt-10 pb-20 bg-slate-50">
				<Helmet title="Membros" />
				<div className="container mx-auto px-4">
					<h1 className="text-5xl font-bold mb-12 text-[#270B79] text-center">
						Nossa Equipe
					</h1>
					<div className="flex justify-center items-center py-20">
						<p className="text-[#270B79] text-lg">
							Erro ao carregar membros. Tente novamente mais tarde.
						</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen pt-10 pb-20 bg-slate-50">
			<Helmet title="Membros" />

			<div className="container mx-auto px-4">
				<h1 className="text-5xl font-bold mb-12 text-[#270B79] text-center">
					Nossa Equipe
				</h1>

				<div className="flex justify-center mb-8">
					<button
						type="button"
						className={`px-6 py-3 rounded-l-full font-medium transition-colors ${
							activeTab === "professors"
								? "bg-[#3d1ba6] text-white"
								: "bg-white text-[#270B79]"
						}`}
						onClick={() => setActiveTab("professors")}
					>
						<GraduationCap className="inline-block mr-2" />
						Professores
					</button>
					<button
						type="button"
						className={`px-6 py-3 rounded-r-full font-medium transition-colors ${
							activeTab === "collaborators"
								? "bg-[#3d1ba6] text-white"
								: "bg-white text-[#270B79]"
						}`}
						onClick={() => setActiveTab("collaborators")}
					>
						<Users className="inline-block mr-2" />
						Colaboradores
					</button>
				</div>

				{activeTab === "professors" && (
					<div className="container mx-auto px-4">
						{professors.length > 0 ? (
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{professors.map((professor) => {
									const fullName = professor.lastName
										? `${professor.name} ${professor.lastName}`
										: professor.name;
									return (
										<Link
											to={`/members/${professor.id}`}
											key={professor.id}
											className="block group"
										>
											<div className="relative h-80 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
												{professor.img ? (
													<img
														src={professor.img}
														alt={fullName}
														className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
													/>
												) : (
													<div className="w-full h-full bg-gradient-to-br from-[#270B79] to-[#3d1ba6] flex items-center justify-center">
														<span className="text-white text-4xl font-bold">
															{professor.name.charAt(0)}
															{professor.lastName?.charAt(0) || ""}
														</span>
													</div>
												)}
												<div className="absolute bottom-6 left-6 text-white">
													<p className="text-2xl font-medium">
														{professor.name}
													</p>
													{professor.lastName && (
														<p className="text-3xl font-bold">
															{professor.lastName}
														</p>
													)}
													{professor.coordinatorType === "COORDINATOR" && (
														<span className="mt-2 inline-block bg-[#ec642a] text-white px-3 py-1 rounded-full text-sm font-semibold">
															Coordenador
														</span>
													)}
													{professor.coordinatorType === "VICE_COORDINATOR" && (
														<span className="mt-2 inline-block bg-[#3d1ba6] text-white px-3 py-1 rounded-full text-sm font-semibold">
															Vice-Coordenador
														</span>
													)}
												</div>
											</div>
										</Link>
									);
								})}
							</div>
						) : (
							<div className="flex justify-center items-center py-20">
								<p className="text-[#270B79] text-lg">
									Nenhum professor disponível no momento.
								</p>
							</div>
						)}
					</div>
				)}

				{activeTab === "collaborators" && (
					<div className="text-white">
						<div className="max-w-4xl mx-auto mb-12">
							<div className="relative w-full max-w-2xl mx-auto">
								<input
									type="text"
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									placeholder="Busque por nome"
									className="w-full py-4 px-6 pl-12 pr-4 rounded-full bg-gray-100 text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-[#3d1ba6] transition-shadow duration-300 ease-in-out"
								/>
								<Search
									className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
									size={24}
								/>
							</div>
						</div>

						{filteredCollaborators.length > 0 ? (
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
								{filteredCollaborators.map((member) => (
									<TeamMember
										key={member.id}
										{...convertMemberToTeamMember(member)}
									/>
								))}
							</div>
						) : (
							<div className="flex justify-center items-center py-20">
								<p className="text-center text-[#270B79] text-lg">
									{searchTerm
										? "Nenhum membro encontrado com esse nome."
										: "Nenhum colaborador disponível no momento."}
								</p>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
