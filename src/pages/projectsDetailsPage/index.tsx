import { useParams, Link } from "react-router-dom";
import { useProjectBySlug } from "../../hooks/useFeaturedContent";
import { Calendar, DollarSign, Tag, Briefcase, Users, ExternalLink } from "lucide-react";

// Função auxiliar para determinar o status do projeto
function getProjectStatus(project: { periodStart: string | null; periodEnd: string | null }): string {
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
function getProjectPeriod(project: { periodStart: string | null; periodEnd: string | null }): string {
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

export function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: project, isLoading, isError } = useProjectBySlug(slug || "");

  if (isLoading) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#270B79] mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando projeto...</p>
        </div>
      </div>
    );
  }

  if (isError || !project) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Projeto não encontrado
          </h1>
          <p className="text-gray-600 mb-8">
            O projeto que você está procurando não existe ou foi removido.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center text-[#270B79] hover:text-[#3d1ba6] font-semibold"
          >
            Voltar para a lista de projetos
          </Link>
        </div>
      </div>
    );
  }

  const projectStatus = getProjectStatus(project);
  const projectPeriod = getProjectPeriod(project);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {project.title}
          </h1>

          {project.img && (
            <div className="mb-8">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Descrição</h2>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center text-gray-700">
              <Tag className="w-5 h-5 mr-2 text-orange-500" />
              <span className="font-semibold mr-2">Status:</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                projectStatus === "Concluído" 
                  ? "bg-green-100 text-green-800" 
                  : projectStatus === "Não iniciado"
                  ? "bg-gray-100 text-gray-800"
                  : "bg-blue-100 text-blue-800"
              }`}>
                {projectStatus}
              </span>
            </div>

            <div className="flex items-center text-gray-700">
              <Calendar className="w-5 h-5 mr-2 text-orange-500" />
              <span className="font-semibold mr-2">Período:</span>
              <span>{projectPeriod}</span>
            </div>

            {project.funder && (
              <div className="flex items-center text-gray-700">
                <DollarSign className="w-5 h-5 mr-2 text-orange-500" />
                <span className="font-semibold mr-2">Financiadora:</span>
                <span>{project.funder}</span>
              </div>
            )}

            {project.coordinator && (
              <div className="flex items-center text-gray-700">
                <Briefcase className="w-5 h-5 mr-2 text-orange-500" />
                <span className="font-semibold mr-2">Coordenador:</span>
                <span>{project.coordinator.name} {project.coordinator.lastName}</span>
              </div>
            )}
          </div>

          {project.keywords && project.keywords.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Palavras-chave
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </section>
          )}

          {project.members && project.members.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                <Users className="w-6 h-6 mr-2 text-orange-500" />
                Membros do Projeto
              </h2>
              <ul className="space-y-3">
                {project.members.map((member) => (
                  <li key={member.id} className="text-gray-700 bg-gray-50 p-3 rounded-lg">
                    <span className="font-semibold">{member.name} {member.lastName}</span>
                    <span className="text-gray-500 ml-2">- {member.role}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.link && (
            <section className="mt-8">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300"
              >
                Ver Projeto
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
