import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn, textVariant } from "../utils/motion";
import { FiSend, FiUser, FiMail as FiMailIcon, FiMessageSquare, FiCheckCircle, FiX, FiAlertCircle } from 'react-icons/fi';

const Notification = ({ message, type, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className="fixed inset-0 flex items-center justify-center z-[9999] p-4 sm:p-6"
    >
      <motion.div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div 
        className={`relative w-full max-w-[95vw] sm:max-w-md mx-auto p-4 sm:p-6 rounded-2xl shadow-2xl ${
          type === 'success' 
            ? 'bg-gradient-to-br from-purple-900/80 to-blue-900/80 border border-purple-500/30' 
            : 'bg-gradient-to-br from-pink-900/80 to-red-900/80 border border-pink-500/30'
        }`}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex flex-col items-center text-center">
          <div className={`p-2 sm:p-3 rounded-full mb-3 sm:mb-4 ${
            type === 'success' 
              ? 'bg-green-500/20 text-green-400' 
              : 'bg-red-500/20 text-red-400'
          }`}>
            {type === 'success' ? (
              <FiCheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
            ) : (
              <FiAlertCircle className="w-6 h-6 sm:w-8 sm:h-8" />
            )}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
            {type === 'success' ? 'Message Sent!' : 'Error!'}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 px-1">
            {message}
          </p>
          <button 
            onClick={onClose}
            className={`w-full sm:w-auto px-5 sm:px-6 py-2 text-sm sm:text-base rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              type === 'success'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white focus:ring-purple-500/50'
                : 'bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white focus:ring-pink-500/50'
            }`}
          >
            Got it!
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000); // Auto-hide after 5 seconds
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Get current date and time
    const now = new Date();
    const date = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const time = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Temesgen",
          from_email: form.email,
          to_email: "temesgen@jsmastery.pro",
          message: form.message,
          date: date,
          time: time
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showNotification("Message sent successfully! I'll get back to you soon.", 'success');
          
          // Reset form
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showNotification("Failed to send message. Please try again.", 'error');
        }
      );
  };

  return (
    <>
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <AnimatePresence>
          {notification && (
            <Notification 
              message={notification.message} 
              type={notification.type} 
              onClose={() => setNotification(null)} 
            />
          )}
        </AnimatePresence>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-1 bg-black-100 p-8 rounded-2xl relative overflow-hidden'
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-1 opacity-5">
          <div className="absolute top-1/4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <motion.div variants={textVariant()} className="text-center max-w-3xl mx-auto">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Let's Work Together</h2>
          <p className="mt-3 text-gray-400">
            Have a project in mind or want to discuss potential opportunities? 
            Drop me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 max-w-2xl mx-auto space-y-8"
          variants={fadeIn("up", "spring", 0.5, 1)}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center bg-tertiary/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden group-hover:border-purple-500/30 transition-all duration-300">
                <div className="px-4 py-1 text-gray-500">
                  <FiUser className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setIsFocused({...isFocused, name: true})}
                  onBlur={() => setIsFocused({...isFocused, name: false})}
                  required
                  className="w-full px-4 py-5 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div className={`h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${isFocused.name ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center bg-tertiary/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden group-hover:border-blue-500/30 transition-all duration-300">
                <div className="px-4 py-1 text-gray-500">
                  <FiMailIcon className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setIsFocused({...isFocused, email: true})}
                  onBlur={() => setIsFocused({...isFocused, email: false})}
                  required
                  className="w-full px-4 py-5 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div className={`h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 ${isFocused.email ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-teal-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-start bg-tertiary/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden group-hover:border-emerald-500/30 transition-all duration-300">
                <div className="px-4 pt-5 text-gray-500">
                  <FiMessageSquare className="w-5 h-5" />
                </div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setIsFocused({...isFocused, message: true})}
                  onBlur={() => setIsFocused({...isFocused, message: false})}
                  required
                  rows="5"
                  className="w-full px-4 py-5 bg-transparent text-white placeholder-gray-500 focus:outline-none resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className={`h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 ${isFocused.message ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px rgba(99, 102, 241, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className={`relative overflow-hidden w-full py-5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            <span className="relative z-10 flex items-center justify-center">
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <span className="mr-3 text-lg">Send Message</span>
                  <FiSend className="w-5 h-5" />
                </>
              )}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </motion.form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative hidden md:block'
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl"></div>
        <EarthCanvas />
      </motion.div>
      </div>
    </>
  );
};

// Add custom animation for the blob effect
const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(20px, -30px) scale(1.05);
    }
    66% {
      transform: translate(-15px, 15px) scale(0.95);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  .animate-blob {
    animation: blob 10s infinite ease-in-out;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
document.head.appendChild(style);

export default SectionWrapper(Contact, "contact");
