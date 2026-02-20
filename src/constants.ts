import { Service, Review } from './types';

export const SERVICES: Service[] = [
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacement for missing teeth with premium materials.',
    icon: 'dentistry',
    details: ['Single Tooth Implants', 'All-on-4 Solutions', 'Bone Grafting']
  },
  {
    id: 'general',
    title: 'General Dentistry',
    description: 'Comprehensive checkups, cleaning, and preventative care for all ages.',
    icon: 'health_and_safety',
    details: ['Professional Cleanings', 'Oral Cancer Screenings', 'Gum Disease Therapy']
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: "Smile makeovers including teeth whitening, veneers, and bonding.",
    icon: 'auto_fix_high',
    details: ['Teeth Whitening', 'Porcelain Veneers', 'Smile Makeovers']
  },
  {
    id: 'fillings',
    title: 'Dental Fillings',
    description: 'Durable and aesthetic restorations for cavities using composite resins.',
    icon: 'shield',
    details: ['Composite Fillings', 'Dental Crowns', 'Inlays & Onlays']
  },
  {
    id: 'ortho',
    title: 'Orthodontics',
    description: 'Align your teeth with modern braces and invisible aligner options.',
    icon: 'align_horizontal_center',
    details: ['Invisalign® Clear Aligners', 'Traditional Braces', 'Retainers']
  },
  {
    id: 'emergency',
    title: 'Emergency Care',
    description: 'Immediate relief for toothaches, accidents, and dental emergencies.',
    icon: 'emergency',
    details: ['Same-Day Appointments', 'Pain Management', 'Urgent Extractions']
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Ahmed Khan',
    location: 'G-13/3 Resident',
    rating: 5,
    text: "I was terrified of getting implants, but the team at Dental Parlor made me feel so at ease. The procedure was virtually painless and the results are life-changing.",
    image: 'https://picsum.photos/seed/p1/100/100',
    category: 'Implants'
  },
  {
    id: '2',
    name: 'Sana Malik',
    location: 'F-11 Islamabad',
    rating: 5,
    text: "Extremely hygienic environment and modern equipment. Dr. explained everything so well. The best part is their location and easy parking in G-13.",
    image: 'https://picsum.photos/seed/p2/100/100',
    category: 'General'
  },
  {
    id: '3',
    name: 'Zia Ullah',
    location: 'G-13/2 Resident',
    rating: 5,
    text: "I was nervous about my root canal, but the team made me feel so comfortable. The results are perfect and the cost was very transparent.",
    image: 'https://picsum.photos/seed/p3/100/100',
    category: 'General'
  }
];
