export interface Review {
  id: string;
  quote: string;
  name: string;
  context: string;
  image: string;
}

export const reviews: Review[] = [
  {
    id: "lea",
    quote:
      "Après six heures de course, le stick lèvres n'avait toujours pas laissé mes lèvres craquer.",
    name: "Léa R.",
    context: "trail long format, Chartreuse",
    image: "https://picsum.photos/seed/allterra-review-lea/700/900",
  },
  {
    id: "thomas",
    quote:
      "Le Wind & Cold Shield est la seule protection qui a tenu jusqu'au sommet sans que je la sente sur le visage.",
    name: "Thomas B.",
    context: "ski de randonnée, Écrins",
    image: "https://picsum.photos/seed/allterra-review-thomas/700/900",
  },
  {
    id: "nadia",
    quote: "Le Rescue Balm a sauvé mes mains fissurées après trois jours de falaise.",
    name: "Nadia K.",
    context: "grimpe, Verdon",
    image: "https://picsum.photos/seed/allterra-review-nadia/700/900",
  },
  {
    id: "julien",
    quote:
      "La brume électrolyte m'a évité le coup de chaud à la moitié de la montée.",
    name: "Julien P.",
    context: "trail, Vercors",
    image: "https://picsum.photos/seed/allterra-review-julien/700/900",
  },
  {
    id: "camille",
    quote: "Le stick solaire ne glisse pas sous le casque, même quand je transpire.",
    name: "Camille V.",
    context: "ski, Vanoise",
    image: "https://picsum.photos/seed/allterra-review-camille/700/900",
  },
  {
    id: "hugo",
    quote:
      "La crème réparatrice a calmé mon visage en une nuit après trois jours de vent.",
    name: "Hugo M.",
    context: "bivouac, Mercantour",
    image: "https://picsum.photos/seed/allterra-review-hugo/700/900",
  },
];
