import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-center py-6 text-sm font-medium text-gray-700">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
        <p>&copy; {new Date().getFullYear()} Cyberdiligent</p>
        <p>(682) 990-5950</p>
        <p>info@cyberdiligent.net</p>
        <a
          href="https://linkedin.com/company/cyberdiligent"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:text-cyan-600 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
