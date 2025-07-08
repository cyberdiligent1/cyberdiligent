import React from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-cyber-blue font-extrabold text-lg sm:text-xl md:text-2xl text-center mb-2">
          Why Leading Organizations Choose Cyberdiligent
        </h2>
        <p className="text-cyber-blue font-bold text-xs sm:text-sm text-center mb-8">
          Security expertise that scales with your business. Risk insights that drive confident decisions.
        </p>
        <p className="text-xs sm:text-sm font-bold max-w-4xl mx-auto mb-10 leading-relaxed">
          At Cyberdiligent, we empower business and technology leaders to make confident decisions in the face of evolving cyber threats, privacy demands, and AI/ML complexity. Our tailored advisory services combine deep technical expertise with executive-level strategy — helping you align security, risk, and compliance with your business goals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto text-xs sm:text-sm">
          {/* Content sections */}
          <div>
            <h3 className="text-cyber-blue font-extrabold mb-2">Information Security & Privacy Expertise</h3>
            <p className="mb-3">
              Protect sensitive data and critical systems with security strategies grounded in industry regulations, privacy frameworks (e.g., GDPR, HIPAA, PCI, GLBA), and modern threat intelligence.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Data protection strategies</li>
              <li>Privacy-by-design program development</li>
              <li>Risk-based security controls & programs</li>
            </ul>
          </div>
          
          {/* Add other sections similarly */}
        </div>
      </main>
    </>
  );
};

export default Home;