import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import '../styles/animations.css';
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 sm:py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="group relative overflow-visible"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative">
            <div className="flex items-center">
              <div className="relative">
                {/* Main text with gradient */}
                <span className="text-[20px] sm:text-[22px] font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FACC15] via-[#FF8C42] to-[#FF5F57] bg-[length:300%] animate-gradient-shift">
                  Temesgen
                </span>
                
                {/* Divider with animation */}
                <span className="relative mx-2 text-white/40 group-hover:opacity-100 transition-all duration-300">
                  <span className="absolute -left-1 -right-1 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent top-1/2 transform -translate-y-1/2 group-hover:scale-x-0 group-hover:opacity-0 transition-all duration-300"></span>
                  <span className="relative z-10">//</span>
                  <span className="absolute -left-1 -right-1 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent bottom-1/2 transform translate-y-1/2 group-hover:scale-x-0 group-hover:opacity-0 transition-all duration-300"></span>
                </span>
                
                <span className="text-[20px] sm:text-[22px] font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FF5F57] via-[#FF8C42] to-[#FACC15] bg-[length:300%] animate-gradient-shift-reverse">
                  Abdissa
                </span>
              </div>
              
              {/* Animated circles */}
              <div className="ml-3 flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse" style={{animationDelay: '0.1s'}}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse" style={{animationDelay: '0.2s'}}></span>
              </div>
            </div>
            
            {/* Hover underline effect */}
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FACC15] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-center"></div>
          </div>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-6 lg:gap-8 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="relative group"
              onClick={() => setActive(nav.title)}
            >
              <a 
                href={`#${nav.id}`}
                className={`relative text-[18px] font-medium transition-all duration-300 ${
                  active === nav.title 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] via-[#FF8C42] to-[#FF5F57] font-semibold' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {nav.title}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FACC15] to-[#FF5F57] transition-all duration-300 group-hover:w-full ${
                  active === nav.title ? 'w-full' : ''
                }`}></span>
              </a>
              {active === nav.title && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#FACC15] via-[#FF8C42] to-[#FF5F57] rounded-full"></span>
              )}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button 
            className="relative w-12 h-12 flex items-center justify-center group"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            {/* Animated background circle */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-[#FACC15] via-[#FF8C42] to-[#FF5F57] opacity-0 group-hover:opacity-100 transition-all duration-500 ${toggle ? 'opacity-100' : ''}`} />
            
            {/* Menu/Close icon */}
            <div className="relative z-10 w-6 h-6 flex flex-col items-center justify-center transition-all duration-300">
              <span 
                className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${toggle ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}
              />
              <span 
                className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${toggle ? 'opacity-0' : 'opacity-100'}`}
              />
              <span 
                className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-1.5' : 'mt-1.5'}`}
              />
            </div>
            
            {/* Pulsing dots */}
            {!toggle && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <span 
                    key={i}
                    className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      animation: `pulse 2s infinite ${i * 0.2}s`,
                      boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
                    }}
                  />
                ))}
              </div>
            )}
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-2xl`}
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-3 w-full">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="w-full group"
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a 
                    href={`#${nav.id}`}
                    className={`relative w-full block py-2 px-3 rounded-lg transition-all duration-300 ${
                      active === nav.title 
                        ? 'text-white bg-gradient-to-r from-[#FACC15]/20 to-[#FF5F57]/20' 
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                  >
                    {nav.title}
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FACC15] to-[#FF5F57] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
