import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-2">
        <img 
          alt="Cyberdiligent logo" 
          className="w-10 h-10 object-contain" 
          src={logo} 
        />
        <span className="text-xl font-normal">Cyberdiligent</span>
      </div>
      <nav>
        <ul className="flex space-x-6 text-xs font-extrabold">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'text-white border-b border-white pb-0.5' : 'text-black'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? 'text-white border-b border-white pb-0.5' : 'text-black'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive ? 'text-white border-b border-white pb-0.5' : 'text-black'
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                isActive ? 'text-white border-b border-white pb-0.5' : 'text-black'
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? 'text-white border-b border-white pb-0.5' : 'text-black'
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;