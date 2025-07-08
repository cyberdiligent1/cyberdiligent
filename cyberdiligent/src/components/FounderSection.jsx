import React from 'react';

const FounderSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-6 md:px-20 py-12 md:py-20 bg-white">
      <div className="md:w-1/3 mb-10 md:mb-0">
        <img 
          alt="Portrait of a smiling man in a black suit with a purple background" 
          className="w-full max-w-sm object-cover" 
          src="https://storage.googleapis.com/a1aa/image/ee4b9d2f-fa1f-4e93-4315-fb2648a41be2.jpg" 
        />
      </div>
      <div className="md:w-2/3 md:pl-12 text-left">
        <h2 className="text-xl font-bold text-[#0a1a56] mb-1">Russell Okoth</h2>
        <h3 className="text-xl font-bold text-[#0a1a56] mb-4 leading-snug">
          Founder & Principal Consultant,
          <br />
          Cyberdiligent
        </h3>
        <p className="text-base font-normal mb-4 max-w-xl">
          Reo-afit rock on <em>clinnate</em> as insigh
          <tspan>t</tspan> shily, and suspearheadig insight, innovation, and business growth,
        </p>
        <p className="text-base font-normal max-w-xl italic">
          "<em>Cybersecurity isn't jusot about</em> avoiding harm, It's about spearheading resillence, innovation, growth."
        </p>
      </div>
    </section>
  );
};

export default FounderSection;