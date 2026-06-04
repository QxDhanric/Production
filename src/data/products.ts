import type { CollectionFeature, Product } from "@/types/product";

export const products: Product[] = [
  {
    slug: "signature-hoodie-black",
    name: "Signature Hoodie",
    category: "Hoodie",
    collection: "Core Uniform",
    price: 148,
    color: "Washed Black",
    image: "/products/qx-signature-hoodie-black.png",
    hoverImage: "/generated/hero-campaign.png",
    badge: "Best Seller",
    description:
      "A heavyweight black hoodie cut with a relaxed streetwear silhouette and finished with the oversized QxDhanric lockup.",
    details: [
      "Premium heavyweight cotton fleece",
      "Oversized back logo application",
      "Dropped shoulder and structured hood",
      "Ribbed cuffs with clean tonal finish",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    isBestSeller: true,
  },
  {
    slug: "back-logo-tee-black",
    name: "Back Logo Tee",
    category: "T-Shirt",
    collection: "New Collection",
    price: 68,
    color: "Black/Lime",
    image: "/products/qx-back-logo-tee-black.png",
    badge: "New",
    description:
      "A boxy black tee with a confident back graphic and muted lime signature underline.",
    details: [
      "Boxy luxury streetwear fit",
      "Soft washed jersey hand feel",
      "Large Qx back print",
      "Minimal front identity mark",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
    isBestSeller: true,
  },
  {
    slug: "bone-hoodie",
    name: "Bone Logo Hoodie",
    category: "Hoodie",
    collection: "Neutral Drop",
    price: 152,
    color: "Bone",
    image: "/products/qx-bone-hoodie.png",
    badge: "Limited",
    description:
      "A bone fleece hoodie that carries the monochrome Qx mark for a clean luxury uniform feel.",
    details: [
      "Bone cotton fleece",
      "Oversized logo placement",
      "Premium ribbing and kangaroo pocket",
      "Designed for year-round layering",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
  },
  {
    slug: "minimal-chest-tee-black",
    name: "Minimal Chest Tee",
    category: "T-Shirt",
    collection: "Core Uniform",
    price: 64,
    color: "Deep Charcoal",
    image: "/products/qx-minimal-tee-black.png",
    description:
      "A refined everyday tee with a small chest emblem for a quieter take on the QxDhanric identity.",
    details: [
      "Washed black compact jersey",
      "Small chest identity graphic",
      "Clean neckline and boxy sleeve",
      "Pairs with every core layer",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "embroidered-cap-black",
    name: "Embroidered Qx Cap",
    category: "Accessory",
    collection: "Accessories",
    price: 48,
    color: "Washed Black",
    image: "/products/qx-embroidered-cap-black.png",
    badge: "Essential",
    description:
      "A low-profile black cap with premium embroidered Qx branding and subtle side detailing.",
    details: [
      "Curved brim low-profile cap",
      "Raised Qx embroidery",
      "Adjustable rear closure",
      "Subtle side wordmark detail",
    ],
    sizes: ["One Size"],
    isBestSeller: true,
  },
  {
    slug: "identity-hangtag-set",
    name: "Identity Label Set",
    category: "Brand Object",
    collection: "Accessories",
    price: 32,
    color: "Black/Lime",
    image: "/generated/hangtag-lifestyle.png",
    description:
      "A premium brand object inspired by the QxDhanric hangtag system and muted lime accent language.",
    details: [
      "Matte black finish",
      "Muted lime brand mark",
      "Editorial accessory styling",
      "Built for gifting and display",
    ],
    sizes: ["One Size"],
    isNew: true,
  },
];

export const collections: CollectionFeature[] = [
  {
    slug: "core-uniform",
    name: "Core Uniform",
    eyebrow: "Foundational Luxury",
    description:
      "Washed black staples, oversized silhouettes, and clean identity marks built for daily confidence.",
    image: "/products/qx-signature-hoodie-black.png",
  },
  {
    slug: "new-collection",
    name: "New Collection",
    eyebrow: "Explore",
    description:
      "Graphic essentials with a precise lime accent and a refined streetwear posture.",
    image: "/generated/hero-campaign.png",
  },
  {
    slug: "neutral-drop",
    name: "Neutral Drop",
    eyebrow: "Quiet Presence",
    description:
      "Bone and charcoal pieces that soften the palette while keeping the silhouette strong.",
    image: "/products/qx-bone-hoodie.png",
  },
  {
    slug: "accessories",
    name: "Accessories",
    eyebrow: "Finishing Layer",
    description:
      "Embroidered caps and brand objects that carry the Qx identity with restraint.",
    image: "/products/qx-embroidered-cap-black.png",
  },
];

export const featurePillars = [
  {
    label: "Premium Quality",
    body: "Crafted with precise material choices and a refined finish.",
  },
  {
    label: "Minimal Design",
    body: "Clean aesthetics, direct typography, maximum impact.",
  },
  {
    label: "Timeless Style",
    body: "Designed to stay relevant today and tomorrow.",
  },
  {
    label: "Own Your Identity",
    body: "Because originality is the ultimate flex.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
