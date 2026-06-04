export type Product = {
  slug: string;
  name: string;
  category: string;
  collection: string;
  price: number;
  color: string;
  image: string;
  hoverImage?: string;
  badge?: string;
  description: string;
  details: string[];
  sizes: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
};

export type CollectionFeature = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
};
