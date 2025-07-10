import React from 'react';
import ServicesNavbar from '../components/ServicesNavbar';
import ServicesHero from '../components/ServicesHero';
import ServiceCard from '../components/ServiceCard';
import ServicesFooter from '../components/ServicesFooter';

const Services = () => {
  const servicesData = [
    {
      title: "Strategic Advisory & Governance",
      description: "Executive-level insight to align cybersecurity with business growth, regulatory expectations, and emerging risks.",
      imageUrl: "https://storage.googleapis.com/a1aa/image/3399b9f5-8212-4da3-8e9f-5bdd277b8623.jpg",
      imageAlt: "Person holding a tablet displaying colorful charts and graphs",
      items: [
        "Cybersecurity Strategy & Roadmap",
        "Board, C-Suite & Startup Advisory",
        "AI/ML Governance & Responsible Innovation",
        "M&A Cyber Due Diligence",
        "Policy, Program & Framework Development"
      ],
      reverse: false
    },
    {
      title: "Risk, Compliance & Trust",
      description: "Turn compliance into a competitive advantage — and risk into resilience.",
      imageUrl: "https://storage.googleapis.com/a1aa/image/7b65d702-de20-4917-ff8a-8476927692e8.jpg",
      imageAlt: "Three women sitting on a couch, each using a laptop with stickers",
      items: [
        "Regulatory & Standards Alignment (e.g., NIST, ISO, FFIEC, GDPR)",
        "Vendor & Third-Party Risk Management",
        "Security Awareness, Training & Leadership Education",
        "Data Protection & Privacy Governance"
      ],
      reverse: true
    },
    {
      title: "Defense, Detection & Response",
      description: "Proactively harden your defenses and respond fast when it matters most.",
      imageUrl: "https://storage.googleapis.com/a1aa/image/fe3ef629-e0c0-4057-c7c3-eb16700244ea.jpg",
      imageAlt: "People working with laptops and writing notes on paper",
      items: [
        "Incident Response Programs & Tabletop Exercises",
        "Threat Intelligence & Vulnerability Management",
        "Application Security & Secure SDLC",
        "Identity Governance & Zero Trust Architecture",
        "AI/Cloud Security Risk Management"
      ],
      reverse: false
    }
  ];

  return (
    <div className="bg-white text-black" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      <ServicesNavbar />
      <ServicesHero />
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </section>
      <ServicesFooter />
    </div>
  );
};

export default Services;