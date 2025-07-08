import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center py-6 text-xs font-extrabold bg-gray-50">
      <p>(682)990-5950</p>
      <p>info@cyberdiligent.net</p>
      <a 
        href="https://linkedin.com/company/cyberdiligent" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-cyber-blue inline-block mt-1 hover:text-cyber-green transition-colors"
      >
        <FaLinkedin size={16} />
      </a>
    </footer>
  );
};

export default Footer;