import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import logodark from "../assets/whitelogo.png";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./theme/ThemeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-teal-600 border-b-2 border-teal-600 pb-0.5"
      : "text-gray-800 hover:text-teal-600 dark:text-white";

  return (
    <header className="border-b p-4 sticky top-0 bg-white dark:bg-gray-900 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Cyberdiligent logo"
            className="w-48 h-10 object-contain dark:hidden"
          />
          <img
            src={logodark}
            alt="Cyberdiligent logo"
            className="w-48 h-10 object-contain hidden dark:block"
          />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-gray-800 dark:text-white"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-semibold">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={navLinkClass}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact Us
              </NavLink>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-gray-800  text-gray-800  mt-4 rounded-xl shadow-lg py-4 px-6"
          >
            <ul className="flex flex-col gap-4 text-base font-semibold">
              <li>
                <NavLink
                  to="/"
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
