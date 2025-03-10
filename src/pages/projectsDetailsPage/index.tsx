import { useParams } from "react-router-dom";
import { researchProject } from "./data";

export function ProjectDetailsPage() {
  const { slug } = useParams();
  const project = researchProject.find((project) => project.slug === slug);

  if (!project)
    return (
      <div className="text-center text-2xl text-red-600 mt-10">
        Projeto não encontrado!
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-14 pb-14 font-sans">
      <h1 className="text-2xl font-bold mb-6 text-gray-100 mt-20">
        {project.title}
      </h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-200">Descrição</h2>
        <p className="text-gray-300 leading-relaxed">{project.description}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-200">Status</h2>
        <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 font-medium">
          {project.status}
        </span>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-200">Natureza</h2>
        <p className="text-gray-300">{project.nature}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-200">
          Estudantes Envolvidos
        </h2>
        <div className="space-y-2">
          {project.studentsInvolved.phd && (
            <p className="text-gray-300">
              Doutorado: {project.studentsInvolved.phd}
            </p>
          )}
          {project.studentsInvolved.undergraduate && (
            <p className="text-gray-300">
              Graduação: {project.studentsInvolved.undergraduate}
            </p>
          )}
          {project.studentsInvolved.master && (
            <p className="text-gray-300">
              Mestrado: {project.studentsInvolved.master}
            </p>
          )}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-200">
          Palavras chaves
        </h2>
        <p className="text-gray-300">{project.keywords.join(", ")}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3 text-gray-200">Membros</h2>
        <ul className="space-y-2">
          {project.members.map((member, index) => (
            <li key={index} className="text-gray-300">
              <span className="font-medium">{member.name}</span> - {member.role}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
