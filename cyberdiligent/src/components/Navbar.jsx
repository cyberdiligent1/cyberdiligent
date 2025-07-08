import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-teal-600 border-b-2 border-teal-600 pb-0.5'
      : 'text-gray-800 hover:text-teal-600';

  return (
    <header className="border-b p-4 sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Cyberdiligent logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-semibold">Cyberdiligent</span>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-gray-800"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-semibold">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
            <li><NavLink to="/blog" className={navLinkClass}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink></li>
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <nav className="md:hidden mt-3">
          <ul className="flex flex-col gap-3 text-sm font-semibold">
            <li><NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/services" className={navLinkClass} onClick={() => setMenuOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/blog" className={navLinkClass} onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>Contact Us</NavLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
