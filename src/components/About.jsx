import React, { useRef, useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaBrain, FaRobot, FaCode, FaServer, FaLightbulb, FaCogs } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, slideIn, staggerContainer } from "../utils/motion";
import TomImage from "../assets/Tom.png";

const ServiceCard = ({ index, title, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  
  return (
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "tween", index * 0.02, 0.15)}
        className="relative w-full h-full group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        style={{
          '--tw-scale': isHovered ? 1.03 : 1,
          '--tw-translate-y': isHovered ? '-10px' : '0',
          '--tw-bg-opacity': isHovered ? '0.1' : '0',
        }}
      >
        {/* Background glow */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-75 pointer-events-none"
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(145, 94, 255, 0.2), transparent 70%)`,
          }}
        />
        
        {/* Border gradient */}
        <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-[#915EFF] to-[#00B4D8] opacity-0 group-hover:opacity-100 transition-opacity duration-75" />
        
        {/* Main card */}
        <div className="relative bg-[#0f172a] rounded-2xl p-6 h-full flex flex-col items-center justify-center transition-all duration-300"
          style={{
            transform: 'translateY(var(--tw-translate-y)) scale(var(--tw-scale))',
            border: '1px solid rgba(255, 255, 255, 0.03)',
            boxShadow: isHovered 
              ? '0 10px 30px -10px rgba(145, 94, 255, 0.3)'
              : '0 4px 20px -5px rgba(0, 0, 0, 0.2)'
          }}
        >
          {/* Icon container with gradient border */}
          <motion.div 
            className="p-3 rounded-full mb-4 relative"
            style={{
              background: 'linear-gradient(135deg, #0f172a, #0f172a) padding-box, linear-gradient(135deg, #915EFF, #00B4D8) border-box',
              border: '2px solid transparent',
            }}
            animate={{
              scale: isHovered ? [1, 1.1, 1] : 1,
              rotate: isHovered ? [0, 5, -5, 0] : 0,
            }}
            transition={{
              scale: { duration: 0.1 },
              rotate: { duration: 0.2, type: 'tween', ease: 'easeOut' }
            }}
          >
            <img
              src={icon}
              alt={title}
              className="w-10 h-10 object-contain"
            />
          </motion.div>
          
          <h3 className="text-white text-xl font-bold text-center mb-3 bg-gradient-to-r from-white to-[#b388ff] bg-clip-text text-transparent">
            {title}
          </h3>
          
          {/* Animated underline */}
          <div className="relative w-12 h-1 overflow-hidden mb-3">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#915EFF] to-[#00B4D8] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? '100%' : '100%' }}
              transition={{ duration: 0.1, ease: 'easeOut' }}
            />
          </div>
          
          {/* Hover background */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-[#915EFF] to-[#00B4D8] opacity-0 group-hover:opacity-5 rounded-2xl -z-10 transition-opacity duration-75"
          />
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#915EFF] rounded-full filter blur-3xl opacity-10 -z-10" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#00B4D8] rounded-full filter blur-3xl opacity-10 -z-10" />
      
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Text Content - Always comes first on all screen sizes */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="w-full lg:w-1/2"
        >
          <motion.div variants={textVariant()} className="text-center lg:text-left">
            <p className={`${styles.sectionSubText} text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#00B4D8]`}>
              Introduction
            </p>
            <h2 className={`${styles.sectionHeadText} text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300`}>
              About Me
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-6 text-gray-300 text-lg leading-relaxed space-y-4"
          >
            <p>
              Hi, I'm <span className="text-[#915EFF] font-medium">Temesgen Abdissa</span> — a passionate <span className="text-[#00B4D8] font-medium">Software Engineer</span> & <span className="text-[#61DAFB] font-medium">Full Stack Developer</span> from Ethiopia. I specialize in <span className="text-[#915EFF] font-medium">JavaScript</span>, <span className="text-[#00B4D8] font-medium">TypeScript</span>, <span className="text-[#61DAFB] font-medium">React</span>, and <span className="text-[#68A063] font-medium">Node.js</span>, building scalable, user-focused web applications that make an impact.
            </p>
            <p>
              I'm inspired by <span className="text-[#FF6B6B] font-medium">AI</span> and <span className="text-[#FF9F43] font-medium">Machine Learning</span>, exploring how intelligent systems can shape the future of technology. A fast learner and team player, I love turning ideas into real, meaningful products that empower communities.
            </p>
          
            <motion.div 
              variants={fadeIn("", "", 0.3, 1)}
              className="mt-8"
            >
              <a
                href="/Temesgen_Abdisa_Resume.pdf"
                download="Temesgen_Abdisa_Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#915EFF] to-[#00B4D8] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Profile Image - Always comes after text on mobile, right on desktop */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0"
          variants={slideIn("up", "tween", 0.3, 1)}
        >
          <div className="relative">
            <div className="w-64 h-80 sm:w-80 sm:h-96 relative group">
              {/* Profile Image */}
              <motion.div 
                className="absolute inset-0 border-4 border-[#00B4D8] rounded-2xl overflow-hidden z-10"
                whileHover={{
                  borderColor: "#915EFF",
                  boxShadow: "0 0 30px rgba(145, 94, 255, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <img 
                  src={TomImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Decorative Elements */}
              <div className="absolute -inset-2 border-2 border-[#915EFF] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-500" />
              <div className="absolute -inset-4 border border-[#00B4D8] rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-all duration-500" />
              
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/10 to-[#00B4D8]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#00B4D8] rounded-full filter blur-3xl opacity-20 -z-10" />
            <div className="absolute -left-4 -top-4 w-32 h-32 bg-[#915EFF] rounded-full filter blur-3xl opacity-20 -z-10" />
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <motion.div 
        className="mt-24 overflow-hidden"
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        <motion.div 
          variants={textVariant()} 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2
            }
          }}
        >
          <motion.p className="text-sm text-[#b388ff] font-mono mb-2 tracking-wider">
            What I can do for you
          </motion.p>
          <motion.h3 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#b388ff] mb-4"
          >
            My Services
          </motion.h3>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#7c4dff] to-[#b388ff] mx-auto rounded-full mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1, transition: { delay: 0.4, duration: 0.6 } }}
          />
        </motion.div>

        <div className="relative w-full">
          {/* Fade effect on the sides */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none" />
          
          {/* Marquee Container */}
          <div className="overflow-hidden py-6">
            <div className="flex">
              {/* First Set */}
              <motion.div 
                className="flex flex-nowrap"
                animate={{
                  x: ['0%', '-100%']
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    duration: 60,
                    ease: 'linear',
                    repeatType: 'loop'
                  }
                }}
              >
                {[
                  'MERN Stack Development',
                  'Frontend Development',
                  'Backend Development',
                  'React.js Development',
                  'Python Development',
                  'AI & ML Integration',
                  'TypeScript Development',
                  'Problem Solving',
                  'Technology Innovation'
                ].map((title, index) => {
                  const service = [
                    { icon: <FaCode className="w-8 h-8" />, description: 'Full-stack applications using MongoDB, Express, React, and Node.js' },
                    { icon: <FaReact className="w-8 h-8" />, description: 'Responsive and interactive UIs with React, TypeScript, and modern CSS' },
                    { icon: <FaServer className="w-8 h-8" />, description: 'Robust backend services with Node.js, Express, and MongoDB' },
                    { icon: <TbBrandReactNative className="w-8 h-8" />, description: 'High-performance React applications with best practices' },
                    { icon: <FaPython className="w-8 h-8" />, description: 'Python applications, scripts, and automation tools' },
                    { icon: <FaBrain className="w-8 h-8" />, description: 'Integrating AI/ML models into web applications' },
                    { icon: <SiTypescript className="w-8 h-8" />, description: 'Type-safe JavaScript for scalable applications' },
                    { icon: <FaLightbulb className="w-8 h-8" />, description: 'Creative solutions to complex technical challenges' },
                    { icon: <FaCogs className="w-8 h-8" />, description: 'Staying ahead with the latest tech trends and tools' }
                  ][index];
                  
                  return (
                    <div key={index} className="w-80 flex-shrink-0 mx-4">
                      <motion.div
                        className="h-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-4 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#915EFF]/20 transition-all duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-[#915EFF] to-[#00B4D8] rounded-full flex items-center justify-center mb-3 mx-auto">
                          <div className="text-white text-xl">
                            {service.icon}
                          </div>
                        </div>
                        <h4 className="text-lg font-bold text-white text-center mb-1">
                          {title}
                        </h4>
                        <p className="text-gray-300 text-center text-xs">
                          {service.description}
                        </p>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
              
              {/* Second Set (for seamless looping) */}
              <motion.div 
                className="flex flex-nowrap"
                animate={{
                  x: ['0%', '-100%']
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    duration: 60,
                    ease: 'linear',
                    repeatType: 'loop'
                  }
                }}
              >
                {[
                  'MERN Stack Development',
                  'Frontend Development',
                  'Backend Development',
                  'React.js Development',
                  'Python Development',
                  'AI & ML Integration',
                  'TypeScript Development',
                  'Problem Solving',
                  'Technology Innovation'
                ].map((title, index) => {
                  const service = [
                    { icon: <FaCode className="w-8 h-8" />, description: 'Full-stack applications using MongoDB, Express, React, and Node.js' },
                    { icon: <FaReact className="w-8 h-8" />, description: 'Responsive and interactive UIs with React, TypeScript, and modern CSS' },
                    { icon: <FaServer className="w-8 h-8" />, description: 'Robust backend services with Node.js, Express, and MongoDB' },
                    { icon: <TbBrandReactNative className="w-8 h-8" />, description: 'High-performance React applications with best practices' },
                    { icon: <FaPython className="w-8 h-8" />, description: 'Python applications, scripts, and automation tools' },
                    { icon: <FaBrain className="w-8 h-8" />, description: 'Integrating AI/ML models into web applications' },
                    { icon: <SiTypescript className="w-8 h-8" />, description: 'Type-safe JavaScript for scalable applications' },
                    { icon: <FaLightbulb className="w-8 h-8" />, description: 'Creative solutions to complex technical challenges' },
                    { icon: <FaCogs className="w-8 h-8" />, description: 'Staying ahead with the latest tech trends and tools' }
                  ][index];
                  
                  return (
                    <div key={`second-${index}`} className="w-80 flex-shrink-0 mx-4">
                      <motion.div
                        className="h-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#00B4D8]/20 transition-all duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-[#00B4D8] to-[#915EFF] rounded-full flex items-center justify-center mb-3 mx-auto">
                          <div className="text-white text-xl">
                            {service.icon}
                          </div>
                        </div>
                        <h4 className="text-lg font-bold text-white text-center mb-1">
                          {title}
                        </h4>
                        <p className="text-gray-300 text-center text-xs">
                          {service.description}
                        </p>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
