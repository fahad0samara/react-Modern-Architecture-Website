import { Project, TeamMember, Testimonial } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Waterfront Villa',
    category: 'Residential',
    description: 'Luxurious waterfront villa with panoramic ocean views and sustainable design features.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d'
    ],
    details: {
      client: 'Private Client',
      location: 'Miami, FL',
      year: 2023,
      size: '8,500 sq ft',
      value: '$12.5M'
    },
    caseStudy: {
      challenge: 'Creating a sustainable luxury residence that maximizes ocean views while maintaining privacy.',
      solution: 'Implemented smart glass technology and strategic positioning to optimize views and energy efficiency.',
      outcome: 'Award-winning design that achieved LEED Platinum certification while exceeding client expectations.'
    }
  },
  {
    id: '2',
    title: 'Urban Office Complex',
    category: 'Commercial',
    description: 'State-of-the-art office complex integrating modern design with environmental consciousness.',
    images: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1',
      'https://images.unsplash.com/photo-1497366216548-37526070297c',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2'
    ],
    details: {
      client: 'Tech Innovations Corp',
      location: 'San Francisco, CA',
      year: 2023,
      size: '125,000 sq ft',
      value: '$45M'
    }
  },
  {
    id: '3',
    title: 'Sustainable Community Center',
    category: 'Institutional',
    description: 'Community hub designed with sustainable materials and energy-efficient systems.',
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'
    ],
    details: {
      client: 'City of Portland',
      location: 'Portland, OR',
      year: 2022,
      size: '45,000 sq ft',
      value: '$18M'
    }
  }
];

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Anderson',
    role: 'Principal Architect',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    experience: 15,
    bio: 'Award-winning architect with expertise in sustainable urban development.',
    specializations: ['Sustainable Design', 'Urban Planning', 'Green Architecture'],
    social: {
      linkedin: 'https://linkedin.com/in/sarah-anderson',
      twitter: 'https://twitter.com/sarahanderson'
    }
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    experience: 12,
    bio: 'Innovative designer specializing in contemporary architectural solutions.',
    specializations: ['Modern Design', 'Interior Architecture', 'Residential'],
    social: {
      linkedin: 'https://linkedin.com/in/michael-chen'
    }
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    experience: 10,
    bio: 'Experienced project manager with a focus on client satisfaction.',
    specializations: ['Project Management', 'Client Relations', 'Commercial'],
    social: {
      linkedin: 'https://linkedin.com/in/emma-rodriguez',
      twitter: 'https://twitter.com/emmarodriguez'
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'CEO',
    company: 'Global Developments Inc.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    content: 'Working with Mansion Architecture was an exceptional experience. Their attention to detail and innovative solutions exceeded our expectations.',
    rating: 5
  },
  {
    id: '2',
    name: 'Lisa Johnson',
    role: 'Director',
    company: 'Urban Living Spaces',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    content: 'The teams commitment to sustainable design and ability to transform our vision into reality was remarkable.',
    rating: 5
  },
  {
    id: '3',
    name: 'David Park',
    role: 'Property Developer',
    company: 'Park Estates',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    content: 'Their innovative approach to modern architecture and professional project management made the entire process seamless.',
    rating: 5
  }
];