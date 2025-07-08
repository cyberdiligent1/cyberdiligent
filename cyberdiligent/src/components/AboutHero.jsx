import React from 'react';

const AboutHero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-[#fafafa] px-6 md:px-20 py-12 md:py-20">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl font-extrabold leading-tight mb-4">Our 3 C's</h1>
        <p className="text-base font-medium max-w-md">
          We're committed to help <span className="font-semibold">ca</span> readvicee advice through preadusive.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-end">
        <img 
          alt="Overhead view of a person writing on a paper with charts and a clock and laptop on a wooden desk" 
          className="w-full max-w-md object-cover" 
          src="https://storage.googleapis.com/a1aa/image/c784466a-4845-4db2-ab1e-fd52855ad38d.jpg" 
        />
      </div>
    </section>
  );
};

export default AboutHero;