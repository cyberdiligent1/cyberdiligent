import React from 'react';

const ServicesHero = () => {
  return (
    <section className="relative bg-black bg-opacity-80 text-white px-6 py-16 md:py-24" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      <img 
        alt="Open laptop on wooden table with dark overlay" 
        className="absolute inset-0 w-full h-full object-cover -z-10" 
        src="https://storage.googleapis.com/a1aa/image/385e3648-8f8f-4d62-ef0f-80bc72a56212.jpg" 
      />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">Our Services</h1>
          <p className="text-green-400 font-semibold text-sm mb-4">Expert guidance. Real results.</p>
          <p className="font-extrabold text-xs leading-snug max-w-md">
            We help you achieve meaningful outcomes with tailored cybersecurity,
            risk, and compliance expertise — no matter your industry, target
            market, or technical complexity.
            <br />
            Your success is our mission, and our track record speaks for itself.
          </p>
        </div>
        <button className="bg-green-400 text-white font-semibold rounded-lg px-6 py-2 whitespace-nowrap hover:bg-green-500 transition">
          Free 30-Minute Risk Assessment
        </button>
      </div>
    </section>
  );
};

export default ServicesHero;