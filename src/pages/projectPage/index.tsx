import { useMemo, useState } from "react";
import { Projects } from "../../components/projects";
import { useProjects } from "../../hooks/useFeaturedContent";
import type { Project } from "../../services/get-projects";

// Função auxiliar para determinar o status do projeto
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

export function ProjectPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [statusFilter, setStatusFilter] = useState("all");
	const [periodFilter, setPeriodFilter] = useState("all");
	const [fundingFilter, setFundingFilter] = useState("all");
	const [keywordFilter, setKeywordFilter] = useState("all");

	// Buscar projetos para popular os filtros
	const { data: projectsData } = useProjects(1, 100);

	// Extrair valores únicos para os filtros
	const { statuses, periods, funders, keywords } = useMemo(() => {
		if (!projectsData?.data) {
			return { statuses: [], periods: [], funders: [], keywords: [] };
		}

		const statusSet = new Set<string>();
		const periodSet = new Set<string>();
		const funderSet = new Set<string>();
		const keywordSet = new Set<string>();

		projectsData.data.forEach((project) => {
			statusSet.add(getProjectStatus(project));
			periodSet.add(getProjectPeriod(project));
			if (project.funder) {
				funderSet.add(project.funder);
			}
			project.keywords.forEach((keyword) => {
				keywordSet.add(keyword);
			});
		});

		return {
			statuses: Array.from(statusSet).sort(),
			periods: Array.from(periodSet).sort(),
			funders: Array.from(funderSet).sort(),
			keywords: Array.from(keywordSet).sort(),
		};
	}, [projectsData?.data]);

	return (
		<div className="flex flex-col w-full min-h-screen bg-gray-100 p-8 pt-10">
			<div className="max-w-7xl mx-auto w-full ">
				<h1 className="text-5xl font-bold text-[#270B79] text-center mb-8">
					Projetos
				</h1>
				<div className="flex flex-col md:flex-row gap-4 mb-8">
					<input
						type="text"
						placeholder="Buscar projetos..."
						className="flex-grow p-2 border border-gray-300 rounded-md"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<select
						className="p-2 border border-gray-300 rounded-md"
						value={statusFilter}
						onChange={(e) => setStatusFilter(e.target.value)}
					>
						<option value="all">Todos os status</option>
						{statuses.map((status) => (
							<option key={status} value={status}>
								{status}
							</option>
						))}
					</select>
					<select
						className="p-2 border border-gray-300 rounded-md"
						value={periodFilter}
						onChange={(e) => setPeriodFilter(e.target.value)}
					>
						<option value="all">Todos os períodos</option>
						{periods.map((period) => (
							<option key={period} value={period}>
								{period}
							</option>
						))}
					</select>
					<select
						className="p-2 border border-gray-300 rounded-md"
						value={fundingFilter}
						onChange={(e) => setFundingFilter(e.target.value)}
					>
						<option value="all">Todas as financiadoras</option>
						{funders.map((funder) => (
							<option key={funder} value={funder}>
								{funder}
							</option>
						))}
					</select>
					<select
						className="p-2 border border-gray-300 rounded-md"
						value={keywordFilter}
						onChange={(e) => setKeywordFilter(e.target.value)}
					>
						<option value="all">Todas as palavras-chave</option>
						{keywords.map((keyword) => (
							<option key={keyword} value={keyword}>
								{keyword}
							</option>
						))}
					</select>
				</div>
				<Projects
					searchTerm={searchTerm}
					statusFilter={statusFilter}
					periodFilter={periodFilter}
					fundingFilter={fundingFilter}
					keywordFilter={keywordFilter}
				/>
			</div>
		</div>
	);
}
