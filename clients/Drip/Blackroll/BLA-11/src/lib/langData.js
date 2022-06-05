export const langData = {
  en: {
    addToCart: 'Add to cart',
    dpTitle: {
      color: 'Color',
      size: 'Size',
    },
    currencyCode: 'en-GB',
    noStockMsg: 'Coming soon',
    shopifyToken: 'eab130c9f451f6ecbdb758c5abcc65f4',
  },
  de: {
    addToCart: 'In den Warenkorb',
    dpTitle: {
      color: 'Farbe',
      size: 'Größe',
    },
    currencyCode: 'de-DE',
    noStockMsg: 'Bald wieder verfügbar',
    shopifyToken: 'a626154279795026dce76948210bd547',
  },
  fr: {
    addToCart: 'Ajouter au panier',
    dpTitle: {
      color: 'Couleur',
      size: 'Taille',
    },
    currencyCode: 'fr-FR',
    noStockMsg: 'Bientôt de retour',
    shopifyToken: '751299d48a6e28e72d1805ca5544abdd',
  },
  nl: {
    addToCart: 'In winkelwagen',
    dpTitle: {
      color: 'Kleur',
      size: 'størrelse',
    },
    currencyCode: 'da-DK',
    noStockMsg: 'Binnenkort weer verkrijgbaar',
    shopifyToken: 'fc647f8064520c8ea983a87dd67c1672',
  },
};

export const getCountry = () => {
  const countryData = location.pathname.split('/')[1];

  return countryData === 'products' ? 'en' : countryData;
};

export const excludedUrls = [
  '/de/products/blackroll-back-set',
  '/de/products/blackroll-posture',
  '/de/products/blackroll-posture-2-0-pro',
  '/de/products/blackroll-bottle-by-sigg',
  '/de/products/buch-blackroll-schmerzfrei-beweglich',
  '/de/products/buch-faszien-fitness-dr-robert-schleip',
  '/de/products/buch-leben-ohne-stress-und-schmerzen',
  '/de/products/buch-faszie-trifft-muskel-funktionelles-training',
  '/de/products/buch-faszien-therapie-und-training',
  '/de/products/buch-osteopathie-fuer-zu-hause',
  '/de/products/buch-schmerzen-selbst-behandeln-mit-blackroll-dr-torsten-pfitzer',
  '/de/products/buch-kiefer-gut-alles-gut-dr-torsten-pfitzer',
  '/de/products/buch-optimale-regeneration-mit-yoga-und-blackroll',
  '/de/products/buch-funktionelles-faszientraining-mit-der-blackroll-marcel-andra-sabine-bleuel-torsten-pfitzer',
  '/de/products/faszien-nora-reim',
  '/de/products/richtig-essefur-die-faszien-stephan-muller',
  '/de/products/regeneration-jeden-tag-erholt-ausgeschlafen-und-erfolgreich-dr-lutz-graumann',
  '/de/products/schlaftagebuch-schlafgewohnheiten-dokumentieren-und-probleme-beheben-fur-90-tage-mit-grossem-infoteil-dr-lutz-graumann',
];
