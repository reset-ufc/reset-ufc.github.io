import NewsCard from "./NewsCard";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";

const NewsList = () => {
  const newsData = [
    {
      image: "https://avatars.githubusercontent.com/u/106624745?v=4",
      category: "Acesso Cidadão",
      title: "Simplifica a entrada no sistema Tramita, da Sefaz Ceará",
      date: "24/01/2023",
    },
    {
      image: "https://avatars.githubusercontent.com/u/106624745?v=4",
      category: "Projeto Íris",
      title: "Parceria com Contencioso Administrativo Tributário da Sefaz",
      date: "23/01/2023",
    },
    {
      image: "https://avatars.githubusercontent.com/u/106624745?v=4",
      category: "Edital de Pesquisa",
      title: "Técnicas de Linguagem Simples, Direito Visual e Design Editorial",
      date: "17/01/2023",
    },
  ];

  return (
    <div>
      <SectionTitle
        title="Notícias Reset"
        description="Confira as mais Recentes Notícias do nosso Laboratório de Pesquisa"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {newsData.map((news, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col"
          >
            <NewsCard key={index} news={news} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
