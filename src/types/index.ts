export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  modelUrl?: string;
  details: {
    client: string;
    location: string;
    year: number;
    size: string;
    value: string;
  };
  caseStudy?: {
    challenge: string;
    solution: string;
    outcome: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  experience: number;
  bio: string;
  specializations: string[];
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}