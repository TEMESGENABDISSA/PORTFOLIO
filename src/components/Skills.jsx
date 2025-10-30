import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';
import { styles } from '../styles';
import { technologies } from '../constants';

const SkillCard = ({ index, name, icon }) => (
  <motion.div
    variants={fadeIn('right', 'spring', 0.1 * index, 0.5)}
    className="flex flex-col items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
  >
    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-full flex items-center justify-center p-3 shadow-lg">
      {icon ? (
        <img 
          src={icon} 
          alt={name} 
          className="w-8 h-8 md:w-10 md:h-10 object-contain" 
        />
      ) : (
        <span className="text-white text-sm md:text-base font-medium">{name.charAt(0)}</span>
      )}
    </div>
    <p className="text-white text-xs md:text-sm mt-2 font-medium">{name}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="mt-12">
      <motion.div variants={textVariant()} className="text-center mb-12">
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies I Work With</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
        {technologies.map((tech, index) => (
          <SkillCard key={tech.name} index={index} {...tech} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
