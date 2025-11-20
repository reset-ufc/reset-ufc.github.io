import { Github, Mail, FileText, Phone, ArrowLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getMemberById } from "../../services/get-member-by-id";

export default function ProfilePage() {
  const { id } = useParams<{ id: string }>();

  const { data: member, isLoading, isError } = useQuery({
    queryKey: ["member", id],
    queryFn: () => getMemberById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Helmet title="Carregando..." />
        <div className="container mx-auto px-4 py-20">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#270B79]"></div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !member) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Helmet title="Membro não encontrado" />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Membro não encontrado
            </h1>
            <p className="text-gray-600 mb-8">
              O membro que você está procurando não existe ou foi removido.
            </p>
            <Link
              to="/members"
              className="inline-flex items-center text-[#270B79] hover:text-[#3d1ba6] font-semibold"
            >
              <ArrowLeft size={20} className="mr-2" />
              Voltar para a lista de membros
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const fullName = member.lastName
    ? `${member.name} ${member.lastName}`
    : member.name;

  const email = member.contact?.email || member.email;
  const github = member.contact?.github || member.github || "";
  const githubUrl = github && !github.startsWith("http") 
    ? `https://github.com/${github}` 
    : github;
  const lattes = member.contact?.lattes;
  const phone = member.contact?.phone;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Helmet title={`${fullName} - ResetLab`} />
      
      {/* Header com botão voltar */}
      <div className="bg-[#270B79] text-white py-4">
        <div className="container mx-auto px-4">
          <Link
            to="/members"
            className="inline-flex items-center text-white hover:text-gray-200 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Voltar para membros
          </Link>
        </div>
      </div>

      {/* Perfil do membro */}
      <div className="bg-[#270B79] text-white py-12 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {member.img ? (
              <img
                src={member.img}
                alt={fullName}
                className="rounded-full w-40 h-40 border-4 border-white shadow-xl object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector(".avatar-placeholder")) {
                    const placeholder = document.createElement("div");
                    placeholder.className = "avatar-placeholder rounded-full w-40 h-40 border-4 border-white shadow-xl bg-gradient-to-br from-[#3d1ba6] to-[#270B79] flex items-center justify-center";
                    placeholder.innerHTML = `<span class="text-white text-4xl font-bold">${member.name.charAt(0)}${member.lastName?.charAt(0) || ""}</span>`;
                    parent.appendChild(placeholder);
                  }
                }}
              />
            ) : (
              <div className="rounded-full w-40 h-40 border-4 border-white shadow-xl bg-gradient-to-br from-[#3d1ba6] to-[#270B79] flex items-center justify-center">
                <span className="text-white text-4xl font-bold">
                  {member.name.charAt(0)}
                  {member.lastName?.charAt(0) || ""}
                </span>
              </div>
            )}
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl font-bold mb-2">{fullName}</h1>
              <p className="text-xl text-red-300 font-semibold mb-2">
                {member.role}
              </p>
              {member.coordinatorType === "COORDINATOR" && (
                <span className="inline-block bg-[#ec642a] text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Coordenador
                </span>
              )}
              {member.coordinatorType === "VICE_COORDINATOR" && (
                <span className="inline-block bg-[#3d1ba6] text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Vice-Coordenador
                </span>
              )}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 hover:bg-opacity-30 transition-colors"
                  >
                    <Mail size={20} className="mr-2" />
                    <span>{email}</span>
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 hover:bg-opacity-30 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    <span>GitHub</span>
                  </a>
                )}
                {lattes && (
                  <a
                    href={lattes}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 hover:bg-opacity-30 transition-colors"
                  >
                    <FileText size={20} className="mr-2" />
                    <span>Lattes</span>
                  </a>
                )}
                {phone && (
                  <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                    <Phone size={20} className="mr-2" />
                    <span>{phone}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-8">
        {member.description && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Descrição</h2>
            <p className="text-gray-600 whitespace-pre-wrap">{member.description}</p>
          </div>
        )}

        {member.researchKeywords && member.researchKeywords.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Palavras-chave de pesquisa
            </h2>
            <div className="flex flex-wrap gap-3">
              {member.researchKeywords.map((keyword, index) => (
                <div
                  key={index}
                  className="bg-[#ec642a] text-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2 transition-transform hover:scale-105"
                >
                  <span>{keyword}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {member.publishedPapers && member.publishedPapers.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Artigos Publicados
            </h2>
            <div className="space-y-3">
              {member.publishedPapers.map((paper, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <p className="text-gray-800">{paper}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
