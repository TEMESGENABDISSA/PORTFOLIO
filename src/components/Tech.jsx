import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { FaPython, FaJava, FaDiscord, FaDatabase, FaLinux, FaPhp, FaBootstrap, FaTerminal, FaTrello, FaJira, FaCode, FaGithub } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';

const Tech = () => {
  // Custom icon components for technologies without image assets
  const techIcons = {
    'Python': <FaPython size={50} className="text-blue-400" />,
    'Java': <FaJava size={50} className="text-red-500" />,
    'C++': <SiCplusplus size={50} className="text-blue-600" />,
    'Data Structures & Algorithms': <FaCode size={50} className="text-yellow-400" />,
    'MySQL': <FaDatabase size={50} className="text-blue-300" />,
    'Linux': <FaLinux size={50} className="text-yellow-500" />,
    'PHP': <FaPhp size={50} className="text-purple-500" />,
    'Bootstrap': <FaBootstrap size={50} className="text-purple-600" />,
    'Bash Scripting': <FaTerminal size={50} className="text-gray-300" />,
    'Git': <FaGithub size={50} className="text-gray-700" />,
    'Trello': <FaTrello size={50} className="text-blue-500" />,
    'Jira': <FaJira size={50} className="text-blue-400" />,
    'Discord': <FaDiscord size={50} className="text-indigo-500" />,
  };

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#915EFF] to-[#00B4D8] mx-auto rounded-full mb-8" />
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 flex flex-col items-center"
            key={technology.name}
          >
            <div className="w-full h-full flex items-center justify-center">
              {techIcons[technology.name] ? (
                <div className="w-20 h-20 flex items-center justify-center">
                  {techIcons[technology.name]}
                </div>
              ) : (
                <BallCanvas icon={technology.icon} />
              )}
            </div>
            <p className="text-secondary text-[14px] mt-2 text-center">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
