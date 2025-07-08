import React from 'react';
import heroImage from '../assets/hero.jpg'; 

const HeroSection = () => {
  return (
    <section className="relative">
      <img 
        alt="Overhead view of people working at wooden table with laptops and tablets" 
        className="w-full h-auto object-cover" 
        src={heroImage}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center px-6 py-12 max-w-5xl mx-auto" style={{ maxWidth: '1200px' }}>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl">
          Proactive
          <span className="text-cyber-green"> Security.</span>
          <br/>
          Strategic Advisory
        </h1>
        <p className="text-white font-bold text-xs sm:text-sm max-w-md mt-4 leading-relaxed">
          Secure what matters. Navigate risk confidently with tailored expertise in cybersecurity, risk management, privacy, and AI/ML governance.
        </p>
        <button className="mt-6 bg-cyber-green text-white text-xs font-bold px-4 py-2 rounded-sm w-max hover:bg-opacity-90 transition-colors">
          Book a Free Consultation
        </button>
      </div>
    </section>
  );
};

export default HeroSection; 