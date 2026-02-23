import React, { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Calculate parallax offsets
  const sectionTop = sectionRef.current?.offsetTop || 0;
  const relativeScroll = scrollY - sectionTop;
  const bgImageParallax = relativeScroll * 0.15;
  const frontImageParallax = relativeScroll * -0.05;

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-32 bg-[#111111] overflow-hidden relative"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div 
            className={`order-2 lg:order-1 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            <div className="flex items-center mb-8 gap-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase whitespace-nowrap">About Me</h2>
              <div className="h-[1px] w-12 md:w-24 bg-red-600 mt-2 opacity-60"></div>
            </div>

            <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed mb-12 uppercase tracking-wide">
              I am a Graphic Designer dedicated to creating meaningful work that makes an impact. With a focus on Layout and Composition and Color Theory, I believe that great results come from curiosity and constant learning.
            </p>
            
            <p className="text-sm text-gray-500 leading-loose italic max-w-lg border-l border-red-600 pl-8 py-2">
              "I create work that refuses to blend in and demands to be remembered."
            </p>
          </div>

          <div className="relative order-1 lg:order-2 h-[500px] flex items-center justify-center">
            {/* Red Glow Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-600/10 blur-[100px] rounded-full z-0"></div>
            
            <div 
              style={{ transform: `translateY(${bgImageParallax}px) rotate(-3deg)` }}
              className={`absolute top-0 right-0 w-2/3 h-full z-0 bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800&grayscale=true" 
                alt="Design Studio Background" 
                className="w-full h-full object-cover opacity-20 grayscale"
              />
            </div>
            
            <div 
              style={{ transform: `translateY(${frontImageParallax}px) rotate(3deg)` }}
              className={`group relative z-10 w-[80%] h-[90%] shadow-2xl border border-white/10 overflow-hidden bg-black transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
               <img 
                src="https://i.ibb.co/bM2h03XK/MY-PIC-CROP.png" 
                alt="Designer Portrait" 
                className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;