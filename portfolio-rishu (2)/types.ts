
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  size: 'large' | 'small' | 'tall';
  year?: string;
  series?: string[]; // Array of images for the lightbox series
  hideFromAll?: boolean; // If true, the project will not appear in the "All" category
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Exhibition {
  id: string;
  title: string;
  imageUrl: string;
  date: string;
  location: string;
  description: string;
}