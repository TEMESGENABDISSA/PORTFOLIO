import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ExperienceCard = ({ experience, index, isActive, onClick, onHoverStart, onHoverEnd }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.1 * index, 0.75)}
      className={`relative group cursor-pointer p-4 rounded-xl transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-br from-[#1a1a2e] to-[#16213e] shadow-lg border border-[#7c4dff]/30' 
          : 'hover:bg-[#1a1a2e]/50'
      }`}
      onClick={onClick}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{ 
        y: -5,
        transition: { type: 'spring', stiffness: 400, damping: 10 }
      }}
    >
      <div className="flex items-start gap-4">
        <div className="relative">
          <motion.div 
            className={`w-4 h-4 rounded-full flex items-center justify-center z-10 mt-1 ${
              isActive ? 'bg-[#915EFF]' : 'bg-gray-600 group-hover:bg-[#7c4dff]'
            } transition-all duration-300`}
            whileHover={{ scale: 1.2 }}
          >
            {isActive && (
              <motion.div 
                className="w-2 h-2 bg-white rounded-full"
                layoutId="activeDot"
              />
            )}
          </motion.div>
          {!isActive && (
            <div className="absolute left-1.5 top-6 w-0.5 h-full bg-gradient-to-b from-[#7c4dff] to-transparent opacity-40" />
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c4dff] to-[#651fff] p-1.5 flex-shrink-0">
              <img 
                src={experience.icon} 
                alt={experience.company_name}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg group-hover:text-[#915EFF] transition-colors">
                {experience.company_name}
              </h3>
              <p className="text-gray-400 text-sm">{experience.title}</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 ml-11">{experience.date}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceDetails = ({ experience, isVisible }) => {
  if (!isVisible || !experience) return null;
  
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
      className="md:pl-8 lg:pl-12 mt-8 md:mt-0 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        ref={ref}
        className="relative bg-gradient-to-br from-[#0f0f17] to-[#1a1a2e] p-6 md:p-8 rounded-2xl shadow-2xl border border-[#2a2a42] overflow-hidden"
        whileHover={{ 
          y: -5,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          borderColor: '#7c4dff40'
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 300,
          damping: 20
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Animated gradient highlight */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(145, 94, 255, 0.1), transparent 70%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease-out',
          }}
        />
        
        {/* Header with logo and title */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-gradient-to-br from-[#7c4dff] to-[#651fff] p-3 flex items-center justify-center flex-shrink-0">
            <img 
              src={experience.icon} 
              alt={experience.company_name}
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(145, 94, 255, 0.3))',
              }}
            />
          </div>
          
          <div>
            <div className="inline-block px-3 py-1 bg-[#7c4dff]/10 text-[#b794ff] text-xs font-medium rounded-full mb-2 border border-[#7c4dff]/20">
              {experience.date}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
              {experience.role}
            </h2>
            <h3 className="text-lg text-[#b794ff] font-medium">
              {experience.company_name}
            </h3>
          </div>
        </div>
        
        {/* Experience points */}
        <ul className="space-y-4 mb-8">
          {experience.points?.map((point, i) => (
            <motion.li 
              key={i}
              className="group relative pl-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.05 * i,
                type: 'spring',
                stiffness: 300,
                damping: 20
              }}
            >
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#7c4dff] transform group-hover:scale-150 transition-transform" />
              <p className="text-gray-300 leading-relaxed">
                {point}
              </p>
            </motion.li>
          ))}
        </ul>
        
        {/* Skills/Tech Stack */}
        {experience.skills && (
          <div className="pt-6 border-t border-[#2a2a42]">
            <h4 className="text-sm font-semibold text-gray-400 mb-4 flex items-center">
              <span className="mr-2">🛠️</span> TECHNOLOGIES USED
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, i) => (
                <motion.span 
                  key={i}
                  className="px-3 py-1.5 text-xs font-medium bg-[#1e1e2d] text-gray-200 rounded-full border border-[#2a2a42] hover:border-[#7c4dff]/50 hover:text-white transition-all"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                  whileHover={{ 
                    y: -2,
                    boxShadow: '0 4px 12px rgba(124, 77, 255, 0.15)'
                  }}
                >
                  {skill}
                </motion.span>
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
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-30 animate-gradient-slow" />
      </div>
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
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div 
          variants={textVariant()} 
          className="text-center mb-16 md:mb-24 relative z-10"
        >
          <motion.p 
            className="text-sm text-[#b388ff] font-mono mb-3 tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            What I've learned so far
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#b388ff] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 0.1,
                type: 'spring',
                stiffness: 100,
                damping: 10
              }
            }}
          >
            Experience & Education
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#7c4dff] to-[#b388ff] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: 1,
              transition: { delay: 0.3 }
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Scroll indicator */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-16 w-px h-16 bg-gradient-to-b from-transparent to-[#7c4dff] opacity-70" />
          
          {/* Experience Cards */}
          <div className="space-y-6 relative">
            <div className="absolute -left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[#7c4dff] via-[#b388ff] to-transparent opacity-30" />
            {experiences.map((exp, index) => (
              <div key={`exp-${exp.id}-${index}`} onClick={() => setActiveIndex(index)}>
                <ExperienceCard
                  key={`exp-card-${exp.id}-${index}`}
                  experience={exp}
                  index={index}
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                  onHoverStart={() => handleCardHover(index)}
                  onHoverEnd={handleCardLeave}
                />
              </div>
            ))}
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-2 relative">
            <div className="absolute -left-8 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-[#7c4dff] to-transparent opacity-30" />
            <AnimatePresence mode="wait">
              <ExperienceDetails 
                experience={experiences[activeIndex]} 
                isVisible={true} 
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
