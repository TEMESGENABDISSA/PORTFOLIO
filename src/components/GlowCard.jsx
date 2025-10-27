import { useRef } from "react";
import { motion } from "framer-motion";

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="relative bg-tertiary p-8 rounded-2xl mb-6 break-inside-avoid-column"
      style={{
        background: 'rgba(15, 23, 42, 0.8)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="glow absolute inset-0 pointer-events-none" 
           style={{
             background: 'radial-gradient(600px circle at var(--start, 0) 50%, rgba(59, 130, 246, 0.1), transparent 40%)',
             opacity: 0,
             transition: 'opacity 0.3s',
           }}
      />
      <div className="relative z-10">
        <p className="text-6xl text-primary-text font-black mb-4">"</p>
        <p className="text-secondary-text text-lg mb-6">{card.testimonial}</p>
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;
