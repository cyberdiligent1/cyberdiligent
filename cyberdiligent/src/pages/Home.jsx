import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, AlertCircle, Scale, MessageCircle, X, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: import.meta.env.VITE_COHERE_API_KEY,
});

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

  const companyResponses = {
    "who are you": "I'm Cyberdiligent's AI security assistant. I can help answer questions about our services, cybersecurity best practices, and risk management.",
    "cyberdiligent": "Cyberdiligent is a Dallas-based Information Security Governance & Risk Advisory firm founded in 2017. We specialize in:\n- Cybersecurity strategy\n- AI/ML governance\n- Incident response\n- Risk & compliance",
    "services": "We offer:\n1. Strategic Advisory & Governance\n2. Defense, Detection & Response\n3. Risk, Compliance & Trust\n\nVisit our Services page for details.",
    "contact": "You can reach us by:\n- Filling out the contact form on our website\n- Email: info@cyberdiligent.com\n- Phone: (555) 123-4567\n\nWe respond within 1 business day.",
    "about": "Cyberdiligent helps organizations navigate cybersecurity challenges through our 3 C's Philosophy:\n1. The Strategist\n2. The Technologist\n3. The Advisor\n4. The Guardian",
    "founder": "Russell Okoth founded Cyberdiligent in 2017. With 15+ years in cybersecurity leadership, he's helped Fortune 500 companies and startups build resilient security frameworks.",
    "location": "Our headquarters is in Dallas, Texas, but we serve clients nationwide across various industries.",
    "philosophy": "Our 3 C's Philosophy:\n1. Committed to proactive strategies\n2. Comprehensive security solutions\n3. Client-focused advisory services",
    "help": "I can help with:\n- Cybersecurity questions\n- Information about Cyberdiligent\n- Security best practices\n\nTry asking about our services or specific security topics."
  };

  const securityQuestions = [
    "Explain GDPR compliance requirements",
    "What is a zero-trust architecture?",
    "How do I respond to a ransomware attack?",
    "Best practices for cloud security",
    "AI governance frameworks for healthcare"
  ];

  const greetings = [
    "Hello! I'm Cyberdiligent's security assistant. How can I help you today?",
    "Hi there! I'm here to help with your security and compliance questions.",
    "Greetings! Ask me anything about cybersecurity or our services."
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        text: greetings[0],
        sender: 'bot'
      }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { text: input, sender: 'user' };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    const lowerInput = input.toLowerCase();
    const companyQuestion = Object.keys(companyResponses).find(question => 
      lowerInput.includes(question)
    );

    if (companyQuestion) {
      setTimeout(() => {
        setMessages([...updatedMessages, {
          text: companyResponses[companyQuestion],
          sender: 'bot'
        }]);
        setIsLoading(false);
      }, 300);
    } 
    else if (/^(hi|hello|hey)/i.test(input)) {
      setTimeout(() => {
        setMessages([...updatedMessages, {
          text: greetings[Math.floor(Math.random() * greetings.length)],
          sender: 'bot'
        }]);
        setIsLoading(false);
      }, 300);
    }
    else {
      try {
        const chatHistory = updatedMessages.map(msg => ({
          role: msg.sender === 'user' ? "USER" : "CHATBOT",
          message: msg.text
        }));

        const response = await cohere.chat({
          message: input,
          chatHistory: chatHistory,
          model: 'command',
          temperature: 0.3,
          promptTruncation: 'AUTO',
          connectors: [],
          documents: []
        });

        setMessages([...updatedMessages, {
          text: response.text,
          sender: 'bot'
        }]);
      } catch (error) {
        setMessages([...updatedMessages, {
          text: "I'm having technical difficulties. Please try again later or contact us directly.",
          sender: 'bot'
        }]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="fixed bottom-2 right-2 sm:right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-[90vw] sm:w-[28rem] h-[32rem] bg-white dark:bg-gray-800 rounded-xl shadow-xl flex flex-col mb-4 border-2 border-teal-400"
          style={{ maxWidth: 'calc(100vw - 1rem)' }}
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
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-4 mb-2">
                  OR ABOUT US:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Who are Cyberdiligent?", "What services do you offer?", "How to contact?"].map((question, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setInput(question);
                        setTimeout(() => inputRef.current?.focus(), 100);
                      }}
                      className="text-xs bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 px-2 py-1 rounded-lg transition-colors text-purple-800 dark:text-purple-100"
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
              className={`bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 rounded-r-lg transition-opacity ${
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