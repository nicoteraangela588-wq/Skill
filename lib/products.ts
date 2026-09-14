// Mock product database for Allterra.
// Prices are illustrative and fall within the ranges supplied by the brand brief.

export type CollectionId = "depart" | "ascension" | "refuge";

export type VariantFormat =
  | "normal"
  | "miniature"
  | "recharge-normale"
  | "recharge-miniature";

export interface ProductVariant {
  format: VariantFormat;
  label: string;
  volume: string;
  price: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  collections: CollectionId[];
  image: string;
  accent: string;
  variants: {
    normal: ProductVariant;
    miniature: ProductVariant;
    rechargeNormale: ProductVariant;
    rechargeMiniature: ProductVariant;
  };
}

export interface Collection {
  id: CollectionId;
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  accent: string;
  terrain: string;
}

export const collections: Collection[] = [
  {
    id: "depart",
    name: "Départ",
    eyebrow: "En vallée",
    tagline: "Le matin, au pied des sentiers",
    description:
      "Les essentiels qui partent avec vous dans le sac, avant que la pente ne commence.",
    accent: "#4B5A63",
    terrain: "Vallée · 800 - 1600 m",
  },
  {
    id: "ascension",
    name: "Ascension",
    eyebrow: "En altitude",
    tagline: "Dans l'effort, face au vent",
    description:
      "Des formules qui tiennent sous l'effort, le vent et le froid, sans jamais coller aux gants.",
    accent: "#2E6E8E",
    terrain: "Altitude · 1600 - 3200 m",
  },
  {
    id: "refuge",
    name: "Refuge",
    eyebrow: "Au refuge",
    tagline: "Le soir, une fois la peau relâchée",
    description:
      "La réparation et le repos, pour une peau qui a tenu toute la journée.",
    accent: "#3C5B45",
    terrain: "Refuge · fin de course",
  },
];

