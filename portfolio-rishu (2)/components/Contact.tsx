import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-48 bg-[#0a0a0a] overflow-hidden">
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-red-600/[0.02] leading-none uppercase select-none z-0">
        CONNECT
      </h2>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-600 uppercase tracking-[0.6em] font-black mb-8 text-xs">Let's work together</p>
          <h3 className="text-5xl md:text-8xl font-black uppercase mb-16 tracking-tighter">Start a project</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left mb-24">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-6 font-bold">Quick Inquiries</p>
              <a href="mailto:ritik@portfolio.art" className="text-2xl md:text-3xl font-bold hover:text-red-600 transition-colors tracking-tight">ritik@portfolio.art</a>
              <div className="mt-8 space-y-4">
                <p className="text-gray-500 text-sm font-light uppercase tracking-widest">+91 98100 00000</p>
                <p className="text-gray-500 text-sm font-light uppercase tracking-widest">New Delhi, India</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-6 font-bold">Follow the Vision</p>
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-xl font-bold hover:text-red-600 transition-colors uppercase tracking-tight">Instagram / @rsdesigner</a>
                <a href="#" className="text-xl font-bold hover:text-red-600 transition-colors uppercase tracking-tight">Behance / showcase</a>
              </div>
            </div>
          </div>

          <form className="max-w-xl mx-auto space-y-8">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-red-600 transition-colors text-xl font-light uppercase tracking-widest"
              />
            </div>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-red-600 transition-colors text-xl font-light uppercase tracking-widest"
              />
            </div>
            <div className="relative">
              <textarea 
                placeholder="The Project Brief" 
                rows={1}
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-red-600 transition-colors text-xl font-light resize-none uppercase tracking-widest"
              ></textarea>
            </div>
            <button className="w-full bg-red-600 text-white font-black uppercase py-6 tracking-[0.5em] text-xs hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-[1.02]">
              Send Invitation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;