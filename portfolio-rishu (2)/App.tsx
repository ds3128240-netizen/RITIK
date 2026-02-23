import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;