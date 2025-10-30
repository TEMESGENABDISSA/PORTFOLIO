import React, { useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployment_link,
}) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="relative"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
      >
        {/* Animated border */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(145, 94, 255, 0.4), transparent 40%)`,
            opacity: isHovered ? 1 : 0,
            zIndex: 1,
          }}
        />
        <div 
          className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none"
          style={{
            background: isHovered 
              ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(145, 94, 255, 0.7), rgba(145, 94, 255, 0.3))` 
              : 'rgba(255, 255, 255, 0.05)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            zIndex: 2,
          }}
        />
        
        <div className="relative z-10">
          <div
            onClick={() => deployment_link && window.open(deployment_link, "_blank")}
            className="relative w-full h-[230px] cursor-pointer flex items-center justify-center bg-black/5 rounded-2xl overflow-hidden p-2"
          >
            <img
              src={image}
              alt="project_image"
              className={`w-full h-full ${
                ['Emamu Mall', 'Airbnb Clone'].includes(name) ? 'object-contain' : 'object-cover'
              }`}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: ['Emamu Mall', 'Airbnb Clone'].includes(name) ? 'contain' : 'cover',
                padding: ['Emamu Mall', 'Airbnb Clone'].includes(name) ? '0.5rem' : '0'
              }}
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              {/* GitHub icon */}
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </a>

            {/* Only show View Project overlay if there's a deployment link */}
            {deployment_link && (
              <div
                className="absolute inset-0 flex justify-center items-center"
                style={{ opacity: 0, transition: "opacity 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(deployment_link, "_blank");
                }}
              >
                <span className="text-white text-lg font-bold">View Project</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-primary-text font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary-text text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        {/* Dynamic border effect */}
        <div 
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            border: `2px solid rgba(145, 94, 255, 0.7)`,
            borderRadius: '2xl',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: 3,
          }}
        />
      </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div id="projects" className="relative">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#915EFF] rounded-full filter blur-3xl opacity-10 -z-10" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#00B4D8] rounded-full filter blur-3xl opacity-10 -z-10" />
      
      <div className="text-center">
        <motion.div 
          variants={textVariant()}
          className="mb-8"
        >
          <p className={`${styles.sectionSubText} text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#00B4D8]`}>
            My Work
          </p>
          <h2 className={`${styles.sectionHeadText} text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300`}>
            Projects
          </h2>
        </motion.div>

        <motion.div 
          className="mx-auto max-w-4xl px-4"
          variants={fadeIn("", "", 0.1, 1)}
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos. They reflect my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </motion.div>
      </div>

      <div className="mt-10 mb-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-4 sm:px-0">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="w-full">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
