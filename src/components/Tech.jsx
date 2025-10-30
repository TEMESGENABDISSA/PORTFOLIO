import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Import all tech icons
import htmlIcon from "../assets/tech/html.png";
import cssIcon from "../assets/tech/css.png";
import jsIcon from "../assets/tech/javascript.png";
import tsIcon from "../assets/tech/typescript.png";
import reactIcon from "../assets/tech/reactjs.png";
import nodeIcon from "../assets/tech/nodejs.png";
import mongoIcon from "../assets/tech/mongodb.png";
import mysqlIcon from "../assets/tech/Mysql.svg";
import gitIcon from "../assets/tech/git.png";
import githubIcon from "../assets/tech/Github.png";
import pythonIcon from "../assets/tech/Python.png";
import cppIcon from "../assets/tech/C++.png";
import phpIcon from "../assets/tech/PHP.png";
import kotlinIcon from "../assets/tech/kotlin.svg";
import flutterIcon from "../assets/tech/Flutter.svg";
import figmaIcon from "../assets/tech/figma.png";
import trelloIcon from "../assets/tech/Trello.png";
import reduxIcon from "../assets/tech/redux.png";
import tailwindIcon from "../assets/tech/tailwind.png";
import threejsIcon from "../assets/tech/threejs.svg";

const technologies = [
  { name: "HTML5", icon: htmlIcon, color: "#E34F26" },
  { name: "CSS3", icon: cssIcon, color: "#1572B6" },
  { name: "JavaScript", icon: jsIcon, color: "#F7DF1E" },
  { name: "TypeScript", icon: tsIcon, color: "#3178C6" },
  { name: "React", icon: reactIcon, color: "#61DAFB" },
  { name: "Node.js", icon: nodeIcon, color: "#339933" },
  { name: "MongoDB", icon: mongoIcon, color: "#47A248" },
  { name: "MySQL", icon: mysqlIcon, color: "#4479A1" },
  { name: "Git", icon: gitIcon, color: "#F05032" },
  { name: "GitHub", icon: githubIcon, color: "#181717" },
  { name: "Python", icon: pythonIcon, color: "#3776AB" },
  { name: "C++", icon: cppIcon, color: "#00599C" },
  { name: "PHP", icon: phpIcon, color: "#777BB4" },
  { name: "Kotlin", icon: kotlinIcon, color: "#7F52FF" },
  { name: "Flutter", icon: flutterIcon, color: "#02569B" },
  { name: "Figma", icon: figmaIcon, color: "#F24E1E" },
  { name: "Trello", icon: trelloIcon, color: "#0052CC" },
  { name: "Redux", icon: reduxIcon, color: "#764ABC" },
  { name: "Tailwind CSS", icon: tailwindIcon, color: "#06B6D4" },
  { name: "Three.js", icon: threejsIcon, color: "#000000" },
];

const TechCard = ({ tech, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 flex flex-col items-center justify-center p-6 bg-[#1a1a2e] rounded-full h-40 w-40 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg"
           style={{
             boxShadow: isHovered ? `0 0 20px ${tech.color}40` : 'none',
             border: `1px solid ${isHovered ? tech.color : '#2d2d4a'}`,
             aspectRatio: '1/1'
           }}>
        <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-3 overflow-hidden">
          <div className="absolute inset-0 rounded-full" style={{
            background: `radial-gradient(circle, ${tech.color}20 0%, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }} />
          <motion.img
            src={tech.icon}
            alt={tech.name}
            className={`w-12 h-12 object-contain transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
            style={{
              filter: isHovered ? 'drop-shadow(0 0 12px rgba(255,255,255,0.6))' : 'none',
              zIndex: 1
            }}
          />
          {isHovered && (
            <motion.div 
              className="absolute -inset-1 rounded-full blur"
              style={{ 
                background: tech.color,
                opacity: 0.2,
                zIndex: -1,
              }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
          {tech.name}
        </span>
        {isHovered && (
          <motion.div 
            className="absolute -bottom-2 h-1 rounded-full"
            style={{ 
              background: tech.color,
              width: '60%',
            }}
            initial={{ width: 0 }}
            animate={{ width: '60%' }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <motion.div 
        variants={textVariant()}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My Skills & Technologies
          <span className="block text-2xl md:text-3xl font-normal text-[#00B4D8] mt-2">
            I Work With
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#915EFF] to-[#00B4D8] mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
