import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from 'framer-motion';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaTelegram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);
  
  // Typewriter effect state
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  const phrases = [
    'Software Engineer',
    'Full Stack Developer',
    'Problem Solver',
    'AI Enthusiast!',
    'Tech Explorer',
    'Lifelong Learner',
    'Creative Thinker'
  ];
  
  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const typeSpeed = isDeleting ? 30 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;
    
    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < currentPhrase.length) {
        // Typing
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === currentPhrase.length) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText.length > 0) {
        // Deleting
        setDisplayText(displayText.substring(0, displayText.length - 1));
      } else if (isDeleting && displayText.length === 0) {
        // Move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      }
    }, isDeleting ? deleteSpeed : typeSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex]);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
      
      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className={`max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12`}>
          <div className="relative">
            {/* Decorative elements */}
            <motion.div 
              className="absolute -left-6 top-1/2 -translate-y-1/2 h-3/4 w-0.5 bg-gradient-to-b from-transparent via-[#915EFF] to-transparent opacity-70"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 0.7 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            
            {/* Main content */}
            <motion.div 
              className="pl-8 sm:pl-12 relative"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Animated greeting with About section styling */}
              <motion.div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }
                  }}
                  ref={ref}
                >
                  <div className="space-y-2">
                    <p className={`${styles.sectionSubText} text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#00B4D8]`}>
                      Welcome to My World
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">I'm </span>
                      <span className="relative inline-block">
                        <span className="absolute -inset-1 bg-gradient-to-r from-[#915EFF] via-[#00B4D8] to-[#6A3BB5] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-500"></span>
                        <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] via-[#B79AF0] to-[#00B4D8] animate-gradient">
                          Temesgen
                        </span>
                      </span>
                    </h1>
                  </div>
                </motion.div>

                {/* Animated subtitle with typewriter effect */}
                <motion.div
                  className="mt-8 h-20 flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: 0.3,
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }
                  }}
                >
                  <div className="relative group w-full max-w-2xl">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#915EFF] via-[#00B4D8] to-[#6A3BB5] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative px-6 py-4 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800/50 group-hover:border-[#915EFF]/30 transition-all duration-300">
                      <div className="flex items-center">
                        <div className="flex space-x-2 mr-3">
                          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                          <div className="w-3 h-3 rounded-full bg-[#28C940]" />
                        </div>
                        <span className="text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#B79AF0] via-[#00B4D8] to-[#6A3BB5] animate-gradient">
                          {displayText}
                          <span className="ml-2 inline-block w-1.5 h-6 bg-[#00B4D8] rounded-full animate-pulse" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Buttons with About section styling */}
                <motion.div 
                  className="mt-12 flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: 0.6,
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }
                  }}
                >
                  <motion.a
                    href="#work"
                    className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-xl text-lg font-medium text-white w-full sm:w-auto"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#915EFF] to-[#00B4D8] rounded-xl" />
                    <span className="absolute inset-0 bg-gradient-to-r from-[#00B4D8] to-[#6A3BB5] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center font-semibold">
                      View My Work
                      <svg 
                        className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-y-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </span>
                  </motion.a>
                  
                  <motion.a
                    href="#contact"
                    className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-xl text-lg font-medium text-white border-2 border-[#915EFF]/30 hover:border-[#00B4D8]/50 transition-all duration-300 w-full sm:w-auto"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-[#00B4D8]/5 group-hover:to-[#915EFF]/5 transition-all duration-300" />
                    <span className="relative z-10 flex items-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-[#00B4D8] group-hover:from-[#00B4D8] group-hover:to-[#915EFF] transition-all duration-300">
                      Let's Connect
                      <svg 
                        className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3D Model */}
      <div className="absolute inset-0 w-full h-full z-0">
        <ComputersCanvas />
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        {/* Social links */}
        <motion.div 
          className="flex gap-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/TEMESGENABDISSA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="GitHub"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/temesgen-abdissa-06315a25a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-300"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="LinkedIn"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://web.facebook.com/tame.kingman.96"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#1877F2] transition-colors duration-300"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Facebook"
          >
            <FaFacebook size={24} />
          </motion.a>
          <motion.a
            href="mailto:temesgenabdissa2@gmail.com"
            className="text-gray-400 hover:text-[#EA4335] transition-colors duration-300"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Email"
          >
            <FaEnvelope size={24} />
          </motion.a>
          <motion.a
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#FFA116] transition-colors duration-300"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="LeetCode"
          >
            <SiLeetcode size={24} />
          </motion.a>
          <motion.a
            href="https://t.me/EMAMU_T"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#2AABEE] transition-colors duration-300"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Telegram"
          >
            <FaTelegram size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll down button */}
        <a href="#about" className="block">
          <div className="w-8 h-14 rounded-3xl border-2 border-gray-400 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-gray-400"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
