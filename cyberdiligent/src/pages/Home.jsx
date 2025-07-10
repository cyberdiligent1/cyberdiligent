import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, AlertCircle, Scale } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const trustCards = [
    {
      title: "Information Security & Privacy",
      icon: <ShieldCheck className="text-teal-600 h-8 w-8" />,
      delay: 0,
      points: [
        "Data protection strategies for critical systems",
        "Privacy-by-design program development",
        "Compliance with GDPR, HIPAA, PCI, GLBA",
        "Risk-based security controls aligned with threat intelligence",
      ],
    },
    {
      title: "AI/ML Governance",
      icon: <Cpu className="text-teal-600 h-8 w-8" />,
      delay: 0.2,
      points: [
        "AI/ML risk frameworks & transparency",
        "Cloud & SaaS security architecture",
        "Bias, privacy, and accountability checks",
        "Secure-by-default tech adoption guidance",
      ],
    },
    {
      title: "Incident Response",
      icon: <AlertCircle className="text-teal-600 h-8 w-8" />,
      delay: 0.4,
      points: [
        "Incident response planning & retainer",
        "Ransomware and breach coaching",
        "Disclosure & executive communications",
        "Tabletop exercises & recovery playbooks",
      ],
    },
    {
      title: "Risk & Compliance",
      icon: <Scale className="text-teal-600 h-8 w-8" />,
      delay: 0.6,
      points: [
        "NIST CSF, ISO 27001, FFIEC, SOC 2 alignment",
        "Third-party/vendor risk management",
        "M&A cyber due diligence",
        "Tailored strategies for risk appetite & compliance",
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardFade = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
      },
    },
  });

  return (
    <div className="bg-gradient-to-br from-green-300 to-blue-900 min-h-screen text-white font-sans">
      {/* Hero Section */}
      <motion.section
        className="px-6 py-24 text-center"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Proactive <span className="text-white">Cybersecurity</span>.<br />
          Strategic AI & Risk Advisory.
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          Secure what matters. Navigate risk with tailored guidance in
          cybersecurity, AI/ML, and governance.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-gradient-to-r from-green-400  to-teal-500 hover:from-green-500 hover:to-teal-500 text-white px-6 py-3 rounded-xl shadow-lg transition">
            <Link to="/contact">Book a Free Consultation</Link>
          </button>
          <button className="text-white border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-teal-600 transition-colors duration-200">
            <Link to="/services">See Our Services</Link>
          </button>
        </div>
      </motion.section>

      {/* Why Trust Section */}
      <section className="bg-white text-gray-900 py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Leading Organizations Trust Cyberdiligent
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Our experts help you navigate evolving cyber threats with precision
          and confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {trustCards.map((card, i) => (
            <motion.div
              key={i}
              className="p-6 border border-gray-200 rounded-xl shadow-sm bg-gray-50"
              variants={cardFade(card.delay)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-3">
                {card.icon}
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <ul className="text-gray-600 list-disc list-inside">
                  {card.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
