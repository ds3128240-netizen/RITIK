// Added React import to fix 'Cannot find namespace React' error
import React, { useEffect, useRef, useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isCategoryTransitioning, setIsCategoryTransitioning] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isImageChanging, setIsImageChanging] = useState(false);
  const [currentSeriesIndex, setCurrentSeriesIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['All', 'Mockups', 'Editorial Design', 'Digital Art', 'UI/UX Design', 'Commercial Design'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS.filter(p => !p.hideFromAll) 
    : PROJECTS.filter(p => p.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    if (cat === activeCategory) return;
    setIsCategoryTransitioning(true);
    setTimeout(() => {
      setActiveCategory(cat);
      setIsCategoryTransitioning(false);
    }, 400);
  };

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setIsClosing(false);
    setIsImageChanging(false);
    setCurrentSeriesIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
      document.body.style.overflow = 'auto';
    }, 600);
  };

  const getCurrentImage = () => {
    if (!selectedProject) return null;
    if (selectedProject.series && selectedProject.series.length > 0) {
      return selectedProject.series[currentSeriesIndex];
    }
    return selectedProject.imageUrl;
  };

  const navigateSeries = (direction: 'next' | 'prev') => {
    if (!selectedProject || !selectedProject.series || isImageChanging) return;
    setIsImageChanging(true);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentSeriesIndex((prev) => (prev + 1) % selectedProject.series!.length);
      } else {
        setCurrentSeriesIndex((prev) => (prev - 1 + selectedProject.series!.length) % selectedProject.series!.length);
      }
      setTimeout(() => {
        setIsImageChanging(false);
      }, 50);
    }, 300);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject || isClosing) return;
      if (e.key === 'ArrowRight') navigateSeries('next');
      if (e.key === 'ArrowLeft') navigateSeries('prev');
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentSeriesIndex, isClosing, isImageChanging]);

  // Parallax calculations
  const sectionOffset = sectionRef.current?.offsetTop || 0;
  const relativeScroll = scrollY - sectionOffset;
  const bgTextTransform = `translateX(${relativeScroll * 0.1}px)`;

  return (
    <section id="works" ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background Decorative Text */}
      <div 
        style={{ transform: bgTextTransform }}
        className="absolute top-1/4 left-0 text-[30vw] font-black text-red-600/[0.03] leading-none whitespace-nowrap select-none pointer-events-none z-0 tracking-tighter"
      >
        ARCHIVE <span className="text-red-600/10">VISIONS</span>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1920px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="relative group">
            <p className="text-red-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Design Gallery</p>
            <h2 className="text-4xl md:text-7xl font-black uppercase relative">
              My Works
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8 bg-black/40 backdrop-blur-md p-4 border border-white/5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 relative ${activeCategory === cat ? 'text-red-600' : 'text-gray-600 hover:text-white'}`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-red-600 animate-fade-in shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-flow-row-dense transition-all duration-500 ${isCategoryTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => openLightbox(project)}
              className={`group relative overflow-hidden bg-[#0a0a0a] transition-all duration-700 cursor-pointer border border-white/5 animate-fade-up
              ${project.size === 'large' ? 'md:col-span-2 aspect-video' : ''} 
              ${project.size === 'tall' ? 'row-span-2 aspect-[9/16]' : ''}
              ${project.size === 'small' ? 'aspect-square' : ''}
              hover:border-red-600/40 hover:shadow-[0_0_60px_rgba(220,38,38,0.1)]
              `}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image Container */}
              <div className="w-full h-full overflow-hidden flex items-center justify-center bg-[#080808] relative border-b border-red-600/10">
                {/* Subtle Grid Pattern for "Canvas" feel */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ff0000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  onLoad={() => handleImageLoad(project.id)}
                  loading="lazy"
                  className={`w-full h-full transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[0.98] object-contain p-4 md:p-8 opacity-90 group-hover:opacity-70 ${loadedImages[project.id] ? 'animate-fade-in' : 'opacity-0'}`}
                />
              </div>
              
              {/* Dark Overlay with intensified blur on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-none group-hover:backdrop-blur-[12px] transition-all duration-500 ease-out z-10"></div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t border-l border-red-600 transition-all duration-500 group-hover:w-8 group-hover:h-8 opacity-0 group-hover:opacity-100 z-20"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b border-r border-red-600 transition-all duration-500 group-hover:w-8 group-hover:h-8 opacity-0 group-hover:opacity-100 z-20"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 z-20">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out opacity-40 group-hover:opacity-100">
                  <div className="flex items-center gap-4 mb-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategoryChange(project.category);
                      }}
                      className="text-red-600 text-[10px] md:text-xs uppercase tracking-[0.5em] font-black hover:text-white transition-colors cursor-pointer"
                    >
                      {project.category}
                    </button>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] text-white">
                    {project.title}
                  </h3>
                  
                  {/* Subtle decorative "View" indicator */}
                  <div className="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                    <span className="text-[9px] uppercase tracking-[0.5em] text-white/40 font-bold">Inspect</span>
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Bottom Gradient for depth in non-hover state */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className={`fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
          <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
             <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-red-600/50 blur-[150px] rounded-full"></div>
             <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-red-600/40 blur-[150px] rounded-full"></div>
          </div>

          <button 
            onClick={closeLightbox}
            className="absolute top-8 right-8 text-white/40 hover:text-red-600 transition-all z-[120] p-4 group"
          >
            <span className="text-[10px] uppercase font-black tracking-widest mr-4 group-hover:text-white transition-colors">Close</span>
            <svg className="w-8 h-8 inline-block shadow-inner" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {selectedProject.series && selectedProject.series.length > 1 && (
            <>
              <div className="absolute left-0 top-0 w-1/2 h-full z-[110] cursor-w-resize" onClick={() => navigateSeries('prev')} />
              <div className="absolute right-0 top-0 w-1/2 h-full z-[110] cursor-e-resize" onClick={() => navigateSeries('next')} />
            </>
          )}

          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-16 relative">
            {selectedProject.series && selectedProject.series.length > 1 && (
              <button 
                onClick={(e) => { e.stopPropagation(); navigateSeries('prev'); }}
                className="hidden lg:flex items-center justify-center w-20 h-20 rounded-full border border-white/5 hover:border-red-600 hover:text-red-600 transition-all group z-[115]"
              >
                <svg className="w-8 h-8 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            <div className="flex-1 flex flex-col items-center justify-center h-full max-w-5xl relative z-10">
              <div className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center pointer-events-none">
                <img 
                  src={getCurrentImage() || ''} 
                  alt={selectedProject.title}
                  className={`max-w-full max-h-full object-contain transition-all duration-700 ease-in-out ${isImageChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                />
              </div>
              
              <div className="mt-12 text-center animate-fade-up pointer-events-none">
                <p className="text-red-600 font-black text-[10px] uppercase tracking-[0.5em] mb-4">
                  {selectedProject.category}
                </p>
                <h4 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                  {selectedProject.title}
                </h4>
                
                <button
                  onClick={() => {
                    handleCategoryChange(selectedProject.category);
                    closeLightbox();
                  }}
                  className="pointer-events-auto mb-8 px-6 py-2 border border-red-600/30 text-red-600 text-[10px] uppercase font-black tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all"
                >
                  View all {selectedProject.category}
                </button>

                {selectedProject.series && selectedProject.series.length > 1 && (
                  <div className="flex items-center justify-center gap-2">
                    {selectedProject.series.map((_, i) => (
                      <div 
                        key={i}
                        className={`h-1 transition-all duration-500 ${i === currentSeriesIndex ? 'w-8 bg-red-600' : 'w-2 bg-white/10'}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {selectedProject.series && selectedProject.series.length > 1 && (
              <button 
                onClick={(e) => { e.stopPropagation(); navigateSeries('next'); }}
                className="hidden lg:flex items-center justify-center w-20 h-20 rounded-full border border-white/5 hover:border-red-600 hover:text-red-600 transition-all group z-[115]"
              >
                <svg className="w-8 h-8 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;