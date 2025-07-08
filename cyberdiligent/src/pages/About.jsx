import React from 'react';
import AboutHero from '../components/AboutHero';
import FounderSection from '../components/FounderSection';
import ApproachSection from '../components/ApproachSection';

const About = () => {
  return (
    <div className="bg-white text-black">
      <AboutHero />
      <FounderSection />
      <ApproachSection />
    </div>
  );
};

export default About;