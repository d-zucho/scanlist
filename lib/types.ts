import { LucideIcon } from 'lucide-react';

export type TNavItem = {
    name: string;
    href: string;
};

export type THowItWorksItem = {
    title: string;
    description: string;
    icon: LucideIcon;
    
};

export type TWhyUsStat = {
  icon: LucideIcon;
  title: string;
  info: string;
}

export type TTestimonial = {
  name: string;
  title: string;
  description: string;
  image: string;
}