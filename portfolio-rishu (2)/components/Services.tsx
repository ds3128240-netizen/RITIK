
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">My<br/><span className="text-white/30">Services</span></h2>
            <p className="text-gray-500 leading-loose max-w-sm mb-12">
              WHETHER IT'S CAPTURING THE ESSENCE OF A CORPORATE EVENT, IMMORTALIZING A COUPLE'S SPECIAL DAY, OR COLLABORATING ON ARTISTIC PROJECTS.
            </p>
            <div className="w-16 h-1 bg-red-600"></div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="divide-y divide-white/5">
              {SERVICES.map((service) => (
                <div 
                  key={service.id}
                  className="group py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-default"
                >
                  <div className="max-w-md">
                    <h3 className="text-3xl md:text-4xl font-bold uppercase transition-all duration-500 group-hover:text-red-600 group-hover:translate-x-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-4 group-hover:text-gray-400 transition-colors duration-500">
                      {service.description}
                    </p>
                  </div>
                  <div className="p-4 rounded-full border border-white/10 transition-all duration-500 group-hover:bg-red-600 group-hover:border-red-600 group-hover:rotate-45">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
