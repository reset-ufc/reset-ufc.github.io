import { NavLink } from "react-router-dom";
import { ArrowRight, Calendar, Briefcase, Tag, DollarSign } from "lucide-react";
import { FeaturedProjectsData } from "./data";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";

export function FeaturedProjects() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <SectionTitle
        title="Projetos em destaque"
        description="Conheça mais sobre nosso projeto de pesquisa e desenvolvimento"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FeaturedProjectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col"
          >
            <div className="px-6 py-4 flex flex-col flex-grow">
              <h3 className="text-gray-800 text-2xl font-bold mb-4 line-clamp-2">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-6 space-y-3">
                <ProjectDetail
                  icon={<Briefcase className="w-5 h-5" />}
                  label="Natureza"
                  value={project.nature}
                />
                <ProjectDetail
                  icon={<Calendar className="w-5 h-5" />}
                  label="Período"
                  value={project.period}
                />
                <ProjectDetail
                  icon={<Tag className="w-5 h-5" />}
                  label="Status"
                  value={project.status}
                />
                <ProjectDetail
                  icon={<DollarSign className="w-5 h-5" />}
                  label="Financiadora"
                  value={project.funding}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {project.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto px-6 pb-6">
              <NavLink
                to={project.link}
                className="inline-flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300 group"
              >
                Ver Detalhes
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </NavLink>
            </div>
          </motion.div>
        ))}
      </div>
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
