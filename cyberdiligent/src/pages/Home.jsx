import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, AlertCircle, Scale, MessageCircle, X, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardFade = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay,
    },
  },
});

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

const SecurityChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const securityQuestions = [
    "Explain GDPR compliance requirements",
    "What is a zero-trust architecture?",
    "How do I respond to a ransomware attack?",
    "Best practices for cloud security",
    "AI governance frameworks for healthcare"
  ];

  const responses = {
    security: {
      "information security": "Information security focuses on protecting data from unauthorized access and ensuring confidentiality, integrity, and availability. It includes strategies like encryption, access control, and threat monitoring.",
      "privacy by design": "Privacy-by-design is an approach where privacy is built into systems and processes from the beginning, not added later. It ensures personal data is handled with care by default.",
      "gdpr": "GDPR requires protecting EU citizens' data through consent management, breach notifications, data minimization, and more.",
      "hipaa": "HIPAA is a U.S. regulation that ensures the privacy and security of health information.",
      "pci": "PCI DSS is a standard for securing credit card data and transactions.",
      "glba": "GLBA requires financial institutions to protect customer data through security policies and safeguards.",
      "risk-based controls": "Risk-based controls prioritize security efforts based on identified threats and business impact, allowing organizations to focus resources where most needed.",

      "ai governance": "AI/ML governance involves setting frameworks to ensure ethical, secure, and transparent AI systems. It includes risk assessments, transparency reports, and bias audits.",
      "saas security": "Securing SaaS involves identity access management, data encryption, vendor vetting, and continuous monitoring.",
      "ai bias": "Addressing AI bias requires data audits, fairness metrics, and accountability reviews throughout the ML lifecycle.",
      "secure by default": "Secure-by-default means designing systems that are secure out of the box, reducing reliance on users to configure settings safely.",

      "incident response": "An incident response plan outlines how to detect, respond to, and recover from security incidents. It ensures quick action and minimizes damage.",
      "ransomware": "To respond to ransomware: isolate the system, assess the breach, report the incident, and restore from backups. Never pay the ransom.",
      "breach disclosure": "Breach disclosures involve notifying affected parties, regulators, and stakeholders after a confirmed security breach — often required by law.",
      "tabletop exercise": "A tabletop exercise simulates a cyber incident so teams can practice their response plans and improve coordination.",

      "risk management": "Cyber risk management means identifying and mitigating threats to your digital assets. It includes risk assessments, mitigation planning, and compliance alignment.",
      "nist": "NIST Cybersecurity Framework is a guideline for managing and reducing cybersecurity risk across industries.",
      "iso 27001": "ISO 27001 is an international standard for managing information security via a comprehensive ISMS.",
      "vendor risk": "Vendor risk management ensures that third-party partners don't expose your organization to unnecessary cybersecurity threats.",
      "cyber due diligence": "Cyber due diligence is the process of assessing an organization's cybersecurity posture during mergers and acquisitions.",
      "risk appetite": "Risk appetite is the amount of risk an organization is willing to accept while pursuing its objectives.",

      "default": "I can answer questions about security, AI governance, compliance frameworks, incident response, and risk management. Try asking about GDPR, AI risks, or risk appetite!"
    },  
    website: {
    "services": "We offer services in cybersecurity, AI/ML governance, incident response, and compliance consulting.",
    "contact": "You can reach us via the contact form on our Contact page or book a consultation directly.",
    "about": "Cyberdiligent is a strategic advisory firm focusing on cybersecurity, risk, and AI governance.",
    "cyberdiligent": "Cyberdiligent is a Dallas-based Information Security Governance & Risk Advisory firm, founded in 2017 by Russell Okoth focusing on cybersecurity, risk, and AI governance.",
    "default": "Learn more by visiting our homepage or services section."
     },
    greetings: [
      "Hello! I'm your cybersecurity assistant. How can I help you with security questions today?",
      "Hi there! I'm here to help with your security and compliance questions.",
      "Greetings! Ask me anything about cybersecurity best practices."
    ],
    general: [
      "I'm focused on cybersecurity topics. Could you ask me something about security, compliance, or risk management?",
      "As a security assistant, I'm best equipped to answer questions about cybersecurity. Try asking about security frameworks or best practices.",
      "I specialize in security-related questions. Maybe ask me about GDPR, zero trust, or cloud security?"
    ]
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        text: responses.greetings[0],
        sender: 'bot'
      }]);
    }
  }, [isOpen, messages.length, responses.greetings]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const getRandomResponse = (category) => {
    const options = responses[category];
    return options[Math.floor(Math.random() * options.length)];
  };

