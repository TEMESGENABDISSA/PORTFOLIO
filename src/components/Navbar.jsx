import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();

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
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <div className="flex items-center">
            <p className="text-[16px] sm:text-[18px] font-bold cursor-pointer whitespace-nowrap">
              <span className="text-[#FACC15] font-black tracking-tight">Temesgen</span>
              <span className="text-[#FF5F57] font-black hidden xs:inline"> || Abdissa</span>
            </p>
          </div>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-6 lg:gap-10 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          {/* Theme Toggle Button */}
          <li className="flex items-center text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full focus:outline-none"
            >
              {theme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-1 rounded-full focus:outline-none text-white"
          >
            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              {/* Theme Toggle Button (Mobile) */}
              <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full focus:outline-none"
                >
                  {theme === "dark" ? (
                    <FaSun size={24} />
                  ) : (
                    <FaMoon size={24} />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
