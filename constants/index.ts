import { THowItWorksItem, TNavItem } from '@/lib/types';
import { Barcode, ListChecks, ShoppingCart } from 'lucide-react';

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