import { THowItWorksItem, TNavItem, TWhyUsStat } from '@/lib/types';
import { Barcode, Brain, Clock, ListChecks, ShoppingCart, Users, Wallet2 } from 'lucide-react';

export const NAV_ITEMS: TNavItem[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'My Lists',
    href: '/my-lists',
  },
  {
    name: 'Recipes',
    href: '/recipes',
  },
]

export const NAV_AUTH_ITEMS: TNavItem[] = [
  {
    name: 'Login',
    href: '/login',
  },
  {
    name: 'Register',
    href: '/register',
  },
]

export const HERO_STATS = [
  {
    stat: '50K+',
    description: 'Active Users',
  },
  {
    stat: '2M+',
    description: 'Items Scanned',
  },
  {
    stat: '4.9',
    description: 'App Rating',
  }
]
  
export const HOW_IT_WORKS_ITEMS: THowItWorksItem[] = [
  {
    title: 'Scan Items',
    description: "Use your phone camera to scan barcodes of items running low in your pantry or fridge.",
    icon: Barcode,
  },
  {
    title: 'Add Items',
    description: 'Add items to your grocery lists with details, prices, and quantity.',
    icon: ListChecks,
  },
  {
    title: 'Shop Efficiently',
    description: 'Check off items as you shop. Get organized and save time and money.',
    icon: ShoppingCart,
  },
]

export const WHY_US_STATS: TWhyUsStat[] = [
  {
    icon: Clock,
    title: 'Save Time',
    info: 'No more handwritten lists or forgotten items. Scan in seconds.'
  },
  {
    icon: Wallet2,
    title: 'Save Money',
    info: 'Compare prices across stores and get the best deals automatically.'
  },
  {
    icon: Users,
    title: 'Share Lists',
    info: 'Collaborate with family members in real-time on shared grocery lists.'
  }, 
  {
    icon: Brain,
    title: 'Smart Suggestions',
    info: 'AI learns your habits and suggests items you might need.'
  }
]

export const HOME_STAT_BANNER = [
  {
    stat: '98%',
    info: 'Accuracy Rate'
  },
  {
    stat: '15 min',
    info: 'Avg. Time Saved'
  },
  {
    stat: '$200',
    info: 'Avg. Monthly Savings'
  },
  {
    stat: '10K+',
    info: 'Supported Products'
  }
]