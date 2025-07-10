import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardFade = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

export default function Blog() {
  const [carouselPage, setCarouselPage] = useState(1);

  const handleCarouselPageChange = (newPage) => {
    if (newPage >= 1 && newPage <= 2) {
      setCarouselPage(newPage);
    }
  };

  const blogPosts = [
    {
      title: "Data Quality: A Cornerstone of Effective Data Governance in Cybersecurity",
      excerpt: "In today's data-driven world, organizations across industries increasingly recognize the critical importance of data quality in driving successful business outcomes.",
      image: "https://storage.googleapis.com/a1aa/image/d82c7494-b430-4f42-a204-9cf6e2661606.jpg",
      author: "Russell Okoth",
      date: "10/1/2024",
    },
    {
      title: "The Diamond Model for Intrusion Analysis",
      excerpt: "We delve into the intricacies of the Diamond Model for Intrusion Analysis, a structured framework essential for understanding cybersecurity threats.",
      image: "https://storage.googleapis.com/a1aa/image/fdbfc33b-4595-46be-ef0a-2a8be888b2cf.jpg",
      author: "Russell Okoth",
      date: "4/21/2024",
    },
    {
      title: "Strengthening Cyber Defenses: Exploring CIS Critical Security Controls",
      excerpt: "The significance of Critical Security Controls (CSC) developed by the Center for Internet Security (CIS) in addressing cybersecurity challenges.",
      image: "https://storage.googleapis.com/a1aa/image/47c51786-6ff7-4555-da16-aac5d49b6f60.jpg",
      author: "Russell Okoth",
      date: "2/23/2024",
    },
    {
      title: "Lesson from the saddle: Pedaling through Regulatory Challenges",
      excerpt: "Drawing parallels between cycling dynamics and the life of a CISO for insights into managing cybersecurity while serving business needs.",
      image: "https://storage.googleapis.com/a1aa/image/61af45d0-c5d0-476b-a2c7-40d98ea9526d.jpg",
      author: "Russell Okoth",
      date: "10/20/2023",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white text-gray-900 font-sans p-6 md:p-12">
      {/* Header Section */}
      <motion.div 
        className="text-center mb-16"
        variants={cardFade(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Cyberdiligent Brief</h1>
        <p className="text-teal-600 text-lg font-medium mb-2">
          Expert insights on cybersecurity and risk management
        </p>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Stay informed with our latest articles, research, and perspectives on cybersecurity strategy, 
          AI governance, and emerging threats.
        </p>
      </motion.div>

      {/* Page 1 Content */}
      {carouselPage === 1 && (
        <motion.div
          className="max-w-6xl mx-auto"
          variants={cardFade(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {blogPosts.slice(0, 2).map((post, i) => (
              <BlogCard 
                key={i}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                author={post.author}
                date={post.date}
                delay={i * 0.1}
                featured
              />
            ))}
          </div>
          
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Featured Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(2, 4).map((post, i) => (
              <BlogCard 
                key={i}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                author={post.author}
                date={post.date}
                delay={0.4 + (i * 0.1)}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Page 2 Content */}
      {carouselPage === 2 && (
        <motion.div
          className="max-w-2xl mx-auto"
          variants={cardFade(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <BlogCard 
            title="Drawing Parallels: Beavers and Information Security"
            excerpt="Appreciating the importance of traits like diligence, adaptability, and protection needed in cybersecurity."
            image="https://storage.googleapis.com/a1aa/image/14612945-7ea0-4b48-75f3-39026c66d853.jpg"
            author="Russell Okoth"
            date="4/13/2023"
            delay={0.2}
            fullWidth
          />
        </motion.div>
      )}

      {/* Pagination Controls */}
      <motion.div 
        className="flex justify-center items-center gap-4 mt-16"
        variants={cardFade(0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <button 
          onClick={() => handleCarouselPageChange(carouselPage - 1)}
          disabled={carouselPage === 1}
          className="p-2 rounded-full bg-white shadow-md disabled:opacity-30 hover:bg-teal-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-teal-600" />
        </button>
        
        <div className="flex gap-2">
          {[1, 2].map((page) => (
            <button
              key={page}
              onClick={() => handleCarouselPageChange(page)}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                carouselPage === page 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-teal-50'
              } transition-colors`}
            >
              {page}
            </button>
          ))}
        </div>
        
        <button 
          onClick={() => handleCarouselPageChange(carouselPage + 1)}
          disabled={carouselPage === 2}
          className="p-2 rounded-full bg-white shadow-md disabled:opacity-30 hover:bg-teal-50 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-teal-600" />
        </button>
      </motion.div>
    </div>
  );
}

// Blog Card Component
function BlogCard({ title, excerpt, image, author, date, delay = 0, featured = false, fullWidth = false }) {
  return (
<motion.article
  className={`bg-white rounded-2xl shadow-xl overflow-hidden ${fullWidth ? 'w-full' : ''}`}
  variants={cardFade(delay)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-50px" }}
>
  <img
    src={image}
    alt=""
    className={`w-full ${featured ? 'h-64' : 'h-48'} object-cover`}
  />
  <div className="p-6">
    <h2 className={`font-bold ${featured ? 'text-2xl' : 'text-xl'} mb-3 text-gray-800`}>
      {title}
    </h2>
    <p className={`text-gray-600 mb-4 ${featured ? 'text-base' : 'text-sm'}`}>
      {excerpt}
    </p>
    <div className="text-sm text-teal-600 font-medium">
      <span>{author}</span>
      <span className="mx-2">•</span>
      <span>{date}</span>
    </div>
  </div>
</motion.article>
  );
}