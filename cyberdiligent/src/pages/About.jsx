import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Cpu, 
  UserCircle, 
  BarChart2,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    },
  };

  return (
    <div className="bg-gradient-to-br from-green-300 to-blue-900 min-h-screen text-white font-sans">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <img 
          alt="Overhead view of a person writing on a paper with charts and a clock and laptop on a wooden desk" 
          className="w-full h-[60vh] object-cover" 
          src="https://storage.googleapis.com/a1aa/image/c784466a-4845-4db2-ab1e-fd52855ad38d.jpg" 
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 py-12 max-w-5xl mx-auto">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Our <span className="text-cyber-green">3 C's</span> Philosophy
          </motion.h1>
          <motion.p 
            className="text-lg font-medium max-w-xl mt-4 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
          >
            Committed to helping organizations navigate cybersecurity challenges through proactive strategies.
          </motion.p>
          <motion.div 
            className="mt-8"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-cyber-green text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Contact Us
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-white text-gray-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="md:col-span-1">
              <img 
                alt="Portrait of a smiling man in a black suit with a purple background" 
                className="w-full max-w-sm object-cover rounded-xl shadow-lg" 
                src="https://storage.googleapis.com/a1aa/image/ee4b9d2f-fa1f-4e93-4315-fb2648a41be2.jpg" 
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-[#0a1a56] mb-1">Russell Okoth</h2>
              <h3 className="text-xl font-bold text-[#0a1a56] mb-6">
                Founder & Principal Consultant, Cyberdiligent
              </h3>
              <p className="text-base text-gray-600 mb-6 max-w-xl leading-relaxed">
                With over 15 years in cybersecurity leadership, Russell brings unparalleled expertise 
                in building resilient security frameworks for Fortune 500 companies and startups alike.
              </p>
              <blockquote className="border-l-4 border-cyber-green pl-4 py-2 text-gray-700 italic">
                "Cybersecurity isn't just about avoiding harm—it's about spearheading resilience, 
                enabling innovation, and driving sustainable business growth."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-800 to-teal-700">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Our Strategic Approach
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ApproachCard 
              icon={<BarChart2 className="text-cyber-green h-8 w-8" />}
              title="The Strategist"
              description="Aligning security initiatives with business objectives to create resilient frameworks that support growth and innovation."
              delay={0.1}
            />
            
            <ApproachCard 
              icon={<Cpu className="text-cyber-green h-8 w-8" />}
              title="The Technologist"
              description="Implementing cutting-edge security technologies with architecture designed for tomorrow's threats."
              delay={0.2}
            />
            
            <ApproachCard 
              icon={<UserCircle className="text-cyber-green h-8 w-8" />}
              title="The Advisor"
              description="Providing actionable guidance to navigate complex regulatory landscapes and emerging threats."
              delay={0.3}
            />
            
            <ApproachCard 
              icon={<ShieldCheck className="text-cyber-green h-8 w-8" />}
              title="The Guardian"
              description="Proactive protection through continuous monitoring, threat intelligence, and incident readiness."
              delay={0.4}
            />
          </div>

          <motion.div 
            className="text-center mt-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl font-extrabold text-white">Ready to strengthen your security?</p>
            <p className="text-2xl font-bold text-cyber-green mt-4">(682) 990-5950</p>
            <Link 
              to="/contact" 
              className="mt-6 inline-block bg-white text-gray-900 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Approach Card Component
const ApproachCard = ({ icon, title, description, delay = 0 }) => {
  const cardFade = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay
      }
    }
  };

  return (
    <motion.div
      className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20"
      variants={cardFade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="flex items-start gap-4">
        <div className="bg-black bg-opacity-30 p-3 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-200">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;