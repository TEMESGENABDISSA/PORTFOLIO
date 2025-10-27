import { useRef, useState } from "react";
import { testimonials } from "../constants";
import TitleHeader from "./TitleHeader";
import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial, index }) => {
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
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative bg-[#1d1836] p-8 rounded-2xl flex flex-col h-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Stars */}
        <div className="flex items-center gap-1 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg 
              key={star} 
              className="w-5 h-5 text-yellow-400" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Testimonial Text */}
        <p className="text-[#e6e6e6] text-lg mb-8 flex-grow">"{testimonial.testimonial}"</p>
        
        {/* Author Info */}
        <div className="flex items-center gap-4 mt-auto">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-[#915EFF]"
          />
          <div>
            <p className="font-bold text-white">{testimonial.name}</p>
            <p className="text-[#b8b8b8] text-sm">{testimonial.designation}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#050816]">
      <div className="container mx-auto px-4">
        <TitleHeader
          title="What People Say About Me"
          sub="TESTIMONIALS"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="h-full">
              <TestimonialCard 
                testimonial={testimonial} 
                index={index} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
