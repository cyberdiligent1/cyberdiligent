import React from "react";
import { ShieldCheck, Cpu, AlertCircle, Scale } from "lucide-react";
import { Link } from "react-router-dom";

export default function CyberdiligentHomepage() {
  return (
    <div className="bg-gradient-to-br from-green-300 to-blue-900 min-h-screen text-white font-sans">
      <section className="px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Proactive <span className="text-white">Cybersecurity</span>.<br />
          Strategic AI & Risk Advisory.
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          Secure what matters. Navigate risk with tailored guidance in cybersecurity, AI/ML, and governance.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-gradient-to-r from-green-300 via-teal-500 to-teal-500 text-white px-6 py-3 rounded-xl shadow-lg hover:brightness-110 transition">
          <Link to="/contact">
            Book a Free Consultation
          </Link>         
          </button>
          <button className="text-white border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-teal-600 transition-colors duration-200">
            <Link to="/services">
              See Our Services
            </Link>
          </button>
        </div>
      </section>

      <section className="bg-white text-gray-900 py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Leading Organizations Trust Cyberdiligent
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Our experts help you navigate evolving cyber threats with precision and confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 border border-gray-200 rounded-xl shadow-sm bg-gray-50">
            <div className="flex flex-col gap-3">
              <ShieldCheck className="text-blue-900 h-8 w-8" />
              <h3 className="text-xl font-semibold">Information Security & Privacy</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Data protection strategies for critical systems</li>
                <li>Privacy-by-design program development</li>
                <li>Compliance with GDPR, HIPAA, PCI, GLBA</li>
                <li>Risk-based security controls aligned with threat intelligence</li>
              </ul>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl shadow-sm bg-gray-50">
            <div className="flex flex-col gap-3">
              <Cpu className="text-blue-900 h-8 w-8" />
              <h3 className="text-xl font-semibold">AI/ML Governance</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>AI/ML risk frameworks & transparency</li>
                <li>Cloud & SaaS security architecture</li>
                <li>Bias, privacy, and accountability checks</li>
                <li>Secure-by-default tech adoption guidance</li>
              </ul>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl shadow-sm bg-gray-50">
            <div className="flex flex-col gap-3">
              <AlertCircle className="text-blue-900 h-8 w-8" />
              <h3 className="text-xl font-semibold">Incident Response</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Incident response planning & retainer</li>
                <li>Ransomware and breach coaching</li>
                <li>Disclosure & executive communications</li>
                <li>Tabletop exercises & recovery playbooks</li>
              </ul>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl shadow-sm bg-gray-50">
            <div className="flex flex-col gap-3">
              <Scale className="text-blue-900 h-8 w-8" />
              <h3 className="text-xl font-semibold">Risk & Compliance</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>NIST CSF, ISO 27001, FFIEC, SOC 2 alignment</li>
                <li>Third-party/vendor risk management</li>
                <li>M&A cyber due diligence</li>
                <li>Tailored strategies for risk appetite & compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
