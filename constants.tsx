
import { NavItem, ContactInfo } from './types';

export const BRAND_SLOGAN = "All Buzz. No Bull.";

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
      name: "Noble Labs HQ & Dispensary",
      address: "241 Old Hwy 98 E",
      city: "Tylertown, MS 39667",
      type: "Processing & Retail",
      phone: "601.803.5046"
    },
    {
      name: "Hill Country Cannabis",
      address: "101 Ricky D. Britt, Sr. Blvd., Suite 4",
      city: "Oxford, MS 38655",
      type: "Boutique Retail",
      phone: "662.371.4027",
      license: "DSPY025736"
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
