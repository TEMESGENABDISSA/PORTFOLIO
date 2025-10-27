import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn, textVariant } from "../utils/motion";
import { FiSend, FiUser, FiMail as FiMailIcon, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

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
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
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
