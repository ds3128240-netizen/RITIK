import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax calculations
  const bgTransform = `translateY(${scrollY * 0.3}px)`;
  const textTransform = `translateY(${scrollY * -0.1}px)`;
  const opacity = Math.max(0, 1 - scrollY / 700);
  const bgTextTransform = `translateY(${scrollY * 0.5}px)`;

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Graphic Text - Subtle, Massive, and Stylized */}
      <h1 
        style={{ transform: bgTextTransform }}
        className="absolute text-[18vw] font-black tracking-tighter text-[#121212] select-none z-0 whitespace-nowrap leading-none flex items-center transition-transform duration-75 ease-out"
      >
        PORTFOL<span className="text-red-600/10">IO</span>
      </h1>

      {/* Cinematic Background Image (Middle Layer) */}
      <div 
        style={{ transform: bgTransform }}
        className="absolute inset-0 z-10 pointer-events-none transition-transform duration-75 ease-out"
      >
        <img 
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000" 
          alt="Simple Minimal Background" 
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        {/* Blending Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-60"></div>
      </div>

      {/* Red Accent Elements - Restrained Luxury */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] rounded-full bg-red-600/10 mix-blend-screen blur-[140px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-[30%] right-[20%] w-[100px] h-[100px] rounded-full bg-red-600 z-10 hidden lg:block opacity-60 mix-blend-overlay animate-pulse"></div>
      <div className="absolute top-[20%] left-[15%] w-[1px] h-[40vh] bg-gradient-to-b from-transparent via-red-600/60 to-transparent z-10 hidden lg:block"></div>

      {/* Main Content */}
      <div 
        style={{ transform: textTransform, opacity }}
        className={`relative z-20 flex flex-col items-center text-center px-4 w-full transition-all duration-1000 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <div className="max-w-5xl mx-auto">
          {/* Stylized Portfolio Headline */}
          <div className="relative inline-block mb-16">
            <h2 className="font-serif-luxury text-8xl md:text-[14rem] font-medium italic lowercase tracking-tighter leading-none text-white relative z-10">
              Portfolio
            </h2>
          </div>
          
          <div className="w-24 h-[1px] bg-red-600/60 mx-auto mb-12"></div>
          
          <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto leading-relaxed tracking-widest uppercase opacity-60">
            Every project is an opportunity to craft a visual language<br/>that strengthens reputation and commands attention.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        style={{ opacity: opacity * 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 z-30"
      >
        <span className="text-[8px] uppercase tracking-[0.6em] text-gray-700 font-black">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-red-600 to-transparent opacity-80 animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;