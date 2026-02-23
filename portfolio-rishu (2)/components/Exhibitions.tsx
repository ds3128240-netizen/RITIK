
import React from 'react';
import { EXHIBITIONS } from '../constants';

const Exhibitions: React.FC = () => {
  return (
    <section className="py-32 bg-black border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
           <h2 className="text-4xl md:text-7xl font-black uppercase">My<br/>Exhibitions</h2>
           <p className="text-gray-600 max-w-sm text-right font-light leading-relaxed">
             THE ARTIST'S ABILITY TO TRANSCEND BOUNDARIES AND CONNECT WITH A GLOBAL AUDIENCE IS A TESTAMENT TO THE UNIVERSAL LANGUAGE OF VISUAL STORYTELLING.
           </p>
        </div>

        {EXHIBITIONS.map((ex) => (
          <div key={ex.id} className="relative group">
            <div className="aspect-[21/9] overflow-hidden bg-[#111]">
              <img 
                src={ex.imageUrl} 
                alt={ex.title} 
                className="w-full h-full object-cover grayscale transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full md:w-1/2 p-8 md:p-12 bg-black/80 backdrop-blur-xl border-t border-r border-white/10 translate-y-12 md:translate-y-0 md:translate-x-12">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-red-600 text-xs font-bold uppercase tracking-[0.4em]">{ex.date}</span>
                <span className="w-8 h-[1px] bg-white/20"></span>
                <span className="text-white/50 text-xs font-bold uppercase tracking-[0.4em]">{ex.location}</span>
              </div>
              <h3 className="text-4xl font-black uppercase mb-6">{ex.title}</h3>
              <p className="text-gray-400 font-light mb-8 italic">"{ex.description}"</p>
              <button className="text-[10px] uppercase font-bold tracking-[0.3em] flex items-center group/btn">
                Read Publication 
                <svg className="w-4 h-4 ml-3 transition-transform duration-300 group-hover/btn:translate-x-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <div className="absolute top-4 right-4 p-4 border border-white/10 hidden md:block">
              <p className="text-[10px] uppercase tracking-tighter text-white/20 font-black">Archive Signature Series</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Exhibitions;
