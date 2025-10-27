import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ExperienceCard = ({ experience, index, isActive, onClick, onHoverStart, onHoverEnd }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.1 * index, 0.75)}
      className="relative group cursor-pointer"
      onClick={onClick}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{ 
        scale: 1.02,
        transition: { type: 'spring', stiffness: 400, damping: 10 }
      }}
    >
      <div className="flex items-center">
        <motion.div 
          className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${
            isActive ? 'bg-[#915EFF]' : 'bg-gray-700 group-hover:bg-[#7c4dff]'
          } transition-all duration-300`}
          whileHover={{ scale: 1.1 }}
        >
          {isActive && (
            <motion.div 
              className="w-2 h-2 bg-white rounded-full"
              layoutId="activeDot"
            />
          )}
        </motion.div>
        <div className="hidden md:block w-full h-0.5 bg-gradient-to-r from-[#915EFF] to-transparent opacity-70" />
      </div>
      
      <motion.div 
        className="mt-4 ml-8 p-1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: isActive ? 1 : 0.7,
          x: isActive ? 0 : -10 
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-sm text-gray-400">{experience.date}</p>
        <h3 className="text-white font-bold text-xl group-hover:text-[#915EFF] transition-colors">
          {experience.company_name}
        </h3>
        <p className="text-gray-300 text-sm">{experience.title}</p>
      </motion.div>
    </motion.div>
  );
};

const ExperienceDetails = ({ experience, isVisible, cursorX, cursorY }) => {
  if (!isVisible) return null;
  
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    ref.current.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  return (
    <motion.div 
      className="md:pl-12 mt-8 md:mt-0 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div 
        ref={ref}
        className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden"
        whileHover={{ 
          y: -5,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
        }}
        transition={{ type: 'spring', stiffness: 300 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(145, 94, 255, 0.1), transparent 70%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-[#7c4dff] to-[#651fff] shadow-lg">
            <img 
              src={experience.icon} 
              alt={experience.company_name}
              className="w-10 h-10 object-contain"
            />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
            <p className="text-gray-400">{experience.company_name}</p>
          </div>
        </div>
        
        <ul className="space-y-3">
          {experience.points.map((point, i) => (
            <motion.li 
              key={i} 
              className="flex items-start text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <span className="text-[#915EFF] mr-3 mt-1">▹</span>
              <span className="leading-relaxed">{point}</span>
            </motion.li>
          ))}
        </ul>
        
        {experience.skills && (
          <div className="mt-6 pt-6 border-t border-gray-800">
            <h4 className="text-sm font-semibold text-gray-400 mb-3">TECHNOLOGIES USED</h4>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  
  // Cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // Update cursor position
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);
  
  // Cursor variants
  const variants = {
    default: {
      width: 32,
      height: 32,
      x: cursorXSpring,
      y: cursorYSpring,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(255, 255, 255, 0.3)',
      transition: { type: 'spring', stiffness: 500, damping: 28 }
    },
    hover: {
      width: 80,
      height: 80,
      x: cursorXSpring - 40,
      y: cursorYSpring - 40,
      backgroundColor: 'rgba(145, 94, 255, 0.1)',
      borderColor: 'rgba(145, 94, 255, 0.5)',
      transition: { type: 'spring', stiffness: 500, damping: 28 }
    },
    active: {
      width: 60,
      height: 60,
      x: cursorXSpring - 30,
      y: cursorYSpring - 30,
      backgroundColor: 'rgba(145, 94, 255, 0.2)',
      borderColor: 'rgba(145, 94, 255, 0.8)',
      transition: { type: 'spring', stiffness: 500, damping: 28 }
    }
  };
  
  const handleCardHover = (index) => {
    setHoveredIndex(index);
    setCursorVariant('hover');
  };
  
  const handleCardLeave = () => {
    setHoveredIndex(null);
    setCursorVariant('default');
  };

  return (
    <section 
      className="relative w-full mx-auto py-24 px-4 sm:px-6 lg:px-8 max-w-7xl overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 rounded-full border-2 pointer-events-none z-50 backdrop-blur-sm"
        variants={variants}
        animate={cursorVariant}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      <motion.div 
        variants={textVariant()} 
        className="text-center mb-20"
      >
        <motion.p 
          className="text-sm text-[#915EFF] font-mono mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          My Professional Journey
        </motion.p>
        <motion.h2 
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Work Experience
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-gradient-to-r from-[#915EFF] to-[#651fff] mx-auto mt-4 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 300 }}
        />
      </motion.div>

      <motion.div 
        className="relative"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="hidden md:block absolute left-[calc(25%+8px)] w-0.5 h-full bg-gradient-to-b from-[#915EFF] to-transparent top-0"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-12">
              {experiences.map((exp, index) => {
                const isActive = activeIndex === index;
                const isHovered = hoveredIndex === index;
                
                return (
                  <ExperienceCard 
                    key={`exp-${index}`}
                    experience={exp}
                    index={index}
                    isActive={isActive}
                    onClick={() => setActiveIndex(index)}
                    onHoverStart={() => handleCardHover(index)}
                    onHoverEnd={handleCardLeave}
                  />
                );
              })}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              <ExperienceDetails 
                key={activeIndex}
                experience={experiences[activeIndex]} 
                isVisible={true}
                cursorX={cursorX}
                cursorY={cursorY}
              />
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#915EFF] rounded-full filter blur-3xl opacity-10 -z-10"></div>
      <div className="absolute -left-20 top-1/3 w-48 h-48 bg-[#651fff] rounded-full filter blur-3xl opacity-10 -z-10"></div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
