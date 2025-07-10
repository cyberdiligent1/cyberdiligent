import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
// import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="font-roboto-mono min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
{/* /          <Route path="/blog" element={<Blog />} /> */}
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/services" element={<Services />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;