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
            className="relative w-full h-[230px] cursor-pointer"
          >
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              {/* GitHub icon */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>

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
    <div id="projects">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary-text text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-4 sm:px-0">
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
