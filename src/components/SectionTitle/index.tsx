import { motion } from "framer-motion";
import { titleAnimateProps } from "../../constants/animate";

type SectionTitleProps = {
  title: string;
  description?: string;
};

const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <div className="flex flex-col">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white text-center leading-tight"
        {...titleAnimateProps}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
        <p className="text-gray-300 text-center text-lg md:text-xl pt-2 font-light max-w-2xl mx-auto">
          {description}
        </p>
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
