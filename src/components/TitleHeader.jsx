import { motion } from 'framer-motion';

const TitleHeader = ({ title, sub }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="text-[#915EFF] text-sm font-medium tracking-wider uppercase">
        {sub}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-[#915EFF] mx-auto mt-4 rounded-full"></div>
    </motion.div>
  );
};

export default TitleHeader;
