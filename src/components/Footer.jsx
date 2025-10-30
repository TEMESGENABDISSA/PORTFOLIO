import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaTelegram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-8 px-4 sm:px-16 text-secondary text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <p className="text-[14px] leading-[24px] mb-4">
          © {currentYear} Temesgen Abdissa. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-4">
          {/* Example Footer Links */}
          <a
            href="#about"
            className="hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#work"
            className="hover:text-white transition-colors duration-300"
          >
            Work
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="/download/cv.pdf"
            download="Temesgen_Abdiss-CV.pdf"
            className="hover:text-white transition-colors duration-300"
          >
            Download CV
          </a>
        </div>

        <div className="flex justify-center gap-6">
          {/* Social Media Icons */}
          <a
            href="https://github.com/TEMESGENABDISSA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors duration-300"
            title="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/temesgen-abdissa-06315a25a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors duration-300"
            title="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://web.facebook.com/tame.kingman.96"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors duration-300"
            title="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="mailto:temesgenabdissa2@gmail.com"
            className="text-secondary hover:text-white transition-colors duration-300"
            title="Email"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors duration-300 flex items-center"
            title="LeetCode"
          >
            <SiLeetcode size={24} />
          </a>
          <a
            href="https://t.me/EMAMU_T"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors duration-300"
            title="Telegram"
          >
            <FaTelegram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
