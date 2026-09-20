export type CategoryId = 
  | "anniversaire" 
  | "mariage" 
  | "dot" 
  | "bapteme" 
  | "enfants" 
  | "mignardises";

export interface CakeProduct {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  priceNote?: string;
  portions?: number;
  description: string;
  image: string;
  badge?: string;
  highlights?: string[];
  isFeatured?: boolean;
}

export interface Flavor {
  name: string;
  notes: string;
  seasonal?: boolean;
}

export interface DeliveryZone {
  name: string;
  price: number;
  delay: string;
}

export interface PaymentMethod {
  name: string;
  phone: string;
  instructions: string;
}