export const products: Product[] = [
  {
    id: "stick-levres-spf30",
    slug: "stick-levres-spf30",
    name: "Stick Lèvres SPF 30",
    tagline: "Le premier geste, avant de fermer le sac",
    description:
      "Protège les lèvres du vent et du soleil de moyenne altitude sans laisser de film gras.",
    collections: ["depart"],
    image: "https://picsum.photos/seed/allterra-stick-levres/900/1100",
    accent: "#4B5A63",
    variants: {
      normal: { format: "normal", label: "Format normal", volume: "4,5 g", price: 9.9 },
      miniature: { format: "miniature", label: "Miniature", volume: "1,5 g", price: 5.5 },
      rechargeNormale: {
        format: "recharge-normale",
        label: "Recharge normale",
        volume: "4,5 g",
        price: 6.9,
      },
      rechargeMiniature: {
        format: "recharge-miniature",
        label: "Recharge miniature",
        volume: "1,5 g",
        price: 3.5,
      },
    },
  },
  {
    id: "wind-cold-shield",
    slug: "wind-cold-shield",
    name: "Wind & Cold Shield",
    tagline: "Le bouclier contre l'air qui brûle",
    description:
      "Un baume barrière pensé pour les visages exposés au vent glacé pendant plusieurs heures.",
    collections: ["depart"],
    image: "https://picsum.photos/seed/allterra-wind-cold-shield/900/1100",
    accent: "#4B5A63",
    variants: {
      normal: { format: "normal", label: "Format normal", volume: "30 ml", price: 11.9 },
      miniature: { format: "miniature", label: "Miniature", volume: "10 ml", price: 6.5 },
      rechargeNormale: {
        format: "recharge-normale",
        label: "Recharge normale",
        volume: "30 ml",
        price: 8.9,
      },
      rechargeMiniature: {
        format: "recharge-miniature",
        label: "Recharge miniature",
        volume: "10 ml",
        price: 4.5,
      },
    },
  },
  {
    id: "stick-solaire-spf50",
    slug: "stick-solaire-spf50",
    name: "Stick Solaire SPF 50+",
    tagline: "La haute protection qui ne glisse pas sous l'effort",
    description:
      "Une haute protection solaire résistante à la sueur, sans trace blanche sur peau en mouvement.",
    collections: ["depart", "ascension"],
    image: "https://picsum.photos/seed/allterra-stick-solaire/900/1100",
    accent: "#2E6E8E",
    variants: {
      normal: { format: "normal", label: "Format normal", volume: "20 g", price: 13.9 },
      miniature: { format: "miniature", label: "Miniature", volume: "9 g", price: 7.5 },
      rechargeNormale: {
        format: "recharge-normale",
        label: "Recharge normale",
        volume: "20 g",
        price: 9.9,
      },
      rechargeMiniature: {
        format: "recharge-miniature",
        label: "Recharge miniature",
        volume: "9 g",
        price: 5.5,
      },
    },
  },
  {
    id: "gel-nettoyant-visage",
    slug: "gel-nettoyant-visage",
    name: "Gel Nettoyant Visage",
    tagline: "Le rituel qui enlève la journée",
    description:
      "Un gel doux qui retire crème solaire, sueur et poussière de sentier sans tirer sur la peau.",
    collections: ["refuge"],
    image: "https://picsum.photos/seed/allterra-gel-nettoyant/900/1100",
    accent: "#3C5B45",
    variants: {
      normal: { format: "normal", label: "Format normal", volume: "150 ml", price: 15.9 },
      miniature: { format: "miniature", label: "Miniature", volume: "50 ml", price: 8.9 },
      rechargeNormale: {
        format: "recharge-normale",
        label: "Recharge normale",
        volume: "150 ml",
        price: 10.9,
      },
      rechargeMiniature: {
        format: "recharge-miniature",
        label: "Recharge miniature",
        volume: "50 ml",
        price: 5.9,
      },
    },
  },
  {
    id: "brume-apaisante-centella",
    slug: "brume-apaisante-centella",
    name: "Brume Apaisante Centella",
    tagline: "La fraîcheur qui calme une peau tirée",
    description:
      "Une brume à la centella qui apaise les peaux échauffées par le soleil et le vent de la journée.",
    collections: ["refuge"],
    image: "https://picsum.photos/seed/allterra-brume-centella/900/1100",
    accent: "#3C5B45",
    variants: {
      normal: { format: "normal", label: "Format normal", volume: "100 ml", price: 17.9 },
      miniature: { format: "miniature", label: "Miniature", volume: "30 ml", price: 9.9 },
      rechargeNormale: {
        format: "recharge-normale",
        label: "Recharge normale",
        volume: "100 ml",
        price: 11.9,
      },
      rechargeMiniature: {
        format: "recharge-miniature",
        label: "Recharge miniature",
        volume: "30 ml",
        price: 6.5,
      },
    },
  },
  {
    id: "brume-hydra-electrolyte",
    slug: "brume-hydra-electrolyte",
    name: "Brume Hydra Electrolyte",
    tagline: "L'hydratation qui suit le rythme cardiaque",
    description:
      "Une brume aux électrolytes qui recharge la peau en eau pendant les longues montées.",
    collections: ["ascension"],
    image: "https://picsum.photos/seed/allterra-brume-electrolyte/900/1100",
    accent: "#2E6E8E",
    variants: {
      normal: { format: "normal", label: "Format normal", volume: "100 ml", price: 19.9 },
      miniature: { format: "miniature", label: "Miniature", volume: "30 ml", price: 10.9 },
      rechargeNormale: {
        format: "recharge-normale",
        label: "Recharge normale",
        volume: "100 ml",
        price: 12.9,
      },
      rechargeMiniature: {
        format: "recharge-miniature",
        label: "Recharge miniature",
        volume: "30 ml",
        price: 6.9,
      },
    },
  },
  {
    id: "creme-reparatrice-barriere",
    slug: "creme-reparatrice-barriere",
    name: "Crème Réparatrice Barrière",
    tagline: "La réparation de fin de course",
    description:
      "Une crème riche qui restaure la barrière cutanée après une journée de vent, de froid et de sueur.",
    collections: ["refuge"],
    image: "https://picsum.photos/seed/allterra-creme-reparatrice/900/1100",
    accent: "#3C5B45",
    variants: {
      normal: { format: "normal", label: "Format normal", volume: "50 ml", price: 21.9 },
      miniature: { format: "miniature", label: "Miniature", volume: "15 ml", price: 11.9 },
      rechargeNormale: {
        format: "recharge-normale",
        label: "Recharge normale",
        volume: "50 ml",
        price: 14.9,
      },
      rechargeMiniature: {
        format: "recharge-miniature",
        label: "Recharge miniature",
        volume: "15 ml",
        price: 7.9,
      },
    },
  },
  {
    id: "rescue-balm",
    slug: "rescue-balm",
    name: "Rescue Balm",
    tagline: "Le baume qui répare tout le reste",
    description:
      "Un baume multi-usage pour les mains, coudes et talons abîmés par la roche et le froid.",
    collections: ["refuge"],
    image: "https://picsum.photos/seed/allterra-rescue-balm/900/1100",
    accent: "#3C5B45",
    variants: {
      normal: { format: "normal", label: "Format normal", volume: "50 ml", price: 24.9 },
      miniature: { format: "miniature", label: "Miniature", volume: "15 ml", price: 13.9 },
      rechargeNormale: {
        format: "recharge-normale",
        label: "Recharge normale",
        volume: "50 ml",
        price: 16.9,
      },
      rechargeMiniature: {
        format: "recharge-miniature",
        label: "Recharge miniature",
        volume: "15 ml",
        price: 8.9,
      },
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCollection(collectionId: CollectionId): Product[] {
  return products.filter((product) => product.collections.includes(collectionId));
}

export function getCollectionById(collectionId: CollectionId): Collection | undefined {
  return collections.find((collection) => collection.id === collectionId);
}

// Visual grid data. Each grid maps the 8 unique products to a single format,
// so every product (Crème Réparatrice Barrière and Gel Nettoyant Visage
// included) appears exactly once per grid.
export const largeProductsGrid = products.map((product) => ({
  product,
  variant: product.variants.normal,
}));

export const miniatureProductsGrid = products.map((product) => ({
  product,
  variant: product.variants.miniature,
}));

export const refillsGrid = products.map((product) => ({
  product,
  variant: product.variants.rechargeNormale,
}));
