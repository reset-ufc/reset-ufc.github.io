import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  GitBranch,
  Code,
  Trello,
  Infinity,
  GitMerge,
  FileSearch,
  Users,
  ShieldCheck,
  RefreshCcw,
} from "lucide-react";
import SectionTitle from "../SectionTitle";
import {
  animate,
  downToUpAnimateProps,
  titleAnimateProps,
} from "../../constants/animate";

interface TopicButtonProps {
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const TopicButton = ({ title, icon, isActive, onClick }: TopicButtonProps) => (
  <motion.button
    className={`px-5 flex items-center gap-3 py-3 rounded-full transition-colors duration-300 text-base font-semibold ${
      isActive
        ? "bg-[#ed6327] text-white"
        : "bg-white text-black hover:bg-indigo-100"
    }`}
    onClick={onClick}
    {...animate}
    transition={{ duration: 0.3, delay: 0.1 }}
  >
    {icon}
    <span>{title}</span>
  </motion.button>
);

interface TopicContentProps {
  title: string;
  description: string;
  items: ReactNode[];
  icon: ReactNode;
}

const TopicContent = ({
  title,
  description,
  items,
  icon,
}: TopicContentProps) => (
  <motion.div className="bg-gradient-to-br from-white to-gray-200 p-8 rounded-2xl shadow-xl">
    <div className="flex items-center space-x-4 mb-6">
      <div className="bg-indigo-600 p-3 rounded-full text-white">{icon}</div>
      <motion.h3
        className="text-3xl font-bold text-indigo-900"
        {...titleAnimateProps}
        transition={{ delay: 0.1 }}
      >
        {title}
      </motion.h3>
    </div>
    <motion.p
      className="text-indigo-700 mb-6 text-lg"
      {...titleAnimateProps}
      transition={{ delay: 0.3 }}
    >
      {description}
    </motion.p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white p-4 rounded-xl shadow-md"
          {...downToUpAnimateProps}
          transition={{ delay: index * 0.1 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const TechnologyItem = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex items-center gap-4">
    <img src={`/${icon}`} alt={name} width={32} height={32} />
    <span className="text-indigo-900 font-semibold">{name}</span>
  </div>
);

export function ProjectDevelopment() {
  const [activeTopic, setActiveTopic] = useState("etapas");

  const topics = [
    {
      id: "etapas",
      title: "Etapas",
      description:
        "Além de estratégias específicas, nossa metodologia geral de desenvolvimento é formada por times de requisitos, design, desenvolvimento e testes de software.",
      icon: <ClipboardList className="w-6 h-6" />,
      items: [
        {
          icon: <FileSearch className="w-5 h-5" />,
          title: "Levantamento de requisitos",
          description:
            "Identificação e análise das necessidades do projeto para definir os objetivos e funcionalidades.",
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "Pesquisa de interação de usuário",
          description:
            "Estudo do comportamento e preferências dos usuários para criar interfaces intuitivas e eficientes.",
        },
        {
          icon: <RefreshCcw className="w-5 h-5" />,
          title: "Entrega em sprints",
          description:
            "Desenvolvimento iterativo com entregas frequentes para feedback e ajustes contínuos.",
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          title: "Área de qualidade",
          description:
            "Testes rigorosos e controle de qualidade para garantir a excelência do produto final.",
        },
      ],
    },
    {
      id: "gerenciamento",
      title: "Gerenciamento",
      description:
        "Utilizamos metodologias ágeis para garantir a entrega eficiente e de alta qualidade dos nossos projetos.",
      icon: <GitBranch className="w-6 h-6" />,
      items: [
        {
          icon: <Trello className="w-5 h-5" />,
          title: "Scrum",
          description:
            "Framework ágil para gestão e planejamento de projetos com foco em entregas incrementais.",
        },
        {
          icon: <Infinity className="w-5 h-5" />,
          title: "Extreme Programming",
          description:
            "Metodologia que enfatiza a qualidade do código e a adaptação rápida às mudanças.",
        },
        {
          icon: <GitMerge className="w-5 h-5" />,
          title: "Kanban",
          description:
            "Sistema visual para gerenciamento de fluxo de trabalho e otimização de processos.",
        },
      ],
    },
    {
      id: "tecnologias",
      title: "Tecnologias",
      description:
        "Trabalhamos com as mais recentes tecnologias para desenvolver soluções modernas e escaláveis.",
      icon: <Code className="w-6 h-6" />,
      items: [
        { name: "JavaScript", icon: "JavaScript.svg" },
        { name: "Python", icon: "Python-Dark.svg" },
        { name: "React", icon: "React-Dark.svg" },
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Desenvolvimento de Projetos"
          description="Utilizamos metodologias ágeis e tecnologias modernas para entregar soluções de alta qualidade."
        />
        <div className="flex flex-col justify-center md:flex-row mb-8 gap-4">
          {topics.map((topic) => (
            <TopicButton
              key={topic.id}
              title={topic.title}
              icon={topic.icon}
              isActive={activeTopic === topic.id}
              onClick={() => setActiveTopic(topic.id)}
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          {topics.map(
            (topic) =>
              activeTopic === topic.id && (
                <TopicContent
                  key={topic.id}
                  title={topic.title}
                  description={topic.description}
                  items={
                    topic.id === "tecnologias"
                      ? (topic.items as { name: string; icon: string }[]).map(
                          (tech) => (
                            <TechnologyItem
                              key={tech.name}
                              name={tech.name}
                              icon={tech.icon}
                            />
                          )
                        )
                      : (
                          topic.items as {
                            icon: ReactNode;
                            title: string;
                            description: string;
                          }[]
                        ).map((item) => (
                          <div
                            key={item.title}
                            className="flex flex-col space-y-2"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="text-indigo-600">{item.icon}</div>
                              <h4 className="text-xl font-semibold text-indigo-900">
                                {item.title}
                              </h4>
                            </div>
                            <p className="text-indigo-700">
                              {item.description}
                            </p>
                          </div>
                        ))
                  }
                  icon={topic.icon}
                />
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