const handleSend = async () => {
  if (!input.trim() || isLoading) return;

  const userMessage = { text: input, sender: 'user' };
  const updatedMessages = [...messages, userMessage];
  setMessages(updatedMessages);
  setInput('');
  setIsLoading(true);

  setTimeout(() => {
    const lowerInput = input.toLowerCase();
    let responseText = responses.general[0]; 

    if (/^(hi|hello|hey|greetings|good\s(morning|afternoon|evening))\b/i.test(lowerInput)) {
      responseText = getRandomResponse('greetings');
    }

    else if (Object.keys(responses.security).some(key => lowerInput.includes(key))) {
      const key = Object.keys(responses.security).find(k => lowerInput.includes(k));
      responseText = responses.security[key] || responses.security.default;
    }

    else if (Object.keys(responses.website).some(key => lowerInput.includes(key))) {
      const key = Object.keys(responses.website).find(k => lowerInput.includes(k));
      responseText = responses.website[key] || responses.website.default;
    }

    else {
      responseText = getRandomResponse('general');
    }

    setMessages([...updatedMessages, {
      text: responseText,
      sender: 'bot'
    }]);
    setIsLoading(false);
  }, 800);
};

  return (
    <div className="fixed bottom-2 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-[28rem] h-[32rem] bg-white dark:bg-gray-800 rounded-xl shadow-xl flex flex-col mb-4 border-2 border-teal-400"
        >
          <div className="p-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-t-xl text-white flex items-center gap-2">
            <Bot size={20} />
            <h3 className="font-bold flex-1">Security Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-900">
            {messages.map((msg, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg max-w-[90%] ${
                  msg.sender === 'user' 
                    ? 'bg-teal-700 text-white ml-auto text-right' 
                    : 'bg-teal-500 text-white mr-auto'
                }`}
              >
                {msg.text.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </motion.div>
            ))}
            
            {isLoading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 bg-teal-500 text-white rounded-lg max-w-[80%] mr-auto"
              >
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
                </div>
              </motion.div>
            )}
            
            {messages.length <= 1 && (
              <div className="mt-4">
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  TRY ASKING ABOUT:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {securityQuestions.map((question, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setInput(question);
                        setTimeout(() => inputRef.current?.focus(), 100);
                      }}
                      className="text-xs bg-teal-100 dark:bg-teal-900 hover:bg-teal-200 dark:hover:bg-teal-800 px-2 py-1 rounded-lg transition-colors text-teal-800 dark:text-teal-100"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex bg-white dark:bg-gray-800">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a security question..."
              className="flex-1 px-3 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300 bg-white text-gray-900 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className={`bg-gradient-to-r from-green-500 to-teal-600 text-white px-4  rounded-r-lg transition-opacity ${
                isLoading || !input.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
              }`}
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Chat with security assistant"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-green-300 to-blue-900 dark:from-gray-900 dark:to-teal-500 min-h-screen text-white font-sans">
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
          <button className="bg-gradient-to-r from-green-400 to-teal-500 dark:from-green-800 dark:to-teal-800 hover:from-green-500 hover:to-teal-500 dark:hover:from-green-700 dark:hover:to-teal-700 text-white px-6 py-3 rounded-xl shadow-lg transition">
            <Link to="/contact">Book a Free Consultation</Link>
          </button>
          <button className="text-white border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-teal-600 transition-colors duration-200">
            <Link to="/services">See Our Services</Link>
          </button>
        </div>
      </motion.section>

      <section className="bg-gradient-to-r from-white to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center dark:text-gray-50 mb-4">
          Why Leading Organizations Trust Cyberdiligent
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-teal-600 max-w-2xl mx-auto mb-12">
          Our experts help you navigate evolving cyber threats with precision
          and confidence.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {trustCards.map((card, i) => (
            <motion.div
              key={i}
              className="p-6 border border-gray-200 rounded-xl shadow-sm bg-gray-50 dark:bg-gray-100 transition-all duration-100 ease-in-out 
             dark:hover:shadow-teal-700 dark:hover:shadow-md 
             hover:border-teal-400 hover:bg-white"
              variants={cardFade(card.delay)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200 }}
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
        </motion.div>
      </section>

      <SecurityChatWidget />
    </div>
  );
}