import { ArrowRight, Briefcase, Calendar, DollarSign, Tag } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { useProjects } from "../../hooks/useFeaturedContent";
import type { Project } from "../../services/get-projects";

interface PortfolioProps {
	searchTerm?: string;
	statusFilter?: string;
	periodFilter?: string;
	fundingFilter?: string;
	keywordFilter?: string;
}

// Função auxiliar para determinar o status do projeto baseado nas datas
function getProjectStatus(project: Project): string {
	if (!project.periodStart && !project.periodEnd) {
		return "Em andamento";
	}

	const now = new Date();
	const start = project.periodStart ? new Date(project.periodStart) : null;
	const end = project.periodEnd ? new Date(project.periodEnd) : null;

	if (end && end < now) {
		return "Concluído";
	}

	if (start && start > now) {
		return "Não iniciado";
	}

	return "Em andamento";
}

// Função auxiliar para formatar o período do projeto
function getProjectPeriod(project: Project): string {
	if (!project.periodStart && !project.periodEnd) {
		return "Em andamento";
	}

	const start = project.periodStart ? new Date(project.periodStart) : null;
	const end = project.periodEnd ? new Date(project.periodEnd) : null;

	if (start && end) {
		const startYear = start.getFullYear();
		const endYear = end.getFullYear();
		return `${startYear}/${endYear}`;
	}

	if (start) {
		return `${start.getFullYear()}/Atual`;
	}

	return "Em andamento";
}

export function Projects({
	searchTerm = "",
	statusFilter = "all",
	periodFilter = "all",
	fundingFilter = "all",
	keywordFilter = "all",
}: PortfolioProps) {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;

	// Verificar se há filtros ativos
	const hasFilters =
		searchTerm !== "" ||
		statusFilter !== "all" ||
		periodFilter !== "all" ||
		fundingFilter !== "all" ||
		keywordFilter !== "all";

	// Se há filtros, buscar mais projetos para filtrar localmente
	// Se não há filtros, usar paginação do servidor
	const {
		data: projectsData,
		isLoading,
		error,
	} = useProjects(
		hasFilters ? 1 : currentPage,
		hasFilters ? 1000 : itemsPerPage,
	);

	// Filtrar projetos localmente quando há filtros
	const filteredProjects = useMemo(() => {
		if (!projectsData?.data) return [];

		// Se não há filtros, retornar os dados da API diretamente (já paginados)
		if (!hasFilters) {
			return projectsData.data;
		}

		// Se há filtros, aplicar filtros locais
		let filtered = projectsData.data;

		// Filtrar por termo de busca
		if (searchTerm) {
			const search = searchTerm.toLowerCase();
			filtered = filtered.filter(
				(project) =>
					project.title.toLowerCase().includes(search) ||
					project.description.toLowerCase().includes(search),
			);
		}

		// Filtrar por status
		if (statusFilter !== "all") {
			filtered = filtered.filter(
				(project) => getProjectStatus(project) === statusFilter,
			);
		}

		// Filtrar por período
		if (periodFilter !== "all") {
			filtered = filtered.filter(
				(project) => getProjectPeriod(project) === periodFilter,
			);
		}

		// Filtrar por financiadora
		if (fundingFilter !== "all") {
			filtered = filtered.filter((project) => project.funder === fundingFilter);
		}

		// Filtrar por palavra-chave
		if (keywordFilter !== "all") {
			filtered = filtered.filter((project) =>
				project.keywords.some(
					(keyword) => keyword.toLowerCase() === keywordFilter.toLowerCase(),
				),
			);
		}

		return filtered;
	}, [
		projectsData?.data,
		searchTerm,
		statusFilter,
		periodFilter,
		fundingFilter,
		keywordFilter,
		hasFilters,
	]);

	// Calcular paginação
	const totalPages = hasFilters
		? Math.ceil(filteredProjects.length / itemsPerPage)
		: projectsData?.totalPages || 1;

	// Paginar projetos filtrados (se houver filtros) ou usar dados já paginados
	const paginatedProjects = hasFilters
		? filteredProjects.slice(
				(currentPage - 1) * itemsPerPage,
				currentPage * itemsPerPage,
			)
		: filteredProjects;

	const handleNextPage = () => {
		if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) setCurrentPage((prev) => prev - 1);
	};

	// Resetar página quando filtros mudarem
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setCurrentPage(1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchTerm, statusFilter, periodFilter, fundingFilter, keywordFilter]);

	if (isLoading) {
		return (
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<p className="text-center text-gray-500 mt-8">Carregando projetos...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<p className="text-center text-red-500 mt-8">
					Erro ao carregar projetos. Tente novamente mais tarde.
				</p>
			</div>
		);
	}

	if (filteredProjects.length === 0) {
		return (
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<p className="text-center text-gray-500 mt-8">
					Nenhum projeto encontrado.
				</p>
			</div>
		);
	}

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
				{paginatedProjects.map((project) => {
					const projectStatus = getProjectStatus(project);
					const projectPeriod = getProjectPeriod(project);

					return (
						<div
							key={project.id}
							className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col"
						>
							<div className="p-6 flex flex-col flex-grow">
								<h3 className="text-gray-800 text-xl font-bold mb-4 line-clamp-2">
									{project.title}
								</h3>
								<p className="text-gray-600 mb-6 line-clamp-3">
									{project.description}
								</p>
								<div className="mb-6 space-y-3">
									<ProjectDetail
										icon={<Calendar className="w-5 h-5" />}
										label="Período"
										value={projectPeriod}
									/>
									<ProjectDetail
										icon={<Tag className="w-5 h-5" />}
										label="Status"
										value={projectStatus}
									/>
									{project.funder && (
										<ProjectDetail
											icon={<DollarSign className="w-5 h-5" />}
											label="Financiadora"
											value={project.funder}
										/>
									)}
									{project.coordinator && (
										<ProjectDetail
											icon={<Briefcase className="w-5 h-5" />}
											label="Coordenador"
											value={`${project.coordinator.name} ${project.coordinator.lastName}`}
										/>
									)}
								</div>
								{project.keywords && project.keywords.length > 0 && (
									<div className="flex flex-wrap gap-2 mb-4">
										{project.keywords.map((keyword) => (
											<span
												key={`${project.id}-${keyword}`}
												className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
											>
												{keyword}
											</span>
										))}
									</div>
								)}
							</div>
							<div className="mt-auto p-6">
								<NavLink
									to={`/projects/${project.slug}`}
									className="inline-flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300 group"
								>
									Ver Detalhes
									<ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
								</NavLink>
							</div>
						</div>
					);
				})}
			</div>

			{/* Controles de Paginação */}
			{totalPages > 1 && (
				<div className="flex justify-center items-center mt-6 space-x-4">
					<button
						type="button"
						onClick={handlePreviousPage}
						disabled={currentPage === 1}
						className={`px-4 py-2 text-white rounded-md ${
							currentPage === 1
								? "bg-gray-300 opacity-50 cursor-not-allowed"
								: "bg-orange-500"
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
								: "bg-orange-500"
						}`}
					>
						Próxima
					</button>
				</div>
			)}
		</div>
	);
}

interface ProjectDetailProps {
	icon: React.ReactNode;
	label: string;
	value: string;
}

function ProjectDetail({ icon, label, value }: ProjectDetailProps) {
	return (
		<div className="flex items-center text-gray-700">
			{icon}
			<span className="ml-2 font-semibold">{label}:</span>
			<span className="ml-1">{value}</span>
		</div>
	);
}
