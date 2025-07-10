import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Cpu, Scale } from "lucide-react";
import advisoryImage from "../assets/advisory.jpeg";
import defenseImage from "../assets/defense.jpg";
import riskImage from "../assets/risk.jpg";

const cardFade = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

export default function Services() {
  const services = [
    {
      title: "Strategic Advisory & Governance",
      icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
      image: advisoryImage,
      description:
        "Align cybersecurity with business growth, regulatory expectations, and emerging risk.",
      delay: 0,
      bullets: [
        "Cybersecurity Strategy & Roadmap",
        "Board, C-Suite & Startup Advisory",
        "AI/ML Governance & Responsible Innovation",
        "M&A Cyber Due Diligence",
      ],
    },
    {
      title: "Defense, Detection & Response",
      icon: <Cpu className="w-6 h-6 text-teal-600" />,
      image: defenseImage,
      description:
        "Proactively harden your defenses and respond fast when it matters most.",
      delay: 0.2,
      bullets: [
        "Incident Response Programs & Tabletop Exercises",
        "Vulnerability Management",
        "Application Security & Secure SDLC",
        "AI/Cloud Security Risk Management",
      ],
    },
    {
      title: "Risk, Compliance & Trust",
      icon: <Scale className="w-6 h-6 text-teal-600" />,
      image: riskImage,
      description:
        "Turn compliance into a competitive advantage — and risk into resilience.",
      delay: 0.4,
      bullets: [
        "Regulatory & Standards Alignment (e.g., NIST, ISO, FFIEC, GDPR)",
        "Vendor & Third-Party Risk Management",
        "Security Awareness, Training & Leadership Education",
        "Data Protection & Privacy Governance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white text-gray-900 font-sans p-6 md:p-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Our Services
        </h1>
        <p className="text-teal-600 text-lg font-medium mb-2">
          Expert guidance. Real results.
        </p>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Unlock growth with tailored cybersecurity, risk, and AI/ML governance
          services. Our advisors give you clarity to act, control to adapt, and
          confidence to grow securely.
        </p>
        <button className="mt-6 bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition duration-200">
          <Link to="/contact">Free 30-Minute Risk Assessment</Link>
        </button>
      </div>
      <div className="space-y-16 max-w-6xl mx-auto px-4">
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={cardFade(service.delay)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } items-center gap-8 bg-white rounded-2xl shadow-xl overflow-hidden`}
          >
            <div className="w-full lg:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover aspect-video"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6 space-y-3">
              <div className="flex items-center gap-3">
                {service.icon}
                <h3 className="text-2xl font-bold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="italic text-gray-600">{service.description}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text">
                {service.bullets.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
