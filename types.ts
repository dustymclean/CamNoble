
export interface ExternalLink {
  label: string;
  url: string;
}

export interface NavItem {
  id: string;
  title: string;
  description: string;
  iconType: 'lab' | 'retail' | 'boutique' | 'seltzer' | 'maker';
  path: string;
  externalUrl?: string;
  subLinks?: ExternalLink[];
  category: 'business' | 'personal' | 'retail';
}

export interface ContactInfo {
  address: string;
  email: {
    general: string;
    dispensary: string;
  };
  phone: {
    lab: string;
    dispensary: string;
  };
  locations: {
    name: string;
    address: string;
    city: string;
    type: string;
    phone?: string;
    license?: string;
  }[];
}
