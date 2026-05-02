export type Country = {
  id: string;
  name: string;
  flower: string;
  flowerLatin?: string;
  intro: string;
  image: string;
  accent: string; // hsl tuple
};

// Photos libres via Unsplash (URL directe, optimisée)
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const countries: Country[] = [
  {
    id: "benin",
    name: "Bénin",
    flower: "Le Flamboyant",
    flowerLatin: "Delonix regia",
    intro:
      "Terre des Amazones du Dahomey, le Bénin déploie ses flamboyants écarlates aux portes de la saison sèche, mémoire vive d'un royaume où les femmes guerrières veillaient sur la souveraineté.",
    image: u("photo-1523805009345-7448845a9e53"),
    accent: "10 65% 55%",
  },
  {
    id: "angola",
    name: "Angola",
    flower: "La Welwitschia",
    flowerLatin: "Welwitschia mirabilis",
    intro:
      "Plante millénaire du désert du Namib, la welwitschia incarne l'endurance angolaise — racines profondes, feuilles éternelles, mémoire d'une terre qui résiste au temps.",
    image: u("photo-1547471080-7cc2caa01a7e"),
    accent: "30 60% 50%",
  },
  {
    id: "sao-tome",
    name: "Sao Tomé et Principe",
    flower: "L'Hibiscus rouge",
    flowerLatin: "Hibiscus rosa-sinensis",
    intro:
      "Sur les îles volcaniques du golfe de Guinée, l'hibiscus rouge ouvre ses corolles à l'aube, témoin discret d'une créolité insulaire entre cacao, mer et forêt primaire.",
    image: u("photo-1518684079-3c830dcef090"),
    accent: "0 70% 55%",
  },
  {
    id: "afrique-du-sud",
    name: "Afrique du Sud",
    flower: "La Protea royale",
    flowerLatin: "Protea cynaroides",
    intro:
      "Emblème national, la protea s'épanouit dans le fynbos du Cap. Elle dit la pluralité du pays arc-en-ciel et la beauté brute des paysages du bout du monde.",
    image: u("photo-1580060839134-75a5edca2e99"),
    accent: "340 55% 55%",
  },
  {
    id: "madagascar",
    name: "Madagascar",
    flower: "L'Orchidée de Madagascar",
    flowerLatin: "Angraecum sesquipedale",
    intro:
      "Île-continent aux mille endémismes, Madagascar révèle l'orchidée étoilée découverte par Darwin — fragile, blanche, suspendue entre forêt humide et baobabs.",
    image: u("photo-1589801258579-18e091f4ca26"),
    accent: "150 40% 45%",
  },
  {
    id: "ethiopie",
    name: "Éthiopie",
    flower: "La Calla d'Abyssinie",
    flowerLatin: "Zantedeschia aethiopica",
    intro:
      "Berceau de l'humanité et de l'orthodoxie africaine, l'Éthiopie fleurit la calla blanche dans les hauts plateaux, blancheur liturgique au cœur des montagnes du Simien.",
    image: u("photo-1535850579364-156d4ce80279"),
    accent: "42 50% 50%",
  },
  {
    id: "egypte",
    name: "Égypte",
    flower: "Le Lotus bleu",
    flowerLatin: "Nymphaea caerulea",
    intro:
      "Sacré aux pharaons, le lotus bleu du Nil ouvre ses pétales à l'aurore et les referme au crépuscule. Symbole de renaissance, il traverse cinq millénaires d'histoire.",
    image: u("photo-1539650116574-75c0c6d73f6e"),
    accent: "200 60% 50%",
  },
  {
    id: "inde",
    name: "Inde",
    flower: "Le Lotus sacré",
    flowerLatin: "Nelumbo nucifera",
    intro:
      "Fleur nationale de l'Inde, le lotus s'élève pur de la boue. Il porte la cosmologie hindoue, la méditation bouddhiste et la promesse d'éveil au-dessus des eaux troubles.",
    image: u("photo-1524492412937-b28074a5d7da"),
    accent: "320 50% 60%",
  },
  {
    id: "indonesie",
    name: "Indonésie",
    flower: "Le Jasmin arabe",
    flowerLatin: "Jasminum sambac",
    intro:
      "Le melati blanc parfume les cérémonies de l'archipel — mariages, offrandes, prières. Petite étoile odorante, il tisse l'âme commune de dix-sept mille îles.",
    image: u("photo-1518002171953-a080ee817e1f"),
    accent: "85 35% 50%",
  },
  {
    id: "japon",
    name: "Japon",
    flower: "Le Cerisier en fleurs",
    flowerLatin: "Prunus serrulata",
    intro:
      "Le sakura célèbre la beauté éphémère. Sous ses pétales roses qui tombent comme une neige tendre, le Japon contemple le mono no aware — la mélancolie des choses.",
    image: u("photo-1522383225653-ed111181a951"),
    accent: "340 45% 70%",
  },
  {
    id: "nouvelle-zelande",
    name: "Nouvelle-Zélande",
    flower: "Le Kowhai",
    flowerLatin: "Sophora microphylla",
    intro:
      "Arbre aux fleurs d'or pendantes, le kowhai annonce le printemps māori. Il rythme le calendrier d'Aotearoa, la longue terre du nuage blanc.",
    image: u("photo-1469854523086-cc02fe5d8800"),
    accent: "42 65% 55%",
  },
  {
    id: "ile-de-paques",
    name: "Île de Pâques",
    flower: "Le Toromiro",
    flowerLatin: "Sophora toromiro",
    intro:
      "Disparu de Rapa Nui à l'état sauvage, le toromiro renaît grâce à la mémoire des graines. Une fleur jaune comme un acte de résistance face à l'effacement.",
    image: u("photo-1539418061927-9d1437e2b8a4"),
    accent: "20 55% 50%",
  },
  {
    id: "mexique",
    name: "Mexique",
    flower: "La Dahlia",
    flowerLatin: "Dahlia pinnata",
    intro:
      "Fleur nationale aux mille variétés, la dahlia mexicaine éclate en couleurs vives — héritière des jardins aztèques de Moctezuma, célébrant la vie face à la mort.",
    image: u("photo-1518709268805-4e9042af2176"),
    accent: "340 70% 55%",
  },
  {
    id: "guadeloupe",
    name: "Guadeloupe",
    flower: "L'Alpinia",
    flowerLatin: "Alpinia purpurata",
    intro:
      "Le rose de porcelaine illumine les sous-bois antillais. Cire, nacre, écarlate : la Guadeloupe en fait l'emblème d'une beauté tropicale et créole.",
    image: u("photo-1500530855697-b586d89ba3ee"),
    accent: "0 60% 60%",
  },
  {
    id: "bresil",
    name: "Brésil",
    flower: "L'Ipê jaune",
    flowerLatin: "Handroanthus albus",
    intro:
      "Arbre national, l'ipê jaune embrase le ciel brésilien à la fin de l'hiver. Or pur contre azur — un poème floral du Cerrado à l'Amazonie.",
    image: u("photo-1483729558449-99ef09a8c325"),
    accent: "50 80% 55%",
  },
  {
    id: "perou",
    name: "Pérou",
    flower: "La Cantuta",
    flowerLatin: "Cantua buxifolia",
    intro:
      "Fleur sacrée des Incas, la cantuta clochette pourpre ourle les sentiers andins. Elle relie la terre et le ciel, la mémoire et la cordillère.",
    image: u("photo-1526392060635-9d6019884377"),
    accent: "320 55% 50%",
  },
];
