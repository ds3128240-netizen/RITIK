import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div>
          <p className="text-[8px] uppercase tracking-[0.4em] text-gray-600">
            © {currentYear} ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="flex space-x-8">
          <a href="#" className="text-[8px] uppercase tracking-[0.4em] text-gray-600 hover:text-red-600 transition-colors">Privacy</a>
          <a href="#" className="text-[8px] uppercase tracking-[0.4em] text-gray-600 hover:text-red-600 transition-colors">Terms</a>
          <a href="#" className="text-[8px] uppercase tracking-[0.4em] text-gray-600 hover:text-red-600 transition-colors">Credits</a>
        </div>
        <div>
          <a href="#root" className="group flex items-center text-[8px] uppercase tracking-[0.4em] text-gray-600 hover:text-white transition-colors">
            Back to Top
            <svg className="w-3 h-3 ml-2 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;