
import { NavItem, ContactInfo } from './types';

export const BRAND_SLOGAN = "All Buzz. No Bull.";

export interface FAQItem {
  question: string;
  answer: string;
}

export const ROBUST_FAQ: FAQItem[] = [
  {
    question: "What is the 'Liquid Standard' in Noble Seltzers?",
    answer: "The Liquid Standard refers to our proprietary nano-emulsification process. Unlike traditional infusions, our water-soluble particles ensure a consistent social onset within 15 minutes, providing a precise and reliable experience every time."
  },
  {
    question: "Does Noble Labs provide third-party processing services?",
    answer: "Yes. Noble Labs is a high-capacity processing facility specializing in B2B wholesale, ethanol extraction, and boutique concentrate manufacturing for dispensaries across Mississippi."
  },
  {
    question: "Where are the physical retail locations located?",
    answer: "Our flagship dispensary is located in Tylertown, MS, and our boutique location, Hill Country Cannabis, is located in the heart of Oxford, MS."
  },
  {
    question: "What makes Hill Country Cannabis in Oxford unique?",
    answer: "Hill Country focuses on a boutique, tech-forward retail experience. We curate a selection of premium genetics and high-end concentrates specifically for the Oxford medical community."
  },
  {
    question: "Are certificates of analysis (COAs) available for Noble products?",
    answer: "Transparency is our core framework. Every batch processed at Noble Labs undergoes rigorous third-party testing, and COAs are available at every point of sale."
  },
  {
    question: "What kind of technology is used in 'The Maker Space'?",
    answer: "The Maker Space utilizes high-resolution FDM and Resin additive manufacturing platforms, CAD optimization, and rapid prototyping to develop custom industrial hardware for Noble Labs."
  },
  {
    question: "How do I become a retail partner for Noble Seltzer?",
    answer: "Prospective retail partners can contact our wholesale gateway directly via the Command Center or email hello@noblelabsms.com for distribution protocols."
  },
  {
    question: "Is a medical card required to visit the dispensaries?",
    answer: "Yes. In accordance with Mississippi State Law, a valid medical cannabis patient card is required to enter the secure dispensing areas of our Tylertown and Oxford locations."
  }
];

export const CONTACT_DATA: ContactInfo = {
  address: "241 Old Hwy 98 E, Tylertown, Mississippi 39667",
  email: {
    general: "hello@noblelabsms.com",
    dispensary: "dispensary@noblelabsms.com"
  },
  phone: {
    lab: "601.803.5045",
    dispensary: "601.803.5046"
  },
  locations: [
    {
      name: "Noble Labs Processing Facility",
      address: "241 Old Hwy 98 E",
      city: "Tylertown, MS 39667",
      type: "Industrial Processing HQ",
      phone: "601.803.5045",
      license: "PHPL000000" // Placeholder for actual license
    },
    {
      name: "Noble Labs Flagship Dispensary",
      address: "241 Old Hwy 98 E",
      city: "Tylertown, MS 39667",
      type: "Flagship Retail",
      phone: "601.803.5046",
      license: "DSPY000001"
    },
    {
      name: "Hill Country Cannabis",
      address: "101 Ricky D. Britt, Sr. Blvd., Suite 4",
      city: "Oxford, MS 38655",
      type: "Boutique Retail",
      phone: "662.371.4027",
      license: "DSPY025736"
    },
    {
      name: "Noble Seltzer HQ",
      address: "241 Old Hwy 98 E",
      city: "Tylertown, MS 39667",
      type: "Beverage Distribution",
      phone: "601.803.5045"
    },
    {
      name: "Noble Innovation Lab (The Maker Space)",
      address: "Private Facility",
      city: "Mississippi, USA",
      type: "Engineering & Prototyping",
      license: "R&D NODE"
    }
  ]
};

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: 'noble-labs',
    title: 'Noble Labs Processing',
    description: 'The industrial heart of Noble operations. Distributing premium cannabis and hemp products to over 130 dispensaries statewide with absolute transparency.',
    iconType: 'lab',
    path: '/noble-labs',
    externalUrl: 'https://www.noblelabsms.com/',
    category: 'business'
  },
  {
    id: 'noble-dispensary',
    title: 'Noble Labs (Tylertown)',
    description: 'Our flagship dispensary where the brand story begins. Experience the welcoming atmosphere of Sir Anthony Noble and our four-legged door greeter.',
    iconType: 'retail',
    path: '/noble-dispensary',
    externalUrl: 'https://weedmaps.com/dispensaries/noble-labs-dispensary',
    category: 'retail'
  },
  {
    id: 'hill-country',
    title: 'Hill Country Cannabis (Oxford)',
    description: 'Boutique medical cannabis in Oxford. Located at 101 Ricky D. Britt, Sr. Blvd. Featuring award-winning seltzers and premium boutique genetics.',
    iconType: 'boutique',
    path: '/hill-country',
    externalUrl: 'https://weedmaps.com/dispensaries/hill-country-cannabis',
    category: 'retail'
  },
  {
    id: 'noble-seltzer',
    title: 'Noble Seltzer',
    description: 'All Buzz. No Bull. Our award-winning sparkling hemp beverages are designed to elevate mood and social experiences through nano-tech precision.',
    iconType: 'seltzer',
    path: '/noble-seltzer',
    externalUrl: 'https://www.instagram.com/noble.seltzer/',
    category: 'business'
  },
  {
    id: 'maker-lab',
    title: 'The Maker Space',
    description: 'Cam\'s personal innovation hub. Bridging industrial precision with creative engineering. Portfolio coming soon.',
    iconType: 'maker',
    path: '/maker-lab',
    category: 'personal'
  }
];

export const SOCIAL_LINKS = {
  brandInstagram: "https://www.instagram.com/noblelabsms/",
  seltzerInstagram: "https://www.instagram.com/noble.seltzer/"
};
