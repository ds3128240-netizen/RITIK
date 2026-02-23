import { Project, Service, Exhibition } from './types';

export const PROJECTS: Project[] = [
  { 
    id: 'p-double-exposure', 
    title: 'Double Exposure', 
    category: 'Editorial Design', 
    imageUrl: 'https://i.ibb.co/Lhd15wCw/cricket-double-exposure.png', 
    size: 'small',
    year: '2025'
  },
  { 
    id: 'p-uiux-1', 
    title: 'Interface Concept I', 
    category: 'UI/UX Design', 
    imageUrl: 'https://i.ibb.co/FbSqmTbm/Artboard-1.png', 
    size: 'small',
    year: '2025'
  },
  { 
    id: 'p-uiux-2', 
    title: 'Interface Concept II', 
    category: 'UI/UX Design', 
    imageUrl: 'https://i.ibb.co/5gZKjMVq/Artboard-2.png', 
    size: 'small',
    year: '2025'
  },
  { 
    id: 'p-uiux-3', 
    title: 'Interface Concept III', 
    category: 'UI/UX Design', 
    imageUrl: 'https://i.ibb.co/3m9BHfst/Artboard-3.png', 
    size: 'small',
    year: '2025'
  },
  { 
    id: 'p-uiux-4', 
    title: 'Interface Concept IV', 
    category: 'UI/UX Design', 
    imageUrl: 'https://i.ibb.co/1JmFc5H6/Artboard-4.png', 
    size: 'small',
    year: '2025'
  },
  { 
    id: 'p-uiux-5', 
    title: 'Interface Concept V', 
    category: 'UI/UX Design', 
    imageUrl: 'https://i.ibb.co/C3Sq7p2s/Artboard-5.png', 
    size: 'small',
    year: '2025'
  },
  { 
    id: 'p-nivia-football', 
    title: 'Nivia Football', 
    category: 'Mockups', 
    imageUrl: 'https://i.ibb.co/Jjs93RC9/mix-2-insta.png', 
    size: 'small',
    year: '2025'
  },
  { 
    id: 'p-social-post-1', 
    title: 'Social Media Post', 
    category: 'Commercial Design', 
    imageUrl: 'https://i.ibb.co/xKXYC16K/social-media-post-1.png', 
    size: 'small',
    year: '2025',
    hideFromAll: true
  },
  { 
    id: 'p-social-mockup-1', 
    title: 'Social Media Mockup', 
    category: 'Mockups', 
    imageUrl: 'https://i.ibb.co/d4shBNYr/social-media-post-1-mockup.jpg', 
    size: 'small',
    year: '2025'
  },
  { 
    id: 'p-sale-banner', 
    title: 'Sale Banner', 
    category: 'Mockups', 
    imageUrl: 'https://i.ibb.co/v6yM0Mm6/Chat-GPT-Image-Feb-13-2026-04-04-02-PM.png', 
    size: 'large',
    year: '2025'
  },
  { 
    id: 'p-product-shoot', 
    title: 'Product Shoot', 
    category: 'Commercial Design', 
    imageUrl: 'https://i.ibb.co/BVZRGCbM/Chat-GPT-Image-Feb-13-2026-03-47-53-PM.png', 
    size: 'large',
    year: '2025'
  },
  { 
    id: '1', 
    title: 'Vanguard Editorial', 
    category: 'Editorial Design', 
    imageUrl: 'https://i.ibb.co/N2jBC171/mag-cover-3-mockup.png', 
    size: 'tall',
    year: '2024',
    series: [
      'https://i.ibb.co/N2jBC171/mag-cover-3-mockup.png', // Vanguard
      'https://i.ibb.co/4gV0Rc3L/DAY-TO-NIGHT.png',       // Scenery
      'https://i.ibb.co/gLK4ZPHz/movie-poster.png',      // Movie Poster
      'https://i.ibb.co/20FyYQMn/1st-mag-mockup.jpg'      // Magazine Cover
    ]
  },
  { 
    id: 'm-burger-billboard', 
    title: 'Web Banner Mockup', 
    category: 'Mockups', 
    imageUrl: 'https://i.ibb.co/fdtttMMn/Chat-GPT-Image-Feb-13-2026-02-51-49-PM.png', 
    size: 'large',
    year: '2024',
    hideFromAll: true
  },
  { 
    id: 'm-new-mockup', 
    title: 'Branding Showcase', 
    category: 'Mockups', 
    imageUrl: 'https://i.ibb.co/RkYhtd2P/Chat-GPT-Image-Feb-13-2026-03-08-56-PM.png', 
    size: 'large',
    year: '2024',
    hideFromAll: true
  },
  { id: '2', title: '3D Concept Car', category: 'Digital Art', imageUrl: 'https://i.ibb.co/TxKT4T4x/3d-pop-up-car.png', size: 'large' },
  { id: '3', title: 'Lumina Digital', category: 'UI/UX Design', imageUrl: 'https://i.ibb.co/jkwc6MMJ/WEB-MOCKUP.png', size: 'small' },
  { id: '4', title: 'Luminous Glow', category: 'Digital Art', imageUrl: 'https://i.ibb.co/bgHP0f2P/glowing.png', size: 'small' },
  { id: '9', title: 'scenery', category: 'Editorial Design', imageUrl: 'https://i.ibb.co/4gV0Rc3L/DAY-TO-NIGHT.png', size: 'small' },
  { id: '5', title: 'MOVIE POSTER', category: 'Editorial Design', imageUrl: 'https://i.ibb.co/gLK4ZPHz/movie-poster.png', size: 'tall' },
  { id: '6', title: 'WEB BANNER', category: 'Commercial Design', imageUrl: 'https://i.ibb.co/m5VKrKKT/WEB-BANNER-BURGER.png', size: 'large' },
  { id: '10', title: 'polar coordinates', category: 'Digital Art', imageUrl: 'https://i.ibb.co/jZxQsPqW/polar-coordinates.png', size: 'small' },
  { 
    id: '7', 
    title: 'Magazine Cover', 
    category: 'Editorial Design', 
    imageUrl: 'https://i.ibb.co/20FyYQMn/1st-mag-mockup.jpg', 
    size: 'tall',
    year: '2023',
    series: [
      'https://i.ibb.co/20FyYQMn/1st-mag-mockup.jpg',
      'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?auto=format&fit=crop&q=80&w=1920'
    ]
  },
  { 
    id: '11', 
    title: 'Digital Scenery', 
    category: 'Digital Art', 
    imageUrl: 'https://i.ibb.co/qFF8YkCZ/SCENERY.png', 
    size: 'small',
    year: '2025'
  },
];

export const SERVICES: Service[] = [
  { id: 's1', title: 'Brand Identity', description: 'Crafting cohesive visual systems that define market presence and communicate core values.' },
  { id: 's2', title: 'UI/UX Design', description: 'Designing intuitive digital experiences with a focus on usability, layout, and visual flow.' },
  { id: 's3', title: 'Typography', description: 'Specialized type design and layout composition to ensure maximum impact and legibility.' },
  { id: 's4', title: 'Visual Strategy', description: 'Strategic design consulting to align aesthetic direction with long-term business goals.' },
];

export const EXHIBITIONS: Exhibition[] = [
  {
    id: 'ex1',
    title: 'Minimalist Void',
    imageUrl: 'https://images.unsplash.com/photo-1547826039-adc3a4a01dfc?auto=format&fit=crop&q=80&w=1920',
    date: 'OCT 2024',
    location: 'BERLIN, GERMANY',
    description: 'An exploration of negative space and the silent power of monochromatic structures in modern architecture.'
  },
  {
    id: 'ex2',
    title: 'The Digital Echo',
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1920',
    date: 'FEB 2025',
    location: 'TOKYO, JAPAN',
    description: 'Interrogating the intersection of organic form and algorithmic precision in the contemporary design landscape.'
  }
];