import React from 'react';

const ServicesNavbar = () => {
  return (
    <header className="bg-gray-100 flex justify-between items-center px-6 py-4">
      <div className="flex items-center space-x-2">
        <img 
          alt="Cyberdiligent logo with purple and green shapes" 
          className="w-10 h-10" 
          src="https://storage.googleapis.com/a1aa/image/a73ba165-d352-49ff-9c8b-b09d15467c19.jpg" 
        />
        <span className="text-2xl font-normal">Cyberdiligent</span>
      </div>
      <nav className="flex space-x-6 text-xs font-bold">
        <a className="hover:underline" href="/">Home</a>
        <a className="hover:underline" href="/about">About</a>
        <a className="font-extrabold text-gray-200 cursor-default select-none" href="/services">Services</a>
        <a className="hover:underline" href="/blog">Blog</a>
        <a className="hover:underline" href="/contact">Contact Us</a>
      </nav>
    </header>
  );
};

export default ServicesNavbar;