import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { testimonials } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';

const TestimonialCard = ({ testimonial, isActive, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.1 });
  
  // Generate initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  // Fallback for missing images
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextElementSibling.style.display = 'flex';
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 md:p-8 rounded-2xl shadow-lg h-full flex flex-col ${
        isActive ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView && isActive ? { 
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' }
      } : {}}
    >
      {/* Quote icon */}
      <div className="absolute top-6 right-6 text-[#00B4D8] opacity-20">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
      </div>
      
      <div className="relative z-10 flex-1 flex flex-col h-full">
        {/* Testimonial Text */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <blockquote className="text-[#e6e6e6] text-sm sm:text-base md:text-lg leading-relaxed">
            "{testimonial.testimonial}"
          </blockquote>
        </div>
        
        {/* Author Info */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex items-center">
            <div className="relative flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-r from-[#915EFF] to-[#00B4D8] p-0.5">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-full w-full rounded-full object-cover"
                onError={handleImageError}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a2e] rounded-full hidden">
                <span className="text-white font-medium text-sm">{getInitials(testimonial.name)}</span>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
              <p className="text-sm text-gray-300">
                {testimonial.designation}
                {testimonial.company && ` • ${testimonial.company}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  // Sort testimonials to ensure Tsegaw Kebede is first
  const sortedTestimonials = [...testimonials].sort((a, b) => 
    a.name === 'Tsegaw Kebede' ? -1 : b.name === 'Tsegaw Kebede' ? 1 : 0
  );
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const intervalRef = useRef();
  const containerRef = useRef();
  const testimonialsRef = useRef({});

  // Initialize component and set up mobile detection
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial mobile state
    checkIfMobile();
    
    // Mark as mounted after initial render
    setIsMounted(true);
    
    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      clearInterval(intervalRef.current);
    };
  }, []);

  // Auto-rotate to next testimonial
  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex(prev => (prev === sortedTestimonials.length - 1 ? 0 : prev + 1));
  }, [sortedTestimonials.length]);
  
  // Handle click on testimonial to go to next
  const handleTestimonialClick = useCallback((e) => {
    e.preventDefault();
    goToNext();
  }, [goToNext]);

  const goToIndex = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(prev => !prev);
  }, []);

  // Handle auto-rotation
  useEffect(() => {
    // Start auto-rotation after component mounts
    intervalRef.current = setInterval(goToNext, 5000);
    
    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [goToNext]);

  // Pause auto-rotation on hover (desktop only)
  const handleMouseEnter = useCallback(() => {
    if (!isMobile) {
      clearInterval(intervalRef.current);
    }
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      intervalRef.current = setInterval(goToNext, 5000);
    }
  }, [isMobile, goToNext]);

  // Set up refs for each testimonial with useCallback for better performance
  const setTestimonialRef = useCallback((el, index) => {
    if (el) {
      testimonialsRef.current[index] = el;
    }
  }, []);


  return (
    <section 
      className="relative py-12 sm:py-16 bg-gradient-to-b from-[#0a0b1a] to-[#1a1b2e] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#00B4D8] text-sm font-semibold mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            What People Say
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#915EFF] to-[#00B4D8] mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div 
            className="relative h-[500px] sm:h-[400px] mb-8 sm:mb-10 overflow-hidden cursor-pointer"
            onClick={handleTestimonialClick}
            title="Click to view next testimonial"
          >
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={activeIndex}
                className="absolute inset-0 w-full h-full"
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <TestimonialCard
                  ref={el => setTestimonialRef(el, activeIndex)}
                  testimonial={sortedTestimonials[activeIndex]}
                  isActive={true}
                  index={activeIndex}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center mt-6 space-x-2">
            {sortedTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-6 bg-gradient-to-r from-[#915EFF] to-[#00B4D8]' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Add custom scrollbar styles
const customStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #00B4D8;
    border-radius: 4px;
  }
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #00B4D8 transparent;
  }
`;

// Add styles to document head
const styleElement = document.createElement('style');
styleElement.textContent = customStyles;
document.head.appendChild(styleElement);

export default SectionWrapper(Testimonials, 'testimonials');
