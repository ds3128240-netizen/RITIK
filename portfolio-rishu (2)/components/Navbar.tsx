import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl py-4 shadow-[0_10px_40px_-15px_rgba(220,38,38,0.2)] border-b border-red-600/20' 
          : 'bg-transparent py-10'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-[0.4em] uppercase group flex items-center">
          <span className="relative">
            V<span className="text-red-600 transition-all duration-500 group-hover:glow-text">.</span>
            <span className="hidden group-hover:inline-block transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0">ISION</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center space-x-16">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-white transition-all duration-300 font-bold"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-red-600 transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button className="p-2 text-white/80 hover:text-red-600 transition-colors">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-12 6h12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;