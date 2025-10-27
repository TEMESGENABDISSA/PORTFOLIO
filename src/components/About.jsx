import React, { useRef, useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, slideIn, staggerContainer } from "../utils/motion";
import { avatar } from "../assets";

const ServiceCard = ({ index, title, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Tilt 
      className="xs:w-[250px] w-full"
      options={{
        max: 15,
        scale: 1.05,
        speed: 1000,
        transition: true,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.2, 0.75)}
        className="w-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-[1px] rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#915EFF]/20 transition-all duration-300"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative bg-[#0f172a] rounded-2xl p-6 h-full flex flex-col items-center justify-center">
          <motion.div 
            className="p-3 rounded-full bg-gradient-to-r from-[#915EFF] to-[#00B4D8] mb-4"
            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <img
              src={icon}
              alt={title}
              className="w-12 h-12 object-contain"
            />
          </motion.div>
          
          <h3 className="text-white text-xl font-bold text-center mb-2">
            {title}
          </h3>
          <div className={`h-1 w-10 bg-gradient-to-r from-[#915EFF] to-[#00B4D8] rounded-full mb-3 ${isHovered ? 'w-16' : 'w-10'} transition-all duration-300`} />
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#915EFF] to-[#00B4D8] opacity-0 rounded-2xl -z-10"
            animate={isHovered ? { opacity: 0.1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </Tilt>
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

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-6 text-gray-300 text-lg leading-relaxed"
          >
            I'm a passionate software developer with expertise in modern web technologies. 
            With a strong foundation in <span className="text-[#915EFF] font-medium">JavaScript</span> and <span className="text-[#00B4D8] font-medium">TypeScript</span>,
            I specialize in building responsive and performant applications using <span className="text-[#61DAFB] font-medium">React</span> and <span className="text-[#68A063] font-medium">Node.js</span>.
          </motion.p>
          
          <motion.p 
            variants={fadeIn("", "", 0.2, 1)}
            className="mt-6 text-gray-400 text-base leading-relaxed"
          >
            I'm a quick learner who thrives in collaborative environments, working closely with clients to transform their ideas into reality. My focus is on creating efficient, scalable, and user-friendly solutions that solve real-world problems.
          </motion.p>
          
          <motion.div 
            variants={fadeIn("", "", 0.3, 1)}
            className="mt-8"
          >
            <a
              href="/download/cv.pdf"
              download="Temesgen_Abdiss-CV.pdf"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#915EFF] to-[#00B4D8] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
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
                  src={avatar} 
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
        className="mt-24"
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        <motion.div variants={textVariant()} className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">What I Do</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-[#915EFF] to-[#00B4D8] mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
