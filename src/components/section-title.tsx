import { animate } from "../constants/animate";
import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="flex flex-col gap-4">
      <motion.h3
        {...animate}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-bold text-center mb-12"
      >
        {title}
      </motion.h3>
    </div>
  );
};

export default SectionTitle;